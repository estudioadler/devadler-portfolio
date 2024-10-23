interface ITitleSectionProps {
  children: React.ReactNode
}

export const TitleSection = ({ children }: ITitleSectionProps) => {
  return (
    <div  className="w-full">
      <h2 className="font-medium uppercase font-neue text-muted-foreground py-6 px-4 md:px-8 container mx-auto">{children}</h2>
    </div>
  );
};
