type ProfileGuess = {
    name?: string
    bio?: string
    displayName?: string
    company?: string
    location?: string
    avatarUrl?: URL
    twitterUrl?: URL
    twitterUsername?: string
    githubUrl?: URL
    githubUsername?: string
    website?: URL
}
type GitHubProfile = {
    username?: string
    avatar_url?: URL
    profile_url?: URL
    website?: URL
    name?: string
    location?: string
    company?: string
    bio?: string
    twitter_username?: string
    orgs?: array
}
type GravatarPhoto = {
    value: URL,
    type: string
}
type GravatarUrl = {
    value: URL,
    title: string
}
type GravatarProfile = {
    profileUrl?: string
    preferredUsername?: string
    name?: {
        givenName?: string
        familyName?: string,
        formatted: string
    }
    displayName?: string
    urls?: [GravatarUrl]
    photos?: [GravatarPhoto]
}
type Profile = {
    guess?: ProfileGuess,
    profiles?: {
        github?: GitHubProfile,
        gravatar?: GravatarProfile
    }
};
declare function enrich(email: string): Profile