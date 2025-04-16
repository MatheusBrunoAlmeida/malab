import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Estrutura() {
    return (
        <>
            <div className="flex flex-col lg:flex-row px-8 py-16 lg:px-20 bg-white">
                <div className="flex-1 pr-6">
                    <div className="mb-8">
                        <span className="uppercase font-sora text-gray-700 text-sm tracking-wider">
                            ESTRUTURA
                        </span>
                        <h2 className="text-3xl font-light text-[#29333A] font-sora lg:text-4xl font-sora mt-6 mb-4">
                            Nossa{" "}
                            <span className="font-bold">
                                estrutura
                            </span>
                        </h2>
                        <p className="text-[#29333A] font-sora mb-8">
                            Contamos com uma estrutura moderna e funcional, que nos permite <br />
                            atender com agilidade e precisão. Utilizamos ferramentas <br />
                            tecnológicas que facilitam a comunicação com nossos clientes e <br />
                            otimizam a gestão de processos e documentos, sempre com total <br />
                            sigilo e segurança das informações.
                        </p>

                        <div className="flex lg:flex-row flex-col gap-5 mt-10">
                            <Button variant="default" className="flex py-6 items-center gap-2 px-6 bg-black text-white rounded-md">
                                Entre em contato
                                <Image src="/scales-icon.svg" alt="Link para o Instagram" width={20} height={20} />
                            </Button>

                            <Button variant="default" className="flex items-center py-6  gap-2 px-6 bg-transparent border border-[#3B4F5A] text-[#3B4F5A] rounded-lg">
                                Veja como chegar
                                <Image src="/scales-icon.svg" alt="Link para o Instagram" width={20} height={20} />
                            </Button>
                        </div>
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