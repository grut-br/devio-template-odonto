# Diretrizes do Projeto e Regras para IA (Devio Templates)

## 1. Visão Geral
Este é o template oficial Next.js (App Router) criado para clínicas odontológicas premium de nível intermediário/avançado ("devio-template-odonto") sob a gestão da agência Devio. O objetivo deste guia é servir como um mapa de contexto rápido para que novos agentes de IA ou desenvolvedores possam entender a arquitetura do projeto e saber exatamente onde realizar modificações.

---

## 2. Stack Tecnológica Obrigatória
- **Framework:** Next.js 16 (App Router)
- **React:** Versão 19 (Suporte a componentes assíncronos e hooks avançados)
- **Estilização:** Tailwind CSS v4 (Uso estrito de classes utilitárias)
- **Ícones:** `lucide-react` (PROIBIDO instalar outras bibliotecas de ícones)
- **Linguagem:** TypeScript

---

## 3. Arquitetura de Pastas e Mapa do Projeto

Nunca crie arquivos fora desta estrutura padrão. Se precisar alterar um elemento do template, consulte o mapa abaixo para saber onde ele está localizado:

```text
src/
├── app/
│   ├── favicon.ico             <-- Ícone padrão do navegador
│   ├── globals.css             <-- Estilos globais e scroll suave (scroll-behavior: smooth)
│   ├── layout.tsx              <-- Configurações de layout globais (Engloba a injeção do Header e Footer)
│   └── page.tsx                <-- Landing Page Principal (Hero, Tratamentos, Corpo Clínico, Convênios, Mapa, FAQ)
├── components/
│   ├── layout/
│   │   ├── header.tsx          <-- Navbar sticky (Links absolutos /#âncoras, Menu Mobile e CTA)
│   │   └── footer.tsx          <-- Rodapé institucional premium (Contém CRO do Diretor Clínico e links)
│   ├── ui/
│   │   └── whatsapp-button.tsx <-- Botão reutilizável com lógica inteligente de formatação de mensagens
│   └── sections/
│       ├── faq-section.tsx      <-- Seção de Dúvidas Frequentes da Home (Accordion nativo details/summary)
│       ├── hero-section.tsx     <-- Apresentação principal da Home (Duas colunas, CTAs e depoimentos flutuantes)
│       ├── treatments-section.tsx <-- Grid com tratamentos (Implantes, Ortodontia, Clínica Geral, Clareamento)
│       └── team-section.tsx     <-- Diferenciais da clínica e fotos em mosaico assimétrico do corpo clínico
├── lib/
│   └── mock-data.ts            <-- Banco de dados mockado (Array de Tratamentos, Equipe, Convênios e FAQs)
```

---

## 4. Diretrizes de Cores e Temas
- **Identidade Visual ("Premium Acessível"):** Clean, muito asséptica, sofisticada na medida certa para consultórios odontológicos que oferecem tratamentos avançados.
- **Fundo Padrão:** Sempre claro e de alta assepsia visual (`bg-white` ou `bg-slate-50`). A Home alterna o fundo entre branco puro e cinza-slate muito suave para criar ritmo e destacar os blocos.
- **Tons de Texto:** `text-slate-800` ou `text-slate-900` para manter excelente contraste e legibilidade.
- **Cores de Destaque / Ação:**
  - *Azul Marinho (Blue 900):* Utilizado como cor principal de refinamento em títulos de seções, cabeçalhos e botões principais de ação institucional.
  - *Dourado Suave (Amber 500):* Utilizado para pequenos detalhes de destaque, ícones de diferenciais, selos de qualidade e CTAs secundários que expressam sofisticação e excelência.
  - *Verde WhatsApp (Emerald 600):* Utilizado exclusivamente nos botões com redirecionamento de WhatsApp para capturar leads de agendamento de forma destacada e intuitiva.
- **Rodapé:** Em tom escuro sóbrio/azul marinho profundo (`bg-slate-950 text-slate-400`) para delimitar o final da página de forma profissional e dar destaque ao aviso legal CRO exigido na área da saúde.

---

## 5. Regras de Ouro para o Agente de IA

1. **Centralização de Dados (Mock Data):** Nunca insira textos gigantescos, listas de especialidades ou perguntas do FAQ diretamente nas páginas ou componentes. Tudo deve ser consumido de `src/lib/mock-data.ts` (através de `tratamentosMock`, `equipeMock` e `conveniosMock`), permitindo que a IA ou o desenvolvedor ajustem todas as informações do cliente em um único local centralizado.
2. **Rotas Dinâmicas no Next.js 16:** Como o projeto utiliza Next.js 16/React 19, lembre-se que os parâmetros de rota dinâmica (`params`) são tratados como Promises e devem ser desestruturados assincronamente (ex: `const { slug } = await params;`). Sempre utilize `generateStaticParams()` em páginas dinâmicas para gerar as páginas de forma estática (SSG) no build de produção.
3. **Comentários de Customização Rápida:** Ao criar ou alterar estruturas onde o desenvolvedor final deve colocar dados do cliente, insira comentários claros em maiúsculo no formato:
   - No JSX: `{/* EDITAR: O que alterar aqui */}`
   - No código TypeScript/constantes: `// EDITAR: O que alterar aqui`
4. **Verificação Obrigatória do Build:** Após qualquer mudança estrutural de arquivos ou alteração de links, execute silenciosamente `npm run build` para garantir que o compilador de TypeScript finalize com sucesso.
5. **Herança de Layout (DRY):** O `Header` e o `Footer` são injetados globalmente via `src/app/layout.tsx`. NUNCA importe ou adicione esses componentes isoladamente dentro dos arquivos `page.tsx`.
