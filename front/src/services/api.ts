import axios from 'axios';

export const URL_TMDB = `https://api.themoviedb.org`;
export const TMDB_KEY = `e68628f5ff1c3314cd74c0ddba7a5819`;
export const TMDB_SEARCH = `https://api.themoviedb.org/3/search/movie/`;
export const TMDB_IMG = `https://image.tmdb.org/t/p/w500/`;

//-- Filtros Idiomas
export const TMDB_LANGS = `https://api.themoviedb.org/3/discover/movie?api_key=e68628f5ff1c3314cd74c0ddba7a5819&language=pt-BR&with_original_language=es|fr|it|de`;

export const fetchListaFilmes = (
  url: any,
  setFilmes: any
) => {
  axios.get(url)
    .then(response => {
      console.log(url)
      console.log(response.data)
      setFilmes(response.data.results)
    }) 
  .catch(error => {
    console.error('Valor padrão setado, erro ao obter filmes: ', error)
  })
}