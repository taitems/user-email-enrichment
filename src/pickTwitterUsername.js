const pickTwitterUsername = (ghProfile, gravProfile) => {
    const fromGithub = ghProfile?.twitter_username;
    const gravatarAccounts = gravProfile?.[0].accounts;
    const gravatarTwitters = gravatarAccounts
        ?.map(i => {
            return i.shortname === 'twitter' ? i.username : null;
        })
        .filter(Boolean);
    const fromGravatar = gravatarTwitters && gravatarTwitters[0];
    return fromGithub || fromGravatar;
};

export { pickTwitterUsername };
