const emailToName = require('email-to-name');
const getCompanyFromEmail = require('./getCompanyFromEmail');
const getGitHubInfo = require('./getGitHubInfo');
const getGravatar = require('./getGravatar');
const transform = require('./transform');

const enrich = async email => {
    if (!email) {
        throw 'error';
    } else {
        const nameFromEmail = emailToName.process(email);
        const companyFromEmail = getCompanyFromEmail(email);
        const ghProfile = await getGitHubInfo(email);
        const gravatar = await getGravatar(email);
        const data = transform(ghProfile, gravatar, nameFromEmail, companyFromEmail);
        return data;
    }
};

module.exports = enrich;
