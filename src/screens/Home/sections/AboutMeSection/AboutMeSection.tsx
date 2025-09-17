

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-3 sm:gap-4 relative">
      <h2 className="relative self-stretch font-heading-three font-[number:var(--heading-three-font-weight)] text-[#ffffff] text-xl sm:text-2xl lg:text-[length:var(--heading-three-font-size)] tracking-[var(--heading-three-letter-spacing)] leading-[var(--heading-three-line-height)] [font-style:var(--heading-three-font-style)]">
       Sou Desenvolvedor de plataformas low-code e em expansão para desenvolvimento front-end e back-end.
      </h2>

      <p className="relative self-stretch font-body-medium font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
        Sou um desenvolvedor apaixonado por entregar soluções que realmente façam diferença. Gosto de transformar ideias em produtos funcionais e eficientes, sempre buscando agregar valor para quem vai utilizá-los. Tenho facilidade em me comunicar, trabalhar em equipe, resolver problemas e organizar tarefas que me ajudam a colaborar de forma leve e produtiva em qualquer projeto.
      </p>
    </section>
  );
};
