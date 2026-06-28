import { faqMock } from "@/lib/mock-data";
import { HelpCircle } from "lucide-react";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex rounded-full bg-blue-50 p-2 text-blue-900 mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
            {/* EDITAR: Título de Dúvidas */}
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-slate-650">
            {/* EDITAR: Subtítulo de Dúvidas */}
            Entenda como funcionam nossos procedimentos, anestesias e formas de atendimento.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqMock.map((item) => (
            <details
              key={item.id}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 focus:outline-none">
                <h3 className="text-base font-bold group-open:text-blue-900 transition-colors duration-250">
                  {item.pergunta}
                </h3>
                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0 transition-opacity duration-250 text-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <svg
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100 transition-opacity duration-250 text-amber-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 border-t border-slate-50 pt-4 leading-relaxed text-sm text-slate-650">
                <p>{item.resposta}</p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
