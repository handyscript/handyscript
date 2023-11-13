import {describe, expect} from "@jest/globals";
import "../lib/math";

describe("Math methods", () => {
	describe("randomInt", () => {
		it("should return a random integer between min and max", () => {
			const randomInt = Math.randomInt(10, 1);
			expect(randomInt).toBeGreaterThanOrEqual(1);
			expect(randomInt).toBeLessThanOrEqual(10);
		});

		it("should return a random integer between 0 and max if min is not provided", () => {
			const randomInt = Math.randomInt(10);
			expect(randomInt).toBeGreaterThanOrEqual(0);
			expect(randomInt).toBeLessThanOrEqual(10);
		});
	});

	describe("clamp", () => {
		it("should return the value if it is between min and max", () => {
			const value = 5;
			const min = 1;
			const max = 10;
			const result = Math.clamp(value, min, max);
			expect(result).toEqual(value);
		});

		it("should return the min value if the value is less than min", () => {
			const value = -5;
			const min = 1;
			const max = 10;
			const result = Math.clamp(value, min, max);
			expect(result).toEqual(min);
		});

		it("should return the max value if the value is greater than max", () => {
			const value = 15;
			const min = 1;
			const max = 10;
			const result = Math.clamp(value, min, max);
			expect(result).toEqual(max);
		});
	});

	describe("lerp", () => {
		it("should return the start value if t is 0", () => {
			const start = 0;
			const end = 100;
			const t = 0;
			const result = Math.lerp(start, end, t);
			expect(result).toEqual(start);
		});

		it("should return the end value if t is 1", () => {
			const start = 0;
			const end = 100;
			const t = 1;
			const result = Math.lerp(start, end, t);
			expect(result).toEqual(end);
		});

		it("should return the value between start and end based on t", () => {
			const start = 0;
			const end = 100;
			const t = 0.5;
			const result = Math.lerp(start, end, t);
			expect(result).toEqual(50);
		});
	});

	describe("map", () => {
		it("should return the outputMin value if the value is equal to inputMin", () => {
			const value = 0;
			const inputMin = 0;
			const inputMax = 100;
			const outputMin = 0;
			const outputMax = 1;
			const result = Math.map(value, inputMin, inputMax, outputMin, outputMax);
			expect(result).toEqual(outputMin);
		});

		it("should return the outputMax value if the value is equal to inputMax", () => {
			const value = 100;
			const inputMin = 0;
			const inputMax = 100;
			const outputMin = 0;
			const outputMax = 1;
			const result = Math.map(value, inputMin, inputMax, outputMin, outputMax);
			expect(result).toEqual(outputMax);
		});

		it("should return the mapped value between outputMin and outputMax based on the input range", () => {
			const value = 50;
			const inputMin = 0;
			const inputMax = 100;
			const outputMin = 0;
			const outputMax = 1;
			const result = Math.map(value, inputMin, inputMax, outputMin, outputMax);
			expect(result).toEqual(0.5);
		});
	});
});