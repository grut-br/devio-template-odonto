"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, FileText } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Convenio } from "@/lib/mock-data";

interface ConveniosPageClientProps {
  conveniosMock: Convenio[];
}

const styleMap: Record<string, string> = {
  "Amil Dental": "text-blue-800 bg-blue-50/40 border-blue-100 hover:border-blue-300",
  "SulAmérica Odonto": "text-indigo-800 bg-indigo-50/40 border-indigo-100 hover:border-indigo-300",
  "Porto Seguro Odonto": "text-sky-800 bg-sky-50/40 border-sky-100 hover:border-sky-300",
  "Bradesco Dental": "text-red-800 bg-red-50/40 border-red-100 hover:border-red-300",
};

export default function ConveniosPageClient({ conveniosMock }: ConveniosPageClientProps) {
  const reembolsoSteps = [
    "Realização da consulta de avaliação e diagnóstico com escaneamento digital e fotografias.",
    "Montagem de dossiê completo contendo laudo assinado pelo especialista, orçamentos, fotos comprobatórias e nota fiscal do tratamento.",
    "Envio do dossiê pelo paciente ou com assessoria da nossa equipe diretamente ao aplicativo do seu plano.",
    "Aprovação e depósito do valor reembolsado diretamente em sua conta bancária dentro do prazo legal da seguradora."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <div className="bg-slate-50 flex-1">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar para o início</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">
              Planos e Convênios
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
              Convênios Credenciados & Reembolso
            </h1>
            <p className="mt-4 text-lg text-slate-655 leading-relaxed">
              Atendemos diretamente as principais bandeiras odontológicas ou assessoramos você no resgate do seu reembolso livre escolha corporativo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Convênios */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6 lg:grid-cols-4 max-w-3xl mx-auto"
          >
            {conveniosMock.map((ins) => {
              const styleClass = styleMap[ins.nome] || "text-slate-700 bg-white border-slate-150 hover:border-slate-350";
              return (
                <motion.div
                  key={ins.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="h-full"
                >
                  <SpotlightCard className={`flex h-28 flex-col items-center justify-center bg-white text-center cursor-default ${styleClass}`}>
                    <span className="text-sm font-extrabold tracking-wider uppercase">{ins.nome}</span>
                    <span className="text-[10px] text-slate-400 mt-2 font-semibold">Credenciado Direto</span>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Destaque Reembolso Livre Escolha */}
      <section className="bg-white border-t border-slate-150 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto Reembolso */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
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
            </motion.div>

            {/* Passos do Processo */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-4"
            >
              {reembolsoSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex gap-3 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 transition-colors hover:bg-slate-100/40"
                >
                  <div className="h-6 w-6 rounded-full bg-blue-900 text-amber-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-xs leading-relaxed text-slate-655 font-medium">{step}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Pré-Análise Gratuita */}
      <section className="bg-slate-50 border-t border-slate-150 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FileText className="h-10 w-10 text-amber-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Realize uma Pré-Análise de Cobertura Gratuita
            </h2>
            <p className="mt-4 text-sm text-slate-655 leading-relaxed max-w-xl mx-auto">
              Quer saber se o seu convênio cobre implantes, alinhadores transparentes ou qual o valor médio de reembolso que você possui? Envie uma mensagem pelo WhatsApp e nossa equipe comercial fará essa análise sem nenhum custo.
            </p>
            <div className="mt-8">
              <ShinyButton
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20fazer%20uma%20pré-análise%20de%20cobertura%20do%20meu%20convênio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Verificar Cobertura do Meu Plano</span>
              </ShinyButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
