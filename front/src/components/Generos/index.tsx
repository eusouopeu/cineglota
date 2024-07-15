'use client'
import '@/app/globals.css';
import './styles.css';
import React from 'react';
import { useFiltro } from '@/contexts/FiltroContext';

export default function Generos() {
  const { filterGenero } = useFiltro();

  return (
    <form id='movie-gender'>

        <input id='adventure' name='gender' value={12} type="radio" defaultChecked onClick={filterGenero}/>
        <label htmlFor='adventure' className="adventure">
            Aventura
        </label>
      
        <input id='comedy' name='gender' value={35} type="radio" onClick={filterGenero}/>
        <label htmlFor='comedy' className="comedy">
            Comédia
        </label>

        <input id='drama' name='gender' value={18} type="radio" onClick={filterGenero}/>
        <label htmlFor='drama' className="drama">
          Drama
        </label>   

        <input id='thriller' name='gender' value={53} type="radio" onClick={filterGenero}/>
        <label htmlFor='thriller' className="thriller">
            Suspense
        </label>

        <div className='indicador-genero'></div>

    </form>
  )
}
