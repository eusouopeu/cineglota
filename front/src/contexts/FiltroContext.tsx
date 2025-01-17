"use client"
import axios from "axios";
import { TMDB_LANGS, TMDB_KEY, fetchListaFilmes } from "@/services/api";
import React, { createContext, useContext, useEffect, useState } from "react";

// Definindo o tipo do estado e das funções de controle
interface FiltroContextType {
  Idioma: string;
  Genero: number;
  ListaFilmes: any[];
  filterIdioma: (e: React.FormEvent<HTMLInputElement>) => void;
  filterGenero: (e: React.FormEvent<HTMLInputElement>) => void;
}

// Estado inicial
const initialState: FiltroContextType = {
  Idioma: "en",
  Genero: 28,
  ListaFilmes: [],
  filterIdioma: (e: React.FormEvent<HTMLInputElement>) => {},
  filterGenero: (e: React.FormEvent<HTMLInputElement>) => {}
};
interface FiltroProps {
  children: React.ReactNode;
}
// Criando o contexto
const FiltroContext = createContext<FiltroContextType>(initialState);

// Criando o provider
export const FiltroProvider: React.FC<FiltroProps> = ({ children }) => {
  //const [Idioma, setIdioma] = useState(TMDB_LANGS);
  const [Idioma, setIdioma] = useState("es");
  const [Genero, setGenero] = useState(28);
  const [ListaFilmes, setListaFilmes] = useState([]);

  const filterIdioma = (e: React.FormEvent<HTMLInputElement>) => {
    setIdioma(e.currentTarget.value)
  };
  const filterGenero = (e: React.FormEvent<HTMLInputElement>) => {
    setGenero(Number(e.currentTarget.value));
  };

  
  useEffect(() => {
    const TMDB_FILTERS = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}`;
    console.log(Idioma)
    console.log(Genero)

    const filtros = (Idioma: string, Genero: number) => {
      axios.get(`${TMDB_FILTERS}&language=pt-BR&with_genres=${Genero}&with_original_language=${Idioma}`)
        .then((response) => {
          setListaFilmes(response.data.results)
        })
        .catch((error) => {
          console.error('Deu ruim: ', error)
        })
    }

    filtros(Idioma, Genero)
  }, [Idioma, Genero])

  return (
    <FiltroContext.Provider value={{ Idioma, Genero, ListaFilmes, filterIdioma, filterGenero }}>
      {children}
    </FiltroContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFiltro = () => useContext(FiltroContext);
