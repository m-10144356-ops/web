import React from "react";
import { formulasT5 } from "../data/formulasT5";

export const FormulaSectionT5: React.FC = () => {
  return (
    <section
      className="memory-card p-5 md:p-6 mt-8"
      aria-labelledby="formula-t5-title"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="chapter-icon">
          <svg className="px" width="24" height="24" aria-hidden="true">
            <use href="#px-table" />
          </svg>
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h2 id="formula-t5-title" className="pixel-font text-2xl font-bold text-[#2fd17a]">
              Formula & Akronim Hafalan Cepat (Tingkatan 5)
            </h2>
            <span className="badge-tag bg-[#2fd17a] text-[#062b17] font-extrabold text-[10px] px-2 py-0.5">
              SPM T5
            </span>
          </div>
          <p className="text-xs text-emerald-200/80 mt-0.5">
            Mnemonik dan sifir ringkas kata kunci silibus KSSM Tingkatan 5
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
        {formulasT5.map((item) => (
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
