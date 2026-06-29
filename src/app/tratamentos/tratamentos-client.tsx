"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, HelpCircle, Layers, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Tratamento } from "@/lib/mock-data";

interface TratamentosPageClientProps {
  tratamentosMock: Tratamento[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers: Layers,
  Compass: Compass,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export default function TratamentosPageClient({ tratamentosMock }: TratamentosPageClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <div className="bg-slate-50 flex-1">
      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-100/50">
              Nossos Serviços
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl"
          >
            Soluções Odontológicas Avançadas
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed"
          >
            Oferecemos tratamentos reabilitadores, estéticos e preventivos amparados por tecnologia de última geração e foco no conforto absoluto do paciente.
          </motion.p>
        </div>
      </section>

      {/* Catálogo Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {tratamentosMock.map((treatment) => {
              const IconComponent = iconMap[treatment.icone] || ShieldCheck;
              return (
                <motion.div
                  key={treatment.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <SpotlightCard className="flex flex-col justify-between bg-white h-full p-8">
                    <div>
                      <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-900">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h2 className="mt-6 text-2xl font-bold text-slate-900">
                        {treatment.titulo}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-slate-655">
                        {treatment.descricaoCurta}
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-100/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <Link
                        href={`/tratamentos/${treatment.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-900 hover:text-amber-500 transition-colors"
                      >
                        <span>Entenda o procedimento</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      
                      <Link
                        href={`https://wa.me/5511999999999?text=Olá!%20Gostaria%2520de%20tirar%20dúvidas%20sobre%20${encodeURIComponent(treatment.titulo)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-all duration-200 border border-emerald-100/50 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Agendar Consulta</span>
                      </Link>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Adicional */}
      <section className="bg-white border-t border-slate-150 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle className="h-10 w-10 text-amber-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Ainda com dúvidas sobre algum procedimento?
            </h2>
            <p className="mt-4 text-sm text-slate-650 leading-relaxed max-w-xl mx-auto">
              Nossa equipe de atendimento está pronta para ouvir as suas necessidades, explicar detalhes cirúrgicos ou de planejamento 3D, e orientar sobre a melhor solução para o seu caso.
            </p>
            <div className="mt-8">
              <ShinyButton
                href="https://wa.me/5511999999999?text=Olá!%20Tenho%20dúvidas%20sobre%20os%20tratamentos%20da%20clínica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Conversar com Atendente</span>
              </ShinyButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
