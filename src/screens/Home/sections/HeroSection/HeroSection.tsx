
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-full lg:max-w-[544px] items-start gap-6 sm:gap-8 lg:gap-10 py-0">
      <div className="flex flex-col items-start gap-2 sm:gap-3 w-full">
        <h1 className="w-full mt-[-1.00px] font-heading-one font-[number:var(--heading-one-font-weight)] text-neutralwhite text-4xl sm:text-6xl lg:text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] [font-style:var(--heading-one-font-style)]">
          Olá, sou <br />
          cleber junior
        </h1>

        <p className="w-full font-body-medium font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-base sm:text-lg lg:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
          Sou um desenvolvedor apaixonado por entregar soluções que agregam valor real às pessoas. Atuo há quase dois anos no mercado de desenvolvimento low-code, já tendo entregue mais de cinco projetos reais em produção. Nesse período, adquiri experiência sólida em Bubble, FlutterFlow e N8N, além de trabalhar com integrações de APIs, webhooks e soluções de pagamento. Atualmente, estou expandindo minhas stacks para o desenvolvimento back-end e front-end, explorando tecnologias como React e Node.js, o que amplia minha capacidade de criar soluções mais completas e escaláveis.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
        <Button className="gap-2 sm:gap-3 pl-4 sm:pl-6 pr-1 sm:pr-1.5 py-3 sm:py-5 h-[48px] sm:h-[54px] bg-app-primary hover:bg-app-primary/90 rounded-[100px] text-neutralblack font-misc-button font-[number:var(--misc-button-font-weight)] text-sm sm:text-[length:var(--misc-button-font-size)] leading-[var(--misc-button-line-height)] tracking-[var(--misc-button-letter-spacing)] [font-style:var(--misc-button-font-style)] w-full sm:w-auto justify-center sm:justify-start">
          CONTATO
          <img
            className="w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] mt-[-14.00px] mb-[-14.00px]"
            alt="Circle"
            src="https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1757982922110x469299331330554700/degree.png?_gl=1*1nzqf3p*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTc5MzI1OTEkbzIxMCRnMSR0MTc1Nzk4MjY4OCRqNjAkbDAkaDA"
          />
        </Button>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] p-0 hover:bg-transparent"
            color="#222222"
          >
            <a target="_blank" href="https://github.com/CleberJr9"><img className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px]" alt="Frame" src="https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1757982512241x237203585647748580/github%20%281%29.png?_gl=1*wken2p*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTc5MzI1OTEkbzIxMCRnMSR0MTc1Nzk4MjMwMCRqMzYkbDAkaDA" /></a>
            
          </Button>

          <Button
            variant="ghost"
            size="icon"
            color="#222222"
            className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] p-0 hover:bg-transparent"
          >
            <a target="_blank" href="https://www.linkedin.com/in/cleber-jr/">
              <img className="w-[24px] h-[24px] sm:w-[24px] sm:h-[24px]" alt="Frame" src="https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1757982690870x595369866185057700/linkedin.png?_gl=1*1g2y4xg*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTc5MzI1OTEkbzIxMCRnMSR0MTc1Nzk4MjY4OCRqNjAkbDAkaDA" />

            </a>
            
          </Button>
        </div>
      </div>
    </section>
  );
};
