import Image from "next/image";
import Idiomas from '@/components/Idiomas';
import Generos from '@/components/Generos';
import Lista from  '@/components/Lista';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Idiomas/>
      <Generos/>

      <Lista/>
      
    </main>
  );
}
