const enrich = require('./index');

test('throws on empty', () => {
    return expect(enrich('broken@company.com')).rejects.toMatch('error');
})