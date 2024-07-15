import Image from "next/image";
import Idiomas from '@/components/Idiomas';
import Generos from '@/components/Generos';
import Lista from  '@/components/Lista';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-[11rem] pl-[12rem] pr-[2rem]">

      
      <Generos/>

      <Lista/>
      
    </main>
  );
}
