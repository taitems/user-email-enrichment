const bestName = (ghProfile, gravProfile, inferredName) => {
    const gravatarName = gravProfile?.[0]?.name?.formatted;
    const gravatarDisplayName = gravProfile?.[0]?.displayName;
    const githubName = ghProfile?.name;
    return gravatarName || githubName || gravatarDisplayName || inferredName;
};

const dropFalsey = obj => {
    return Object.keys(obj).reduce((acc, key) => {
        if (obj[key]) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

const transform = (ghProfile, gravProfile, inferredName, companyFromEmail) => {
    const bestGuess = {
        name: bestName(ghProfile, gravProfile, inferredName),
        displayName: gravProfile?.[0].displayName,
        company: ghProfile?.company || companyFromEmail,
        avatarUrl: ghProfile?.avatar_url || gravProfile?.[0].photos?.[0].value,
        location: gravProfile?.[0].currentLocation || ghProfile?.location,
        twitterUsername: ghProfile?.twitter_username,
        twitterUrl: ghProfile?.twitter_username ? `https://twitter.com/${ghProfile.twitter_username}` : null,
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
