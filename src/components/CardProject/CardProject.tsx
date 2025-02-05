"use client";

import { useState } from "react";
import { ButtonCta } from "../ButtonCta/ButtonCta";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface ICardProject {
  name: string;
  description: string;
  alt: string;
  imgUrl: string[];
  url: string;
  textButton: string;
}

export const CardProject = (props: ICardProject) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  return (
    <div className="hover:bg-primary-foreground/20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-between px-4 md:px-36 border-b border-primary-foreground py-12">
      <div className="flex flex-col justify-between gap-6 order-2 md:order-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium">
            <div className="text-muted-foreground">{props.name}</div>
            <div className="max-w-md">{props.description}</div>
          </h2>
        </div>
        <Link href={props.url}>
          <ButtonCta
            variant="outline"
            type="button"
            size="default"
            className=""
          >
            {props.textButton}
          </ButtonCta>
        </Link>
      </div>
      <Card className="w-full max-w-3xl mx-auto order-1 md:order-2">
        <CardContent className="p-0">
              {props.imgUrl.map((src, index) => (
                <div key={index}>
                  <div className="relative aspect-video rounded-3xl">
                    <Image
                      src={src}
                      alt={`Carousel image ${index + 1}`}
                      fill
                      className="object-cover cursor-pointer rounded-lg"
                      onClick={() => handleImageClick(src)}
                    />
                  </div>
                </div>
              ))}
        </CardContent>
      </Card>

      {/* Image Dialog */}
      <AlertDialog open={!!selectedImage} onOpenChange={handleCloseDialog}>
        <AlertDialogContent className="max-w-5xl w-full p-0 overflow-hidden">
          {/* Close Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute top-4 right-4 z-50 bg-background/50 hover:bg-background/80 rounded-full"
            onClick={handleCloseDialog}
          >
            <X className="h-6 w-6" />
          </Button>
          
          {/* Image Container */}
          <div className="relative w-full h-[80vh]">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Enlarged project image"
                fill
                className="object-contain"
              />
            )}
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};