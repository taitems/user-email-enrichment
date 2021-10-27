import { Avatar, Button, Img } from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
// import { LocationMarkerIcon, OfficeBuildingIcon, LinkIcon } from '@heroicons/react/solid';
import { LinkIcon } from '@heroicons/react/solid';
import React from 'react';
import { TwitterIcon } from './TwitterIcon';
import { GitHubIcon } from './GitHubIcon';

export const ProfileCard = ({result}) => {
	const { guess } = result;

	return (
		<Box
			textAlign="left"
			shadow="lg"
			borderRadius="md"
			p="2"
			pb="4"
		>
			<Img src="banner.jpg" width="385px" height="108px" alt="" borderRadius="4" mb="-8" />
			<Box ml="3">
				<Box borderRadius="4px" borderWidth="5px" borderStyle="solid" borderColor="white" display="inline-block" >
					<Avatar src={guess.avatarUrl} name={guess.name || guess.displayName}  borderRadius="none" size="lg"/>
				</Box>
				<Flex justifyContent="space-between" alignItems="center" mt="2">
					<Heading as="h2" fontSize="3xl">
						{guess.name}
					</Heading>
					<Button size="sm" variant="outline" tabIndex="-1">Follow</Button>
				</Flex>
				<p>
					{guess.bio}
				</p>

				{(guess.location || guess.company) && <Text color="gray.800">
					{guess.location} {guess.location && '-'} {guess.company}
				</Text>
				}

				<Divider borderColor="gray.300" w="30px" my="3" />

				<Stack spacing="1">
					{/* {guess.location && (
						<Flex alignItems="center" color="gray.600">
							<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} mr={1} />{guess.location}
						</Flex>
					)}
					{guess.company && (
						<Flex alignItems="center" color="gray.600">
							<Icon color="gray.400" as={OfficeBuildingIcon} w={4} h={4} mr={1} />{guess.company}
						</Flex>
					)} */}
					{guess.website && (
						<Flex as="a" href={guess.website} target="_blank" rel="noreferrer" alignItems="center" color="gray.600">
							<Icon color="gray.400" as={LinkIcon} w={4} h={4} mr={1} />{guess.website.replace('//www.','//').replace('http://','').replace('https://','')}
						</Flex>
					)}
					{guess.twitterUrl && (
						<Flex as="a" href={guess.twitterUrl} target="_blank" rel="noreferrer" alignItems="center" color="gray.600">
							<Icon color="gray.400" as={TwitterIcon} w={4} h={4} mr={1} />{guess.twitterUsername}
						</Flex>
					)}
					{guess.githubUrl && guess.githubUsername && (
						<Flex as="a" href={guess.githubUrl} target="_blank" rel="noreferrer" alignItems="center" color="gray.600">
							<Icon color="gray.400" as={GitHubIcon} w={4} h={4} mr={1} />{guess.githubUsername}
						</Flex>
					)}
				</Stack>
			</Box>

		</Box>
	);
};
