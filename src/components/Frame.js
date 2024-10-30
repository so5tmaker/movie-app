import React from 'react';
import { Box } from '@mui/material';

const Frame = ({ movie }) => {
    return (
        <Box mt={2} >
            <iframe
                id="youtube-player"
                src={`https://www.youtube.com/embed/${movie.trailer}`}
                title={`Trailer for ${movie.Title}`}
                width="100%"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '16px' }}
            />
        </Box>
    );
};

export default Frame;