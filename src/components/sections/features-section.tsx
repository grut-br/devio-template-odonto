import { Cpu, Sparkles, Smile } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Cirurgia Guiada Digital",
      description: "Planejamento virtual 3D que permite fixar implantes sem cortes cirúrgicos tradicionais. Menos inchaço, cicatrização rápida e pós-operatório sem dor.",
      icon: Cpu,
    },
    {
      title: "Sedação Consciente",
      description: "Adeus à ansiedade ou fobia de ir ao dentista. Com a inalação de óxido nitroso, você relaxa confortavelmente e passa pelo tratamento sem tensões.",
      icon: Smile,
    },
    {
      title: "Escaneamento Intraoral 3D",
      description: "Substituímos as antigas massas desconfortáveis por um scanner a laser de altíssima precisão. Planejamento ágil para alinhadores e próteses.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            {/* EDITAR: Título de Diferenciais */}
            Por que escolher a OralElite?
          </h2>
          <p className="mt-4 text-lg text-slate-650 leading-relaxed">
            {/* EDITAR: Subtítulo de Diferenciais */}
            Investimos no que há de mais moderno na odontologia mundial para garantir que o seu tratamento seja rápido, altamente estético e, acima de tudo, confortável.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="inline-flex rounded-xl bg-blue-900 p-3 text-amber-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {/* EDITAR: Título do Diferencial */}
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-650">
                  {/* EDITAR: Descrição do Diferencial */}
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
