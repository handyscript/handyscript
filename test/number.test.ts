import { describe, expect } from '@jest/globals';
import '../lib/number';

describe('Number methods', () => {
	describe('toHuman', () => {
		it('should return a human readable string for numbers less than 1000', () => {
			expect((999).toHuman()).toEqual('999');
		});

		it('should return a human readable string for numbers greater than or equal to 1000', () => {
			expect((1000).toHuman()).toEqual('1K');
			expect((1500).toHuman()).toEqual('1.5K');
			expect((1000000).toHuman()).toEqual('1M');
			expect((1500000).toHuman()).toEqual('1.5M');
			expect((1000000000).toHuman()).toEqual('1B');
			expect((1500000000).toHuman()).toEqual('1.5B');
			expect((1000000000000).toHuman()).toEqual('1T');
			expect((1500000000000).toHuman()).toEqual('1.5T');
		});
	});

	describe('toReadable', () => {
		it('should return a readable string for numbers less than 1000', () => {
			expect((999).toReadable()).toEqual('999');
		});

		it('should return a readable string for numbers greater than or equal to 1000', () => {
			expect((1000).toReadable()).toEqual('1-000');
			expect((1500).toReadable()).toEqual('1-500');
			expect((1000000).toReadable()).toEqual('1-000-000');
			expect((1500000).toReadable()).toEqual('1-500-000');
			expect((1000000000).toReadable()).toEqual('1-000-000-000');
			expect((1500000000).toReadable()).toEqual('1-500-000-000');
			expect((1000000000000).toReadable()).toEqual('1-000-000-000-000');
			expect((1500000000000).toReadable()).toEqual('1-500-000-000-000');
		});

		it('should use the specified separator if provided', () => {
			expect((1000).toReadable('_')).toEqual('1_000');
			expect((1500).toReadable('_')).toEqual('1_500');
			expect((1000000).toReadable('_')).toEqual('1_000_000');
			expect((1500000).toReadable('_')).toEqual('1_500_000');
			expect((1000000000).toReadable('_')).toEqual('1_000_000_000');
			expect((1500000000).toReadable('_')).toEqual('1_500_000_000');
			expect((1000000000000).toReadable('_')).toEqual('1_000_000_000_000');
			expect((1500000000000).toReadable('_')).toEqual('1_500_000_000_000');
		});
	});
	describe('toWords', () => {
		it('should convert an integer into words', () => {
			expect((0).toWords()).toEqual('zero');

			expect((1).toWords()).toEqual('one');

			expect((10).toWords()).toEqual('ten');

			expect((22).toWords()).toEqual('twenty-two');

			expect((100).toWords()).toEqual('one hundred');

			expect((999).toWords()).toEqual('nine hundred ninety-nine');

			expect((8888).toWords()).toEqual(
				'eight thousand, eight hundred eighty-eight'
			);
		});

		it('should throw a TypeError for non-finite numbers', () => {
			expect(() => {
				Infinity.toWords();
			}).toThrow(TypeError);

			expect(() => {
				(-Infinity).toWords();
			}).toThrow(TypeError);

			// Add more test cases for non-finite numbers
		});

		it('should throw a RangeError for numbers outside the safe range', () => {
			expect(() => {
				(Number.MAX_SAFE_INTEGER + 1).toWords();
			}).toThrow(RangeError);

			expect(() => {
				(-Number.MAX_SAFE_INTEGER - 1).toWords();
			}).toThrow(RangeError);

			// Add more test cases for numbers outside the safe range
		});
	});

	describe('isFinite', () => {
		it('should return true for a finite number', () => {
			expect((10).isFinite()).toBe(true);
			expect((-5).isFinite()).toBe(true);
			// Add more test cases for finite numbers
		});

		it('should return false for non-finite numbers', () => {
			expect(Infinity.isFinite()).toBe(false);
			expect((-Infinity).isFinite()).toBe(false);
			expect(NaN.isFinite()).toBe(false);
			// Add more test cases for non-finite numbers
		});
	});

	describe('isSafeNumber', () => {
		it('should return true for a safe number', () => {
			expect((10).isSafeNumber()).toBe(true);
			expect(Number.MAX_SAFE_INTEGER.isSafeNumber()).toBe(true);
			// Add more test cases for safe numbers
		});

		it('should return false for a number outside the safe range', () => {
			expect((Number.MAX_SAFE_INTEGER + 1).isSafeNumber()).toBe(false);
			expect((-Number.MAX_SAFE_INTEGER - 1).isSafeNumber()).toBe(false);
			// Add more test cases for numbers outside the safe range
		});
	});
});
