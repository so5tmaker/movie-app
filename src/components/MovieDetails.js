import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Container, Typography, Box, IconButton, CircularProgress } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

import { movieStore } from "../stores/MovieStore";
import { favoritesStore } from "../stores/FavoritesStore.js";

import NoTrailer from './NoTrailer';
import Frame from './Frame';
import MovieRating from "./MovieRating.js";
import TestTask from './Test';

const MovieDetails = observer(() => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            await movieStore.fetchMovieDetails(id);
            setLoading(false);
        };

        fetchDetails();

        return () => {
            movieStore.setCurrentMovie(null);
        };
    }, [id]);

    const movie = movieStore.currentMovie; // Получаем текущий фильм из store
    const isFavorite = movie ? favoritesStore.favorites.some(fav => fav.imdbID === movie.imdbID) : false;

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            favoritesStore.removeFromFavorites(movie);
        } else {
            favoritesStore.addToFavorites(movie);
        }
    };

    if (loading) return <CircularProgress />; // Show loading spinner

    if (!movie) return <Typography variant="h6">Movie not found</Typography>;

    return (
        <Container >
            <TestTask />
            {movie.trailer ? (
                <Frame movie={movie} />
            ) : (
                <NoTrailer />
            )}

            <Box display="flex" alignItems="center" mt={2}>
                <Typography variant="h6">{movie.Title}</Typography>
                <IconButton onClick={handleFavoriteToggle} color="error" sx={{ ml: 1 }}>
                    {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton><Typography variant="subtitle1">{movie.Genre}</Typography>
            </Box>

            <Box display="flex" alignItems="center" mt={2}>
                <MovieRating movie={movie} />
            </Box>

            <Box display="flex" alignItems="center" mt={2}>
                <Typography variant="body1">{movie.Plot}</Typography>
            </Box>
        </Container>
    );
});

export default MovieDetails;