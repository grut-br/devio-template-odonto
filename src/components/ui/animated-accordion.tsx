"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string | number;
  pergunta: string;
  resposta: string;
}

interface AnimatedAccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function AnimatedAccordion({ items, className }: AnimatedAccordionProps) {
  const [openId, setOpenId] = useState<string | number | null>(null);

  const toggleItem = (id: string | number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("space-y-4 w-full max-w-3xl mx-auto", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-300",
              isOpen ? "shadow-md ring-1 ring-blue-900/5" : "hover:border-slate-200"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left text-slate-900 focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3
                className={cn(
                  "text-base font-bold transition-colors duration-200",
                  isOpen ? "text-blue-900" : "text-slate-900"
                )}
              >
                {item.pergunta}
              </h3>
              
              <div className="relative h-6 w-6 shrink-0 flex items-center justify-center">
                {/* Ícone de Mais / Menos com animação */}
                <motion.svg
                  className={cn(
                    "h-5 w-5 absolute transition-colors duration-200",
                    isOpen ? "text-amber-500" : "text-slate-500"
                  )}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 12H6"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  )}
                </motion.svg>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 border-t border-slate-50 pt-4 leading-relaxed text-sm text-slate-655 bg-slate-50/20">
                    <p>{item.resposta}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
