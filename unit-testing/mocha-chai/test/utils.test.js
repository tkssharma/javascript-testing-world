const { removeDuplicates, stringReverse } = require('../src/utils');
const expect = require('chai').expect;

describe('Array operations', function() {
	describe('remove dups', function() {

    it('should remove duplicates from array', function() {
			var result = removeDuplicates([ 1, 2, 2, 2 ]);
			var out = [ 1, 2 ];
			expect(result).to.deep.equal(out);
		});

		it('should return null if null is passes', function() {
			var result = removeDuplicates(null);
			expect(result).to.deep.equal(null);
		});

    it('should remove duplicates from array', function() {
			var result = removeDuplicates([1]);
			expect(result).to.deep.equal([1]);
		});

    it('should return empty array for [] input', function() {
			var result = removeDuplicates([]);
			expect(result).to.deep.equal([]);
		});

    it('should remove dups from array', function() {
			var result = removeDuplicates([1,1,1,1,1,1]);
			expect(result).to.deep.equal([1]);
		});
	});
});

describe('String revers operations', function() {
	describe('string reverse', function() {

    it('should return empty "" from "" as input ', function() {
			var result = stringReverse('');
			expect(result).to.deep.equal('');
		});

		it('should return empty "ab" from "ba" as input ', function() {
			var result = stringReverse('ba');
			expect(result).to.deep.equal('ab');
		});

    it('should return empty "123" from "321" as input ', function() {
			var result = stringReverse('321');
			expect(result).to.deep.equal('123');
		});
	});
});
