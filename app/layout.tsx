import type React from "react"
import "./output.css"
import { Inter, Montserrat, Sora } from "next/font/google"
import Header from "@/components/header"
import { clsx } from "clsx"

const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' })
const sora = Sora({ subsets: ["latin"], variable: '--font-sora' })

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
    <html lang="pt-BR" className={clsx(montserrat.variable, sora.variable)}>
      <body className={sora.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
