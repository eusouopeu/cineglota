import React from 'react';
import Image from 'next/image';
//-- ASSETS
import { HeartIcon } from "@heroicons/react/24/outline";
import espanhol from '@/assets/espanhol.svg';
import italiano from '@/assets/italiano.svg';
import frances from '@/assets/frances.svg';
import alemao from '@/assets/alemao.svg';

interface CdProps {
  poster?: any;
  titulo: string;
  genero?: [];
  idioma?: any;
  nota?: number;
}


export default function Cards({ poster, titulo, genero, idioma, nota }: CdProps) {
  let lingua;
  switch (idioma) {
    case "es":
      lingua = espanhol;
      break;
    case "it":
      lingua = italiano;
      break;
    case "fr":
      lingua = frances;
      break;
    case "de":
      lingua = alemao;
      break;
    default:
      lingua = espanhol;
  }

  return (
    <div className='flex flex-col w-[150px] h-[320px] justify-between p-6 
  bg-gradient-to-bl from-slate-500/30 to-slate-600/10 
  border-2 border-y-red-600/50 border-x-rose-500/50 backdrop-blur-sm shadow-lg shadow-red-600/20 rounded-3xl'>
      <div>
        <Image src={poster} alt={titulo} width={100} height={100} layout="responsive" className='w-full h-auto bg-cover' />
        <h2 className='self-center font-bold my-1'>{titulo}</h2>
      </div>

      <div>
        <div className='flex justify-between text-xs'>
          <p>{genero}</p>
          <Image src={lingua} alt='.' width={20} height={20} />
        </div>

        <p>{nota}</p>

        <div className='flex justify-between text-xs'>
          <button>Detalhes</button>
          <button> <HeartIcon /> </button>
        </div>
      </div>

    </div>
  )
}
// priority={index === 0}
