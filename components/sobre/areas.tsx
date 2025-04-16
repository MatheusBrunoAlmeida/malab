import Image from "next/image";
import { Button } from "../ui/button";

export default function AreasSobre() {
    return (
        <>
            {/* Areas de Atuação Section */}
            <div className="py-16 px-8 lg:px-2 text-center bg-[url('/banner-bg.png')] bg-cover bg-center text-white">
                <h3 className="uppercase font-sora text-sm tracking-wider mb-6">ATUAÇÃO</h3>

                <h2 className="text-3xl lg:text-4xl font-light font-sora mb-6 max-w-3xl mx-auto">
                    Nossa atuação é orientada po <span className="font-bold">princípios sólidos</span>
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto mb-16">
                    Nosso escritório está preparado para atender pessoas físicas e jurídicas com
                    alto padrão técnico e visão multidisciplinar. Conheça algumas de nossas
                    especialidades:
                </p>

                <div className="flex flex-wrap w-full justify-center gap-10">
                    {/* Direito Civil */}
                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Ética e Integridade</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Agimos com responsabilidade e respeito <br />
                            às normas legais e morais em todas as <br />
                            esferas do nosso trabalho.
                        </p>
                    </div>

                    {/* Direito Civil */}
                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Excelência Técnica</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Investimos continuamente em <br />
                            capacitação, pesquisa e atualização para <br />
                            garantir o melhor desempenho jurídico.
                        </p>
                    </div>

                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Confiança e Transparência</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Valorizamos o relacionamento próximo <br />
                            com nossos clientes, baseado em <br />
                            comunicação clara e comprometimento.
                        </p>
                    </div>

                    <div className="flex items-start text-left flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">
                            Inovação com <br />
                            Responsabilidade
                        </h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Aliamos tradição e modernidade para <br />
                            entregar soluções jurídicas eficazes, com <br />
                            o suporte de tecnologia e visão de futuro.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}