

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-3 sm:gap-4 relative">
      <h2 className="relative self-stretch font-heading-three font-[number:var(--heading-three-font-weight)] text-[#ffffff] text-xl sm:text-2xl lg:text-[length:var(--heading-three-font-size)] tracking-[var(--heading-three-letter-spacing)] leading-[var(--heading-three-line-height)] [font-style:var(--heading-three-font-style)]">
       Sou Desenvolvedor de plataformas low-code e em expansão para desenvolvimento front-end e back-end.
      </h2>

      <p className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
        Sou um desenvolvedor apaixonado por criar soluções que realmente façam diferença. Adoro transformar ideias em produtos funcionais, eficientes e que agreguem valor a quem os utiliza. Tenho facilidade em me comunicar, colaborar em equipe, resolver problemas e organizar tarefas, o que me permite contribuir de forma produtiva e harmoniosa em qualquer projeto. Iniciei minha carreira em tecnologia atuando com suporte, sempre buscando evoluir e conquistar minha primeira oportunidade como desenvolvedor. Ao longo da minha trajetória, trabalhei com equipes diversas utilizando metodologias ágeis, participando do desenvolvimento de projetos que exigiam criatividade, planejamento e entrega de resultados consistentes.
      </p>
    </section>
  );
};
