const emailToName = require('email-to-name');
const getCompanyFromEmail = require('./getCompanyFromEmail');
const getGitHubInfo = require('./getGitHubInfo');
const getGravatar = require('./getGravatar');
const transform = require('./transform');

const enrich = async (email) => {

    console.log(`💧 Hydrating: ${email}`);

    return new Promise(async (resolve, reject) => {
        if (!email) {
            return reject()
        } else {

            const nameFromEmail = emailToName.process(email);
            const companyFromEmail = getCompanyFromEmail(email);
            const ghProfile = await getGitHubInfo(email);
            const gravatar = await getGravatar(email);

            const data = transform(ghProfile, gravatar, nameFromEmail, companyFromEmail);

            resolve(data);

        }
    });

}

module.exports = enrich;