import { Instagram, Mail, MapPin, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white p-12">
      <div className="max-w-7xl border rounded-md relative border-[#2C3C4B] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo column */}
          <div className="flex flex-col">
            <Link href="/">
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="Malab Advogados"
                  width={180}
                  height={50}
                />
              </div>
            </Link>
          </div>

          {/* Institucional column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-sora font-medium mb-6">Institucional</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-gray-300 font-sora transition-colors">
                Home
              </Link>
              <Link href="/sobre-nos" className="hover:text-gray-300 font-sora transition-colors">
                Sobre nós
              </Link>
              <Link href="/areas-de-atuacao" className="hover:text-gray-300 font-sora transition-colors">
                Áreas de atuação
              </Link>
              <Link href="/equipe" className="hover:text-gray-300 font-sora transition-colors">
                Equipe
              </Link>
              <Link href="/contato" className="hover:text-gray-300 font-sora transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contato column */}
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-6">Contato</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                  {/* <Image src="/icon.svg" alt="Endereço" width={16} height={16} /> */}
                  <MapPinned className="w-4 h-4 text-black" />
                </div>
                <span>Lorem ipsum dolor, 123</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                  <Mail className="w-4 h-4 text-black" />
                </div>
                <span>malab@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                  <Image src="/whatsappicon.svg" alt="Telefone" width={16} height={16} />
                </div>
                <span>(00) 1234-5678</span>
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-medium mb-6">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
                  <Instagram className="w-4 h-4 text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 absolute bottom-10 right-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <Link href="#top" className="flex items-center gap-2 text-sm mt-4 md:mt-0">
            <span>Voltar ao topo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transform rotate-180">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <p className="text-sm text-gray-400">© 2025 Malab. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
} 