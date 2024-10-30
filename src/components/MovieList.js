import React from 'react';
import { observer } from "mobx-react-lite";
import { movieStore } from "../stores/MovieStore";
import MovieCard from './MovieCard';
import { Grid } from "@mui/material";

const MovieList = observer(() => {
    return (
        <Grid container spacing={2}>
            {movieStore.movies.map(movie => (
                <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
                    <MovieCard movie={movie} />
                </Grid>
            ))}
        </Grid>
    );
});

export default MovieList;