import React, { useState } from 'react';
import enrich from 'enrich-email/dist/web';

export const DemoInput = () => {
    const [input, setInput] = useState('taitbrown@gmail.com');

    console.log({enrich})

    const handleClick = () => {
        enrich(input).then(console.log);
    }
    return (
        <div>
            <input value={input} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}
