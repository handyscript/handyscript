//// MATH - HANDY-JS: MATH METHODS --------------------------------------------

/**
 * @namespace HMath
 * @extends Math
 * @description
 * The `HMath` namespace contains usful math constants and methods.
 * @example
 * // 1
 * import { HMath } from "handy-js",
 * HMath.PI // output:3.141592653589793
 * // 2
 * import HMath from "handy-js/math",
 * HMath.PI // output:3.141592653589793
 */
const HMath  = {
    // Extends Math
    ...Math,

    // ower own math constants
    /**
     * The Tau constant, equal to 2 * PI.
     */
    TAU : 2 * Math.PI, // 2 * PI
    /**
     * The square root of `3`. approximately `1.732`.
     */
    SQRT3 : 1.73205080756887729352744634150587236694280525381038062805580697945193301690880, // square root of 3
    /**
     * The Golden ratio constant, approximately `1.618`.
     */
    PHI : 1.61803398874989484820458683436563811772030917980576286213544862270526046281890, // golden ratio
    // Golomb Dickman constant
    /**
     * The Golomb-Dickman constant, approximately `0.624`.
     * Math Formula: `G = 1 - G`
     */
    G : 0.624329988543550870992936383100837235703606993625832517625695166735847239685,
    // Feigenbaum constant
    /**
     * The Feigenbaum constant, approximately `4.669`.
     * Math Formula: `delta = 1 - alpha`
     */
    DELTA : 4.669201609102990671853203820466201617258185577475768632745651343004134330211, 
    // Euler-Mascheroni constant
    /**
     * The Euler-Mascheroni constant, approximately `0.577`.
     * Math Formula: `gamma = 1 - zeta(0)`
     */
    GAMMA : 0.577215664901532860606512090082402431042159335939923598805767234884867726777,
    // Catalan's constant
    /**
     * Catalan's constant, approximately `0.915`.
     * Math Formula: `K = 1 - zeta(2)`
     */
    K : 0.915965594177219015054603514932384110774149374281672134266498119621763019776,
    // Apery's constant
    /**
     * Apery's constant, approximately `1.202`.
     * Math Formula: `zeta(3)`
     */
    ZETA3 : 1.202056903159594285399738161511449990764986292340498881792271555341838205786,
    // Cahen's constant
    /**
     * Cahen's constant, approximately `0.643`.
     * Math Formula: `theta = 1 - zeta(4)`
     */
    THETA : 0.6434105463,
    // Landau-Ramanujan constant
    /**
     * Landau-Ramanujan constant, approximately `0.764`.
     * Math Formula: `kappa = 1 - zeta(3)`
     */
    KAPPA : 0.764223653589220662990698731250092320971690526083222067341264027404987097155,
    // Glaisher–Kinkelin constant
    /**
     * Glaisher–Kinkelin constant, approximately `1.282`.
     * Math Formula: `A = e^(1/12 - zeta'(-1))`
     */
    A : 1.282427129100622636875342568869791727767688927325001192063740432988395529732,
    // Backhouse's constant
    /**
     * Backhouse's constant, approximately `1.456`.
     * Math Formula: `B = e^(1/12 - zeta'(-1))`
     */
    B : 1.456074948582689671399595351116543266074274800178127884495013673643948446868,

    // ower own math methods
    /**
     * it returns a random number between `min` and `max` exlusive
     * @method randomInt
     * @param {number} min the minimum number by default it is 0
     * @param {number} max the maximum number
     * @returns {number} a random number between min and max
     * @example
     * HMath.randomInt(1, 10) // 7
     */
    randomInt(max, min = 0){ return Math.floor(Math.random() * (max - min + 1)) + min},

    /**
     * it clamps the `value` between `min` and `max` in other words
     * it returns the `value` if it is between `min` and `max` otherwise it returns the `min` or `max`
     * @method clamp
     * @param {number} value the value to clamp
     * @param {number} min the minimum value
     * @param {number} max the maximum value
     * @returns {number} the clamped value
     * @example
     * HMath.clamp(10, 1, 5) // 5
     */
    clamp(value, min, max) { return Math.min(Math.max(value, min), max) },

    /**
     * the `lerp` or linear interpolation is a function that takes a start value `start`,
     * an end value `end` and a `t` value
     * and returns a value between `start` and `end` based on the `t` value
     * The math formula is `start * (1 - t) + end * t`
     * @method lerp
     * @param {number} start the start value
     * @param {number} end the end value
     * @param {number} t the t value
     * @returns {number} the interpolated value
     * @example
     * HMath.lerp(0, 100, 0.5) // 50
     * HMath.lerp(0, 100, 0.25) // 25
     * HMath.lerp(0, 100, 0.75) // 75
     */
    lerp(start, end, t){ return start * (1 - t) + end * t },

    /**
     * it returns the value mapped from the input range to the output range
     * The math formula is 
     * `output = ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin`
     * @method map
     * @param {number} value the value to map
     * @param {number} inputMin the minimum value of the input range
     * @param {number} inputMax the maximum value of the input range
     * @param {number} outputMin the minimum value of the output range
     * @param {number} outputMax the maximum value of the output range
     * @returns {number} the mapped value
     * @example
     * HMath.map(50, 0, 100, 0, 1) // 0.5
     * HMath.map(50, 0, 100, 0, 10) // 5
     * HMath.map(50, 0, 100, 0, 1000) // 500
     */
    map(value, inputMin, inputMax, outputMin, outputMax){
        const inputRange = inputMax - inputMin
        const outputRange = outputMax - outputMin
        const normalizedValue = (value - inputMin) / inputRange
        return outputMin + normalizedValue * outputRange
    }
}

export default HMath