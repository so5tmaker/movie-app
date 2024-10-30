import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { TextField } from "@mui/material";

import { movieStore } from "../stores/MovieStore";
import { POPULAR } from '../constants';

const SearchBar = observer(() => {
    useEffect(() => {
        movieStore.setSearchQuery(); // Устанавливаем начальное значение при загрузке
    }, []); // Пустой массив зависимостей для запуска только один раз при монтировании

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            movieStore.setSearchQuery(POPULAR);
            movieStore.fetchMovies();
        }
    };

    return (
        <TextField
            label="Поиск фильмов"
            variant="outlined"
            sx={{ mb: 2, mt: 2 }}
            fullWidth
            onChange={(e) => movieStore.setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    );
});

export default SearchBar;