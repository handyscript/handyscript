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
});