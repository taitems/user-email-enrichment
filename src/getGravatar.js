const gravatar = require('gravatar.js');

const getGravatar = async email => {
    const profiles = await gravatar.profiles(email);

    return (
        profiles &&
        profiles.map(
            ({
                profileUrl,
                preferredUsername,
                name,
                displayName,
                urls,
                photos,
            }) => {
                return {
                    profileUrl,
                    preferredUsername,
                    name,
                    displayName,
                    urls,
                    photos,
                };
            }
        )
    );
};

module.exports = getGravatar;
