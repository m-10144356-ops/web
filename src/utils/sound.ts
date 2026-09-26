// Audio manager handling:
// 1. Continuous ambient Background Music (C418 Subwoofer Lullaby) with loop, immediate autoplay, and instant resume on toggle
// 2. Authentic Minecraft UI button click sound effect (always active on all clicks)

let audioCtx: AudioContext | null = null;
let bgmAudio: HTMLAudioElement | null = null;
let bgmEnabled = true;

// Initialize BGM setting from localStorage (defaults to true)
if (typeof window !== "undefined") {
  try {
    const saved = localStorage.getItem("pi-spm-bgm-enabled");
    if (saved !== null) {
      bgmEnabled = JSON.parse(saved);
    } else {
      bgmEnabled = true;
    }
  } catch {
    bgmEnabled = true;
  }
}

/**
 * Returns whether background music is enabled
 */
export function isBgmEnabled(): boolean {
  return bgmEnabled;
}

/**
 * Gets or initializes the background music HTMLAudioElement
 */
export function getBgmAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  
  if (!bgmAudio) {
    // 1. Check if the preloaded audio element in index.html exists
    const domAudio = document.getElementById("pi-spm-bgm") as HTMLAudioElement | null;
    if (domAudio) {
      bgmAudio = domAudio;
    } else {
      bgmAudio = new Audio("/audio/bgm.mp3");
      bgmAudio.id = "pi-spm-bgm";
      bgmAudio.preload = "auto";
      document.body?.appendChild(bgmAudio);
    }

    bgmAudio.loop = true; // Repeat continuously
    bgmAudio.volume = 0.35; // Comfortable study volume
    bgmAudio.muted = false;

    // Safety listener to ensure it never stops while bgmEnabled is true
    bgmAudio.addEventListener("ended", () => {
      if (bgmEnabled && bgmAudio) {
        bgmAudio.currentTime = 0;
        bgmAudio.play().catch(() => {});
      }
    });

    // In case of stalled network or audio decode pause, auto-reload
    bgmAudio.addEventListener("stalled", () => {
      if (bgmEnabled && bgmAudio && bgmAudio.paused) {
        bgmAudio.play().catch(() => {});
      }
    });
  }

  return bgmAudio;
}

/**
 * Plays or resumes the background music safely
 */
export function playBgm(): Promise<void> | void {
  if (!bgmEnabled) return;
  const audio = getBgmAudio();
  if (!audio) return;

  audio.muted = false;
  audio.volume = 0.35;

  if (audio.ended || isNaN(audio.currentTime)) {
    audio.currentTime = 0;
  }

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    return playPromise.catch(() => {
      // Browser autoplay policy prevented playback until user interaction
      const resumeOnGesture = () => {
        if (bgmEnabled && audio.paused) {
          audio.muted = false;
          audio.volume = 0.35;
          audio.play().catch(() => {});
        }
        window.removeEventListener("click", resumeOnGesture, true);
        window.removeEventListener("touchstart", resumeOnGesture, true);
        window.removeEventListener("pointerdown", resumeOnGesture, true);
        window.removeEventListener("keydown", resumeOnGesture, true);
      };

      window.addEventListener("click", resumeOnGesture, { capture: true, once: true });
      window.addEventListener("touchstart", resumeOnGesture, { capture: true, once: true });
      window.addEventListener("pointerdown", resumeOnGesture, { capture: true, once: true });
      window.addEventListener("keydown", resumeOnGesture, { capture: true, once: true });
    });
  }
}

/**
 * Pauses background music
 */
export function pauseBgm(): void {
  const audio = getBgmAudio();
  if (!audio) return;
  audio.pause();
}

/**
 * Sets BGM state and directly plays or pauses the music.
 * When enabled, the song resumes playing immediately from where it was paused.
 */
export function setBgmEnabled(enabled: boolean): void {
  bgmEnabled = enabled;
  try {
    localStorage.setItem("pi-spm-bgm-enabled", JSON.stringify(enabled));
  } catch {
    // ignore
  }

  if (enabled) {
    playBgm();
  } else {
    pauseBgm();
  }
}

/**
 * Toggles BGM on or off
 */
export function toggleBgm(): boolean {
  const next = !bgmEnabled;
  setBgmEnabled(next);
  return next;
}

/**
 * Attempts to autoplay background music immediately upon entering website.
 * If browser autoplay policy prevents immediate playback, it seamlessly
 * triggers on the first user interaction (click, touch, scroll, keydown).
 */
export function startBgmAutoplay(): void {
  if (typeof window === "undefined") return;

  const audio = getBgmAudio();
  if (!audio) return;

  if (!bgmEnabled) {
    audio.pause();
    return;
  }

  playBgm();
}

// Automatically attempt to start background music when script loads in browser
if (typeof window !== "undefined") {
  const attempt = () => {
    startBgmAutoplay();
  };

  if (document.readyState === "complete" || document.readyState === "interactive") {
    attempt();
  } else {
    window.addEventListener("DOMContentLoaded", attempt);
  }

  // Global unlocker on first gesture if autoplay was blocked
  const globalUnlock = () => {
    if (bgmEnabled) {
      const audio = getBgmAudio();
      if (audio && audio.paused) {
        audio.play().catch(() => {});
      }
    }
  };
  window.addEventListener("click", globalUnlock, { capture: true });
  window.addEventListener("touchstart", globalUnlock, { capture: true });
  window.addEventListener("pointerdown", globalUnlock, { capture: true });
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays the authentic Minecraft button click sound effect.
 * Always kept active for interactive elements across the entire website.
 */
export function playButtonClickSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Slight pitch randomizer like Minecraft (0.94 - 1.06)
    const pitch = 0.94 + Math.random() * 0.12;

    // 1. Sharp initial transient / knock (filtered noise burst)
    const noiseLength = Math.floor(ctx.sampleRate * 0.015);
    const noiseBuffer = ctx.createBuffer(1, noiseLength, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseLength; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.0025));
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(1600 * pitch, now);
    noiseFilter.Q.setValueAtTime(2.5, now);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.85, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseSource.start(now);

    // 2. Resonant wooden body pop (descending pitch)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(650 * pitch, now);
    osc.frequency.exponentialRampToValueAtTime(110 * pitch, now + 0.045);

    oscGain.gain.setValueAtTime(0.7, now);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);

    // 3. Crisp mechanical release tap (slightly delayed micro-pulse)
    const tapOsc = ctx.createOscillator();
    const tapGain = ctx.createGain();
    tapOsc.type = "triangle";
    tapOsc.frequency.setValueAtTime(340 * pitch, now + 0.018);
    tapOsc.frequency.exponentialRampToValueAtTime(140 * pitch, now + 0.042);

    tapGain.gain.setValueAtTime(0, now);
    tapGain.gain.setValueAtTime(0.35, now + 0.018);
    tapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

    tapOsc.connect(tapGain);
    tapGain.connect(ctx.destination);

    tapOsc.start(now + 0.018);
    tapOsc.stop(now + 0.05);
  } catch {
    // AudioContext may require user interaction first
  }
}

// Global click event listener: plays sound on any button or role="button" or interactive link click
if (typeof window !== "undefined") {
  window.addEventListener(
    "click",
    (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest(
        "button, [role='button'], .action-btn, .nav-link, .topic-toggle, .subtopic-toggle, input[type='radio'], input[type='checkbox']"
      );
      if (target) {
        playButtonClickSound();
      }
    },
    { capture: true }
  );
}
