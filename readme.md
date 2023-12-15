![npm](https://img.shields.io/npm/v/enrich-email)
![npm](https://img.shields.io/npm/dw/enrich-email)
![Build Status](https://img.shields.io/github/workflow/status/taitems/user-email-enrichment/Tests%20CI/main)
![GitHub Sponsors](https://img.shields.io/github/sponsors/taitems)

![user-enrichment-about](https://user-images.githubusercontent.com/234593/135028707-9f1a5f60-0190-4cd4-86f6-8aa194f6e6bc.png)

#### [VIEW DEMO](https://taitems.github.io/user-email-enrichment/)

# User Email Enrichment
A free, open source alternative to FullContact, Clearbit etc. that relies only on information that has been shared publicly by the user. No authentication is required.


## Installation
Add to your project using your favourite package manager

`yarn add enrich-email` or `npm install enrich-email`

## Examples 

### Node

```js
import enrich from 'enrich-email';

const data = await enrich('taitbrown@gmail.com');

console.log(data);

// {
//   guess: {
//     name: 'Tait Brown',
//     displayName: 'taitems',
//     company: 'A Cloud Guru',
//     avatarUrl: 'https://avatars.githubusercontent.com/u/234593?v=4',
//     location: 'Melbourne, Australia',
//     twitterUsername: 'taitems',
//     twitterUrl: 'https://twitter.com/taitems',
//     githubUsername: 'taitems',
//     githubUrl: 'https://github.com/taitems'
//   },
//   profiles: {
//     github: {
//       username: 'taitems',
//       avatar_url: 'https://avatars.githubusercontent.com/u/234593?v=4',
//       profile_url: 'https://github.com/taitems',
//       website: 'http://taitbrown.com',
// --- TRIMMED ---
```


## How does it work
- Search for users by email address on **GitHub**
- Search for users by email address on **Gravatar**
- Attempt to [infer the users name](https://github.com/taitems/email-to-name) from the email string, based on common patterns such as `first.last@company.com`
- Attempt to infer the company name from the email address domain, by skipping common webmail providers (gmail, yahoo etc.)
- Merge together all discovered and inferred information based on what was available

![user-enrichment](https://user-images.githubusercontent.com/234593/135011819-f7fdb91c-d32a-4371-b5b9-f799235a8f05.png)


## FAQs

#### Is this rate limited?
This library is subject to the rate limits of the downstream services it calls (GitHub and Gravatar to begin with). GitHub for example will lift the rate limit slightly higher if you provide an API key. This may be supported in a future version.

#### This seems creepy!
Not really a question, but okay! Keep in mind this only searching for publicly shared information by the user themselves. There are no secret, proprietary databases and backroom dealings. I do not host/own any of this information. It has not been scraped from address books, electoral rolls or CRMs.

#### It didn't find resolve the email address correctly?
As per the above, the accuracy is only as good as the publicly accessible information about a particular user. It makes a series of guesses and dynamically reprioritises results based on perceived accuracy (Pending release).


## Breaking chages
#### `1.0.0`
  - Changed type to `module`
  - Went to Node first approach, using `import` instead of `require`
#### `0.0.13`
 - Changed `guess.avatar_url` to `guess.avatarUrl` to standardise casing

## Contributors

- 🇦🇺 [Tait Brown](https://github.com/taitems) - Package creator/maintainer
- 🇮🇹 [Raffaele Calzà](https://github.com/raffaelecalza) - Got tests running on CI
- 🇯🇵 [Yuki Shindo](https://github.com/shinshin86) - Added better test coverage 
- 🇫🇷 [Thibaud Ducasse](https://github.com/tducasse) - DX (developer experience)