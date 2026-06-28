import Link from "next/link";
import { equipeMock } from "@/lib/mock-data";
import { ArrowLeft, UserCheck, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Corpo Clínico | OralElite",
  description: "Conheça nossos cirurgiões-dentistas especialistas em implantes, ortodontia e estética bucal avançada. Profissionais com registro ativo no CRO e constante atualização internacional.",
};

export default function CorpoClinicoPage() {
  const biossegurancaPoints = [
    "Uso estrito de autoclaves digitais de última geração com monitoramento biológico semanal.",
    "Sala cirúrgica com fluxo de ar controlado e barreiras de proteção assépticas descartáveis.",
    "Equipamentos periféricos totalmente higienizados a cada troca de paciente.",
    "Paramentação e EPIs completos seguindo os mais rígidos protocolos da ANVISA e do CFO."
  ];

  return (
    <div className="bg-slate-50 flex-1">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar para o início</span>
            </Link>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">
              Corpo Clínico
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
              Nossos Dentistas e Especialistas
            </h1>
            <p className="mt-4 text-lg text-slate-655 leading-relaxed">
              Equipe multidisciplinar altamente qualificada e focada em oferecer as melhores soluções em implantodontia, reabilitação oral e ortodontia estética.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Especialistas */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {equipeMock.map((doctor) => (
              <div
                key={doctor.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-150 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Imagem do Especialista */}
                <div className="overflow-hidden rounded-xl aspect-[3/4] w-full bg-slate-200 relative mb-6">
                  <img
                    src={doctor.foto}
                    alt={doctor.nome}
                    className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Informações detalhadas */}
                <div className="px-2">
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {doctor.nome}
                  </h2>
                  <p className="text-sm font-semibold text-amber-500 mt-1">
                    {doctor.especialidade}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50/70 px-2.5 py-1 text-xs font-bold text-blue-900 border border-blue-100/50">
                      <UserCheck className="h-3.5 w-3.5" />
                      <span>{doctor.cro}</span>
                    </div>
                    
                    <Link
                      href={`https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20${encodeURIComponent(doctor.nome)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Agendar Horário</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Padrões de Biossegurança e Assepsia */}
      <section className="bg-white border-t border-slate-150 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900">
              Segurança e Rigor Sanitário
            </h2>
            <p className="mt-4 text-sm text-slate-650 leading-relaxed">
              Biossegurança na odontologia não é opcional, é lei. Na OralElite, aplicamos processos severos de assepsia para que o seu tratamento cirúrgico ou estético ocorra em ambiente totalmente estéril.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {biossegurancaPoints.map((point, index) => (
              <div key={index} className="flex gap-3 items-start bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-slate-655 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
