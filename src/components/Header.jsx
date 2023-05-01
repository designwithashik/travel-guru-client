import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(ContextAuth)
    return (
        <Flex my='35px'>
            <Box mr={{ lg: '80px' }} className="logo"><h1>Logo</h1></Box>
            <Input placeholder='Search your Destination..' width='270px' mr={{ lg: 'auto' }} type='search'></Input>
            <Flex mx={{ lg: '45px' }} gap='50px'>
                <Link to='/'>Home</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </Flex>
            {user ? <Flex><Link to='/client/profile'><Heading fontSize='21px'>{user.displayName}</Heading></Link><Button onClick={logOut}>Log Out</Button></Flex> : <Link to='/client/login'><Button>Login</Button></Link>}

        </Flex>
    );
};

export default Header;