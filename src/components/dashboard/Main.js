import { Button, Flex, Text, Select } from '@chakra-ui/react';
import React from 'react';
import Timeline from './Timeline';

function Main() {
    return (
        <Flex
            flexDirection='column'
            justifyContent='space-between'
            pos='absolute'
            left='50%'
            transform='translateX(-70%)'
            top='10rem'
            w='70vw'>
            <Flex
                flexDirection='row'
                align='baseline'
                px='4rem'
                py='1rem'
                justifyContent='space-around'>
                <Text
                    fontSize='1.5rem'
                    fontWeight='semibold'>
                    Timelline</Text>
                <Flex flexDirection='row'
                    justifyContent='space-between'
                    align='baseline'>
                    <Button
                        mx='0.5rem'
                        border='#7d4b54 solid 1px'
                        color='#7d4b54'
                        bg='#fff'>{'<'}</Button>
                    <Text>Mon, 11 December, 2021</Text>
                    <Button
                        mx='0.5rem'
                        border='#7d4b54 solid 1px'
                        color='#7d4b54'
                        bg='#fff'>{'>'}</Button>
                </Flex>
                <Select
                    type='Checkbox'
                    size='sm'
                    w='10rem'
                    placeholder="All"
                    border='none'
                    outline='none'
                    cursor='pointer'
                    _focus={{
                        outline: 'none',
                        border: 'none'
                    }}
                    color='#7d4b54'
                    fontSize='1rem  '>
                    <option value="option1">Reminders</option>
                    <option value="option2">Activities</option>
                    <option value="option3">Classes</option>
                    <option value="option4">Exams</option>
                    <option value="option5">Assignments</option>
                    <option value="option6">Happening</option>
                </Select>
                <Select
                    type='Checkbox'
                    size='sm'
                    w='10rem'
                    placeholder="Day"
                    border='none'
                    outline='none'
                    cursor='pointer'
                    _focus={{
                        border: '#7d4b54',
                        outline: 'none'
                    }}
                    color='#7d4b54'
                    fontSize='1rem  '>
                    <option value="option1">Sunday</option>
                    <option value="option2">Monday</option>
                    <option value="option3">Tuesday</option>
                    <option value="option4">Wednesday</option>
                    <option value="option5">Thursday</option>
                    <option value="option6">Friday</option>
                    <option value="option7">Saturday</option>
                </Select>
            </Flex>
            <Flex
                flexDirection='row'
                justifyContent='space-evenly'
                alignItems='center'>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text>Mon</Text>
                    <Text>11</Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text>Tue</Text>
                    <Text>12</Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text>Wed</Text>
                    <Text>13</Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text>Thur</Text>
                    <Text>14</Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text> Fri</Text>
                    <Text>15</Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text>Sat</Text>
                    <Text>16</Text>
                </Flex>
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    color='#7d4b54'
                    _hover={{
                        bg: '#d9b6b2'
                    }}
                    p='1rem'
                    rounded='1rem'
                    cursor='pointer'>
                    <Text>Sun</Text>
                    <Text>17</Text>
                </Flex>
            </Flex>
            <Timeline />
        </Flex>
    )
}

export default Main;