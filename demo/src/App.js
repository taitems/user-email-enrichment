import './App.css';
import React, { useState } from 'react';
import enrich from 'enrich-email/dist/web/esm';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FakeProfile } from './components/FakeProfile';

function App() {

  const [input, setInput] = useState('taitbrown@gmail.com');
  const [result, setResult] = useState(null);

  const handleClick = () => {
      // console.log(input);
      enrich(input).then(data => {
        console.log(data)
        setResult(data);
      });
  }
  return (
    <>
      <div>
          <Input type="email" value={input} onChange={e => { setInput(e.target.value)}} />
          <Button onClick={handleClick}>Submit</Button>
      </div>
      {result && <FakeProfile result={result} />}
    </>
  )
}

export default App;
