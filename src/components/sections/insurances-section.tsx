import Link from "next/link";
import { conveniosMock } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

const styleMap: Record<string, string> = {
  "Amil Dental": "text-blue-800 bg-blue-50/40 border-blue-100 hover:border-blue-300",
  "SulAmérica Odonto": "text-indigo-800 bg-indigo-50/40 border-indigo-100 hover:border-indigo-300",
  "Porto Seguro Odonto": "text-sky-800 bg-sky-50/40 border-sky-100 hover:border-sky-300",
  "Bradesco Dental": "text-red-800 bg-red-50/40 border-red-100 hover:border-red-300",
};

export default function InsurancesSection() {
  return (
    <section id="convenios" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-100 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              {/* EDITAR: Título Seção */}
              Convênios & Parcerias
            </h2>
            <p className="mt-4 text-lg text-slate-655 leading-relaxed">
              {/* EDITAR: Subtítulo Seção */}
              Facilitamos o seu acesso aos melhores tratamentos através de convênios credenciados ou reembolso.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/convenios"
              className="inline-flex items-center gap-1.5 text-base font-bold text-blue-900 hover:text-amber-500 transition-colors"
            >
              <span>Regras de cobertura</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Grid of Insurances */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
          {conveniosMock.map((ins) => {
            const styleClass = styleMap[ins.nome] || "text-slate-700 bg-white border-slate-150 hover:border-slate-350";
            return (
              <div
                key={ins.id}
                className={`flex h-24 items-center justify-center rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white ${styleClass}`}
              >
                {/* EDITAR: Nome / Placeholder do Convênio */}
                <span className="text-sm font-extrabold tracking-wider uppercase text-center">{ins.nome}</span>
              </div>
            );
          })}
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            {/* EDITAR: Texto informativo de rodapé de convênios */}
            Não encontrou o seu plano na lista? Realizamos a emissão de documentação completa e laudos digitais para reembolso direto com a sua operadora de saúde.
          </p>
        </div>
      </div>
    </section>
  );
}
