import Link from "next/link";
import { ButtonCta } from "../ButtonCta/ButtonCta";
import Image from "next/image";

export const Certificates = () => {
  const certificados = [
    {
      id: 1,
      icon: "/logo-rocketseat.jpg",
      institute: "Rocketseat",
      courseName: "NLW Expert trilha de React",
      url: "https://app.rocketseat.com.br/certificates/348f314c-19c3-4a3e-b3ab-f580a9960d51",
      date: "2024",
    },
    {
      id: 2,
      icon: "/logo-fiap.jpg",
      institute: "Fiap",
      courseName: "User Experience",
      url: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/86065/49be7da0fb4d4598f3088e9b5f1fc95a/certificado.png",
      date: "2023",
    },
    {
      id: 3,
      icon: "/logo-ifmg.jpg",
      institute: "IFMG",
      courseName: "Javascript Avançado",
      url: "/certificados/javascript-avançado.pdf",
      date: "2023",
    },
    {
      id: 4,
      icon: "/logo-alura.jpg",
      institute: "Alura",
      courseName: "Desenvolvimento Pessoal T6-ONE",
      url: "/certificados/Desenvolvimento-Pessoal-T6-ONE.pdf",
      date: "2024",
    },
    {
      id: 5,
      icon: "/logo-especializati.png",
      institute: "Especializati",
      courseName: "Curso de TypeScript: Testes com Jest",
      url: "/certificados/Curso-de-TypeScript-Testes-com-Jest.pdf",
      date: "2024",
    },
    {
      id: 6,
      icon: "/logo-alura.jpg",
      institute: "Alura",
      courseName: "Logica de Programação com Javascript",
      url: "/certificados/Logica-de-Programacao.pdf",
      date: "2024",
    },
  ];
  return (
    <div className="py-8">
      {certificados.map((certificado) => (
        <div 
          key={certificado.id} 
          className="px-4 md:px-36 flex flex-col md:flex-row items-center justify-between gap-2 py-8 border-b border-primary-foreground hover:bg-primary-foreground/20"
        >
          <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2">
              <Image 
                width={40} 
                height={40} 
                src={certificado.icon} 
                alt="icon" 
                className="rounded aspect-square bg-primary-foreground object-cover" 
              />
              <div className="flex flex-col">
                <span className="text-muted-foreground text-xs">Emitida em {certificado.date}</span>
                <span className="text-sm font-bold">{certificado.institute}</span>
              </div>
            </div>
          </div>
          <div className="text-lg md:text-xl font-semibold text-left w-full md:w-auto my-4 md:my-0">
            {certificado.courseName}
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Link href={certificado.url} target="_blank" rel="noopener noreferrer">
              <ButtonCta variant="outline" type="button" size="sm">
                Exibir certificado
              </ButtonCta>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};