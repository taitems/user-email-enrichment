import './App.css';
import React, { useState } from 'react';
import enrich from 'enrich-email/dist/web/esm';
import { Flex, Box, Text, Heading, Input, InputGroup, InputRightElement, Button,Spinner, Link, Tooltip, useToast } from '@chakra-ui/react';
import { ProfileCard } from './components/ProfileCard';
import { RawData } from './components/RawData';
import { RegisterCard } from './components/RegisterCard';
import { GitHubIcon } from './components/GitHubIcon';

function App() {

  

	const [input, setInput] = useState(null);
	const [outputMode, setOutputMode] = useState('profile');
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const EXAMPLE1 = 'taitbrown@gmail.com';

	const search = email => {
		setLoading(true);
		enrich(email).then(data => {
			setResult(null);
			setResult(data);
		})
			.catch(() => {
				toast({
					title: 'Oops, an error has occurred',
					position: 'top',
					status: 'danger',
					variant: 'subtle',
					isClosable: true,
				});
			}) 
			.finally(() => {
				setLoading(false);
			});
	};

	const handleSubmit = e => {
		search(input);
		e.preventDefault();
	};

	return (
		<Flex minHeight="100vh" height="100%" width="100%" flexDirection={['column', null, null,  'row']}>
			<Flex width={['100%',null, null, '40%']} py={[20, null, null, 0]} textAlign={['center', null, null,  'left']} height={['auto',null, null, '100vh']} justifyContent="center" flexDirection="column">
				<Box position="absolute" top="3" left="8">
					<Tooltip label="View on GitHub" placement="right-end">
						<Link href="https://github.com/taitems/user-email-enrichment" target="_blank" rel="noopener">
							<GitHubIcon w={6} h={6} color="gray.800" />
						</Link>
					</Tooltip>
				</Box>
				<Flex  alignItems={['center',null, null, 'flex-start']} flexDirection="column" px="8">
					<Text textTransform="uppercase" letterSpacing="0.035em" fontWeight="semibold" color="purple.500" fontSize="14" mb="3">Demo</Text>
					<Heading as="h1">Reverse Email Lookup</Heading>
					<Text as="h2" width="66%" minWidth="300px" mb="3">A free, open source identity resolution alternative to tools like FullContact and Clearbit. </Text>
					<Box as="form" onSubmit={handleSubmit} w="100%" maxWidth="400px">
						<InputGroup size="md" mt="4" w="100%">
							<Input
								pr="5rem"
								type="email"
								placeholder="Enter an email address"
								value={input}
								onChange={e => { setInput(e.target.value); }} 
							/>
							<InputRightElement width="5rem">
								<Button type="submit">Submit</Button>
							</InputRightElement>
						</InputGroup>
					</Box>
					<Text fontSize="sm" mt="2">
						Or try an <Link color="blue.700" onClick={() => { setInput(EXAMPLE1); search(EXAMPLE1); }}>example search</Link>
					</Text>
				</Flex>
			</Flex>
			<Flex width={['100%',null, null, '60%']} bg="gray.50" flexGrow="1" textAlign="center" flexDirection="column" alignItems="center">

				<Box mt="8" mb="12">
					<Button
						onClick={() => setOutputMode('form')}
						variant={outputMode === 'form' ? 'solid' : 'ghost'}
					>
						Register
					</Button>
					<Button onClick={() => setOutputMode('profile')}
						variant={outputMode === 'profile' ? 'solid' : 'ghost'}>Profile</Button>
					<Button onClick={() => setOutputMode('raw')}
						variant={outputMode === 'raw' ? 'solid' : 'ghost'}>Raw data</Button>
				</Box>


				{loading && <Box position="fixed" right="20px" top="20px" marginLeft="-25px" zIndex="2">
					<Flex width="50px" height="50px" borderRadius="md" background="rgba(0,0,0,0.5)" alignItems="center" justifyContent="center">
						<Spinner color="white" />
					</Flex>
				</Box>}


				<Box opacity={loading ? .25 : 1}>

					{!result && (
						<Text>Please enter an email address to begin.</Text>
					)}

					{result && outputMode === 'form' && <RegisterCard result={result} />}
					{result && outputMode === 'profile' && <ProfileCard result={result} />}
					{result && outputMode === 'raw' && <RawData result={result} />}
				</Box>

			</Flex>
		</Flex>
	);
}

export default App;
