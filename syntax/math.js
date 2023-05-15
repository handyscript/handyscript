/**
 * it returns a random number between min and max exlusive
 * @param {number} min the minimum number by default it is 0
 * @param {number} max the maximum number
 * @returns {number} a random number between min and max
 * @example
 * random(1, 10) // 7
 * random(10) // 1
 */
export function random(max, min = 0){Math.floor(Math.random() * (max - min + 1)) + min}

/**
 * it clamps the `value` between `min` and `max` in other words
 * it returns the `value` if it is between `min` and `max` otherwise it returns the `min` or `max`
 * @param {number} value the value to clamp
 * @param {number} min the minimum value
 * @param {number} max the maximum value
 * @returns {number} the clamped value
 * @example
 * clamp(10, 1, 5) // 5
 * clamp(10, 1, 20) // 10
 */
export function clamp(value, min, max) { return Math.min(Math.max(value, min), max) };

/**
 * the `lerp` or linear interpolation is a function that takes a start value `start`,
 * an end value `end` and a `t` value
 * and returns a value between `start` and `end` based on the `t` value
 * The math formula is `start * (1 - t) + end * t`
 * @param {number} start the start value
 * @param {number} end the end value
 * @param {number} t the t value
 * @returns {number} the interpolated value
 * @example
 * lerp(0, 100, 0.5) // 50
 * lerp(0, 100, 0.2) // 20
 * lerp(0, 100, 0.8) // 80
 * lerp(0, 100, 0) // 0
 */
export function lerp(start, end, t){ return start * (1 - t) + end * t };

/**
 * it returns the value mapped from the input range to the output range
 * The math formula is 
 * `output = ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin`
 * @param {number} value the value to map
 * @param {number} inputMin the minimum value of the input range
 * @param {number} inputMax the maximum value of the input range
 * @param {number} outputMin the minimum value of the output range
 * @param {number} outputMax the maximum value of the output range
 * @returns {number} the mapped value
 * @example
 * map(10, 0, 100, 0, 1) // 0.1
 * map(10, 0, 100, 0, 10) // 1
 * map(10, 0, 100, 0, 100) // 10
 * map(10, 0, 100, 0, 1000) // 100
 */
export function map(value, inputMin, inputMax, outputMin, outputMax){
    const inputRange = inputMax - inputMin;
    const outputRange = outputMax - outputMin;
    const normalizedValue = (value - inputMin) / inputRange;
    return outputMin + normalizedValue * outputRange;
}