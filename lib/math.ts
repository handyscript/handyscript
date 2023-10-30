/* eslint-disable @typescript-eslint/no-loss-of-precision */
/// ------------------------------- HANDY MATH © HandyScript 5m/21d/23y -------------------------------

declare global {
	interface Math {
		/**
		 * The Tau constant, equal to 2 * PI. -> `Τ = 2π`
		 */
		TAU: number;

		/**
		 * The square root of `3`. approximately `1.732`. -> `√3 = 1.73205080...`.
		 */
		SQRT3: number;

		/**
		 * The Golden ratio constant, approximately `1.618`. -> `Φ = (√5 + 1)/2 = 1.6180339887...`
		 */
		PHI: number;

		/**
		 * The Golomb-Dickman constant, approximately `0.624`. -> `λ = 1 - G`
		 */
		G: number;

		/**
		 * The Feigenbaum constant, approximately `4.669`. -> `Δ = 1- α`
		 */
		DELTA: number;

		/**
		 * The Euler-Mascheroni constant, approximately `0.577`.
		 * Math Formula: `gamma = 1 - zeta(0)`
		 */
		GAMMA: number;

		/**
		 * Catalan's constant, approximately `0.915`.
		 * Math Formula: `K = 1 - zeta(2)`
		 */
		K: number;

		/**
		 * Apery's constant, approximately `1.202`.
		 * Math Formula: `zeta(3)`
		 */
		ZETA3: number;

		/**
		 * Cahen's constant, approximately `0.643`.
		 * Math Formula: `theta = 1 - zeta(4)`
		 */
		THETA: number;

		/**
		 * Landau-Ramanujan constant, approximately `0.764`.
		 * Math Formula: `kappa = 1 - zeta(3)`
		 */
		KAPPA: number;

		/**
		 * Glaisher–Kinkelin constant, approximately `1.282`.
		 * Math Formula: `A = e^(1/12 - zeta'(-1))`
		 */
		A: number;

		/**
		 * Backhouse's constant, approximately `1.456`.
		 * Math Formula: `B = e^(1/12 - zeta'(-1))`
		 */
		B: number;

		/**
		 * returns a random number between `min` and `max` explicitly
		 */
		randomInt(max?: number, min?: number): number;

		/**
		 * clamps the `value` between `min` and `max` otherwise it returns the `min` or `max`
		 * @example
		 * HMath.clamp(10, 1, 5) // 5
		 */
		clamp(value: number, min: number, max: number): number;

		/**
		 * returns a value between `start` and `end` based on the `t` value
		 * The math formula is `start * (1 - t) + end * t`
		 * @example
		 * HMath.lerp(0, 100, 0.5) // 50
		 * HMath.lerp(0, 100, 0.25) // 25
		 * HMath.lerp(0, 100, 0.75) // 75
		 */
		lerp(start: number, end: number, t: number): number;

		/**
		 * it returns the value mapped from the input range to the output range
		 * The math formula is
		 * `output = ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin`
		 * @param {number} value the value to map
		 * @param {number} inputMin the minimum value of the input range
		 * @param {number} inputMax the maximum value of the input range
		 * @param {number} outputMin the minimum value of the output range
		 * @param {number} outputMax the maximum value of the output range
		 * @example
		 * HMath.map(50, 0, 100, 0, 1) // 0.5
		 * HMath.map(50, 0, 100, 0, 10) // 5
		 * HMath.map(50, 0, 100, 0, 1000) // 500
		 */
		map(
			value: number,
			inputMin: number,
			inputMax: number,
			outputMin: number,
			outputMax: number
		): number;
	}
}

Object.assign(Math, {
  A: 1.282427129100622636875342568869791727767688927325001192063740432988395529732,
  B: 1.456074948582689671399595351116543266074274800178127884495013673643948446868,
  G: 0.624329988543550870992936383100837235703606993625832517625695166735847239685,
  K: 0.915965594177219015054603514932384110774149374281672134266498119621763019776,
  TAU: 2 * Math.PI, // 2 * PI
  SQRT3: 1.7320508075688772935274463415058723669428052538103806280558069794519330169088, // square root of 3
  PHI: 1.6180339887498948482045868343656381177203091798057628621354486227052604628189, // golden ratio
  DELTA: 4.669201609102990671853203820466201617258185577475768632745651343004134330211,
  GAMMA: 0.577215664901532860606512090082402431042159335939923598805767234884867726777,
  ZETA3: 1.202056903159594285399738161511449990764986292340498881792271555341838205786,
  THETA: 0.6434105463,
  KAPPA: 0.764223653589220662990698731250092320971690526083222067341264027404987097155,

  randomInt(max = Number.MAX_SAFE_INTEGER, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  },

  lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
  },

  map(value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number) {
    const inputRange = inputMax - inputMin;
    const outputRange = outputMax - outputMin;
    const normalizedValue = (value - inputMin) / inputRange;
    return outputMin + normalizedValue * outputRange;
  },
});

export default Math;