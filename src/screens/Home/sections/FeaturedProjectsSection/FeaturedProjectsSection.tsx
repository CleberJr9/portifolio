
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const projectsData = [
  {
    id: 1,
    title: "Desenvolvimento Web e Mobile na Vínculo.",
    description:
      "Atuo como responsável pelo desenvolvimento e evolução do aplicativo da Vínculo, plataforma que apoia professores na educação inclusiva e impacta a vida de mais de 3.000 estudantes. Conduzo melhorias de usabilidade, performance e arquitetura do app utilizando Supabase, Bubble.io e n8n, garantindo maior eficiência no uso e ampliando os resultados alcançados pelos educadores.",
    image: "https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1757985618416x669160729779605400/vinculo%20app.jpg?_gl=1*isdjc7*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTc5MzI1OTEkbzIxMCRnMSR0MTc1Nzk4NTU5MSRqNTckbDAkaDA.",
    tag: "Vínculo",
    projectInfo: [
      { label: "Ano", value: "2025" },
      { label: "Atuação", value: "Desenvolvimento" },
    ],
    links: [
      {
        label: "Página",
        icon: '',
        underline: "https://vinculo.app/",
      }
    ],
  },
  {
    id: 2,
    title: "MentalMe",
    description:
      "Atuei no desenvolvimento e evolução da MentalMe, aplicativo e plataforma de saúde mental que conecta pacientes a psiquiatras e psicólogos, oferecendo funcionalidades como prescrições digitais, avaliações e agendamento de consultas. Fui responsável por implementar melhorias e manutenções técnicas, garantindo estabilidade e escalabilidade do sistema. No projeto, utilizei Supabase, Bubble.io, FlutterFlow e n8n, além da integração com gateways de pagamento, assegurando processos financeiros seguros e eficientes. A plataforma alcançou mais de 1.500 usuários ativos, impactando diretamente a qualidade do atendimento em saúde mental.",
    image: "https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1758068543169x650693774016293500/Screenshot%202025-09-16%20211857.png?_gl=1*fd11fg*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTgwMjI0MjMkbzIxMSRnMSR0MTc1ODA2ODUzNiRqMjckbDAkaDA",
    tag: "MentalMe",
    projectInfo: [
      { label: "Ano", value: "2024/2025" },
      { label: "Atuação", value: "Desenvolvimento" }
    ],
    links: [
      {
        label: "Página",
        icon: '',
        underline: "https://apps.apple.com/us/app/mentalme-app/id6447705422?l=pt-BR&platform=iphone",
      }
      
    ],
  },
  {
    id: 3,
    title: "Meta Smile",
    description:
      "Participei do desenvolvimento da Meta Smile, um ecossistema completo de gestão odontológica, projetado para ser escalável e operar em múltiplos continentes sem a necessidade de reescrita de código ou migrações complexas. Contribuí para a evolução da plataforma utilizando FlutterFlow, Supabase e n8n, garantindo integração eficiente entre módulos e automação de processos. Essa solução proporciona aos dentistas menos tempo com tarefas administrativas e mais foco no cuidado com os pacientes, enquanto a empresa ganha um produto robusto e preparado para expandir continuamente em novas frentes de serviço.",
    image: "https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1758070840946x867828895416211000/MetaSmile.png?_gl=1*lpmriu*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTgwMjI0MjMkbzIxMSRnMSR0MTc1ODA2ODcwMSRqNjAkbDAkaDA",
    tag: "Meta Smile",
    projectInfo: [
      { label: "Ano", value: "2024/2025" },
      { label: "Atuação", value: "Desenvolvimento" },
    ],
    links: [
      
    ],
  },
  {
    id: 4,
    title: "Nurse Tech",
    description:
      "Fui responsável pelo desenvolvimento de um aplicativo voltado para auxiliar na precisão de diagnósticos, em parceria com uma estudante de enfermagem para seu TCC. Construído com FlutterFlow e Supabase, o app conta com um banco de dados estruturado para consultas rápidas e confiáveis. Vetorizei documentos de diagnóstico e implementei um sistema de RAG (Recuperação, Análise e Geração), que permite buscar, analisar e correlacionar informações clínicas de forma eficiente, apoiando a formação de diagnósticos mais precisos e fundamentados.",
    image: "https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1758076906884x266445554431805630/tec-nurse.png?_gl=1*kumva1*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTgwMjI0MjMkbzIxMSRnMSR0MTc1ODA3NTE5OCRqNTEkbDAkaDA",
    tag: "Nurse Tech",
    projectInfo: [
      { label: "Ano", value: "2025" },
      { label: "Atuação", value: "Desenvolvimento" },
    ],
    links: [
      
    ],
  },
  {
    id: 5,
    title: "Chronos Pomodoro",
    description:
      "Desenvolvi o Chronos, um aplicativo baseado na técnica Pomodoro, com contador em tempo real para auxiliar na gestão de tempo e produtividade. O projeto foi voltado para estudos em React, permitindo explorar conceitos essenciais da biblioteca. Durante o desenvolvimento, pratiquei Hooks como useState, useContext, useReducer e useRef, aplicando boas práticas de organização de projetos e padrões de desenvolvimento. O app funcionou como um laboratório para experimentação de funcionalidades reativas, gerenciamento de estado e estruturação eficiente de componentes.",
    image: "https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1758077788719x564618759206246400/chronos.png?_gl=1*1g95p9x*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTgwMjI0MjMkbzIxMSRnMSR0MTc1ODA3NTE5OCRqNTEkbDAkaDA",
    tag: "Chronos Pomodoro",
    projectInfo: [
      { label: "Ano", value: "2025" },
      { label: "Atuação", value: "Estudos de desenvolvimento" },
    ],
    links: [
      {
        label: "Página",
        icon: '',
        underline: "https://chronos-zeta-three.vercel.app/",
      }
      
    ],
  },
  {
    id: 5,
    title: "Rio app",
    description:
      "Desenvolvimento do Rio App, um aplicativo mobile voltado para planos funerários, concebido como um desafio técnico no Bubble.io. Implementei funcionalidades, incluindo integração com gateway de pagamentos planos e chat de suporte ao cliente, além de outras funcionalidades essenciais para a experiência do usuário. O projeto exigiu soluções criativas para garantir estabilidade, segurança e fluidez na navegação, demonstrando habilidades avançadas em desenvolvimento no-code e otimização de processos.",
    image: "https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1758078949071x641064131989151700/rio-app.png?_gl=1*197ix8x*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTgwMjI0MjMkbzIxMSRnMSR0MTc1ODA3ODg3NCRqNTYkbDAkaDA",
    tag: "Rio app",
    projectInfo: [
      { label: "Ano", value: "2024" },
      { label: "Atuação", value: "Desafio prático" },
    ],
    links: [
      {
        label: "Página",
        icon: '',
        underline: "https://rioapp-55183.bubbleapps.io/version-test/rioapppax",
      }
      
    ],
  }
];

