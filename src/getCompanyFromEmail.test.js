import { getCompanyFromEmail } from './getCompanyFromEmail';

test('Company detection', () => {
    expect(getCompanyFromEmail('hello@gmail.com')).toBe(null);
    expect(getCompanyFromEmail('hello@company.com')).toBe('company.com');
    expect(getCompanyFromEmail('hello@acloud.guru')).toBe('acloud.guru');
});
