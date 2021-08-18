import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Welcome({ name }) {
    return (
        <Box
            pos='absolute'
            left='50%'
            transform='translateX(-70%)'
            p='1rem'
            h='8rem'
            w='70vw'
            m='2rem'
            rounded='1rem'
            bgGradient='linear(to-r, #f0e5e4, #deb4af)'>
            <Text
                px='3rem' as='h1'
                fontSize='x-large'
                fontWeight='semibold'
                letterSpacing='wide'
                color='#7d4b54'>Hello {name}!</Text>
            <Text
                px='3rem'
                py='0.5rem'
                letterSpacing='wide'
                color='#7d4b54'>
                Welcome to your daily event calender. Here you can see <br />
                all the upcoming events, meetings and create new events.
            </Text>
        </Box>
    )
}

export default Welcome;