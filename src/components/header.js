import { HStack } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

const header = () => {
  return (
    <HStack p={'4'} color={'whiteAlpha.900'} bgColor={'blackAlpha.800'}>
        <Link to="/">Home</Link>
        <Link to="/coins">Coins</Link>
        <Link to="/Exchanges">Exchanges</Link>
    </HStack>
  )
}

export default header