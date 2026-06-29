"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, Smile } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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

  // Variantes para reveal ao scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="bg-white py-20 lg:py-28 border-y border-slate-100">
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
            Por que escolher a OralElite?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Investimos no que há de mais moderno na odontologia mundial para garantir que o seu tratamento seja rápido, altamente estético e, acima de tudo, confortável.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col justify-start items-start bg-slate-50/50">
                  <div className="inline-flex rounded-xl bg-blue-900 p-3 text-amber-500 shadow-sm transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

