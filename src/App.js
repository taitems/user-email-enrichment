import './App.css';
import React, { useState } from 'react';
import enrich from 'enrich-email/dist/web/esm';
import { Flex, Box, Text, Heading, Input, InputGroup, InputRightElement, Button,Spinner, Link } from '@chakra-ui/react';
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
		<Flex minHeight="100vh" height="100%" width="100%" flexDirection={['column', null, 'row']}>
			<Flex width={['100%',null,'40%']} py={[20,16, 0]} textAlign={['center', null, 'left']} height={['auto',null,'100vh']} justifyContent="center" flexDirection="column">
				<Flex  alignItems="center" flexDirection="column" px="8">
					<Text textTransform="uppercase" letterSpacing="0.035em" fontWeight="semibold" color="purple.700" fontSize="14">Demo</Text>
					<Heading as="h1">Reverse Email Lookup</Heading>
					<Text as="h2" width="66%" minWidth="300px">A free, open source identity resolution alternative to tools like FullContact and Clearbit. </Text>
					<InputGroup size="md" mt="4" maxWidth="400px">
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
					<Text fontSize="sm" mt="2">
          Or try an <Link color="blue.700" onClick={() => { setInput(EXAMPLE1); search(EXAMPLE1); }}>example search</Link>
					</Text>
				</Flex>
			</Flex>
			<Flex width={['100%',null,'60%']} bg="gray.50" flexGrow="1" textAlign="center" flexDirection="column" alignItems="center">

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

				{!result && (
					<Text>Please enter an email address to begin.</Text>
				)}

				{loading && <Box position="fixed" right="20px" top="20px" marginLeft="-25px" zIndex="2">
					<Flex width="50px" height="50px" borderRadius="md" background="rgba(0,0,0,0.5)" alignItems="center" justifyContent="center">
						<Spinner color="white" />
					</Flex>
				</Box>}

				<Box opacity={loading ? .25 : 1}>
					{result && outputMode === 'form' && <RegisterCard result={result} />}
					{result && outputMode === 'profile' && <ProfileCard result={result} />}
					{result && outputMode === 'raw' && <RawData result={result} />}
				</Box>

			</Flex>
		</Flex>
	);
}

export default App;
