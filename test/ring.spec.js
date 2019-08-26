import ring from '../';

const AM7 = [ 'A', 'C', 'E', 'G' ];

describe('A Ring test suite', () => {
	it('should create a ring', () => {
		const am7 = ring(AM7);

		expect(am7[0]).toBe('A');
		expect(am7[4]).toBe('A');
		expect(am7[-4]).toBe('A');

		expect(am7[3]).toBe('G');
		expect(am7[-1]).toBe('G');
		expect(am7[7]).toBe('G');
	});

	it('should return a new ring', () => {
		const am7 = ring(AM7);
		const am7b = ring(AM7);

		expect(am7).not.toBe(am7b);
	});

	it('should do what other arrays do', () => {
		const am7 = ring(AM7);

		expect(am7.slice(0, 2)).toEqual(expect.arrayContaining([ 'A', 'C' ]));

		expect(am7.length).toBe(4);

		expect(am7.pop()).toEqual('G');
		expect(am7).toEqual(expect.arrayContaining([ 'A', 'C', 'E' ]));
	});
});
