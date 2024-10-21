import Link from "next/link";
import { Badge } from "../ui/badge";

interface IMyTechsProps {
  name: string;
  href?: string; // Adicionando a propriedade href opcional
}

export const MyTechs = ({ name, href }: IMyTechsProps) => {
  const content = (
    <Badge variant="outline">
      <span className="text-neutral-900 font-normal uppercase font-sans leading-none py-2 px-1">{name}</span>
    </Badge>
  );

  // Renderiza um link se href for fornecido, caso contrário renderiza apenas o Badge
  return href ? (
    <Link href={href}>
      {content}
    </Link>
  ) : (
    content
  );
};