import {describe, expect} from "@jest/globals";
import "../lib/date";
// import { AxiosStatic } from "axios";

describe("Date methods", () => {
	// Mock axios for TypeScript
	// const mockedAxios = jest.genMockFromModule<Partial<AxiosStatic>>("axios");
	// jest.mock("axios", () => mockedAxios);

	// // warn the tester to check his machine date if it set correctly.
	// console.warn("Please make sure your machine date is set correctly Before running this test.");

	// describe("timestamp", () => {
	// 	afterEach(() => {
	// 		// Clear mock implementations and reset mock history
	// 		jest.clearAllMocks();
	// 	});

	// 	it("should fetch and parse the timestamp correctly", async () => {
	// 		const MOCKED_DATE = "2021-11-15T00:00:00.000000+00:00";
	// 		// Mock the axios.get implementation
	// 		jest.spyOn(mockedAxios, "get").mockResolvedValue({
	// 			data: {
	// 				utc_datetime: MOCKED_DATE,
	// 				utc_offset: "-05:00",
	// 			},
	// 		});

	// 		// Set your desired timezone for testing
	// 		const timeZone = "America/New_York";

	// 		// Call the Date.timestamp method
	// 		const result = await Date.timestamp(timeZone);

	// 		// Calculate the expected date based on the mocked response
	// 		const expectedDate = new Date(MOCKED_DATE);
	// 		expectedDate.setHours(expectedDate.getHours() - 7);  // Adjust for the timezone offset
	// 		// Assert that the result matches the expected date - exclude milliseconds and seconds for api/network latency & delay
	// 		expect(result.getDate()).toEqual(expectedDate.getDate());
	// 		expect(result.getHours()).toEqual(expectedDate.getHours());
	// 		expect(result.getMinutes()).toEqual(expectedDate.getMinutes());

	// 		// Verify that axios.get was called with the correct URL
	// 		expect(mockedAxios.get).toHaveBeenCalledWith(`http://worldtimeapi.org/api/timezone/${timeZone}`);
	// 	});

	// 	it("should handle errors during fetching", async () => {
	// 		// Mock the axios.get implementation to simulate an error
	// 		jest.spyOn(mockedAxios, "get").mockRejectedValue(new Error("Failed to fetch data"));

	// 		// Set your desired timezone for testing
	// 		const timeZone = "Hello/World";

	// 		// Call the Date.timestamp method and expect it to throw an error
	// 		await expect(Date.timestamp(timeZone)).rejects.toThrow("Error fetching timestamp: AxiosError: Request failed with status code 404");
	// 	});
	// });

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
		const expectedMonthsAgo = (new Date().getFullYear() - date.getFullYear()) * 12 + new Date().getMonth() - date.getMonth();
		expect(date.monthsAgo()).toBe(expectedMonthsAgo);
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