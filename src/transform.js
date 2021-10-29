const pickBestName = require('./pick/pickBestName');
const pickTwitterUsername = require('./pick/pickTwitterUsername');

const dropFalsey = obj => {
    return Object.keys(obj).reduce((acc, key) => {
        if (obj[key]) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

const transform = (ghProfile, gravProfile, inferredName, companyFromEmail) => {
    const twitterUsername = pickTwitterUsername(ghProfile, gravProfile);

    const bestGuess = {
        name: pickBestName(ghProfile, gravProfile, inferredName),
        displayName: gravProfile?.[0].displayName,
        company: ghProfile?.company || companyFromEmail,
        avatarUrl: ghProfile?.avatar_url || gravProfile?.[0].photos?.[0].value,
        location: gravProfile?.[0].currentLocation || ghProfile?.location,
        twitterUsername: twitterUsername,
        twitterUrl: twitterUsername ? `https://twitter.com/${twitterUsername}` : null,
        githubUrl: ghProfile?.profile_url,
        githubUsername: ghProfile?.username,
        bio: gravProfile?.[0].aboutMe || ghProfile?.bio,
        website: ghProfile?.website
    };
    return {
        guess: dropFalsey(bestGuess),
        profiles: {
            github: ghProfile,
            gravatar: gravProfile
        }
    };
};

module.exports = transform;
