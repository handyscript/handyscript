import {describe, expect} from "@jest/globals";
import "../lib/date";

describe("Date methods", () => {
	describe("timestamp", () => {
		it("should return a Date object", async () => {
			const date = await Date.timestamp();
			expect(date).toBeInstanceOf(Date);
		});

		it("should return a Date object in the specified timezone", async () => {
			const date = await Date.timestamp("America/New_York");
			expect(date.toLocaleString("en-US", { timeZone: "America/New_York" })).toEqual(date.toLocaleString("en-US"));
		});
	});

	describe("daysInMonth", () => {
		it("should return the correct number of days in the month", () => {
			const date = new Date(2022, 1, 1); // February 1, 2022
			expect(date.daysInMonth()).toEqual(28);
		});
	});

	describe("daysInYear", () => {
		it("should return the correct number of days in the year", () => {
			const date = new Date(2022, 0, 1); // January 1, 2022
			expect(date.daysInYear()).toEqual(365);
		});
	});
});describe("isLeapYear", () => {
	it("should return true if the year is a leap year", () => {
		const date = new Date(2020, 0, 1); // January 1, 2020
		expect(date.isLeapYear()).toBe(true);
	});

	it("should return false if the year is not a leap year", () => {
		const date = new Date(2021, 0, 1); // January 1, 2021
		expect(date.isLeapYear()).toBe(false);
	});
});

describe("yearsAgo", () => {
	it("should return the correct number of years ago", () => {
		const date = new Date(2010, 0, 1); // January 1, 2010
		expect(date.yearsAgo()).toBe(new Date().getFullYear() - 2010);
	});
});

describe("monthsAgo", () => {
	it("should return the correct number of months ago", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		expect(date.monthsAgo()).toBe(new Date().getMonth() + 1);
	});
});

describe("weeksAgo", () => {
	it("should return the correct number of weeks ago", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		expect(date.weeksAgo()).toBe(Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24 * 7)));
	});
});

describe("daysAgo", () => {
	it("should return the correct number of days ago", () => {
		const date = new Date(2022, 0, 1); // January 1, 2022
		expect(date.daysAgo()).toBe(Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24)));
	});
});