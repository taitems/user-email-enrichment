import enrich from './index.js';

test('throws on empty', () => {
    return expect(enrich()).rejects.toMatch('error');
});
