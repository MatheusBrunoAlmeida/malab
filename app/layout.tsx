import type React from "react"
import "./output.css"
import { Inter, Montserrat } from "next/font/google"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })
export const metadata = {
  title: "MALAB Advogados",
  description: "Escritório de advocacia especializado",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
