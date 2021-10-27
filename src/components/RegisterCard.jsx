import { Avatar } from '@chakra-ui/avatar';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import Icon from '@chakra-ui/icon';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout';
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/tag';
import { Textarea } from '@chakra-ui/textarea';
import { LightBulbIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/outline';
import React from 'react';
import { Card } from './Card';
import { GitHubIcon } from './GitHubIcon';
import { TwitterIcon } from './TwitterIcon';

export const RegisterCard = ({result}) => {
	const { guess } = result;
	return (
		<Box w="100%" maxWidth="400px">

			<Tag size="md" colorScheme="orange" mb={2}>
				<TagLeftIcon as={LightBulbIcon} mr={1} w={4} h={4} mt="-2px" />
				<TagLabel textTransform="uppercase">Idea</TagLabel>
			</Tag>

			<Text fontSize="14" mb="24" color="gray.600">
                An example registration or profile completion step in which a user&rsquo;s email address is used to fetch and prefill as much of the form as possible.
			</Text>

			<Card>
				<Center>
					<Avatar src={guess.avatarUrl} name={guess.name || guess.displayName}  size="xl" mt="-16" />
				</Center>
				<Text color="blue.700" fontSize="12" textAlign="center" my="3">(Edit profile picture)</Text>

				<Stack spacing={4}>

					<FormControl isRequired>
						<FormLabel>Name</FormLabel>
						<Input placeholder="Your name" value={guess.name} readOnly />
					</FormControl>
                
					<FormControl>
						<FormLabel>Company</FormLabel>

						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Icon color="gray.400" as={OfficeBuildingIcon} w={4} h={4} />}
							/>
							<Input placeholder="Your company" value={guess.company} readOnly />
						</InputGroup>
					</FormControl>
                
					<FormControl>
						<FormLabel>Location</FormLabel>

						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />}
							/>
							<Input placeholder="Your location" value={guess.location} readOnly />
						</InputGroup>
					</FormControl>
                
					<FormControl>
						<FormLabel>Biography</FormLabel>
						<Textarea readOnly>{guess.bio}</Textarea>
					</FormControl>

				</Stack>
			</Card>

			<Card>
				<Heading size="md" mb="2">Profile links</Heading>

				<Stack spacing={4}>

					<Text>Connect with me at these other sites</Text>
                
					<InputGroup>
						<InputLeftElement
							pointerEvents="none"
							children={<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />}
						/>
						<Input placeholder="Your website" value={guess.website} readOnly />
					</InputGroup>

					<InputGroup>
						<InputLeftElement
							pointerEvents="none"
							children={<Icon color="gray.400" as={TwitterIcon} w={4} h={4} />}
						/>
						<Input placeholder="Your Twitter" value={guess.twitterUrl} readOnly />
					</InputGroup>
                
					<InputGroup>
						<InputLeftElement
							pointerEvents="none"
							children={<Icon color="gray.400" as={GitHubIcon} w={4} h={4} />}
						/>
						<Input placeholder="Your GitHub" value={guess.githubUrl} readOnly />
					</InputGroup>

				</Stack>
                
			</Card>

		</Box>
	);
};
