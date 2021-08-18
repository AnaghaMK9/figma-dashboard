import React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './dashboard/Sidebar';
import Welcome from './dashboard/Welcome';
import Main from './dashboard/Main';

function Dashboard() {
    return (
        <Flex flexDirection='row'>
            <Flex
                pos='left'
                width='77%'>
                <Welcome name={'Dhruv'} />
                <Main />
            </Flex>
            <Sidebar />
        </Flex>
    )
}

export default Dashboard;