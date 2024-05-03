"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonCta } from "../ButtonCta/ButtonCta";
import { ArrowRight01Icon } from "hugeicons-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Email inválido.",
    }),
    message: z.string().min(10, {
      message: "A mensagem deve ter pelo menos 10 caracteres.",
    }),
  });

export function Formulario() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}    
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Deixe sua mensagem" rows={8}  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <ButtonCta type="submit" variant="black" iconLeft={<ArrowRight01Icon size={20} />} text="Enviar" />
      </form>
    </Form>
  );
}
