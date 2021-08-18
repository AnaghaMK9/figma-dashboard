import React from 'react';
import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';

function EventCard({ color, title, description, dividerColor }) {
    return (
        <Box
            w='17rem'
            h='10rem'
            rounded='1rem'
            boxShadow='sm'
            background={color}
            p='0.7rem'
            my='0.4rem'>
            <Text
                as='h2'
                fontSize='0.9rem'
                fontWeight='semibold'
                textAlign='left'
                textColor='#000'
                letterSpacing='wide'>{title}</Text>
            <Text
                textColor='gray'
                textAlign='left'
                fontSize='0.8rem'>{description}</Text>
            <Flex isInline
                px='0.8rem'
                py='0.5rem'
                flexDirection='row'
                alignItems='center'>
                <IoLocationSharp color='blue' />
                <Text color='blue'
                    px='1rem'
                    fontSize='0.75rem'
                    cursor='pointer'>Location</Text>
            </Flex>
            <Divider orientation='horizontal'
                width='100%'
                borderColor={dividerColor} />
            <Flex
                p='0.8rem'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'>
                <Flex
                    flexDirection='row'
                    alignItems='center'>
                    <AiOutlineClockCircle color='gray.700' />
                    <Text color='gray.700'
                        px='0.4rem'
                        fontSize='0.8rem'
                        fontWeight='semibold'>10 - 11 AM</Text>
                </Flex>
                <Flex
                    flexDirection='row'
                    alignItems='center'>
                    <Box background='gray.500'
                        w='1.3rem'
                        h='1.3rem'
                        rounded='50%'
                    />
                    <Box background='gray.400'
                        w='1.3rem'
                        h='1.3rem'
                        rounded='50%'
                        marginLeft='-0.3rem'
                    />
                    <Box background='gray.300'
                        w='1.3rem'
                        h='1.3rem'
                        rounded='50%'
                        marginLeft='-0.3rem'
                    />
                    <Box background='gray.200'
                        w='1.3rem'
                        h='1.3rem'
                        rounded='50%'
                        marginLeft='-0.3rem'
                    />
                    <Box background='gray.100'
                        w='1.3rem'
                        h='1.3rem'
                        rounded='50%'
                        marginLeft='-0.3rem'
                    />
                </Flex>
            </Flex>
        </Box>
    )
}

export default EventCard;