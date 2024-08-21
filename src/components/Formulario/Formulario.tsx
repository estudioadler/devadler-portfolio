import { toast } from "sonner";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ButtonCta } from "../ButtonCta/ButtonCta";
import { ArrowRight01Icon } from "hugeicons-react";
import { useState } from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 letras" }),
  email: z
    .string()
    .email({ message: "O formato do email é inválido" }),
  message: z
    .string()
    .min(5, { message: "A mensagem deve ter pelo menos 5 letras" })
    .max(200, { message: "A mensagem deve ter no màximo 200 letras" }),
});

export default function Formulario() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true); // Altera o estado para indicar que o envio está em progresso
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY",
        name: values.name,
        email: values.email,
        message: values.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setLoading(false); // Altera o estado para indicar que o envio foi concluído
      toast("Email enviado com sucesso!");
    } else {
      setLoading(false); // Altera o estado para indicar que o envio falhou
      toast.error(result.message);
    }
  }

  return (
    <>
      <form {...form} onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
        <Input type="text" name="name" required placeholder="Digite seu nome" />
        <Input
          type="email"
          name="email"
          required
          placeholder="Digite seu email"
        />
        <Textarea
          name="message"
          required
          rows={5}
          placeholder="Escreva sua mensagem"
          className="resize-none"
        ></Textarea>
        <ButtonCta
          variant="black"
          type="submit"
          iconLeft={<ArrowRight01Icon size={24} strokeWidth={1} />}
        >
          {loading ? (
            <>Enviando...</> // Se estiver carregando, mostra o componente de carga
          ) : (
            "Enviar"
          )}
        </ButtonCta>
      </form>
    </>
  );
}


// "0748bf0f-91b3-4cba-bbe1-95fe6c2b4298"
