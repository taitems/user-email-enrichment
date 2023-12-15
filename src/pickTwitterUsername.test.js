import { pickTwitterUsername } from './pickTwitterUsername.js';

const GITHUB_TWITTER = 'fakeone';
const GRAVATAR_TWITTER = 'faketwo';

const githubProfile = { twitter_username: GITHUB_TWITTER };
const gravatarProfile = [
    {
        accounts: [
            {
                deliberately: 'empty'
            },
            {
                domain: 'twitter.com',
                display: `@${GRAVATAR_TWITTER}`,
                url: `http://twitter.com/${GRAVATAR_TWITTER}`,
                username: GRAVATAR_TWITTER,
                verified: 'true',
                shortname: 'twitter'
            }
        ]
    }
];

test('Get from github', async () => {
    const result = pickTwitterUsername(githubProfile, null);
    expect(result).toBe(GITHUB_TWITTER);
});

test('Get from gravatar', async () => {
    const result = pickTwitterUsername(null, gravatarProfile);
    expect(result).toBe(GRAVATAR_TWITTER);
});

test('Prefer github', async () => {
    const result = pickTwitterUsername(githubProfile, gravatarProfile);
    expect(result).toBe(GITHUB_TWITTER);
});
