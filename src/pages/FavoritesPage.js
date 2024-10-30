import React from 'react';
import { observer } from "mobx-react-lite";
import { favoritesStore } from "../stores/FavoritesStore";
import MovieCard from '../components/MovieCard';
import { Container, Grid, Typography } from "@mui/material";

const FavoritesPage = observer(() => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Избранные фильмы</Typography>
            <Grid container spacing={2}>
                {favoritesStore.favorites.length > 0 ? (
                    favoritesStore.favorites.map(movie => (
                        <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">Нет избранных фильмов</Typography>
                )}
            </Grid>
        </Container>
    );
});

export default FavoritesPage;