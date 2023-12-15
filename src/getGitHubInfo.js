import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const getGitHubInfo = async email => {
    const data = {
        username: null,
        avatar_url: null,
        profile_url: null,
        website: null,
        name: null,
        location: null,
        company: null,
        bio: null,
        twitter_username: null,
        orgs: null
    };

    const githubResult = await octokit.rest.search.users({
        q: email
    });

    const ghProfile = githubResult.data.items[0];

    if (!ghProfile) {
        return null;
    }

    data.username = ghProfile.login;
    data.avatar_url = ghProfile.avatar_url;
    data.profile_url = ghProfile.html_url;

    const profile = await octokit.rest.users.getByUsername({
        username: data.username
    });

    data.website = profile.data.blog;
    data.name = profile.data.name;
    data.location = profile.data.location;
    data.company = profile.data.company;
    data.bio = profile.data.bio;
    data.twitter_username = profile.data.twitter_username;

    const orgs = await octokit.rest.orgs.listForUser({
        username: data.username
    });

    data.orgs = orgs.data;

    return data;
};

export { getGitHubInfo };
