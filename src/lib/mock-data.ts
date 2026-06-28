export interface Tratamento {
  id: string;
  titulo: string;
  slug: string;
  descricaoCurta: string;
  conteudoDetalhado: string;
  icone: string; // Nome do ícone do Lucide a ser renderizado dinamicamente
}

export interface MembroEquipe {
  id: string;
  nome: string;
  especialidade: string;
  cro: string;
  foto: string; // Caminho para imagem ou placeholder
}

export interface Convenio {
  id: string;
  nome: string;
  logo: string; // Caminho para a imagem da logo ou placeholder
}

export interface FAQ {
  id: string;
  pergunta: string;
  resposta: string;
}

// EDITAR: Catálogo de tratamentos odontológicos oferecidos pela clínica
export const tratamentosMock: Tratamento[] = [
  {
    id: "t1",
    titulo: "Implantes Dentários & Reabilitação",
    slug: "implantes-dentarios",
    descricaoCurta: "Recupere a segurança para sorrir e mastigar com implantes de alta tecnologia e cirurgia guiada por computador.",
    conteudoDetalhado: "Recupere seus dentes e a autoconfiança de forma totalmente segura e previsível. Na OralElite, utilizamos a Cirurgia Guiada por Computador, uma tecnologia moderna que permite planejar o implante digitalmente e fixá-lo sem a necessidade de cortes grandes ou suturas complexas. Isso reduz drasticamente o tempo de cirurgia e proporciona um pós-operatório incrivelmente confortável e livre de dor. Associado ao nosso protocolo de Sedação Consciente, você realiza o tratamento totalmente relaxado e sem ansiedade, transformando o medo em uma experiência tranquila.",
    icone: "Layers"
  },
  {
    id: "t2",
    titulo: "Ortodontia & Alinhadores Invisíveis",
    slug: "ortodontia-alinhadores",
    descricaoCurta: "Conquiste o sorriso alinhado que você sempre quis de forma discreta, confortável e rápida com tecnologia Clear Aligner.",
    conteudoDetalhado: "Corrija a posição dos seus dentes sem o incômodo e a estética comprometida dos aparelhos metálicos tradicionais. Trabalhamos com alinhadores transparentes de última geração projetados sob medida por scanner 3D. Eles são praticamente invisíveis, removíveis para alimentação e higienização, e exercem uma força suave e contínua que reduz a dor e acelera o tratamento em até 50%. A sua rotina não muda, o seu conforto é mantido e o resultado final é previsível desde a primeira semana de uso.",
    icone: "Compass"
  },
  {
    id: "t3",
    titulo: "Clareamento & Estética Dental",
    slug: "clareamento-dental-estetica",
    descricaoCurta: "Devolva o brilho e a jovialidade ao seu sorriso com clareamentos de consultório e caseiros com barreira dessensibilizante.",
    conteudoDetalhado: "Sorria com orgulho e ilumine o seu rosto. Desenvolvemos um protocolo exclusivo de Clareamento Dental Misto (Consultório + Caseiro Assistido) que combina a rapidez do laser e a estabilidade do gel caseiro. Para quebrar a tradicional barreira da sensibilidade dentária, aplicamos um laser terapêutico dessensibilizante de baixa intensidade e um gel protetor que atua na proteção do esmalte. O resultado é um sorriso extremamente branco, natural, duradouro e com zero sensibilidade.",
    icone: "Sparkles"
  },
  {
    id: "t4",
    titulo: "Clínica Geral & Odontologia Preventiva",
    slug: "clinica-geral-prevencao",
    descricaoCurta: "Proteja a saúde da sua boca com check-ups digitais preventivos, limpeza profunda sem dor e diagnóstico precoce.",
    conteudoDetalhado: "Cuidar do seu sorriso antes que qualquer dor apareça é o segredo para a longevidade dos seus dentes. Nosso Check-up Preventivo Digital utiliza uma câmera intraoral de altíssima definição que amplia em até 60 vezes a visão do dente, diagnosticando infiltrações e cáries minúsculas antes que virem problemas reais. Nossas profilaxias (limpezas) são realizadas com ultrassom e jato de bicarbonato aquecido, garantindo que você não sinta sensibilidade ou desconforto durante a remoção do tártaro.",
    icone: "ShieldCheck"
  }
];

