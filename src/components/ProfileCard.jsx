import { Avatar, Button, Img } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { LocationMarkerIcon, OfficeBuildingIcon, GlobeIcon } from '@heroicons/react/solid';
import React from 'react';

export const ProfileCard = ({result}) => {
	const { guess } = result;

	return (
		<Box
			textAlign="left"
			shadow="lg"
			borderRadius="md"
			p="2"
		>
			<Img src="banner.jpg" width="385" height="108" alt="" borderRadius="4" mb="-8" />
			<Box ml="3">
				<Box borderRadius="4px" borderWidth="5px" borderStyle="solid" borderColor="white" display="inline-block" >
					<Avatar src={guess.avatar_url} name={guess.name || guess.displayName}  borderRadius="none" size="lg"/>
				</Box>
				<Flex justifyContent="space-between" alignItems="center">
					<Heading as="h2" fontSize="3xl">
						{guess.name}
					</Heading>
					<Button size="sm" variant="outline">Follow</Button>
				</Flex>
				{guess.displayName && <Heading as="h3" fontSize="lg" color="gray.500" my={2}>@{guess.displayName}</Heading>}
				<p>
					{guess.bio}
				</p>
				{guess.location && (
					<Flex alignItems="center" color="gray.600">
						<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} mr={1} />{guess.location}
					</Flex>
				)}
				{guess.company && (
					<Flex alignItems="center" color="gray.600">
						<Icon color="gray.400" as={OfficeBuildingIcon} w={4} h={4} mr={1} />{guess.company}
					</Flex>
				)}
				{guess.website && (
					<Flex as="a" href={guess.website} target="_blank" rel="noreferrer" alignItems="center" color="gray.600">
						<Icon color="gray.400" as={GlobeIcon} w={4} h={4} mr={1} />{guess.website}
					</Flex>
				)}
			</Box>

		</Box>
	);
};
