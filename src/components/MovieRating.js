import React from 'react';

import { Rating } from '@mui/material';

const MovieRating = ({ movie }) => {
    // Получаем рейтинг Rotten Tomatoes
    const getRottenTomatoesRating = () => {
        const rating = movie.Ratings.find(r => r.Source === "Rotten Tomatoes");
        if (rating) {
            // Преобразуем процентный рейтинг в 5-звездочный формат
            const percentage = parseInt(rating.Value.replace('%', ''), 10);
            return (percentage / 100) * 5;
        }

        return 0; // Если рейтинг не найден
    };

    return (

        <Rating
            value={getRottenTomatoesRating()}
            precision={0.5}
            readOnly
            sx={{
                color: "red", // Красный цвет для звёздочек
                '& .MuiRating-iconEmpty': {
                    color: 'red', // Красная рамка для пустых звёздочек
                },
            }}
        />
    );
};

export default MovieRating;