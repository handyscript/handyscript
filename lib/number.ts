/// ------------------------------- HANDY NUMBER © HandyScript 6m/2d/23y -------------------------------
import Math from './math';

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
		{ value: 1, symbol: '' },
		{ value: 1e3, symbol: 'K' },
		{ value: 1e6, symbol: 'M' },
		{ value: 1e9, symbol: 'B' },
		{ value: 1e12, symbol: 'T' },
		{ value: 1e15, symbol: 'P' },
		{ value: 1e18, symbol: 'E' }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	let i;
	for (i = si.length - 1; i > 0; i--) if (num >= si[i].value) break;
	return (num / si[i].value).toFixed(2).replace(rx, '$1') + si[i].symbol;
};

Number.prototype.toReadable = function (separator = '-'): string {
	const num = this.valueOf();
	const rx = /(\d+)(\d{3})/;
	return String(num).replace(/^\d+/, function (w) {
		while (rx.test(w)) {
			w = w.replace(rx, '$1' + separator + '$2');
		}
		return w;
	});
};

Number.prototype.isFinite = function (): boolean {
	return !(
		typeof this !== 'number' ||
		this !== this ||
		this === Infinity ||
		this === -Infinity
	);
};

Number.prototype.isSafeNumber = function (): boolean {
	return typeof this === 'number' && Math.abs(this) <= Number.MAX_SAFE_INTEGER;
};
Number.prototype.toWords = function (): string {
	const number = this.valueOf();
	const LESS_THAN_TWENTY = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];

	const TENTHS_LESS_THAN_HUNDRED = [
		'zero',
		'ten',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety'
	];

	var words;

	if (!number.isFinite()) {
		throw new TypeError(
			'Not a finite number: ' + number + ' (' + typeof number + ')'
		);
	}
	if (!number.isSafeNumber()) {
		throw new RangeError(
			'Input is not a safe number, it’s either too large or too small.'
		);
	}

	let generateWords = function (
		n_umber: number,
		w_ords?: Array<string | undefined>
	) {
		var remainder, word;
		// We’re done
		if (n_umber === 0) {
			return !w_ords ? 'zero' : w_ords.join(' ').replace(/,$/, '');
		}
		// First run
		if (!w_ords) {
			w_ords = [];
		}
		// If negative, prepend “minus”
		if (n_umber < 0) {
			w_ords.push('minus');
			n_umber = Math.abs(n_umber);
		}
		if (n_umber < 20) {
			remainder = 0;
			word = LESS_THAN_TWENTY[n_umber];
		} else if (n_umber < Math.HUNDRED) {
			remainder = n_umber % Math.TEN;
			word = TENTHS_LESS_THAN_HUNDRED[Math.floor(n_umber / Math.TEN)];
			// In case of remainder, we need to handle it here to be able to add the “-”
			if (remainder) {
				word += '-' + LESS_THAN_TWENTY[remainder];
				remainder = 0;
			}
		} else if (n_umber < Math.THOUSAND) {
			remainder = n_umber % Math.HUNDRED;
			word = generateWords(Math.floor(n_umber / Math.HUNDRED)) + ' hundred';
		} else if (n_umber < Math.MILLION) {
			remainder = n_umber % Math.THOUSAND;
			word = generateWords(Math.floor(n_umber / Math.THOUSAND)) + ' thousand,';
		} else if (n_umber < Math.BILLION) {
			remainder = n_umber % Math.MILLION;
			word = generateWords(Math.floor(n_umber / Math.MILLION)) + ' million,';
		} else if (n_umber < Math.TRILLION) {
			remainder = n_umber % Math.BILLION;
			word = generateWords(Math.floor(n_umber / Math.BILLION)) + ' billion,';
		} else if (n_umber < Math.QUADRILLION) {
			remainder = n_umber % Math.TRILLION;
			word = generateWords(Math.floor(n_umber / Math.TRILLION)) + ' trillion,';
		} else {
			console.log('heelo');
			console.log(number);
			console.log(typeof number);
			console.log(number < 1000);
			remainder = n_umber % Math.QUADRILLION;
			word =
				generateWords(Math.floor(n_umber / Math.QUADRILLION)) + ' quadrillion,';
		}

		w_ords.push(word);
		return generateWords(remainder, w_ords);
	};

	words = generateWords(number);
	return words;
};

export default Number;
