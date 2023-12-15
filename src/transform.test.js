import { transform } from './transform.js';

// Company test data
const EXAMPLE_DOMAIN = 'example.com';

// GitHub test data
const GITHUB_USERNAME = 'Test Github Username';
const GITHUB_NAME = 'Test Github Name';
const GITHUB_AVATAR_URL = `http://${EXAMPLE_DOMAIN}/github-avatar-url`;
const GITHUB_PROFILE_URL = `http://${EXAMPLE_DOMAIN}/github-profile-url`;

// Gravatar test data
const GRAVATAR_DISPLAY_NAME = 'Test Gravatar Display Name';
const GRAVATAR_PREFERRED_USERNAME = 'Test Gravatar Preferred Username';
const GRAVATAR_PROFILE_URL = `http://${EXAMPLE_DOMAIN}/gravatar-profile-url`;
const GRAVATAR_BIO = 'Test Gravatar Bio';
const GRAVATAR_LOCATION = 'Test Gravatar Location';

const generateTestData = () => {
    const ghProfile = {
        username: GITHUB_USERNAME,
        avatar_url: GITHUB_AVATAR_URL,
        profile_url: GITHUB_PROFILE_URL,
        website: '',
        name: GITHUB_NAME,
        location: null,
        company: null,
        bio: null,
        twitter_username: null,
        orgs: []
    };

    const gravProfile = [
        {
            profileUrl: GRAVATAR_PROFILE_URL,
            preferredUsername: GRAVATAR_PREFERRED_USERNAME,
            name: [],
            displayName: GRAVATAR_DISPLAY_NAME,
            urls: [],
            photos: [
                {
                    value: `http://${EXAMPLE_DOMAIN}/gravatar-photos-thumbnail-url`,
                    type: 'thumbnail'
                }
            ]
        }
    ];

    const gravProfileRich = [
        {
            profileUrl: GRAVATAR_PROFILE_URL,
            preferredUsername: GRAVATAR_PREFERRED_USERNAME,
            name: [],
            displayName: GRAVATAR_DISPLAY_NAME,
            urls: [],
            aboutMe: GRAVATAR_BIO,
            currentLocation: GRAVATAR_LOCATION,
            photos: [
                {
                    value: `http://${EXAMPLE_DOMAIN}/gravatar-photos-thumbnail-url`,
                    type: 'thumbnail'
                }
            ]
        }
    ];

    const nameFromEmail = 'test';

    const companyFromEmail = EXAMPLE_DOMAIN;

    return { ghProfile, gravProfile, gravProfileRich, nameFromEmail, companyFromEmail };
};

test('Basic Gravtar Profile', async () => {
    const { ghProfile, gravProfile, nameFromEmail, companyFromEmail } = generateTestData();
    const { guess, profiles } = await transform(ghProfile, gravProfile, nameFromEmail, companyFromEmail);

    // guess
    expect(guess.name).toBe(GITHUB_NAME);
    expect(guess.displayName).toBe(GRAVATAR_DISPLAY_NAME);
    expect(guess.company).toBe(EXAMPLE_DOMAIN);
    expect(guess.avatarUrl).toBe(GITHUB_AVATAR_URL);
    expect(guess.githubUrl).toBe(GITHUB_PROFILE_URL);
    expect(guess.githubUsername).toBe(GITHUB_USERNAME);

    // profile
    expect(Object.keys(profiles).length).toBe(2);

    const { github, gravatar } = profiles;
    const { ghProfile: ghProfile2, gravProfile: gravProfile2 } = generateTestData();

    // Check github data(profiles)
    expect(github.username).toBe(ghProfile2.username);
    expect(github.avatar_url).toBe(ghProfile2.avatar_url);
    expect(github.profile_url).toBe(ghProfile2.profile_url);
    expect(github.website).toBe(ghProfile2.website);
    expect(github.name).toBe(ghProfile2.name);
    expect(github.location).toBe(ghProfile2.location);
    expect(github.company).toBe(ghProfile2.company);
    expect(github.bio).toBe(ghProfile2.bio);
    expect(github.twitter_username).toBe(ghProfile2.twitter_username);
    expect(github.orgs.length).toBe(0);

    // Check gravatar data(profiles)
    expect(gravatar[0].profileUrl).toBe(gravProfile2[0].profileUrl);
    expect(gravatar[0].preferredUsername).toBe(gravProfile2[0].preferredUsername);
    expect(gravatar[0].name.length).toBe(0);
    expect(gravatar[0].displayName).toBe(gravProfile2[0].displayName);
    expect(gravatar[0].urls.length).toBe(0);
    expect(gravatar[0].photos.length).toBe(1);
    expect(gravatar[0].photos[0].value).toBe(gravProfile2[0].photos[0].value);
    expect(gravatar[0].photos[0].type).toBe(gravProfile2[0].photos[0].type);
});

test('Richer Gravtar Profile', async () => {
    const { ghProfile, gravProfileRich, nameFromEmail, companyFromEmail } = generateTestData();
    const { guess } = await transform(ghProfile, gravProfileRich, nameFromEmail, companyFromEmail);

    // guess
    expect(guess.bio).toBe(GRAVATAR_BIO);
    expect(guess.location).toBe(GRAVATAR_LOCATION);
});

test('If no argument is given', async () => {
    const { guess, profiles } = await transform();

    // guess
    expect(guess).toStrictEqual({});

    // profiles
    expect(Object.keys(profiles).length).toBe(2);
    expect(profiles.github).toBeUndefined();
    expect(profiles.gravatar).toBeUndefined();
});
