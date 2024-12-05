"use client";
import { useState } from "react";
import * as z from "zod";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ButtonCta } from "../ButtonCta/ButtonCta";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 letras.",
  }),
  email: z.string().email({
    message: "Por favor, forneça um endereço de e-mail válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 letras.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormValues, string>> = {};
        error.errors.forEach(err => {
          if (err.path.length > 0) {
            newErrors[err.path[0] as keyof ContactFormValues] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Em breve entrarei em contato.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error("Erro ao enviar a mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex items-center justify-center py-12 md:py-28 px-4 md:px-16">
      <Card className="flex flex-col gap-12 w-full max-w-xl border-0 shadow-none bg-transparent">
        <CardHeader>
          <h2 className="text-3xl md:text-4xl font-medium">
            <div className="text-muted-foreground">Contato</div>
            <div>Vamos conversar!</div>
          </h2>
        </CardHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`pl-4 bg-primary-foreground border-0 rounded-2xl h-14 text-primary placeholder:text-muted-foreground ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`pl-4 bg-primary-foreground border-0 rounded-2xl h-14 text-primary placeholder:text-muted-foreground ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`resize-none pl-4 bg-primary-foreground border-0 rounded-2xl min-h-[160px] text-primary placeholder:text-muted-foreground ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Está procurando um desenvolvedor dedicado e criativo para somar
              à sua equipe? Envie uma mensagem! Estou pronto para novos
              desafios e animado para contribuir com projetos que fazem a
              diferença. Vamos conversar!
            </p>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-sm text-neutral-400">Não curte formulários?</p>
              <a
                href="mailto:devadler@gmail.com"
                className="text-sm hover:underline"
              >
                devadler@gmail.com
              </a>
            </div>
            <ButtonCta
              type="submit"
              variant={"default"}
              size="default"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </ButtonCta>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};