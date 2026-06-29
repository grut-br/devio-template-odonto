"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="flex items-center">
          {/* EDITAR: Link e Nome da Clínica Odontológica */}
          <Link href="/#inicio" className="text-2xl font-extrabold tracking-tight text-blue-900 transition-colors hover:opacity-90">
            Oral<span className="text-amber-500 font-semibold">Elite</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {/* EDITAR: Links de Navegação */}
          <Link href="/#inicio" className="text-sm font-semibold text-slate-650 hover:text-blue-900 hover:scale-[1.02] transition-all">
            Início
          </Link>
          <Link href="/tratamentos" className="text-sm font-semibold text-slate-650 hover:text-blue-900 hover:scale-[1.02] transition-all">
            Tratamentos
          </Link>
          <Link href="/corpo-clinico" className="text-sm font-semibold text-slate-650 hover:text-blue-900 hover:scale-[1.02] transition-all">
            Corpo Clínico
          </Link>
          <Link href="/convenios" className="text-sm font-semibold text-slate-650 hover:text-blue-900 hover:scale-[1.02] transition-all">
            Convênios
          </Link>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center">
          {/* EDITAR: Link do WhatsApp e Texto de Agendamento */}
          <Link
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <MessageCircle className="h-4.5 w-4.5" />
            <span>Agendar Avaliação</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none transition-colors"
            aria-label="Menu principal"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {/* EDITAR: Links de Navegação Mobile */}
            <Link
              href="/#inicio"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 py-2 px-3 rounded-md transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#tratamentos"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 py-2 px-3 rounded-md transition-colors"
            >
              Tratamentos
            </Link>
            <Link
              href="/#corpo-clinico"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 py-2 px-3 rounded-md transition-colors"
            >
              Corpo Clínico
            </Link>
            <Link
              href="/#convenios"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-900 hover:bg-slate-50 py-2 px-3 rounded-md transition-colors"
            >
              Convênios
            </Link>
          </nav>
          
          <div className="pt-4 border-t border-slate-100">
            {/* EDITAR: Link do WhatsApp Mobile */}
            <Link
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 text-base font-bold text-white shadow-md hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Agendar Avaliação</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
