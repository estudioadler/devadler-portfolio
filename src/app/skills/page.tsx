import { Contact } from "@/components/Contact/Contact";
import { TechCards } from "@/components/TechCards/TechCards";

export const metadata = {
  title: "Skills - Adler Gabriel",
  description: "Meus conhecimentos",
};

export default function SkillsPage() {
  return (
    <>
      <div className="flex flex-col gap-6 py-12 px-4 md:px-36 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium">
          Skills
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Explore as tecnologias e ferramentas que impulsionam a minha
          experiência em desenvolvimento. Eu seleciono e uso meticulosamente
          essas ferramentas para criar soluções robustas e eficientes,
          priorizando sempre a experiência do usuário.
        </p>
      </div>
      <TechCards />
      <Contact />
    </>
  );
}