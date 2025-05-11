import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({
        nome: "",
        email: "",
        mensagem: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[url('/banner-bg.png')] bg-cover bg-center text-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-lg uppercase tracking-wider mb-4">CONTATO</h2>
          <h3 className="text-3xl md:text-4xl font-light mb-6">
            Fale com a equipe da <span className="font-bold">Malab</span>
            <br />
            <span className="font-bold">Advogados Associados</span>
          </h3>

          <p className="max-w-2xl mx-auto text-gray-300">
            Estamos à disposição para esclarecer dúvidas, agendar atendimentos e
            oferecer suporte jurídico com agilidade, sigilo e responsabilidade.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome" className="block text-sm mb-2">
                Nome
              </label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full bg-white text-black rounded-md h-12"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white text-black rounded-md h-12"
                required
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm mb-2">
                Mensagem
              </label>
              <Textarea
                id="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem..."
                className="w-full bg-white text-black min-h-32 rounded-md"
                required
              />
            </div>

            <div className="text-center mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-gray-200 px-12 py-6 rounded-md text-base font-medium transition-all"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-gray-800 pt-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Endereço</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit met, 123</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Suporte</h3>
            <p className="text-gray-400">Ligue: (00) 1234-5678</p>
            <p className="text-gray-400">E-mail: malab@gmail.com</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-800 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-medium mb-2">Horários</h3>
            <p className="text-gray-400">De segunda a sexta - 09h - 18h</p>
            <p className="text-gray-400">Sábados e domingos - fechado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
