"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Cliente {
  id: number;
  nome: string;
  logo: string;
  descricao: string;
}

export default function Experiencias() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("experiencias")?.offsetTop || 0;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exemplo de clientes - substitua por dados reais
  const clientes: Cliente[] = [
    {
      id: 1,
      nome: "Empresa ABC",
      logo: "/images/clients/client1.svg",
      descricao: "Serviços de consultoria jurídica corporativa",
    },
    {
      id: 2,
      nome: "Grupo XYZ",
      logo: "/images/clients/client2.svg",
      descricao: "Assessoria em processos tributários",
    },
    {
      id: 3,
      nome: "Incorporadora 123",
      logo: "/images/clients/client3.svg",
      descricao: "Suporte jurídico em projetos imobiliários",
    },
    {
      id: 4,
      nome: "Multinacional DEF",
      logo: "/images/clients/client4.svg",
      descricao: "Consultoria em direito internacional",
    },
  ];

  return (
    <section id="experiencias" className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f0f] mb-4">
            Nossas Experiências
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos clientes que confiaram em nossos serviços e
            experiência jurídica para suas necessidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientes.map((cliente) => (
            <motion.div
              key={cliente.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: cliente.id * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 relative mb-4 flex items-center justify-center">
                  <Image
                    src={cliente.logo}
                    alt={`${cliente.nome} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0f0f0f] mb-2">
                  {cliente.nome}
                </h3>
                <p className="text-gray-600 text-center">{cliente.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
