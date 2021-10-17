import './App.css';
import React, { useState } from 'react';
import enrich from 'enrich-email/dist/web/esm';
import { Flex, Box, Text, Heading, Input, Button } from "@chakra-ui/react"
// import { FakeProfile } from './components/FakeProfile';
import { FakeForm } from './components/FakeForm';
import { ProfileCard } from './components/ProfileCard';
import { RawData } from './components/RawData';

function App() {

  const [input, setInput] = useState('taitbrown@gmail.com');
  const [outputMode, setOutputMode] = useState('profile');
  const [result, setResult] = useState(null);

  const handleClick = () => {
    // console.log(input);
    enrich(input).then(data => {
      console.log(data)
      setResult(data);
    });
  }
  return (
    <Flex minHeight="100vh" height="100%" width="100%">
      <Flex width="40%" justifyContent="center" flexDirection="column">
        <Box px="8">
          <Text textTransform="uppercase" letterSpacing="0.035em" fontWeight="semibold" color="purple.700" fontSize="14">Demo</Text>
          <Heading as="h1">Reverse Email Lookup</Heading>
          <Text as="h2" width="66%" minWidth="300px">A free, open source identity resolution alternative to tools like FullContact and Clearbit. </Text>
          <div>
            <Input type="email" value={input} onChange={e => { setInput(e.target.value) }} />
            <Button onClick={handleClick}>Submit</Button>
          </div>
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

        {!result && (
          <Text>Please enter an email address to begin.</Text>
        )}

        {result && outputMode === 'form' && <FakeForm result={result} />}
        {/* {result && outputMode === 'profile' && <FakeProfile result={result} />} */}
        {result && outputMode === 'profile' && <ProfileCard result={result} />}
        {result && outputMode === 'raw' && <RawData result={result} />}
      </Flex>
    </Flex>
  )
}

export default App;
