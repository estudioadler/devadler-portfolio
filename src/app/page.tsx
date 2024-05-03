import { Contact } from "@/components/Contact/Contact";
import { Hero } from "@/components/Hero/Hero";
import { ListProjects } from "@/components/ListProjects/ListProjects";
import { TitleSection } from "@/components/TitleSection/TitleSection";

export default function Home() {
  return (
    <>
    {/* <Preloader/> */}
    <Hero/>
    <TitleSection title='Projetos' link='Ver todos'/>
    <ListProjects />
    <TitleSection title='Contato'/>
    <Contact/>
    </>
  );
}
