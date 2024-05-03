import Link from "next/link";

interface ITitleSectionProps {
  title: string;
  link?: string;
}

export const TitleSection = ({ title, link }: ITitleSectionProps) => {
  return (
    <div className="w-full flex items-baseline justify-between my-4 py-4 px-4 md:px-8 container mx-auto">
      <div className="flex justify-between items-center w-full border-b border-1 border-neutral-300">
        <h2 className="font-normal text-sm text-neutral-600 uppercase font-neue">
          {title}
        </h2>
        <Link href={"#"} className="flex items-center gap-1 text-sm text-neutral-600 font-neue uppercase">
          {link}
        </Link>
      </div>
    </div>
  );
};
