import Image from "next/image";
import { Button } from "../ui/button";

export default function Atuacao() {
  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row px-8 py-16 lg:px-20 bg-white">
        <div className="flex-1 flex justify-end gap-6">
          <div className="relative w-[45%] h-[400px]">
            <Image
              src="/areas-foto-1.svg"
              alt="Lady Justice statue on desk"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="relative w-[50%] h-[400px] mt-10">
            <Image
              src="/areas-foto-2.svg"
              alt="Lady Justice statue close-up"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex-1 pr-6">
          <div className="mb-8">
            <span className="uppercase font-sora text-gray-700 text-sm tracking-wider">
              ATUAÇÃO
            </span>
            <h2 className="text-3xl text-[#29333A] font-sora font-light lg:text-4xl mt-6 mb-4">
              Especialização, estratégia e{" "}<br />
              <span className="font-bold">
                comprometimento com
              </span>
              <br />
              <span className="font-bold">
                resultados
              </span>
            </h2>
            <p className="text-gray-700 font-sora mb-8">
              A Malab Advogados Associados oferece assessoria jurídica completa, com atuação nas principais áreas do Direito. Nosso trabalho é pautado pela excelência técnica, visão estratégica e compromisso com a ética, proporcionando segurança e eficiência em cada demanda.
            </p>
            <p className="text-gray-700 font-sora mb-8">
              Atendemos empresas e pessoas físicas em todo o Brasil, com soluções jurídicas personalizadas, alinhadas às necessidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 