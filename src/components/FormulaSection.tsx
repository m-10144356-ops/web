import React from "react";
import { formulas } from "../data/formulas";

export const FormulaSection: React.FC = () => {
  return (
    <section
      className="memory-card p-5 md:p-6 mt-8"
      aria-labelledby="formula-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="chapter-icon">
          <svg className="px" width="24" height="24" aria-hidden="true">
            <use href="#px-table" />
          </svg>
        </span>
        <div>
          <h2 id="formula-title" className="pixel-font text-2xl font-bold text-[#ffd447]">
            Formula & Akronim Hafalan Cepat
          </h2>
          <p className="text-xs text-amber-200/80 mt-0.5">
            Rumus mnemonik mudah ingat untuk peperiksaan SPM
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
        {formulas.map((item) => (
          <div key={item.id} className="slot flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 font-mono">
                  {item.category}
                </span>
              </div>
              <b className="text-base text-[#ffd447] block mb-1 font-mono">
                {item.code}
              </b>
              <p className="text-xs font-semibold text-slate-300 mb-2">
                {item.title}
              </p>
            </div>
            <p className="text-xs text-slate-200/90 leading-relaxed border-t border-stone-600 pt-2 mt-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
