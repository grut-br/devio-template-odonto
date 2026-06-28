import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Coluna Logo e Sobre */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Link href="/#inicio" className="text-2xl font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity">
              {/* EDITAR: Nome da Clínica */}
              Oral<span className="text-amber-500 font-semibold">Elite</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {/* EDITAR: Descrição da Clínica */}
              Reabilitando sorrisos com tecnologia de última geração e precisão cirúrgica. Especialistas em implantes guiados, alinhadores ortodônticos e reabilitações estéticas avançadas em um ambiente de absoluto conforto.
            </p>
            <div className="text-xs text-slate-500 pt-2 space-y-1">
              {/* EDITAR: Informações CRO, CNPJ e Diretor Técnico Responsável */}
              <p>Clínica Odontológica OralElite Ltda. - CNPJ: 00.000.000/0001-00</p>
              <p>Diretora Clínica: Dra. Beatriz Medeiros - CRO/SP 987654</p>
            </div>
          </div>

          {/* Coluna Links Rápidos */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Navegação</h3>
            <nav className="flex flex-col space-y-2.5 text-sm">
              {/* EDITAR: Links rápidos */}
              <Link href="/#inicio" className="hover:text-amber-500 transition-colors">Início</Link>
              <Link href="/#tratamentos" className="hover:text-amber-500 transition-colors">Tratamentos</Link>
              <Link href="/#corpo-clinico" className="hover:text-amber-500 transition-colors">Corpo Clínico</Link>
              <Link href="/#convenios" className="hover:text-amber-500 transition-colors">Convênios</Link>
              <Link href="/politica-de-privacidade" className="hover:text-amber-500 transition-colors">Políticas de Privacidade</Link>
              <Link href="/termos-de-uso" className="hover:text-amber-500 transition-colors">Termos de Uso</Link>
            </nav>
          </div>

          {/* Coluna Contato Rápido e Horários */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Horários e Contato</h3>
            <div className="text-sm space-y-2.5 leading-relaxed">
              {/* EDITAR: Horários, Contatos e e-mail */}
              <p>Segunda a Sexta: <strong className="text-white">08:00 às 19:00</strong></p>
              <p>Sábados: <strong className="text-white">08:00 às 12:00</strong></p>
              <p>Telefone: <strong className="text-white">(11) 3333-5555</strong></p>
              <p>WhatsApp: <strong className="text-white">(11) 99999-9999</strong></p>
              <p>E-mail: <strong className="text-white">contato@oralelite.com.br</strong></p>
            </div>
            <div className="pt-2">
              {/* EDITAR: WhatsApp de Agendamento do Footer */}
              <Link
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20odontológica."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-950 transition-colors border border-blue-800"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Agendar Avaliação</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Linha Divisória */}
        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Aviso Legal de Saúde */}
          <div className="max-w-2xl">
            <p className="text-xs text-slate-500 leading-relaxed">
              {/* EDITAR: Aviso legal CRO */}
              <strong>Aviso Legal:</strong> As informações contidas neste site têm caráter informativo e educacional sobre os tratamentos oferecidos. A indicação definitiva de qualquer procedimento odontológico necessita obrigatoriamente de consulta de avaliação com cirurgião-dentista qualificado.
            </p>
          </div>

          {/* Direitos Autorais e Assinatura */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs shrink-0 text-slate-500">
            <p>&copy; {new Date().getFullYear()} OralElite. Todos os direitos reservados.</p>
            <p className="sm:border-l sm:border-slate-900 sm:pl-3">
              Desenvolvido por:{" "}
              {/* EDITAR: Link do portfólio da agência */}
              <Link 
                href="https://devio.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-slate-400 hover:text-amber-500 transition-colors"
              >
                Devio
              </Link>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
