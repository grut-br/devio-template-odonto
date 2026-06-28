import Link from "next/link";
import { notFound } from "next/navigation";
import { tratamentosMock } from "@/lib/mock-data";
import { ArrowLeft, MessageCircle, Clock, ShieldCheck, Heart, Sparkles, Check } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Gerador de parâmetros estáticos (SSG) no build de produção
export async function generateStaticParams() {
  return tratamentosMock.map((treatment) => ({
    slug: treatment.slug,
  }));
}

// 2. Metadados Dinâmicos baseados no tratamento selecionado
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = tratamentosMock.find((t) => t.slug === slug);
  
  if (!treatment) {
    return {
      title: "Tratamento não encontrado | OralElite",
    };
  }

  return {
    title: `${treatment.titulo} | OralElite`,
    description: treatment.descricaoCurta,
  };
}

export default async function TratamentoDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = tratamentosMock.find((t) => t.slug === slug);

  if (!treatment) {
    notFound();
  }

  const diferenciaisClinica = [
    "Avaliação digitalizada computadorizada integrada.",
    "Uso opcional de sedação consciente (óxido nitroso).",
    "Acompanhamento personalizado pós-procedimento.",
    "Equipe médica com registro ativo e qualificação CRO."
  ];

  return (
    <div className="bg-slate-50 flex-1">
      {/* Voltar e Header sutil */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/tratamentos"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para todos os tratamentos</span>
        </Link>
      </div>

      {/* Main Container */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Coluna Esquerda - Conteúdo Detalhado */}
            <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-150 p-8 sm:p-12 shadow-sm">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">
                Procedimento Avançado
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl lg:text-5xl">
                {treatment.titulo}
              </h1>
              
              <p className="mt-6 text-lg font-semibold leading-relaxed text-slate-700">
                {treatment.descricaoCurta}
              </p>
              
              <div className="mt-8 border-t border-slate-100 pt-8 text-slate-650 leading-relaxed space-y-6 text-base">
                {/* O conteúdo detalhado estruturado no mock para quebrar objeção da dor */}
                <p className="whitespace-pre-line">{treatment.conteudoDetalhado}</p>
              </div>

              {/* Lista de Garantias / Diferenciais */}
              <div className="mt-12 border-t border-slate-100 pt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Padrão de Atendimento OralElite</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {diferenciaisClinica.map((item, index) => (
                    <div key={index} className="flex gap-2.5 items-start">
                      <div className="rounded-full bg-blue-50 p-1 text-blue-900 shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita - Sidebar Fixo (Sticky) de Conversão */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-slate-150 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-50 pb-4">
                  Agendar Avaliação
                </h3>
                
                {/* Informações Rápidas do Tratamento */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-50 p-2 text-slate-550 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Formato</p>
                      <p className="text-sm font-bold text-slate-800">Planejamento Digital 3D</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-50 p-2 text-slate-550 shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recuperação</p>
                      <p className="text-sm font-bold text-slate-800">Protocolo Sem Dor</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-slate-50 p-2 text-slate-550 shrink-0">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Acolhimento</p>
                      <p className="text-sm font-bold text-slate-800">Sedação Opcional</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-8">
                  <p className="text-xs leading-relaxed text-slate-500 mb-6 text-center">
                    Clique abaixo para iniciar seu atendimento via WhatsApp. Analisamos cobertura de planos e agendamos seu horário.
                  </p>
                  
                  {/* CTA de conversão direta */}
                  <Link
                    href={`https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20o%20tratamento%20de%20${encodeURIComponent(treatment.titulo)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-base font-bold text-white shadow-md hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Iniciar Agendamento</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
