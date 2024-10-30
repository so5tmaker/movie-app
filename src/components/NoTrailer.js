import React from 'react';
import { Container } from '@mui/material';

import noTrailerImage from '../assets/no-trailer.jpg'; // Замените на правильный путь к изображению

const NoTrailer = () => {
    return (
        <Container style={{
            marginTop: '20px', marginBottom: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '16px'
        }}>
            <img src={noTrailerImage} alt="No Trailer Available" style={{ width: '100%', height: '400px', maxWidth: '400px' }} />
        </Container>
    );
};

export default NoTrailer;