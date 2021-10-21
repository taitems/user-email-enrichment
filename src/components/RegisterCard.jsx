import { Avatar } from '@chakra-ui/avatar';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import Icon from '@chakra-ui/icon';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/outline';
import React from 'react';
import { Card } from './Card';

export const RegisterCard = ({result}) => {
	const { guess } = result;
	return (
		<Box w="400px" maxWidth="100%" pt="12">

			<Card>
				<Center>
					<Avatar src={guess.avatar_url} name={guess.name || guess.displayName}  size="xl" mt="-16" />
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
				<Heading size="md" mb="2">Your links</Heading>

				<Stack spacing={4}>
                
					<FormControl>
						<FormLabel>Website</FormLabel>

						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />}
							/>
							<Input placeholder="Your website" value={guess.website} readOnly />
						</InputGroup>
					</FormControl>
                
					<FormControl>
						<FormLabel>Twitter</FormLabel>

						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />}
							/>
							<Input placeholder="Your Twitter" value={guess.twitterUrl} readOnly />
						</InputGroup>
					</FormControl>
                
					<FormControl>
						<FormLabel>GitHub</FormLabel>

						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								children={<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />}
							/>
							<Input placeholder="Your GitHub" value={guess.githubUrl} readOnly />
						</InputGroup>
					</FormControl>

				</Stack>
                
			</Card>

		</Box>
	);
};
