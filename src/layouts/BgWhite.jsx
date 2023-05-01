import { Box } from '@chakra-ui/react';
import React from 'react';

const BgWhite = ({children}) => {
    return (
        <Box  px={{lg:'135px'}}>
            {children}
        </Box>
    );
};

export default BgWhite;