// EDITAR: Corpo Clínico de especialistas da clínica
export const equipeMock: MembroEquipe[] = [
  {
    id: "m1",
    nome: "Dra. Beatriz Medeiros",
    especialidade: "Implantodontia e Prótese Dental (CRO/SP 987654)",
    cro: "CRO/SP 987654",
    foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=350&h=450"
  },
  {
    id: "m2",
    nome: "Dr. Thiago Ramos",
    especialidade: "Ortodontia e Alinhadores Transparentes (CRO/SP 123456)",
    cro: "CRO/SP 123456",
    foto: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=350&h=450"
  },
  {
    id: "m3",
    nome: "Dra. Amanda Costa",
    especialidade: "Estética Dental e Dentística Restauradora (CRO/SP 456789)",
    cro: "CRO/SP 456789",
    foto: "https://sorria.dentalprev.com.br/wp-content/uploads/2019/04/Andressa-Laitart-768x845.jpeg?auto=format&fit=crop&q=80&w=350&h=450"
  }
];

// EDITAR: Convênios atendidos pela clínica
export const conveniosMock: Convenio[] = [
  {
    id: "c1",
    nome: "Amil Dental",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=150&h=60&txt=Amil+Dental"
  },
  {
    id: "c2",
    nome: "SulAmérica Odonto",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=150&h=60&txt=SulAmérica"
  },
  {
    id: "c3",
    nome: "Porto Seguro Odonto",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=150&h=60&txt=Porto+Seguro"
  },
  {
    id: "c4",
    nome: "Bradesco Dental",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=150&h=60&txt=Bradesco+Dental"
  }
];

// EDITAR: Dúvidas frequentes de pacientes (odontologia)
export const faqMock: FAQ[] = [
  {
    id: "f1",
    pergunta: "A cirurgia de implante dentário dói?",
    resposta: "Não! A cirurgia é realizada sob anestesia local eficaz e, se preferir, sob sedação consciente (óxido nitroso), garantindo que você não sinta absolutamente nada durante o procedimento. Além disso, a tecnologia da Cirurgia Guiada evita cortes desnecessários, reduzindo o inchaço e proporcionando uma recuperação rápida e confortável."
  },
  {
    id: "f2",
    pergunta: "Quanto tempo demora o tratamento com alinhadores invisíveis?",
    resposta: "O tempo varia de acordo com a complexidade de cada caso, mas em média os tratamentos duram entre 6 e 18 meses. Por utilizarem planejamento digital em 3D de alta precisão, os alinhadores costumam ser até 50% mais rápidos que os aparelhos ortodônticos metálicos convencionais."
  },
  {
    id: "f3",
    pergunta: "O clareamento dental causa sensibilidade extrema?",
    resposta: "Tradicionalmente, a sensibilidade era um problema comum, mas hoje possuímos protocolos específicos para evitá-la. Na OralElite, utilizamos géis clareadores com agentes dessensibilizantes associados a sessões de laser terapêutico de baixa intensidade antes e após o procedimento, permitindo clarear os dentes com conforto absoluto."
  },
  {
    id: "f4",
    pergunta: "A clínica atende convênios ou somente particular?",
    resposta: "Atendemos pacientes particulares e também através dos principais convênios odontológicos (Amil Dental, SulAmérica Odonto, Porto Seguro e Bradesco Dental). Caso o seu convênio não esteja na lista, oferecemos o suporte completo para a solicitação de reembolso junto à sua operadora."
  },
  {
    id: "f5",
    pergunta: "O que é a Sedação Consciente e ela é segura?",
    resposta: "Sim, a sedação consciente por óxido nitroso é um método extremamente seguro e amplamente utilizado no mundo. O paciente inala uma mistura gasosa de oxigênio e óxido nitroso que promove uma sensação imediata de relaxamento, calma e bem-estar, mantendo-se acordado e respondendo aos comandos normalmente, mas completamente livre do medo e da ansiedade."
  }
];
