import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function BannerTeam() {
    return (
        <div className="flex px-20 lg:flex-row flex-col bg-[url('/banner-bg.png')] bg-cover bg-center">
            <div className="flex mt-10 lg:mt-0 px-10 lg:px-0 flex-col justify-center items-center">
                <div className="flex flex-col gap-4">
                    <span className="font-sora lg:text-xl text-white text-[0.5rem] font-semibold tracking-[5px]">EQUIPE</span>
                    <h1 className="font-sora lg:text-4xl font-light text-white text-[1.5rem] lg:leading-[3rem]">
                        <span className="font-bold">Competência, ética e </span>
                        <br/>
                        <span className="font-bold">compromisso</span> em cada <br/>
                        atendimento
                    </h1>
                    <span className="font-sora font-light max-w-[300px] lg:max-w-none text-white lg:text-sm text-[0.5rem]">Atuação estratégica e personalizada nas principais áreas do Direito, com foco em resultados, ética e confiança.</span>
                    <div className="flex lg:flex-row flex-col gap-4">
                        <Button size="lg" className="bg-white text-black lg:py-7 rounded-[10px]">Entre em contato</Button>
                    </div>
                </div>
            </div>
            <Image src="/banner-image.png" alt="Lady Justice statue" width={750} height={1000} priority />
        </div>
    )
}
