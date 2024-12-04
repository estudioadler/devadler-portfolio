import { Contact } from "@/components/Contact/Contact";
import { Hero } from "@/components/Hero/Hero";
import { ListProjects } from "@/components/ListProjects/ListProjects";

export default function Home() {
  return (
    <>
      {/* <Preloader/> */}
      <Hero />
      <ListProjects />
      <Contact />
      </>
  );
}
