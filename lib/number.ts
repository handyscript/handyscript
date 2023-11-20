/// ------------------------------- HANDY NUMBER © HandyScript 6m/2d/23y -------------------------------
import Math from "./math";

declare global {
	interface Number {
		/**
		 * Returns a string representation of a number in human readable format. like 1K, 1M, 1B, 1T, etc.
		 */
		toHuman(): string;

		/**
		 * Returns a string representation of a number readable format. like 10-000, 1-000-000, 1-000-000-000, etc.
		 * @param separator The separator to be used. Default is `-`
		 */
		toReadable(separator?: string): string;

		/**
		 * Converts an integer into words.
		 * If number is decimal, the decimals will be removed.
		 * @example number = 12
		 * 					number.toWords() => 'twelve'
		 * @param {number|string} number
		 * @returns {string}
		 */
		toWords(): string;

		/**
		 * is a finity number
		 * @example number = 10
		 * 					number.isFinite() => true
		 * @param {number|string} number
		 * @returns {boolean}
		 */
		isFinite(): boolean;

		/**
		 * is a save number
		 * @example
		 * number1 = 10
		 * number2 = Number.MAX_SAFE_INTEGER + 1 || - Number.MAX_SAFE_INTEGER -1
		 * number1.isSafeNumber() => true
		 * number2.isSafeNumber() => false
		 * @param {number|string} number
		 * @returns {boolean}
		 */
		isSafeNumber(): boolean;
	}
}

Number.prototype.toHuman = function (): string {
	const num = this.valueOf();
	const si = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "K" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "B" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "P" },
		{ value: 1e18, symbol: "E" }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	let i;
	for (i = si.length - 1; i > 0; i--) if (num >= si[i].value) break;
	return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
};

Number.prototype.toReadable = function (separator = "-"): string {
	const num = this.valueOf();
	const rx = /(\d+)(\d{3})/;
	return String(num).replace(/^\d+/, function (w) {
		while (rx.test(w)) {
			w = w.replace(rx, "$1" + separator + "$2");
		}
		return w;
	});
};

Number.prototype.isFinite = function (): boolean {
	return !(
		typeof this !== "number" ||
		this !== this ||
		this === Infinity ||
		this === -Infinity
	);
};

Number.prototype.isSafeNumber = function (): boolean {
	return typeof this === "number" && Math.abs(this) <= Number.MAX_SAFE_INTEGER;
};
Number.prototype.toWords = function (): string {
	const number = this.valueOf();
	const LESS_THAN_TWENTY = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	];

	const TENTHS_LESS_THAN_HUNDRED = [
		"zero",
		"ten",
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety",
	];

	if (!number.isFinite()) {
		throw new TypeError(
			"Not a finite number: " + number + " (" + typeof number + ")"
		);
	}
	if (!number.isSafeNumber()) {
		throw new RangeError(
			"Input is not a safe number, it’s either too large or too small."
		);
	}

	const generateWords = function (number: number, words?: Array<string | undefined>): string {
		let remainder, word;
		// We’re done
		if (number === 0) {
			return !words ? "zero" : words.join(" ").replace(/,$/, "");
		}
		// First run
		if (!words) words = [];
		
		// If negative, prepend “minus”
		if (number < 0) {
			words.push("minus");
			number = Math.abs(number);
		}
		if (number < 20) {
			remainder = 0;
			word = LESS_THAN_TWENTY[number];
		} else if (number < Math.HUNDRED) {
			remainder = number % Math.TEN;
			word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / Math.TEN)];
			// In case of remainder, we need to handle it here to be able to add the “-”
			if (remainder) {
				word += "-" + LESS_THAN_TWENTY[remainder];
				remainder = 0;
			}
		} else if (number < Math.THOUSAND) {
			remainder = number % Math.HUNDRED;
			word = generateWords(Math.floor(number / Math.HUNDRED)) + " hundred";
		} else if (number < Math.MILLION) {
			remainder = number % Math.THOUSAND;
			word = generateWords(Math.floor(number / Math.THOUSAND)) + " thousand,";
		} else if (number < Math.BILLION) {
			remainder = number % Math.MILLION;
			word = generateWords(Math.floor(number / Math.MILLION)) + " million,";
		} else if (number < Math.TRILLION) {
			remainder = number % Math.BILLION;
			word = generateWords(Math.floor(number / Math.BILLION)) + " billion,";
		} else if (number < Math.QUADRILLION) {
			remainder = number % Math.TRILLION;
			word = generateWords(Math.floor(number / Math.TRILLION)) + " trillion,";
		} else {
			remainder = number % Math.QUADRILLION;
			word =
				generateWords(Math.floor(number / Math.QUADRILLION)) + " quadrillion,";
		}

		words.push(word);
		return generateWords(remainder, words);
	};

	return generateWords(number);
};

export default Number;
