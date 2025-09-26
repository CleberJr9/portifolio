export const ExperienciesSection = () => {
  const experiencies = [
    {
    id: 1,
    startDate: "Março de 2025",
    endDate: "O momento",
    work: "Vínculo®",
    descrisption:
      "Atuo como responsável pelo desenvolvimento e evolução do aplicativo da Vínculo, plataforma que apoia professores na educação inclusiva e impacta a vida de mais de 3.000 estudantes. Fui responsável por desenvolver toda a parte mobile do app e implementar novas funcionalidades na plataforma web, incluindo automações com n8n e processos de RAG. Conduzo melhorias de usabilidade, performance e arquitetura, utilizando Supabase e Bubble.io, garantindo uma experiência eficiente e escalável para usuários e educadores.",
    area: "Desenvolvimento",
  },
  {
    id: 2,
    startDate: "Setembro de 2024",
    endDate: "Março de 2025",
    work: "Leany",
    descrisption: "Atuei como desenvolvedor na Leany, responsável pela manutenção de aplicações e pelo desenvolvimento de novas funcionalidades em projetos na área da saúde. Trabalhei com Bubble e FlutterFlow, participei de migração de banco de dados para Supabase, integrações e automações com n8n, além da implementação de gateways de pagamento. Fui responsável pelo desenvolvimento de grande parte do projeto MentalMe, contribuindo para a evolução e escalabilidade da plataforma.",
    area: "Desenvolvimento",
  },
  {
    id: 3,
    startDate: "Maio de 2024",
    endDate: "Setembro de 2024",
    work: "IAH SOLUÇÕES INTEGRADAS",
    descrisption:
      "Atuei como desenvolvedor Bubble na IAH Soluções Integradas, criando, otimizando e dando suporte a aplicações voltadas para escalas médicas e setores administrativos hospitalares, com foco em gestão de indicadores. Participei da implementação de novas funcionalidades e da melhoria contínua das plataformas, contribuindo para a eficiência operacional das unidades de saúde.",
    area: "Desenvolvimento",
  },
  {
    id: 4,
    startDate: "Novembro de 2023",
    endDate: "Abril de 2024",
    work: "Sysimo Tecnologia",
    descrisption:
      "Atuei no suporte de software e hardware no Hospital Evangélico Goiano, oferecendo assistência a todos os setores do hospital e garantindo o pleno funcionamento dos sistemas, equipamentos e infraestrutura tecnológica. Minha atuação incluía resolução de problemas, manutenção preventiva e suporte contínuo, assegurando que as operações hospitalares ocorressem de forma eficiente.",
    area: "Suporte",
  }
  ];

  return (
    <section className="w-full  mx-auto px-4 py-12">
      

      <div className="space-y-8">
        {experiencies.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-xl border border-neutraldark-gray bg-black/40 text-white shadow-md transition-colors duration-300 hover:border-[var(--app-primary)]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[var(--app-primary)] font-semibold  text-lg">{exp.work}</h3>
              <span className="text-sm text-neutraloffwhite">
                {exp.startDate} – {exp.endDate}
              </span>
            </div>

            <p className="text-neutraloffwhite text-sm mb-3">
              {exp.descrisption}
            </p>

            <span className="text-[var(--app-primary)] font-medium text-sm">
              {exp.area}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
