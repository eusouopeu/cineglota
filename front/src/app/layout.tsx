import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Idiomas from '@/components/Idiomas';
import { FiltroProvider } from '@/contexts/FiltroContext'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CineGlota",
  description: "Aprenda idiomas assistindo filmes e séries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <FiltroProvider>
        <body className={inter.className}>
          <div className="z-50 fixed w-screen h-[4.25rem] bg-zinc-900">
            <Idiomas/>
            <Header/>
          </div>
          
          {children}
        </body>
      </FiltroProvider>
    </html>
  );
}