export const FeaturedProjectsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-12 sm:gap-16 lg:gap-20 px-4 sm:px-8 lg:px-0 py-12 sm:py-16 lg:py-20 w-full">
      <header className="flex flex-col w-full max-w-full lg:max-w-[600px] items-start gap-2 sm:gap-3 px-0 lg:px-[108px]">
        <h2 className="font-heading-two font-[number:var(--heading-two-font-weight)] text-neutralwhite text-3xl sm:text-5xl lg:text-[length:var(--heading-two-font-size)] tracking-[var(--heading-two-letter-spacing)] leading-[var(--heading-two-line-height)] [font-style:var(--heading-two-font-style)]">
          Projetos trabalhados
        </h2>

        <p className="font-body-medium font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-base sm:text-lg lg:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
         Aqui estão alguns dos projetos selecionados que reúnem experiências de trabalhos e estudos em desenvolvimento.
        </p>
      </header>

      <div className="flex flex-col items-start gap-16 sm:gap-20 lg:gap-[120px] w-full px-0 lg:px-[108px]">
        {projectsData.map((project) => (
          <article key={project.id} className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="relative w-full lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] flex-shrink-0">
              <Card className="h-full bg-[#1a1a1a] border-none rounded-xl overflow-hidden">
                <CardContent className="relative h-full p-0">
                  <img
                    className="absolute w-[80%] h-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg"
                    alt={project.title}
                    src={project.image}
                  />

                  {project.tag && (
                    <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-neutral-950 text-neutralwhite rounded-[100px] px-3 py-1.5 sm:px-4 sm:py-2 font-misc-tag font-[number:var(--misc-tag-font-weight)] text-xs sm:text-[length:var(--misc-tag-font-size)] tracking-[var(--misc-tag-letter-spacing)] leading-[var(--misc-tag-line-height)] [font-style:var(--misc-tag-font-style)]">
                      {project.tag}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-12 flex-1 w-full">
              <div className="flex flex-col items-start gap-6 sm:gap-8 w-full">
                <div className="flex flex-col gap-3 sm:gap-4 w-full items-start">
                  <h3 className="font-heading-three font-[number:var(--heading-three-font-weight)] text-[#ffffff] text-xl sm:text-2xl lg:text-[length:var(--heading-three-font-size)] leading-[var(--heading-three-line-height)] tracking-[var(--heading-three-letter-spacing)] [font-style:var(--heading-three-font-style)]">
                    {project.title}
                  </h3>

                  <p className="font-body-medium font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] leading-[var(--body-medium-line-height)] tracking-[var(--body-medium-letter-spacing)] [font-style:var(--body-medium-font-style)]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                  <h4 className="font-heading-five font-[number:var(--heading-five-font-weight)] text-neutralwhite text-sm sm:text-base lg:text-[length:var(--heading-five-font-size)] leading-[var(--heading-five-line-height)] tracking-[var(--heading-five-letter-spacing)] [font-style:var(--heading-five-font-style)]">
                    
                  </h4>

                  <div className="flex flex-col items-end justify-center w-full border-b border-[#484848]">
                    {project.projectInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between px-0 py-3 sm:py-4 w-full border-t border-[#484848]"
                      >
                        <span className="font-body-small font-[number:var(--body-small-font-weight)] text-neutralwhite text-sm sm:text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                          {info.label}
                        </span>

                        <span className="font-body-small font-[number:var(--body-small-font-weight)] text-neutraloffwhite text-sm sm:text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="flex flex-col items-start gap-1 p-0 h-auto bg-transparent hover:bg-transparent"
                  >
                    <div className="flex gap-1 items-start">
                      <a href={link.underline} target="_blank" className="font-misc-link font-[number:var(--misc-link-font-weight)] text-app-primary text-[length:var(--misc-link-font-size)] leading-[var(--misc-link-line-height)] tracking-[var(--misc-link-letter-spacing)] [font-style:var(--misc-link-font-style)] ">
                        {link.label}
                      </a>



                      
                    </div>

                    
                  </Button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
