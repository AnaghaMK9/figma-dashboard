import { Flex, Text, Button } from '@chakra-ui/react';
import { BsPlusSquareFill } from 'react-icons/bs';
import React from 'react';
import EventCard from './EventCard';

function Sidebar() {
    return (
        <>
            <Flex
                pos='fixed'
                right='0'
                height='100vh'
                w='320px'
                flexDirection='column'
                justifyContent='space-evenly'
                background='#f5e3e1'>
                <Flex flexDirection='row'
                    justifyContent='space-between'
                    px='1rem'
                    marginTop='0.5rem'>
                    <Text
                        fontSize='1.2rem'
                        fontWeight='semibold'>Events</Text>
                    <Flex
                        flexDirection='row'
                        justifyContent='space-around'
                        alignItems='center'>
                        <Text
                            paddingRight='1rem'
                            textColor='blue'
                            cursor='pointer'
                            fontSize='0.9rem'
                        >View All</Text>
                        <BsPlusSquareFill color='#7d4b54'/>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection='row'
                    justifyContent='space-evenly'
                    px='0.8rem'
                    py='0'
                    >
                    <Button
                        width='9.2rem'
                        background='#f5e3e1'
                        textColor='#7d4b54'
                        fontSize='1rem'
                        _hover={{
                            bg: '#d9b6b2'
                        }}>Activities</Button>
                    <Button
                        width='9.2rem'
                        background='#f5e3e1'
                        textColor='#7d4b54'
                        fontSize='1rem'
                        _hover={{
                            bg: '#d9b6b2'
                        }}>Reminders</Button>
                </Flex>
                <Flex
                    flexDirection='row'
                    justifyContent='space-between'
                    px='1rem' py='0' 
                    textColor='#a88c88'>
                    <Text>
                        Monday 10 December 2020
                    </Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    px='1rem'>
                    <EventCard
                        color={'#d7d8f2'}
                        dividerColor={'#bfc2e3'}
                        title={'Building Session with UI Team'}
                        description={'Small desciption about the event within two lines'} />
                    <EventCard
                        color={'#c7ebdc'}
                        dividerColor={'#99c2ad'}
                        title={'Building Session with UI Team'}
                        description={'Small desciption about the event within two lines'} />
                    <EventCard
                        color={'#ffd6c3'}
                        dividerColor={'#deb6a2'}
                        title={'Building Session with UI Team'}
                        description={'Small desciption about the event within two lines'} />
                </Flex>
            </Flex>
        </>
    )
}

export default Sidebar;