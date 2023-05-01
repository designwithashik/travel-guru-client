import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Flex my='35px'>
            <Box mr={{ lg: '80px' }} className="logo"><h1>Logo</h1></Box>
            <Input placeholder='Search your Destination..' width='270px' mr={{ lg: 'auto' }} type='search'></Input>
            <Flex mx={{ lg: '45px' }} gap='50px'>
                <Link to='/news'>News</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </Flex>
            <Link to='/client/login'><Button>Login</Button></Link>

        </Flex>
    );
};

export default Header;