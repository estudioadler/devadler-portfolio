"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import * as z from "zod";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    console.log(data);
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso! Em breve entrarei em contato.");
        form.reset();
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Nome"
                          disabled={isSubmitting}
                          className="pl-4 bg-primary-foreground border-0 rounded-2xl h-14 text-primary placeholder:text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          disabled={isSubmitting}
                          className="pl-4 bg-primary-foreground border-0 rounded-2xl h-14 text-primary placeholder:text-muted-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Mensagem"
                        disabled={isSubmitting}
                        className="resize-none pl-4 bg-primary-foreground border-0 rounded-2xl min-h-[160px] text-primary placeholder:text-muted-foreground"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
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
        </Form>
      </Card>
    </div>
  );
};