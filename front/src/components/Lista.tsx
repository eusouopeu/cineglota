'use client'
import React, { useEffect, useState } from 'react';
import { useFiltro } from '@/contexts/FiltroContext';
import { TMDB_LANGS } from '@/services/api';
//-- COMPONENTS
// import SearchBar from '../SearchBar';
import Cards from './Cards';
//-- ASSETS
import es from '@/assets/espanhol.svg';
import it from '@/assets/italiano.svg';
import fr from '@/assets/frances.svg';
import de from '@/assets/alemao.svg';

import axios from 'axios';

interface Filme {
  id: number;
  title: string;
  poster_path: string; // Para movieList
  posterPath: string;  // Para favoriteMovies
}

export default function Lista() {
  const { ListaFilmes } = useFiltro()

  
  return (
    <section className='z-10 flex flex-col gap-4'>
      {/* <SearchBar /> */}

      <ul className='flex flex-wrap w-full gap-4'>
        {ListaFilmes.map((item: any) => {
            return (
              <li key={item.id}>
                <Cards
                  poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  titulo={item.title}
                  // const dataLancamento = data.release_date;
                  genero={item.genres}
                  idioma = {item.original_language}
                  nota={item.vote_average}
                />
              </li>
        )})}
      </ul>

    </section>
  )
}
