const pickBestName = (ghProfile, gravProfile, inferredName) => {
    const gravatarName = gravProfile?.[0]?.name?.formatted;
    const gravatarDisplayName = gravProfile?.[0]?.displayName;
    const githubName = ghProfile?.name;
    return gravatarName || githubName || gravatarDisplayName || inferredName;
};

module.exports = pickBestName;
