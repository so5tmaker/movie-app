import { makeAutoObservable } from "mobx";

const FAVORITES = "favorites";

class FavoritesStore {
    favorites = [];

    constructor() {
        makeAutoObservable(this);
        this.loadFavorites(); // Загружаем избранные фильмы из LocalStorage при инициализации
    }

    loadFavorites() {
        const savedFavorites = localStorage.getItem(FAVORITES);
        if (savedFavorites) {
            this.favorites = JSON.parse(savedFavorites); // Преобразуем строку в массив
        }
    }

    saveFavorites() {
        localStorage.setItem(FAVORITES, JSON.stringify(this.favorites)); // Сохраняем массив в LocalStorage
    }

    addToFavorites(movie) {
        // Проверяем, есть ли уже фильм в избранном
        const exists = this.favorites.some(favorite => favorite.imdbID === movie.imdbID);

        if (!exists) {
            this.favorites.push(movie); // Добавляем фильм в массив избранных
            this.saveFavorites(); // Сохраняем обновленный массив в LocalStorage
        }
    }

    removeFromFavorites(movie) {
        this.favorites = this.favorites.filter(favorite => favorite.imdbID !== movie.imdbID); // Удаляем фильм из массива избранных
        this.saveFavorites(); // Сохраняем обновленный массив в LocalStorage
    }
}

export const favoritesStore = new FavoritesStore();