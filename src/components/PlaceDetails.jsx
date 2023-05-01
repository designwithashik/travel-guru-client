import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PlaceDetails = () => {
    const {name, description} = useLoaderData();
    // console.log(place)
    return (
        <div>
           <Flex>
        <div className="">
            <Heading>{name}</Heading>
            <Text>{description} ...</Text>
            <Link to='/client/profile'><Button>Booking</Button></Link>
                </div>
                </Flex>
        </div>
    );
};

export default PlaceDetails;