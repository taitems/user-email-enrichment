import { Box } from '@chakra-ui/layout';
import React from 'react';

export const Card = props => {
	return (
		<Box
			textAlign="left"
			shadow="lg"
			borderRadius="md"
			bg="white"
			p="4"
			w="100%"
			mb="6"
			{...props}
		/>
	);
};
