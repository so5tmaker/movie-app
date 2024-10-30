import { makeAutoObservable, action } from "mobx";
import axios from "axios";

import { CONFIG } from '../configuration/config.js';
import { POPULAR, OMDB_API_URL, TMDB_API_URL } from '../constants';

const { OMDB_API_KEY, TMDB_API_KEY, TMDB_BEARER_TOKEN } = CONFIG;
const SEARCH_QUERY_KEY = "movieSearchQuery"; // Ключ для хранения в localStorage

class MovieStore {
    movies = [];
    currentMovie = null;
    searchQuery = "";

    constructor() {
        makeAutoObservable(this);

        // Восстанавливаем searchQuery из localStorage, если он сохранён
        const savedQuery = localStorage.getItem(SEARCH_QUERY_KEY);
        this.searchQuery = savedQuery || POPULAR;
    }

    setSearchQuery(query) {
        this.searchQuery = query ?? this.searchQuery;
        localStorage.setItem(SEARCH_QUERY_KEY, this.searchQuery); // Сохраняем в localStorage
        this.fetchMovies(this.searchQuery);
    }

    async fetchMovies(query = POPULAR) {
        const url = `${OMDB_API_URL}?s=${query}&apikey=${OMDB_API_KEY}`;

        try {
            const response = await axios.get(`${url}${query === POPULAR ? '&page=1' : ''} `);

            this.movies = response.data.Search || [];
        } catch (error) {
            console.error('Error fetching movies:', error);
            return [];
        }
    };

    async fetchTrailer(id) {
        try {
            const response = await axios.get(`${TMDB_API_URL}3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`, {
                headers: {
                    Authorization: `Bearer ${TMDB_BEARER_TOKEN}`,
                },
            });
            const officialTrailer = response.data.results.find(video => video.type === 'Trailer' && video.official);

            return officialTrailer?.key ?? null;
        } catch (error) {
            console.error('Error fetching trailer:', error);
        }
    }

    async fetchMovieDetails(id) {
        try {
            const response = await axios.get(`${OMDB_API_URL}?i=${id}&apikey=${OMDB_API_KEY}`);
            const trailer = await this.fetchTrailer(id);

            this.setCurrentMovie(trailer ? { ...response.data, trailer } : response.data); // используем действие для изменения состояния
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    }

    setCurrentMovie = action((movie) => {
        this.currentMovie = movie; // изменение состояния внутри действия
    });
}

export const movieStore = new MovieStore();