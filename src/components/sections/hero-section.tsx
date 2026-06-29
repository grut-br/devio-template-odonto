"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, HeartPulse, Award, Sparkles } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function HeroSection() {
  // Variantes para animação em cascata (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-slate-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 lg:items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag / Badge com sinalizador pulsante de emergência */}
            <motion.div
              variants={itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-red-50 px-3.5 py-1.5 text-xs font-semibold text-red-700 ring-1 ring-red-700/10 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span>Plantão Emergência 24h</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight"
            >
              A harmonia perfeita entre <span className="text-blue-900">estética avançada</span> e saúde bucal.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl"
            >
              Implantes guiados por computador, alinhadores ortodônticos invisíveis e tratamentos de última geração com zero sensibilidade. Odontologia acolhedora, moderna e livre de dor.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
              <ShinyButton
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all duration-200 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Agendar Avaliação</span>
              </ShinyButton>

              {/* Link Secundário de Âncora */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/#tratamentos"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 w-full"
                >
                  <span>Conhecer Tratamentos</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Bullet Points / Diferenciais rápidos */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-8"
            >
              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 cursor-default"
              >
                <div className="rounded-lg bg-blue-50 p-2 text-blue-900 shrink-0">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tecnologia</h3>
                  <p className="text-sm font-bold text-slate-800">Livre de Dor</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 cursor-default"
              >
                <div className="rounded-lg bg-blue-50 p-2 text-blue-900 shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Especialistas</h3>
                  <p className="text-sm font-bold text-slate-800">CRO Registrados</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 cursor-default"
              >
                <div className="rounded-lg bg-blue-50 p-2 text-blue-900 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Estrutura</h3>
                  <p className="text-sm font-bold text-slate-800">Premium Acessível</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-4 rounded-3xl bg-blue-100/30 blur-2xl -z-10 transform rotate-3 scale-95" />
            
            {/* Main Image */}
            <div className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl relative aspect-square w-full max-w-[480px]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                alt="Dentista sorrindo no consultório OralElite"
                className="h-full w-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              
              {/* Floating Badge on Image / Depoimento do cliente */}
              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-lg border border-slate-100/50 flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-md">
                  ★
                </div>
                <div>
                  <p className="text-xs italic text-slate-650">"Transformei meu sorriso sem sentir nenhuma dor. Atendimento nota mil!"</p>
                  <p className="text-xs font-bold text-slate-900 mt-1">— Mariana S., Paciente OralElite</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

