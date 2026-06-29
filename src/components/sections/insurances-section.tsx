"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { conveniosMock } from "@/lib/mock-data";
import { ArrowRight } from "lucide-react";

const styleMap: Record<string, string> = {
  "Amil Dental": "text-blue-800 bg-blue-50/40 border-blue-100 hover:border-blue-300",
  "SulAmérica Odonto": "text-indigo-800 bg-indigo-50/40 border-indigo-100 hover:border-indigo-300",
  "Porto Seguro Odonto": "text-sky-800 bg-sky-50/40 border-sky-100 hover:border-sky-300",
  "Bradesco Dental": "text-red-800 bg-red-50/40 border-red-100 hover:border-red-300",
};

export default function InsurancesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="convenios" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-100 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
              Convênios & Parcerias
            </h2>
            <p className="mt-4 text-lg text-slate-655 leading-relaxed">
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
        </motion.div>

        {/* Grid of Insurances */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto"
        >
          {conveniosMock.map((ins) => {
            const styleClass = styleMap[ins.nome] || "text-slate-700 bg-white border-slate-150 hover:border-slate-350";
            return (
              <motion.div
                key={ins.id}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`flex h-24 items-center justify-center rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md bg-white ${styleClass}`}
              >
                <span className="text-sm font-extrabold tracking-wider uppercase text-center">{ins.nome}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-xs text-slate-500 leading-relaxed">
            Não encontrou o seu plano na lista? Realizamos a emissão de documentação completa e laudos digitais para reembolso direto com a sua operadora de saúde.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

