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
                aboutMe,
                currentLocation,
                accounts
            }) => {
                return {
                    profileUrl,
                    preferredUsername,
                    name,
                    displayName,
                    urls,
                    photos,
                    aboutMe,
                    currentLocation,
                    accounts
                };
            }
        )
    );
};

module.exports = getGravatar;
