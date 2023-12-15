import { pickBestName } from './pickBestName';

test('Simple name heirarchy', async () => {
    const result = pickBestName({ name: 'Github Name' }, [{ name: { formatted: 'Gravatar Name' } }], 'myname');
    expect(result).toBe('Gravatar Name');
});
