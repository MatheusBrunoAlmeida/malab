import Image from "next/image";
import { Button } from "../ui/button";

export default function OfficeSectionTeam() {
  return (
    <>
      <div className="flex flex-col gap-10 lg:flex-row px-8 py-16 lg:px-20 bg-white">
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
        <div className="flex-1 pr-6">
          <div className="mb-8">
            <span className="uppercase font-sora text-gray-700 text-sm tracking-wider">
              EQUIPE
            </span>
            <h2 className="text-3xl font-sora lg:text-4xl font-sora mt-6 mb-4">
              Atuação{" "}
              <span className="font-bold">
                colaborativa e
              </span>
              <br />
              <span className="font-bold">
                multidisciplinar
              </span>
            </h2>
            <p className="text-gray-700 font-sora mb-8">
              Trabalhamos de forma integrada, combinando especialidades e visões estratégicas para tratar com profundidade e precisão as demandas mais complexas. Essa abordagem multidisciplinar garante um atendimento completo, ágil e alinhado com as melhores práticas do mercado jurídico.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 