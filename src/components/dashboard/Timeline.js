import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';

function Timeline() {
    return (

        <Box
            pos='absolute'
            top='10rem'
            left='50%'
            mx='2rem'
            rounded='1rem'
            transform='translateX(-50%)'
            boxShadow='lg'
            border='solid #1px #f5f5f5'
            w='70vw'
            h='55vh'
            overflow='hidden'>

            <Grid
                h="100%"
                templateRows="repeat(6, 1fr)"
                templateColumns="repeat(8, 1fr)"
                gap={1}
                w='100%'>
                <GridItem colSpan={8} rowSpan={1}
                    bg='white'></GridItem>
                <GridItem colSpan={1} rowSpan={6}
                    bg='white'></GridItem>
                <GridItem colSpan={2} rowSpan={3}
                    bg='tomato'
                    opacity='0.5'
                    borderLeft='solid 2px red'
                    rounded='1rem'
                    py='3rem'
                    color='black'
                    textAlign='center'>Developer's Meeting <br /> 9 - 12 PM</GridItem>
                <GridItem colSpan={2} rowSpan={2}
                    bg='white'
                    opacity='0.5'></GridItem>
                <GridItem colSpan={2} rowSpan={2}
                    bg='violet'
                    opacity='0.5'
                    borderLeft='solid 2px purple'
                    rounded='1rem'
                    textAlign='center'
                    py='1rem'>Data Structures And Algorithms <br /> 9 - 11 AM </GridItem>
                <GridItem colSpan={2} rowSpan={2}
                    bg='#b7b4d9'
                    opacity='0.5'
                    borderLeft='solid 2px #6779b7'
                    rounded='1rem'
                    textAlign='center'
                    color='black'
                    py='4rem'>Project Review Meet <br />10 - 1 PM </GridItem>
                <GridItem colSpan={3} rowSpan={1}
                    bg='#db776b'
                    opacity='0.5'
                    borderLeft='solid 2px red'
                    rounded='1rem'
                    textAlign='center'
                    color='black'
                    py='1rem'>Artificial Intelligence Assignment <br /> Due 12 PM</GridItem>
                <GridItem colSpan={2} rowSpan={1}
                    bg='white'
                    opacity='0.5'></GridItem>
                <GridItem colSpan={2} rowSpan={1}
                    bg='#74ac6b'
                    opacity='0.5'
                    borderLeft='solid 2px green'
                    rounded='1rem'
                    textAlign='center'
                    color='black'
                    py='1rem'>Computer Networking <br /> 12 - 1 PM</GridItem>
                <GridItem colSpan={1} rowSpan={1}
                    bg='#b4d7d9'
                    opacity='0.5'
                    borderLeft='solid 2px green'
                    rounded='1rem'
                    textAlign='center'
                    color='black'
                    py='1rem'>Brainstroming Session <br /> 12 - 1 PM</GridItem>
                <GridItem colSpan={2} rowSpan={1}
                    bg='#cc4f87' opacity='0.5'
                    borderLeft='solid 2px purple'
                    rounded='1rem'
                    textAlign='center'
                    color='white'
                    py='0.5rem'>Cloud Computing Exam <br /> 1 - 2 PM</GridItem>
                <GridItem colSpan={2} rowSpan={1}
                    bg='#060b14'
                    opacity='0.5'
                    borderLeft='solid 2px black'
                    rounded='1rem'
                    textAlign='center'
                    color='white'
                    py='0.5rem'>Macbeth Auditions <br /> 1 - 2 PM</GridItem>
                <GridItem colSpan={2} rowSpan={1}
                    bg='#37161c'
                    opacity='0.5'
                    borderLeft='solid 2px brown'
                    rounded='1rem'
                    textAlign='center'
                    color='white'
                    py='0.5rem'>Macbeth Auditions <br /> 1 - 2 PM</GridItem>
            </Grid>
        </Box >
    )
}

export default Timeline;