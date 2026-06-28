import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | OralElite",
  description: "Leia as condições de uso do site da OralElite. Conheça as limitações legais e regras éticas sobre informações de procedimentos odontológicos.",
};

export default function TermosUsoPage() {
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
            Termos de Uso do Website
          </h1>
          
          <p className="text-xs text-slate-500">Última atualização: 28 de junho de 2026</p>

          <p>
            Bem-vindo ao site da <strong>OralElite</strong>. Ao navegar ou interagir com nosso website, você concorda expressamente com os seguintes termos e condições de uso aqui descritos. Caso não concorde com qualquer parte destes termos, sugerimos que descontinue o acesso.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Caráter Informativo das Informações</h2>
          <p>
            Todo o conteúdo publicado neste site, incluindo artigos, descrições de tratamentos (implantes, alinhadores transparentes, estética), dúvidas frequentes e depoimentos de pacientes, possui caráter <strong>estritamente informativo e educativo</strong>.
          </p>
          <p className="border-l-4 border-amber-500 bg-amber-50/50 p-4 text-xs font-semibold text-slate-800">
            Aviso Importante: Nenhuma informação aqui exposta substitui a necessidade imperativa de uma consulta presencial de avaliação clínica odontológica. Diagnósticos, planos de tratamento e indicações cirúrgicas dependem de avaliação direta com um cirurgião-dentista credenciado.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Uso Permitido do Conteúdo</h2>
          <p>
            É concedida permissão para visualizar e ler as informações contidas no site para fins de pesquisa pessoal e consulta sobre os serviços da clínica. É expressamente proibida a cópia, reprodução, distribuição ou modificação de qualquer conteúdo, textos ou fotografias de profissionais deste site para fins comerciais ou publicitários sem a prévia autorização por escrito da administração da OralElite.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Limitação de Responsabilidade</h2>
          <p>
            A OralElite envida todos os esforços razoáveis para publicar informações médicas e odontológicas atualizadas e precisas. No entanto, não nos responsabilizamos por interpretações equivocadas de leigos sobre as descrições dos tratamentos, nem por complicações de saúde decorrentes da recusa do paciente em buscar uma avaliação presencial formalizada.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">4. Links para Terceiros e Redirecionamentos</h2>
          <p>
            Este site pode redirecionar você a serviços de comunicação externa, como a plataforma WhatsApp de atendimento ou redes sociais oficiais da clínica. Nós não controlamos as políticas de privacidade dessas plataformas externas de terceiros e recomendamos que leia os termos específicos antes de interagir.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-4">5. Jurisdição e Resolução de Conflitos</h2>
          <p>
            Estes termos de uso são regidos pelas leis vigentes na República Federativa do Brasil. Quaisquer disputas judiciais ou reclamações relativas ao uso deste website serão dirimidas no foro da comarca da sede administrativa da clínica.
          </p>
        </article>

      </div>
    </div>
  );
}
