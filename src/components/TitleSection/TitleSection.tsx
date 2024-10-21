import Link from "next/link";

interface ITitleSectionProps {
  children: React.ReactNode
}

export const TitleSection = ({ children }: ITitleSectionProps) => {
  return (
    <div  className="w-full">
      <h2 className="md:text-xl font-medium uppercase font-neue text-muted-foreground">{children}</h2>
    </div>
  );
};
