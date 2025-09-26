import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const ProjectDetailsSection = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  // refs dinâmicos para cada campo
  const refs: Record<
    string,
    React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  > = {
    name: useRef(null),
    email: useRef(null),
    subject: useRef(null),
    message: useRef(null),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // capturando os valores dos inputs
    const values = {
      name: (refs.name.current as HTMLInputElement)?.value || "",
      email: (refs.email.current as HTMLInputElement)?.value || "",
      subject: (refs.subject.current as HTMLInputElement)?.value || "",
      message: (refs.message.current as HTMLTextAreaElement)?.value || "",
    };

    console.log("Valores capturados:", values);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_yqzl42s",
        "template_18lzkkk",
        formRef.current,
        "cnKX_X7uohM6r7jT3"
      )
      .then(
        (result) => {
          console.log("Email enviado:", result.text);
          alert("Mensagem enviada com sucesso!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Erro ao enviar email:", error.text);
          alert("Erro ao enviar mensagem.");
        }
      );
  };

  const formFields = [
    { id: "name", label: "Nome", type: "input" },
    { id: "email", label: "Email", type: "input" },
    { id: "subject", label: "Assunto", type: "input" },
    { id: "message", label: "Mensagem", type: "textarea" },
  ];

  return (

    <section className="flex flex-col lg:flex-row w-full items-start gap-8 lg:gap-6 px-4 sm:px-8 lg:px-[108px] py-12 sm:py-16 lg:py-20 relative">
      <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full w-min-[400px]">
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
      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className= "flex flex-col items-start gap-8 lg:gap-10 relative self-stretch w-full max-w-[484px] "
    > 
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
                name="message"
                ref={refs[field.id] as React.RefObject<HTMLTextAreaElement>}
                className="flex items-start gap-2.5 px-3 sm:px-4 py-3 relative self-stretch w-full bg-[#1a1a1a] rounded border-none text-white font-body-medium font-[number:var(--body-medium-font-weight)] text-sm sm:text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)] focus:ring-0 focus:outline-none resize-none min-h-[100px] sm:min-h-[120px]"
              />
            ) : (
              <Input
                id={field.id}
                name="email"
                ref={refs[field.id] as React.RefObject<HTMLInputElement>}
                type={field.id === "email" ? "email" : "text"}
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
          Enviar
        </span>
      </Button>
    </form>
      </section>
    
    
    
  );
};
