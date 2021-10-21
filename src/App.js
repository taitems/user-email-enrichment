import './App.css';
import React, { useState } from 'react';
import enrich from 'enrich-email/dist/web/esm';
import { Flex, Box, Text, Heading, Input, InputGroup, InputRightElement, Button,Spinner } from '@chakra-ui/react';
import { ProfileCard } from './components/ProfileCard';
import { RawData } from './components/RawData';
import { RegisterCard } from './components/RegisterCard';

function App() {

  

	const [input, setInput] = useState(null);
	const [outputMode, setOutputMode] = useState('profile');
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	const EXAMPLE1 = 'taitbrown@gmail.com';

	const search = email => {
		setLoading(true);
		enrich(email).then(data => {
			setResult(null);
			setResult(data);
		}).finally(() => {
			setLoading(false);
		});
	};

	const handleClick = () => {
		search(input);
	};

	return (
		<Flex minHeight="100vh" height="100%" width="100%">
			<Flex width="40%" justifyContent="center" flexDirection="column">
				<Box px="8">
					<Text textTransform="uppercase" letterSpacing="0.035em" fontWeight="semibold" color="purple.700" fontSize="14">Demo</Text>
					<Heading as="h1">Reverse Email Lookup</Heading>
					<Text as="h2" width="66%" minWidth="300px">A free, open source identity resolution alternative to tools like FullContact and Clearbit. </Text>
					<div>
						<InputGroup size="md" maxWidth="400px">
							<Input
								pr="4.5rem"
								type="email"
								placeholder="Enter an email address"
								value={input}
								onChange={e => { setInput(e.target.value); }} 
							/>
							<InputRightElement width="4.5rem">
								<Button onClick={handleClick}>Submit</Button>
							</InputRightElement>
						</InputGroup>
					</div>
          Or try an <Text color="blue.700" onClick={() => { setInput(EXAMPLE1); search(EXAMPLE1); }}>example search</Text>
				</Box>
			</Flex>
			<Flex width="60%" bg="gray.50" flexGrow="1" textAlign="center" flexDirection="column" alignItems="center">

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

				<Box position="relative">

					{!result && (
						<Text>Please enter an email address to begin.</Text>
					)}

					{loading && <Box position="absolute" left="50%" top="100px" marginLeft="-10px">
						<Spinner />
					</Box>}

					<Box opacity={loading ? .5 : 1}>
						{result && outputMode === 'form' && <RegisterCard result={result} />}
						{result && outputMode === 'profile' && <ProfileCard result={result} />}
						{result && outputMode === 'raw' && <RawData result={result} />}
					</Box>

				</Box>

			</Flex>
		</Flex>
	);
}

export default App;
