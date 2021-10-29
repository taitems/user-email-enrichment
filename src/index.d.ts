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
    orgs?: [any]
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
    aboutMe?: string
    currentLocation?: string
    urls?: [GravatarUrl]
    photos?: [GravatarPhoto]
    accounts: [any]
}
type Profile = {
    guess?: ProfileGuess,
    profiles?: {
        github?: GitHubProfile,
        gravatar?: GravatarProfile
    }
};
export declare function enrich(email: string): Profile