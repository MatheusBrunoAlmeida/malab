import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

export default function BannerAreas() {
    return (
        <div className="flex px-20 lg:flex-row flex-col bg-[url('/banner-bg.png')] bg-cover bg-center">
            <div className="flex mt-10 lg:mt-0 px-10 lg:px-0 flex-col justify-center items-center">
                <div className="flex flex-col gap-4">
                    <span className="font-sora lg:text-xl text-white text-[0.5rem] font-semibold tracking-[5px]">ÁREAS DE ATUAÇÃO</span>
                    <h1 className="font-sora lg:text-4xl font-light text-white text-[1.5rem] lg:leading-[3rem]">
                        Áreas de
                        <span className="font-bold">atuação</span>
                    </h1>
                    <span className="font-sora font-light max-w-[300px] lg:max-w-none text-white lg:text-sm text-[0.5rem]">Porttitor sollicitudin enim tincidunt blandit proin nibh volutpat vitae in feugiat sit auctor amet amet bibendum ac varius tincidunt condimentum.</span>
                    <div className="flex lg:flex-row flex-col gap-4">
                        <Button size="lg" className="bg-white text-black lg:py-7 rounded-[10px]">Entre em contato</Button>
                    </div>
                </div>
            </div>
            <Image src="/banner-image.png" alt="Lady Justice statue" width={750} height={1000} priority />
        </div>
    )
}
