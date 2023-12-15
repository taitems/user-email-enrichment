import emailToName from 'email-to-name';
import { getCompanyFromEmail } from './getCompanyFromEmail.js';
import { getGitHubInfo } from './getGitHubInfo.js';
import { getGravatar } from './getGravatar.js';
import { transform } from './transform.js';

const enrich = async email => {
    if (!email) {
        throw 'error';
    } else {
        const nameFromEmail = emailToName.process(email);
        const companyFromEmail = getCompanyFromEmail(email);
        const ghProfile = await getGitHubInfo(email);
        const gravatar = await getGravatar(email);
        return transform(ghProfile, gravatar, nameFromEmail, companyFromEmail);
    }
};

export default enrich;
