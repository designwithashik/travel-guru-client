import React, { useContext } from 'react';
import { ContextAuth } from '../providers/AuthProvider';
import { Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const { places } = useContext(ContextAuth);
    // console.log(places)
    const handlePlaceDetails = (id) => {
        console.log(id);
        navigate(`/places/${id}`)
    }
    return (
        places && <Flex>
        <div className="">
            <Heading>{places[0].name}</Heading>
            <Text>{places[0].description.slice(0, 190)} ...</Text>
            <Button>Booking</Button>
        </div>
        <Flex gap='30px' className="places">
            {places.map(place => <Flex onClick={()=>handlePlaceDetails(place.id)} alignItems='flex-end' textColor='white' p='21px' borderRadius='20px' w='270px' h='416px' bgImage={place.image}>
                <Heading>{place.name}</Heading>
            </Flex>)}
        </Flex>
    </Flex>
    );
};

export default Home;