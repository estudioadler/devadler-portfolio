import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

interface ICardProjectsProps {
  imgUrl?: string;
  alt: string;
  title: string;
  url: string;
  description: string;
}

export const CardProjects = ({
  imgUrl = "",
  alt = "",
  title,
  url,
  description,
}: ICardProjectsProps) => {
  return (
    <Card className="rounded-md cursor-pointer outline outline-1 outline-neutral-50 hover:outline-neutral-200">
      <Link href={url} className="w-full h-full" target="blank">
      <CardContent>
        <Image
          alt={alt}
          src={imgUrl}
          width={1000}
          height={800}
          className="w-full h-fit rounded-md p-0 outline outline-1 outline-neutral-50"
        />
      </CardContent>  
      <CardHeader>
        <div className="flex justify-between items-center pr-4">
          <div className="flex flex-col">
            <CardTitle className="text-neutral-900 text-lg font-medium">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>       
        </div>
      </CardHeader>  
      </Link>
    </Card>
  );
};
