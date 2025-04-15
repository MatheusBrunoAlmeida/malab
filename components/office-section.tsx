import Image from "next/image";
import { Button } from "./ui/button";

export default function OfficeSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-8 py-16 lg:px-20 bg-white">
        <div className="flex-1 pr-6">
          <div className="mb-8">
            <span className="uppercase font-sora text-gray-700 text-sm tracking-wider">
              ESCRITÓRIO
            </span>
            <h2 className="text-3xl font-sora lg:text-4xl font-sora mt-6 mb-4">
              Uma trajetória construída com{" "}
              <span className="font-bold">
                seriedade, confiança e modernidade
              </span>
            </h2>
            <p className="text-gray-700 font-sora mb-8">
              Com sólida experiência e equipe altamente qualificada, o escritório
              Malab Advogados Associados oferece soluções jurídicas eficazes,
              com atendimento humanizado e visão estratégica. Nossa atuação é
              pautada pela ética, transparência e constante atualização,
              proporcionando segurança e excelência em cada demanda.
            </p>
            <Button variant="default" className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md">
              Saiba mais <span className="text-xl">⚖️</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end gap-6">
          <div className="relative w-[45%] h-[400px]">
            <Image 
              src="/law-statue.png" 
              alt="Lady Justice statue on desk" 
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="relative w-[45%] h-[400px] mt-10">
            <Image 
              src="/law-statue-placeholder.png" 
              alt="Lady Justice statue close-up" 
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
} 