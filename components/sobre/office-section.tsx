import Image from "next/image";
import { Button } from "../ui/button";

export default function OfficeSectionSobre() {
    return (
        <>
            <div className="flex flex-col gap-10 lg:flex-row px-8 py-16 lg:px-20 bg-white">
                <div className="flex-1 flex justify-end gap-6">
                    <div className="relative w-[45%] h-[400px]">
                        <Image
                            src="/office-sobre-1.svg"
                            alt="Lady Justice statue on desk"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="relative w-[50%] h-[550px] mt-10">
                        <Image
                            src="/office-sobre-2.svg"
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
                            ESCRITÓRIO
                        </span>
                        <h2 className="text-3xl text-[#29333A] font-sora font-light lg:text-4xl mt-6 mb-4">
                            Compromisso com a{" "}<br />
                            <span className="font-bold">
                                excelência
                            </span>
                            jurídica e a <br />
                            <span className="font-bold">
                                confiança
                            </span>
                            de nossos clientes
                            <br />
                            clientes
                        </h2>
                        <p className="text-gray-700 font-sora mb-8">
                            A Malab Advogados Associados é um escritório que se destaca pela atuação estratégica, ética e personalizada nas principais áreas do Direito. Com uma equipe altamente capacitada e foco em resultados, oferecemos assessoria e representação jurídica de excelência para pessoas físicas e jurídicas em todo o território nacional.
                        </p>
                        <p className="text-gray-700 font-sora mb-8">
                        Desde sua fundação, nossa missão é prestar um serviço jurídico de qualidade, pautado na responsabilidade, transparência e no atendimento humanizado. Entendemos que cada cliente possui demandas únicas, por isso, buscamos soluções sob medida, alinhadas às melhores práticas jurídicas e aos valores que norteiam a nossa atuação.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
} 