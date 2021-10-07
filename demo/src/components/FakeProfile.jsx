import { Avatar } from '@chakra-ui/avatar';
import Icon from '@chakra-ui/icon';
import { Flex, Heading } from '@chakra-ui/layout';
import { LocationMarkerIcon, OfficeBuildingIcon, GlobeIcon } from '@heroicons/react/solid'
import React from 'react'

export const FakeProfile = ({result}) => {
    const { guess } = result;
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            shadow="lg"
            borderRadius="md"
            width={500}
            p="20"
        >
            <Avatar src={guess.avatar_url} name={guess.name || guess.displayName} size="2xl"/>
            {guess.displayName && <Heading as="h2" fontSize="lg" color="gray.500" my={2}>@{guess.displayName}</Heading>}
            <Heading as="h1">
                {guess.name}
            </Heading>
            <p>
                {guess.bio}
            </p>
            {guess.location && (
                <Flex alignItems="center" color="gray.600">
                    <Icon color="gray.400" as={LocationMarkerIcon} w={4} h={4} />{guess.location}
                </Flex>
            )}
            {guess.company && (
                <Flex alignItems="center" color="gray.600">
                    <Icon color="gray.400" as={OfficeBuildingIcon} w={4} h={4} />{guess.company}
                </Flex>
            )}
            {guess.website && (
                <Flex alignItems="center" color="gray.600">
                    <Icon color="gray.400" as={GlobeIcon} w={4} h={4} />{guess.website}
                </Flex>
            )}
        </Flex>
    )
}
