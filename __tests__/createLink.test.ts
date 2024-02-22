import createLink from '../util/createLink'
describe('testing createLink', () => {
  it('creates a link from a string', () => {
    const title = 'my test post'
    expect(createLink(title)).toBe(`/thoughts/my-test-post/`)
  })
});
