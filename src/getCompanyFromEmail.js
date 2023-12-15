import freemail from 'freemail-webpack';

const getCompanyFromEmail = email => {
    const isWebmail = freemail.isDisposable(email) || freemail.isFree(email);
    return isWebmail ? null : email.split('@')[1];
};

export { getCompanyFromEmail };
