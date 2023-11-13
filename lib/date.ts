import axios from "axios";

declare global {
  interface DateConstructor {
    /**
     * Returns the accurate date based on the current timezone
     *@param timeZone The timezone to use like: `America/New_York`
     */
    timestamp(timeZone?: string): Promise<Date>;
  }

  interface Date {
    /**
     * Returns true if the year is a leap year
     */
    isLeapYear(): boolean;

    /**
     * Returns the number of days in the month
     */
    daysInMonth(): number;
    
    /**
     * Returns the number of days in the year
     */
    daysInYear(): number;

    /**
     * Return how many years ago the date was till today
     */
    yearsAgo(): number;

    /**
     * Return how many months ago the date was till today
     */
    monthsAgo(): number;

    /**
     * Return how many weeks ago the date was till today
     */
    weeksAgo(): number;

    /**
     * Return how many days ago the date was till today
     */
    daysAgo(): number;
  }
}

Date.timestamp = async function (timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone): Promise<Date> {
	const { data } = await axios.get(`https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=${timeZone}`);
	return new Date(data.fulldate);
};

Date.prototype.isLeapYear = function () {
	const year = this.getFullYear();
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

Date.prototype.daysInMonth = function () {
	// check if it's February and the year is leap
	if (this.getMonth() === 1 && this.isLeapYear()) return 29;
	return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
};

Date.prototype.daysInYear = function () {
	return this.isLeapYear() ? 366 : 365;
};

Date.prototype.yearsAgo = function () {
	const today = new Date();
	return today.getFullYear() - this.getFullYear();
};

Date.prototype.monthsAgo = function () {
	const today = new Date();
	return (today.getFullYear() - this.getFullYear()) * 12 + today.getMonth() - this.getMonth();
};

Date.prototype.weeksAgo = function () {
	const today = new Date();
	return Math.floor((today.getTime() - this.getTime()) / (1000 * 60 * 60 * 24 * 7));
};

Date.prototype.daysAgo = function () {
	const today = new Date();
	return Math.floor((today.getTime() - this.getTime()) / (1000 * 60 * 60 * 24));
};

export default Date;