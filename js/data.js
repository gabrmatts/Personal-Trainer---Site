/* ==========================================================================
   VOLT PERFORMANCE — dados simulados (front-end only, sem back-end)
   Todo o conteúdo abaixo é fictício, criado exclusivamente para esta demo.
   ========================================================================== */

const VOLT_DATA = {

  /* Configuração de marca — troque o logotipo sem tocar no restante do código.
     1) Coloque seu arquivo em assets/images/logo.png (ou .svg)
     2) Aponte "logoImage" para esse caminho
     3) Se o arquivo não existir ou não carregar, o logotipo em texto (ícone + VOLT PERFORMANCE) é usado automaticamente. */
  brand: {
    name: "VOLT",
    suffix: "PERFORMANCE",
    logoImage: "assets/images/logo.png"
  },

  stats: [
    { id: "alunos", value: 3200, suffix: "+", label: "alunos impulsionados", icon: "fa-solid fa-bolt" },
    { id: "kg", value: 18400, suffix: "kg", label: "eliminados nos treinos", icon: "fa-solid fa-weight-hanging" },
    { id: "avaliacoes", value: 98, suffix: "%", label: "de avaliações positivas", icon: "fa-solid fa-star" },
    { id: "programas", value: 12, suffix: "", label: "programas disponíveis", icon: "fa-solid fa-layer-group" }
  ],

  benefits: [
    {
      icon: "fa-solid fa-user-check",
      title: "Acompanhamento individual",
      text: "Cada etapa da sua jornada é revisada por um treinador dedicado, nunca por um algoritmo genérico."
    },
    {
      icon: "fa-solid fa-dumbbell",
      title: "Treinos sob medida",
      text: "Periodização construída a partir da sua avaliação física, sua rotina e seu objetivo real."
    },
    {
      icon: "fa-solid fa-bowl-food",
      title: "Plano alimentar aplicado",
      text: "Cardápios flexíveis, pensados para a vida real — sem dietas de vitrine."
    },
    {
      icon: "fa-brands fa-whatsapp",
      title: "Suporte direto no WhatsApp",
      text: "Dúvidas, ajustes e motivação a um toque de distância, todos os dias da semana."
    },
    {
      icon: "fa-solid fa-clapperboard",
      title: "Execução em vídeo",
      text: "Biblioteca própria com a técnica de cada exercício filmada em múltiplos ângulos."
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Evolução semanal",
      text: "Relatórios de carga, medidas e fotos organizados automaticamente a cada ciclo."
    }
  ],

  process: [
    {
      step: "01",
      title: "Cadastro",
      text: "Você entra para a Volt em minutos e responde um raio-x completo do seu momento atual."
    },
    {
      step: "02",
      title: "Avaliação",
      text: "Um treinador sênior analisa seu histórico, sua rotina e define os pontos de partida."
    },
    {
      step: "03",
      title: "Plano personalizado",
      text: "Treino e alimentação são moldados exclusivamente para o seu corpo e sua agenda."
    },
    {
      step: "04",
      title: "Resultados",
      text: "Ajustes contínuos, cargas progressivas e acompanhamento até a meta ser batida."
    }
  ],

  programs: [
    {
      id: "hipertrofia",
      title: "Hipertrofia",
      desc: "Construção de massa magra com séries progressivas e foco em técnica de execução.",
      duration: "12 semanas",
      level: "Intermediário",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "emagrecimento",
      title: "Emagrecimento",
      desc: "Protocolo metabólico que une treino de força e cardio inteligente para queima real.",
      duration: "8 semanas",
      level: "Iniciante",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "definicao",
      title: "Definição",
      desc: "Fase de recorte muscular com ajuste fino de nutrição e volume de treino.",
      duration: "10 semanas",
      level: "Avançado",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "condicionamento",
      title: "Condicionamento",
      desc: "Capacidade cardiorrespiratória e resistência muscular para o dia a dia exigente.",
      duration: "6 semanas",
      level: "Todos os níveis",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "feminino",
      title: "Treino Feminino",
      desc: "Programa focado em membros inferiores, postura e fortalecimento funcional.",
      duration: "12 semanas",
      level: "Intermediário",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "masculino",
      title: "Treino Masculino",
      desc: "Ganho de força e volume com foco em grandes grupamentos musculares.",
      duration: "12 semanas",
      level: "Intermediário",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    }
  ],

  transformations: [
    { id: 1, name: "Rafaela M.", category: "emagrecimento", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=700&auto=format&fit=crop", result: "-14kg em 10 semanas" },
    { id: 2, name: "Diego A.", category: "hipertrofia", image: "https://images.unsplash.com/photo-1583500178690-f7fd4a6c9de1?q=80&w=700&auto=format&fit=crop", result: "+6kg de massa magra" },
    { id: 3, name: "Camila S.", category: "definicao", image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=700&auto=format&fit=crop", result: "12% de gordura corporal" },
    { id: 4, name: "Bruno T.", category: "condicionamento", image: "https://images.unsplash.com/photo-1517964603305-46e2a3d1f1f0?q=80&w=700&auto=format&fit=crop", result: "5km em 22 minutos" },
    { id: 5, name: "Larissa F.", category: "feminino", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=700&auto=format&fit=crop", result: "Postura e força renovadas" },
    { id: 6, name: "Marcos P.", category: "masculino", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=700&auto=format&fit=crop", result: "+9kg no supino" }
  ],

  testimonials: [
    {
      name: "Rafaela Martins",
      goal: "Emagrecimento",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      text: "Em 10 semanas eu já não reconhecia meu corpo no espelho. O acompanhamento é próximo de verdade, todos os dias."
    },
    {
      name: "Diego Azevedo",
      goal: "Hipertrofia",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      text: "Nunca tive tanta clareza sobre o motivo de cada exercício. Os ajustes semanais fizeram toda a diferença nos ganhos."
    },
    {
      name: "Camila Souza",
      goal: "Definição",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      text: "O plano alimentar é o primeiro que eu de fato consegui seguir. Nada de dieta impossível de manter."
    },
    {
      name: "Bruno Tavares",
      goal: "Condicionamento",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
      text: "O suporte no WhatsApp resolveu todas as minhas dúvidas na hora. Me senti acompanhado do primeiro ao último dia."
    }
  ],

  featureCards: [
    { icon: "fa-solid fa-video", title: "Treinos em vídeo", text: "Execução guiada, sem dúvidas na hora do treino." },
    { icon: "fa-solid fa-book-open", title: "Biblioteca de exercícios", text: "Centenas de movimentos catalogados por grupo muscular." },
    { icon: "fa-solid fa-file-pdf", title: "PDFs exclusivos", text: "Materiais de apoio para consultar quando quiser." },
    { icon: "fa-solid fa-list-check", title: "Checklists", text: "Rotinas diárias para manter a consistência sem esforço." },
    { icon: "fa-solid fa-trophy", title: "Desafios mensais", text: "Metas coletivas para manter a motivação lá em cima." },
    { icon: "fa-solid fa-people-group", title: "Comunidade Volt", text: "Um grupo fechado só de alunos comprometidos com o resultado." },
    { icon: "fa-solid fa-headset", title: "Suporte prioritário", text: "Resposta rápida direto com a equipe de treinadores." },
    { icon: "fa-solid fa-rotate", title: "Atualizações constantes", text: "Conteúdo novo lançado todo mês, sem custo adicional." }
  ],

  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "197",
      period: "/mês",
      recommended: false,
      features: [
        "Treino personalizado",
        "Biblioteca de exercícios",
        "Atualização mensal",
        "Suporte por e-mail"
      ]
    },
    {
      id: "pro",
      name: "Pro",
      price: "297",
      period: "/mês",
      recommended: true,
      features: [
        "Tudo do plano Starter",
        "Plano alimentar personalizado",
        "Suporte via WhatsApp",
        "Ajustes semanais",
        "Acesso à comunidade Volt"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      price: "497",
      period: "/mês",
      recommended: false,
      features: [
        "Tudo do plano Pro",
        "Avaliação física mensal",
        "Chamada de vídeo quinzenal",
        "Prioridade máxima de suporte",
        "Acesso antecipado a novidades"
      ]
    }
  ],

  faq: [
    {
      q: "Preciso de experiência prévia com treino?",
      a: "Não. O programa se adapta ao seu nível atual, do primeiro treino em diante, com progressão segura e acompanhada."
    },
    {
      q: "Como funciona o acompanhamento no WhatsApp?",
      a: "Você tem uma linha direta com sua equipe de treinadores para dúvidas, ajustes de carga e motivação diária."
    },
    {
      q: "Posso trocar de programa depois de começar?",
      a: "Sim. A cada ciclo de avaliação, o programa pode ser reajustado conforme sua evolução e seus objetivos."
    },
    {
      q: "Os treinos podem ser feitos em casa?",
      a: "Sim, existem versões para casa, academia completa ou equipamento mínimo, definidas na sua avaliação inicial."
    },
    {
      q: "Existe fidelidade ou multa de cancelamento?",
      a: "Não. Os planos são mensais e podem ser cancelados a qualquer momento, sem taxas escondidas."
    }
  ]
};