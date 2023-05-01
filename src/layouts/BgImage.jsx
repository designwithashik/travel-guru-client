import { Box } from '@chakra-ui/react';
import React from 'react';

const BgImage = ({children}) => {
    return (
        <Box px={{lg:'135px'}}>
            {children}
        </Box>
    );
};

export default BgImage;