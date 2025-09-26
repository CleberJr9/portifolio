
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection";
import { ExperienciesSection } from "./sections/ExperienciesSection/ExperienciesSection";
import { FeaturedProjectsSection } from "./sections/FeaturedProjectsSection/FeaturedProjectsSection";

import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { ProjectDetailsSection } from "./sections/ProjectDetailsSection/ProjectDetailsSection";

export const Home = (): JSX.Element => {
  return (
    <main className="bg-neutral-950 w-full min-h-screen">
      <div className="bg-neutralblack w-full max-w-[1440px] mx-auto relative">
        <header className="relative w-full">
          <NavigationSection />
        </header>

        <section className="relative w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-8 lg:px-[108px] pt-8 sm:pt-16 lg:pt-[126px] pb-8 sm:pb-16 lg:pb-[100px] gap-8 lg:gap-8">
            <div className="flex-1 w-full lg:w-auto">
              <HeroSection />
            </div>
            <div className="w-full max-w-[400px] sm:max-w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[700px] bg-neutraloffwhite rounded-2xl lg:ml-8 flex-shrink-0 mx-auto lg:mx-0">
              <img
                className="w-full h-[363px] sm:h-[583px] lg:h-[700px]  object-cover rounded-2xl"
                alt="image-perfil"
                src="https://5e23f827b0e7d9f8c7951dd4d0f08c66.cdn.bubble.io/f1757983327413x570166017478532800/WhatsApp%20Image%202025-09-15%20at%2021.41.34_efeb8385.jpg?_gl=1*xo2arl*_gcl_au*MTQ4MjMxNTE5NC4xNzUyMDYyNzU1*_ga*MTYzNDIwNjQxMi4xNzM0MzQ5MzMz*_ga_BFPVR2DEE2*czE3NTc5MzI1OTEkbzIxMCRnMSR0MTc1Nzk4MjY4OCRqNjAkbDAkaDA"
              />
            </div>
          </div>
        </section>

        <Separator className="w-full h-px bg-gray-600" />

        <section className="relative w-full">
          <FeaturedProjectsSection />
        </section>

        <Separator className="w-full h-px bg-gray-600" />

        <section className="relative w-full px-4 sm:px-8 lg:px-[108px] py-8 sm:py-12 lg:py-16">
          <h2 className="font-heading-one font-[number:var(--heading-one-font-weight)] text-neutralwhite text-4xl sm:text-6xl lg:text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] [font-style:var(--heading-one-font-style)] mb-6 sm:mb-8">
            Sobre mim
          </h2>
          <AboutMeSection />
          <div className="flex flex-col items-start gap-1 mt-6 sm:mt-8 lg:ml-[520px]">
            <Button
              variant="link"
              className="p-0 h-auto text-app-primary font-misc-link font-[number:var(--misc-link-font-weight)] text-[length:var(--misc-link-font-size)] leading-[var(--misc-link-line-height)] tracking-[var(--misc-link-letter-spacing)] [font-style:var(--misc-link-font-style)]"
            >
            
            </Button>
           
          </div>
        </section>
        <Separator className="w-full h-px bg-gray-600" />
         <section className="relative w-full px-4 sm:px-8 lg:px-[108px] py-8 sm:py-12 lg:py-16">
          <h2 className="font-heading-one font-[number:var(--heading-one-font-weight)] text-neutralwhite text-4xl sm:text-6xl lg:text-[length:var(--heading-one-font-size)] tracking-[var(--heading-one-letter-spacing)] leading-[var(--heading-one-line-height)] [font-style:var(--heading-one-font-style)] mb-6 sm:mb-8">
            Experiências
          </h2>
         
           <ExperienciesSection/>
          
        </section>

        <Separator className="w-full h-px bg-gray-600 mt-4 sm:mt-6" />

        <section className="relative w-full">
          <ProjectDetailsSection />
        </section>
      </div>
    </main>
  );
};
