import Image from "next/image";
import { Button } from "./ui/button";

export default function Areas() {
    return (
        <>
            {/* Areas de Atuação Section */}
            <div className="py-16 px-8 lg:px-20 text-center bg-[url('/banner-bg.png')] bg-cover bg-center text-white">
                <h3 className="uppercase font-sora text-sm tracking-wider mb-6">ÁREAS DE ATUAÇÃO</h3>

                <h2 className="text-3xl lg:text-4xl font-light font-sora mb-6 max-w-3xl mx-auto">
                    Atuação ampla e especializada nas principais <span className="font-bold">áreas do Direito</span>
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
                        <h3 className="text-xl font-sora font-medium mb-3">Direito Civil</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Assessoria e representação em questões contratuais, indenizatórias, responsabilidade
                            civil, direitos reais e obrigações. Atuação estratégica em litígios e soluções
                            extrajudiciais.
                        </p>
                    </div>

                    {/* Direito Civil */}
                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Direito Empresarial</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Consultoria e suporte jurídico para empresas em todas as fases do negócio: constituição, contratos, governança, reestruturações e litígios societários.
                        </p>
                    </div>

                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Direito Trabalhista</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Atuação preventiva e contenciosa em demandas trabalhistas. Defesa de empresas e
                            orientação para adequação à legislação vigente, reduzindo riscos e passivos.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap w-full justify-center mt-10 gap-10">
                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Direito Tributário</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Planejamento tributário, análise de riscos fiscais e defesa em autos de infração.
                            Soluções para empresas e pessoas físicas com foco em conformidade e economia legal.
                        </p>
                    </div>


                    <div className="flex items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora font-medium mb-3">Direito de Família e Sucessões</h3>
                        <p className="text-gray-300 max-w-[300px] text-left text-sm">
                            Atendimento humanizado e técnico em processos de divórcio, guarda, pensão
                            alimentícia, inventário, partilha de bens e testamentos, com foco na proteção de
                            direitos e patrimônio.
                        </p>
                    </div>

                    {/* Saiba mais */}
                    <div className="flex items-center lg:items-start flex-col">
                        <div className="w-12 h-12 flex mb-4">
                            <Image src="/icon.svg" alt="Lady Justice statue" width={100} height={100} />
                        </div>
                        <h3 className="text-xl font-sora text-left font-light mb-3">Saiba mais sobre as áreas</h3>
                        <div className="mt-2 w-[300px] flex justify-center lg:justify-start">
                            <Button variant="outline" className="px-6 py-3 border border-white text-black rounded-md hover:bg-white hover:text-black transition-colors">
                                Saiba mais <span className="ml-2">⚖️</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}