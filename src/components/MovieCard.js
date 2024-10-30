import React from 'react';
import { Card as MuiCard, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/system';

import { useNavigate } from 'react-router-dom';

// Стили для Title через styled
const Title = styled(Typography)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});

// Стили для Card
const Card = styled(MuiCard)({
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    },
});

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/movies/${movie.imdbID}`)}>
            <CardMedia
                component="img"
                height="140"
                image={movie.Poster}
                alt={movie.Title}
            />
            <CardContent>
                <Title variant="h6" noWrap>{movie.Title}</Title>
                <Typography variant="body2" color="textSecondary">
                    {movie.Year}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;