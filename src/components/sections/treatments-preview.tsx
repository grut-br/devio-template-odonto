import Link from "next/link";
import { tratamentosMock } from "@/lib/mock-data";
import { ArrowRight, Layers, Compass, Sparkles, ShieldCheck } from "lucide-react";

// Mapeamento estático de ícones da biblioteca lucide-react para garantir tipagem forte
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers: Layers,
  Compass: Compass,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export default function TreatmentsPreview() {
  // Exibiremos no máximo 4 tratamentos na prévia da Home
  const previewTreatments = tratamentosMock.slice(0, 4);

  return (
    <section id="tratamentos" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            {/* EDITAR: Título da Seção */}
            Tratamentos de Alta Performance
          </h2>
          <p className="mt-4 text-lg text-slate-650 leading-relaxed">
            {/* EDITAR: Subtítulo da Seção */}
            Reabilitação funcional e estética com as técnicas mais seguras e recomendadas pela odontologia digital.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {previewTreatments.map((treatment) => {
            const IconComponent = iconMap[treatment.icone] || ShieldCheck;
            return (
              <div
                key={treatment.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-900">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {treatment.titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-655">
                    {treatment.descricaoCurta}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-50">
                  <Link
                    href={`/tratamentos/${treatment.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-900 hover:text-amber-500 transition-colors"
                  >
                    <span>Conhecer detalhes do tratamento</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ver todos os tratamentos */}
        <div className="mt-16 text-center">
          <Link
            href="/tratamentos"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-blue-955 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Ver Todos os Tratamentos</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
