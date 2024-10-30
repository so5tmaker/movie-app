import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { Container, Typography } from "@mui/material";

const HomePage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Поиск фильмов
            </Typography>
            <SearchBar />
            <MovieList />
        </Container>
    );
};

export default HomePage;