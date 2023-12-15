import enrich from './src/index.js';

const data = await enrich('taitbrown@gmail.com');

console.log({ data });
