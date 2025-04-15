import Image from 'next/image';
import { Scale } from 'lucide-react';

export default function Diferenciais() {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium font-sora tracking-widest mb-4">DIFERENCIAIS</h2>
          <h3 className="text-4xl md:text-5xl font-sora font-light">
            Por que escolher a Malab <br />
            Advogados Associados?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left column */}
          <div className="space-y-16">
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
              <div className="mb-4">
                <Image src="/icon.svg" alt="Atendimento personalizado" width={50} height={50} />
              </div>
              <h4 className="text-2xl font-sora font-semibold mb-2">
                Atendimento <br />
                personalizado
              </h4>
              <p className="text-gray-400 font-sora">
                Análise individualizada para soluções sob medida.
              </p>
            </div>

            <div className="flex flex-col lg:items-end text-left lg:text-right">
              <div className="mb-4">
                <Image src="/icon.svg" alt="Atendimento personalizado" width={50} height={50} />
              </div>
              <h4 className="text-2xl font-sora font-semibold mb-2">
                Compromisso com a <br />
                ética e transparência
              </h4>
              <p className="text-gray-400 font-sora">
                Relação de confiança construída com responsabilidade.
              </p>
            </div>
          </div>

          {/* Center image */}
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="/apertodemao.svg"
              alt="Aperto de mãos representando parceria"
              className="object-cover"
              width={402}
              height={504}
              priority
            />
          </div>

          {/* Right column */}
          <div className="space-y-16">
            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <Image src="/icon.svg" alt="Atendimento personalizado" width={50} height={50} />
              </div>
              <h4 className="text-2xl font-sora font-semibold mb-2">
                Excelência técnica e <br />
                atualização constante
              </h4>
              <p className="text-gray-400 font-sora">
                Equipe qualificada e em constante aperfeiçoamento.
              </p>
            </div>

            <div className="flex flex-col items-start text-left">
              <div className="mb-4">
                <Image src="/icon.svg" alt="Atendimento personalizado" width={50} height={50} />
              </div>
              <h4 className="text-2xl font-sora font-semibold mb-2">
                Modernidade <br />
                e acessibilidade
              </h4>
              <p className="text-gray-400">
                Tecnologia a favor da comunicação ágil e eficaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 