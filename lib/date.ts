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
     * Returns the number of days in the month
     */
    daysInMonth(): number;
    /**
     * Returns the number of days in the year
     */
    daysInYear(): number;
  }
}

Date.timestamp = async function (timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone): Promise<Date> {
  const { data } = await axios.get(`https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=${timeZone}`);
  return new Date(data.fulldate);
};

Date.prototype.daysInMonth = function () {
  return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
};

Date.prototype.daysInYear = function () {
  return new Date(this.getFullYear(), 12, 0).getDate();
};

export default Date;
// END: be15d9bcejpp