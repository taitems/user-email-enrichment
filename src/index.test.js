const enrich = require('./index');

test('throws on empty', () => {
    return expect(enrich()).rejects.toMatch('error');
});
