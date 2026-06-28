import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | OralElite",
  description: "Entenda como a OralElite coleta, protege e gerencia seus dados pessoais em total conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="bg-slate-50 flex-1 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para o início</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white rounded-3xl border border-slate-150 p-8 sm:p-12 shadow-sm text-slate-700 leading-relaxed text-sm space-y-6">
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight border-b border-slate-100 pb-4">
            Política de Privacidade
          </h1>
          
          <p className="text-xs text-slate-500">Última atualização: 28 de junho de 2026</p>

          <p>
            Na <strong>OralElite</strong>, privacidade e segurança dos seus dados pessoais são prioridades fundamentais. Esta política de privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações em nosso site, em total conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD)</strong> e as normas éticas do <strong>Conselho Federal de Odontologia (CFO)</strong>.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Coleta de Informações</h2>
          <p>
            Coletamos apenas as informações voluntariamente fornecidas por você através de nossos canais de agendamento e contato (como e-mail, telefone e redirecionamento de WhatsApp):
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Dados Cadastrais Básicos</strong>: Nome completo, número de telefone e e-mail.</li>
            <li><strong>Dados de Saúde Opcionais</strong>: Informações básicas sobre o motivo de sua avaliação (implante, ortodontia, dor, etc.) para qualificação de atendimento emergencial ou pré-agendamento.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Finalidade do Tratamento de Dados</h2>
          <p>
            Seus dados pessoais são processados estritamente para as seguintes finalidades:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Efetuar o agendamento de consultas de avaliação e responder a solicitações de orçamento e dúvidas sobre tratamentos.</li>
            <li>Contatar o paciente em caso de confirmação, alteração ou cancelamento de horários.</li>
            <li>Cumprir obrigações legais de manutenção de prontuário clínico odontológico sob as diretrizes do CFO.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Proteção e Segurança</h2>
          <p>
            Implementamos controles técnicos e administrativos rígidos para impedir o acesso não autorizado, vazamento, alteração ou destruição de seus dados. Os registros de contatos comerciais digitais são de acesso exclusivo da equipe de atendimento e recepção da clínica e nunca são compartilhados ou vendidos a terceiros.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Direitos do Titular dos Dados</h2>
          <p>
            Você, como titular de dados pessoais, tem o direito garantido pela LGPD de solicitar, a qualquer momento:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>A confirmação da existência de tratamento e o acesso aos seus dados cadastrais armazenados.</li>
            <li>A correção de informações incompletas, inexatas ou desatualizadas.</li>
            <li>A eliminação de dados pessoais que não sejam necessários para o cumprimento de obrigações regulatórias odontológicas de manutenção de histórico médico.</li>
          </ul>

          <h2 className="text-lg font-bold text-slate-900 pt-4">5. Contato</h2>
          <p>
            Para qualquer esclarecimento sobre a nossa política de privacidade ou para exercer seus direitos como titular de dados, entre em contato diretamente pelo e-mail: <strong className="text-slate-900">contato@oralelite.com.br</strong>.
          </p>
        </article>

      </div>
    </div>
  );
}
