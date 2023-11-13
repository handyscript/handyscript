import {describe, expect} from "@jest/globals";
import "../lib/number";

describe("Number methods", () => {
	describe("toHuman", () => {
		it("should return a human readable string for numbers less than 1000", () => {
			expect((999).toHuman()).toEqual("999");
		});

		it("should return a human readable string for numbers greater than or equal to 1000", () => {
			expect((1000).toHuman()).toEqual("1K");
			expect((1500).toHuman()).toEqual("1.5K");
			expect((1000000).toHuman()).toEqual("1M");
			expect((1500000).toHuman()).toEqual("1.5M");
			expect((1000000000).toHuman()).toEqual("1B");
			expect((1500000000).toHuman()).toEqual("1.5B");
			expect((1000000000000).toHuman()).toEqual("1T");
			expect((1500000000000).toHuman()).toEqual("1.5T");
		});
	});

	describe("toReadable", () => {
		it("should return a readable string for numbers less than 1000", () => {
			expect((999).toReadable()).toEqual("999");
		});

		it("should return a readable string for numbers greater than or equal to 1000", () => {
			expect((1000).toReadable()).toEqual("1-000");
			expect((1500).toReadable()).toEqual("1-500");
			expect((1000000).toReadable()).toEqual("1-000-000");
			expect((1500000).toReadable()).toEqual("1-500-000");
			expect((1000000000).toReadable()).toEqual("1-000-000-000");
			expect((1500000000).toReadable()).toEqual("1-500-000-000");
			expect((1000000000000).toReadable()).toEqual("1-000-000-000-000");
			expect((1500000000000).toReadable()).toEqual("1-500-000-000-000");
		});

		it("should use the specified separator if provided", () => {
			expect((1000).toReadable("_")).toEqual("1_000");
			expect((1500).toReadable("_")).toEqual("1_500");
			expect((1000000).toReadable("_")).toEqual("1_000_000");
			expect((1500000).toReadable("_")).toEqual("1_500_000");
			expect((1000000000).toReadable("_")).toEqual("1_000_000_000");
			expect((1500000000).toReadable("_")).toEqual("1_500_000_000");
			expect((1000000000000).toReadable("_")).toEqual("1_000_000_000_000");
			expect((1500000000000).toReadable("_")).toEqual("1_500_000_000_000");
		});
	});
});