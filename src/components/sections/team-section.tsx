import Link from "next/link";
import { equipeMock } from "@/lib/mock-data";
import { ArrowRight, UserCheck } from "lucide-react";

export default function TeamSection() {
  // Exibiremos os profissionais cadastrados
  const mainTeam = equipeMock.slice(0, 3);

  return (
    <section id="corpo-clinico" className="bg-white py-20 lg:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              {/* EDITAR: Título Seção */}
              Nossos Especialistas
            </h2>
            <p className="mt-4 text-lg text-slate-650 leading-relaxed">
              {/* EDITAR: Subtítulo Seção */}
              Conheça os profissionais que transformam sorrisos com técnicas avançadas e cuidado humanizado.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/corpo-clinico"
              className="inline-flex items-center gap-1.5 text-base font-bold text-blue-900 hover:text-amber-500 transition-colors"
            >
              <span>Ver equipe completa</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Grid do Corpo Clínico */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {mainTeam.map((doctor) => (
            <div
              key={doctor.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Imagem do Profissional */}
              <div className="overflow-hidden rounded-xl aspect-[3/4] w-full bg-slate-200 relative mb-6">
                <img
                  src={doctor.foto}
                  alt={doctor.nome}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Informações */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {doctor.nome}
                </h3>
                <p className="text-sm font-semibold text-amber-500 mt-1">
                  {doctor.especialidade.split(" (")[0]}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-blue-50/70 px-2.5 py-1 text-xs font-bold text-blue-900 border border-blue-100/50">
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>{doctor.cro}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
