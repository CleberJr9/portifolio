
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const ProjectDetailsSection = (): JSX.Element => {
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "input",
      defaultValue: "",
    },
    {
      id: "email",
      label: "Email",
      type: "input",
      defaultValue: "",
    },
    {
      id: "subject",
      label: "Subject",
      type: "input",
      defaultValue: "",
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      defaultValue: "",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-6 px-4 sm:px-8 lg:px-[108px] py-12 sm:py-16 lg:py-20 relative">
      <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full">
        <div className="flex flex-col items-start gap-8 lg:gap-10 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-3 sm:gap-4 relative self-stretch w-full">
            <h2 className="relative w-fit mt-[-1.00px] font-heading-two font-[number:var(--heading-two-font-weight)] text-neutralwhite text-3xl sm:text-5xl lg:text-[length:var(--heading-two-font-size)] tracking-[var(--heading-two-letter-spacing)] leading-[var(--heading-two-line-height)] [font-style:var(--heading-two-font-style)]">
              Vamos Conversar
            </h2>

            <div className="inline-flex flex-col items-start gap-2 sm:gap-3 relative">
              <div className="inline-flex items-start gap-[3px] relative">
                <span className="w-fit mt-[-1.00px] font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] leading-[var(--body-medium-line-height)] relative font-body-medium tracking-[var(--body-medium-letter-spacing)] [font-style:var(--body-medium-font-style)]">
                  Mande uma mensagem em 
                </span>

                <div className="inline-flex flex-col items-start relative">
                  <a
                    href="mailto:robertgarcia@gmail.com"
                    className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-neutralwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] hover:opacity-80 transition-opacity break-all sm:break-normal"
                  >
                    clebergoesjr@gmail.com
                  </a>

                  
                </div>
              </div>

              <div className="inline-flex items-start gap-[3px] relative">
                <span className="w-fit mt-[-1.00px] font-[number:var(--body-medium-font-weight)] text-neutraloffwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] leading-[var(--body-medium-line-height)] relative font-body-medium tracking-[var(--body-medium-letter-spacing)] [font-style:var(--body-medium-font-style)]">
                  Para mais informações, aqui está o 
                </span>

                <div className="inline-flex flex-col items-start relative">
                  <a
                    href=""
                    className="w-fit mt-[-1.00px] font-[number:var(--body-medium-font-weight)] text-neutralwhite text-sm sm:text-base lg:text-[length:var(--body-medium-font-size)] leading-[var(--body-medium-line-height)] whitespace-nowrap relative font-body-medium tracking-[var(--body-medium-letter-spacing)] [font-style:var(--body-medium-font-style)] hover:opacity-80 transition-opacity"
                  >
                    resumo
                  </a>

                  
                </div>
              </div>
            </div>
          </div>

         
        </div>

        <p className="relative w-fit font-body-small font-[number:var(--body-small-font-weight)] text-neutraloffwhite text-xs sm:text-sm lg:text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)] mt-8 lg:mt-0">
          © 2025 Cleber junior
        </p>
      </div>

      <div className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-12 relative flex-1 w-full">
        <form className="flex flex-col items-start gap-8 lg:gap-10 relative self-stretch w-full">
          <div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full">
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col items-start gap-2 relative self-stretch w-full"
              >
                <Label
                  htmlFor={field.id}
                  className="w-fit mt-[-1.00px] font-[number:var(--body-small-font-weight)] text-neutraloffwhite text-sm sm:text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] whitespace-nowrap relative font-body-small tracking-[var(--body-small-letter-spacing)] [font-style:var(--body-small-font-style)]"
                >
                  {field.label}
                </Label>

                {field.type === "textarea" ? (
                  <Textarea
                    id={field.id}
                    defaultValue={field.defaultValue}
                    className="flex items-start gap-2.5 px-3 sm:px-4 py-3 relative self-stretch w-full bg-[#1a1a1a] rounded border-none text-white font-body-medium font-[number:var(--body-medium-font-weight)] text-sm sm:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus:ring-0 focus:outline-none resize-none min-h-[100px] sm:min-h-[120px]"
                  />
                ) : (
                  <Input
                    id={field.id}
                    type={field.id === "email" ? "email" : "text"}
                    defaultValue={field.defaultValue}
                    className="flex items-start gap-2.5 px-3 sm:px-4 py-3 relative self-stretch w-full bg-[#1a1a1a] rounded border-none text-white font-body-medium font-[number:var(--body-medium-font-weight)] text-sm sm:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus:ring-0 focus:outline-none h-[48px] sm:h-[52px]"
                  />
                )}
              </div>
            ))}
          </div>

          <Button
            
            type="submit"
            className="gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 inline-flex h-[48px] sm:h-[54px] items-center justify-center relative bg-app-primary rounded-[100px] hover:bg-app-primary/90 transition-colors w-full sm:w-auto"
          >
            <span className="w-fit mt-[-2.00px] font-[number:var(--misc-button-font-weight)] text-neutralblack text-sm sm:text-[length:var(--misc-button-font-size)] leading-[var(--misc-button-line-height)] whitespace-nowrap relative font-misc-button tracking-[var(--misc-button-letter-spacing)] [font-style:var(--misc-button-font-style)]">
              SUBMIT
            </span>
          </Button>
        </form>
      </div>
      <div></div>
    </section>
  );
};
