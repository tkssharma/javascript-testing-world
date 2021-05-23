const expect = require('chai').expect;
async function getFoo() {
	return 'foo';
}
describe('getFoo function', function() {
	it('testing getFoo async function ', function() {
    return getFoo().then(res => {
      expect(res).to.equal('foo')
    })
  });
});
describe('getFoo function', () => {
	it('testing getFoo async function ', async () => {
      const result = await getFoo();
      expect(result).to.equal('foo')
  });
});
