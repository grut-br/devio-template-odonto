"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, UserCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MembroEquipe } from "@/lib/mock-data";

interface CorpoClinicoPageClientProps {
  equipeMock: MembroEquipe[];
}

export default function CorpoClinicoPageClient({ equipeMock }: CorpoClinicoPageClientProps) {
  const biossegurancaPoints = [
    "Uso estrito de autoclaves digitais de última geração com monitoramento biológico semanal.",
    "Sala cirúrgica com fluxo de ar controlado e barreiras de proteção assépticas descartáveis.",
    "Equipamentos periféricos totalmente higienizados a cada troca de paciente.",
    "Paramentação e EPIs completos seguindo os mais rígidos protocolos da ANVISA e do CFO."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
              Corpo Clínico
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
              Nossos Dentistas e Especialistas
            </h1>
            <p className="mt-4 text-lg text-slate-655 leading-relaxed">
              Equipe multidisciplinar altamente qualificada e focada em oferecer as melhores soluções em implantodontia, reabilitação oral e ortodontia estética.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Especialistas */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {equipeMock.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <SpotlightCard className="group flex flex-col justify-between bg-white h-full p-5">
                  <div>
                    {/* Imagem do Especialista */}
                    <div className="overflow-hidden rounded-xl aspect-[3/4] w-full bg-slate-200 relative mb-6">
                      <motion.img
                        src={doctor.foto}
                        alt={doctor.nome}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="h-full w-full object-cover object-center"
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
                    </div>
                  </div>
                  
                  <div className="px-2 mt-6 pt-4 border-t border-slate-100/60 flex items-center justify-between">
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
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção Padrões de Biossegurança e Assepsia */}
      <section className="bg-white border-t border-slate-150 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900">
              Segurança e Rigor Sanitário
            </h2>
            <p className="mt-4 text-sm text-slate-650 leading-relaxed">
              Biossegurança na odontologia não é opcional, é lei. Na OralElite, aplicamos processos severos de assepsia para que o seu tratamento cirúrgico ou estético ocorra em ambiente totalmente estéril.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {biossegurancaPoints.map((point, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex gap-3 items-start bg-slate-50/50 p-6 rounded-xl border border-slate-100 transition-colors hover:bg-slate-100/30"
              >
                <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-slate-655 font-medium">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
