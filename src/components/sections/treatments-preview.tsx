"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { tratamentosMock } from "@/lib/mock-data";
import { ArrowRight, Layers, Compass, Sparkles, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShinyButton } from "@/components/ui/shiny-button";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="tratamentos" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            Tratamentos de Alta Performance
          </h2>
          <p className="mt-4 text-lg text-slate-655 leading-relaxed">
            Reabilitação funcional e estética com as técnicas mais seguras e recomendadas pela odontologia digital.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto"
        >
          {previewTreatments.map((treatment) => {
            const IconComponent = iconMap[treatment.icone] || ShieldCheck;
            return (
              <motion.div
                key={treatment.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col justify-between bg-white">
                  <div>
                    <div className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-900 w-fit">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      {treatment.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-655">
                      {treatment.descricaoCurta}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100/60">
                    <Link
                      href={`/tratamentos/${treatment.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-900 hover:text-amber-500 transition-colors"
                    >
                      <span>Conhecer detalhes do tratamento</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ver todos os tratamentos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <ShinyButton
            href="/tratamentos"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-blue-950 transition-all duration-200"
          >
            <span>Ver Todos os Tratamentos</span>
            <ArrowRight className="h-4 w-4" />
          </ShinyButton>
        </motion.div>

      </div>
    </section>
  );
}

