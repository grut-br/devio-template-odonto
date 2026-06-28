import Link from "next/link";
import { conveniosMock } from "@/lib/mock-data";
import { ArrowLeft, CheckCircle2, MessageCircle, FileText } from "lucide-react";

export const metadata = {
  title: "Convênios e Reembolso | OralElite",
  description: "Consulte a cobertura de planos odontológicos aceitos na clínica OralElite. Saiba como funciona o sistema de reembolso livre escolha para convênios corporativos de alto padrão.",
};

const styleMap: Record<string, string> = {
  "Amil Dental": "text-blue-800 bg-blue-50/40 border-blue-100 hover:border-blue-300",
  "SulAmérica Odonto": "text-indigo-800 bg-indigo-50/40 border-indigo-100 hover:border-indigo-300",
  "Porto Seguro Odonto": "text-sky-800 bg-sky-50/40 border-sky-100 hover:border-sky-300",
  "Bradesco Dental": "text-red-800 bg-red-50/40 border-red-100 hover:border-red-300",
};

export default function ConveniosPage() {
  const reembolsoSteps = [
    "Realização da consulta de avaliação e diagnóstico com escaneamento digital e fotografias.",
    "Montagem de dossiê completo contendo laudo assinado pelo especialista, orçamentos, fotos comprobatórias e nota fiscal do tratamento.",
    "Envio do dossiê pelo paciente ou com assessoria da nossa equipe diretamente ao aplicativo do seu plano.",
    "Aprovação e depósito do valor reembolsado diretamente em sua conta bancária dentro do prazo legal da seguradora."
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
              Planos e Convênios
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
              Convênios Credenciados & Reembolso
            </h1>
            <p className="mt-4 text-lg text-slate-655 leading-relaxed">
              Atendemos diretamente as principais bandeiras odontológicas ou assessoramos você no resgate do seu reembolso livre escolha corporativo.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Convênios */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 max-w-3xl mx-auto">
            {conveniosMock.map((ins) => {
              const styleClass = styleMap[ins.nome] || "text-slate-700 bg-white border-slate-150 hover:border-slate-350";
              return (
                <div
                  key={ins.id}
                  className={`flex h-28 flex-col items-center justify-center rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white text-center ${styleClass}`}
                >
                  <span className="text-sm font-extrabold tracking-wider uppercase">{ins.nome}</span>
                  <span className="text-[10px] text-slate-400 mt-2 font-semibold">Credenciado Direto</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destaque Reembolso Livre Escolha */}
      <section className="bg-white border-t border-slate-150 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Reembolso */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Livre Escolha</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mt-2">
                Como Funciona o Reembolso?
              </h2>
              <p className="mt-6 text-sm text-slate-650 leading-relaxed">
                Muitos convênios corporativos de nível intermediário e avançado (como Bradesco Prime, SulAmérica Executivo, Lincx, Omint) oferecem a modalidade de <strong>Livre Escolha</strong>.
              </p>
              <p className="mt-4 text-sm text-slate-650 leading-relaxed">
                Nesse formato, você tem a liberdade de realizar o tratamento em nossa clínica particular com o especialista de sua preferência, e a seguradora reembolsa os valores (parcial ou integralmente) de acordo com a sua apólice.
              </p>
            </div>

            {/* Passos do Processo */}
            <div className="lg:col-span-6 space-y-4">
              {reembolsoSteps.map((step, index) => (
                <div key={index} className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="h-6 w-6 rounded-full bg-blue-900 text-amber-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-655 font-medium">{step}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Pré-Análise Gratuita */}
      <section className="bg-slate-50 border-t border-slate-150 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-10 w-10 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Realize uma Pré-Análise de Cobertura Gratuita
          </h2>
          <p className="mt-4 text-sm text-slate-655 leading-relaxed max-w-xl mx-auto">
            Quer saber se o seu convênio cobre implantes, alinhadores transparentes ou qual o valor médio de reembolso que você possui? Envie uma mensagem pelo WhatsApp e nossa equipe comercial fará essa análise sem nenhum custo.
          </p>
          <div className="mt-8">
            <Link
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20pré-análise%20de%20cobertura%20do%20meu%20convênio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all duration-200"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Verificar Cobertura do Meu Plano</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
