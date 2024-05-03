import { Badge } from "../ui/badge";

interface IMyTechsProps{
  name: string,
}

export const MyTechs = ({name}:IMyTechsProps) => {
  return (
    <>
    <Badge variant="outline">
      <span className="text-neutral-900 font-normal uppercase font-sans leading-none py-2 px-1">{name}</span>
    </Badge>
    </>
    
  );
};

