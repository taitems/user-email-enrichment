import { FormControl, FormLabel } from '@chakra-ui/form-control'
import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Heading, Stack } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import { LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid'
import React from 'react'

export const RegisterCard = ({result}) => {
    const { guess } = result;
    return (
        <Box w="100%" maxWidth="400px">
        <Box
            textAlign="left"
            shadow="lg"
            borderRadius="md"
            p="4"
            w="100%"
        >
            <Heading size="md" mb="2">Create profile</Heading>

            <Stack spacing={4}>

            <FormControl isRequired>
                <FormLabel>Your name</FormLabel>
                <Input placeholder="Your name" value={guess.name} />
            </FormControl>
                
            <FormControl>
                <FormLabel>Company</FormLabel>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon color="gray.400" as={OfficeBuildingIcon} w={4} h={4} />}
                    />
                    <Input placeholder="Your company" value={guess.company} />
                </InputGroup>
            </FormControl>
                
            <FormControl>
                <FormLabel>Location</FormLabel>

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />}
                    />
                    <Input placeholder="Your location" value={guess.location} />
                </InputGroup>
            </FormControl>
                
            <FormControl>
                <FormLabel>Biography</FormLabel>

                <Textarea>{guess.bio}</Textarea>
            </FormControl>

            </Stack>


        </Box>
        </Box>
    )
}
