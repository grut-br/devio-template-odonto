"use client";

import { motion } from "framer-motion";
import { faqMock } from "@/lib/mock-data";
import { HelpCircle } from "lucide-react";
import { AnimatedAccordion } from "@/components/ui/animated-accordion";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex rounded-full bg-blue-50 p-2 text-blue-900 mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-slate-655">
            Entenda como funcionam nossos procedimentos, anestesias e formas de atendimento.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatedAccordion items={faqMock} />
        </motion.div>

      </div>
    </section>
  );
}

