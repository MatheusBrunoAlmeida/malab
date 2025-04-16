"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="h-12 w-auto relative">
            <Image src="/logo.png" alt="MALAB Advogados" width={200} height={48} className="h-full w-auto" />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white font-montserrat hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/sobre" className="text-white font-montserrat hover:text-gray-300 transition-colors">
            Sobre nós
          </Link>
          <Link href="/areas-de-atuacao" className="text-white font-montserrat hover:text-gray-300 transition-colors">
            Áreas de atuação
          </Link>
          <Link href="/equipe" className="text-white font-montserrat hover:text-gray-300 transition-colors">
            Equipe
          </Link>
          <Link href="/contato" className="text-white font-montserrat hover:text-gray-300 transition-colors">
            Contato
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <nav className="flex flex-col px-4 py-2">
            <Link
              href="/"
              className="py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sobre-nos"
              className="py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nós
            </Link>
            <Link
              href="/areas-de-atuacao"
              className="py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Áreas de atuação
            </Link>
            <Link
              href="/equipe"
              className="py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Equipe
            </Link>
            <Link
              href="/contato"
              className="py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
