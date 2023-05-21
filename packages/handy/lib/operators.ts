//// OPERATORS - HANDY-JS: OPERATORS METHODS --------------------------------------------

/**
 * it returns true if all the arguments are true
 * @param  {boolean[]} args
 * @example
 * and(true, true, true) // true
 */
export function and(...args: boolean[]) {return args.every(arg => arg === true)}

/**
 * it returns true if any of the arguments is true
 * @param  {boolean[]} args
 * @example
 * or(true, false, false) // true
 */
export function or(...args: boolean[]) {return args.some(arg => arg === true)}

/**
 * it returns the opposite of the argument given
 * @param {any} arg
 * @example
 * not(true) // false
 */
export function not(arg:any) {return !arg}

/**
 * the `is` function is used to compare two values if they are truly equal
 * @param {any} value1
 * @param {any} value2
 * @example
 * is(1, 1) // true
 * is("hello", "hi") // false
 * // Objects are compared by their keys recursively
 * const obj1 = {name: "john", age: 20};
 * const obj2 = {name: "john", age: 20};
 * is(obj1, obj2) // true
 * 
 * // Functions are compared by their source code
 * const fn1 = () => console.log("hello");
 * const fn2 = () => console.log("hi");
 * is(fn1, fn2) // false
 * 
 * // Dates are compared by their millisecond representation
 * const date1 = new Date();
 * const date2 = new Date(date1.getTime());
 * is(date1, date2) // true
 * 
 * // Regular expressions are compared by their source code
 * const reg1 = /hello/;
 * const reg2 = /hi/;
 * is(reg1, reg2) // false
 */
export function is(value1: any, value2: any): boolean{
    switch (typeof value1) {
        // compare functions by their source code
        case 'function': return value1.toString() === value2.toString();

        // compare object by keys recursively
        case 'object': 
            if (or(value1 === null, value2 === null)) { return value1 === value2 };

            switch (value1.constructor) {
                // compare dates by their millisecond representation
                case Date: return value1.getTime() === value2.getTime();
                // compare regular expressions by their source code
                case RegExp: return value1.toString() === value2.toString();

                default:
                    if (not(is(value1.constructor, value2.constructor))) { return false }

                    const keys1 = Object.keys(value1);
                    const keys2 = Object.keys(value2);

                    if (not(is(keys1.length, keys2.length))){ return false };
                    
                    return keys1.every(key => is(value1[key], value2[key]));
            }

        default: return value1 === value2;
    }
}

/**
 * loops through the given iterations and calls the callback function with the index ```i``` as argument
 * @param {number} iterations// the number of iterations to loop through default is 1
 * @param {CallableFunction} cb // the function to call in each iteration with the `index` ```i``` as argument
 * @param {number} index // the starting index by default it's 0
 * @param {number} step // the step to increment the index by default it's 1
 * @example
 * loop(5, i=>console.log(i)) // 0 1 2 3 4
 */
export function loop(iterations = 1, cb:(index: number) => void, index = 0, step = 1){ for (index; index < iterations; index+=step) { cb(index) } }

/**
 * loops through the given `object` and calls the `callback` function with the `key` as argument
 * @param {object} obj // the object to loop through
 * @param {CallableFunction} cb // the function to call in each iteration with the `key` as argument
 * @example
 * const obj = {name:"ahmed", age: 20};
 * objloop(obj, (key, val) => console.log(key, val))
 * // name ahmed
 * // age 20
 */
// objloop function with typescript
export function objloop<Obj extends object>(obj: Obj, cb: (key: keyof Obj, val: Obj[keyof Obj]) => void){ for ( const key in obj) { cb(key, obj[key]) } }

/**
 * The `keyloop` function loops through the given `object` and calls the `callback` function with the `key` as argument
 * @param {object} obj // the object to loop through
 * @param {CallableFunction} cb // the function to call in each iteration with the `key` as argument
 * @example
 * const obj = {name:"ahmed", age: 20};
 * keyloop(obj, key => console.log(key)) // name
 */
export function keyloop<Obj extends object>(obj: Obj, cb: (key: keyof Obj) => void){ for ( const key in obj) { cb(key) } }

/**
 * The `valloop` function loops through the given `object` and calls the `callback` function with the `value` as argument
 * @param {object} obj // the object to loop through
 * @param {CallableFunction} cb // the function to call in each iteration with the `value` as argument
 * @example
 * const obj = {name:"ahmed", age: 20};
 * valloop(obj, val => console.log(val)) // ahmed
 */
export function valloop<Obj extends object>(obj: Obj, cb: (val: Obj[keyof Obj]) => void){ for ( const key in obj) { cb(obj[key]) } }


/// ======================THE HOPERATORS CLASS: HANDY-JS: OPERATORS METHODS ======================

/**
 * @namespace HOperators
 * @description handy operators
 * @example
 * // 1
 * import HOperators from 'handy-js'
 * HOperators.and(true, true, true) // true
 * HOperators.or(true, false, false) // true
 * // 2
 * import {and, or} from 'handy-js'
 * and(true, true, true) // true
 * or(true, false, false) // true
 */
export default class HOperators {
    /**
     * it returns true if all the arguments are true
     * @memberof HOperators
     * @param  {...any} args
     * @example
     * HOperators.and(true, true, true) // true
     */
    static and = and

    /**
     * it returns true if any of the arguments is true
     * @memberof HOperators
     * @param  {...any} args
     * @example
     * HOperators.or(true, false, false) // true
     */
    static or = or

    /**
     * it returns the opposite of the argument given
     * @memberof HOperators
     * @param {any} arg
     * @example
     * HOperators.not(true) // false
     * HOperators.not(false) // true
     */
    static not = not

    /**
     * This method is used to compare two values if they are truly equal
     * @memberof HOperators
     * @param {any} value1
     * @param {any} value2
     * @example
     * HOperators.is(1, 1) // true
     * HOperators.is("hello", "hi") // false
     * 
     * // Objects are compared by their keys recursively
     * const obj1 = {name: "john", age: 20};
     * const obj2 = {name: "john", age: 20};
     * HOperators.is(obj1, obj2) // true
     * 
     * // Functions are compared by their source code
     * const fn1 = () => console.log("hello");
     * const fn2 = () => console.log("hi");
     * HOperators.is(fn1, fn2) // false
     * 
     * // Dates are compared by their millisecond representation
     * const date1 = new Date();
     * const date2 = new Date(date1.getTime());
     * HOperators.is(date1, date2) // true
     * 
     * // Regular expressions are compared by their source code
     * const reg1 = /hello/;
     * const reg2 = /hi/;
     * HOperators.is(reg1, reg2) // false
     */
    static is = is

    /**
     * loops through the given iterations and calls the callback function with the index ```i``` as argument
     * @memberof HOperators
     * @param {number} iterations// the number of iterations to loop through
     * @param {CallableFunction} callback // the function to call in each iteration with the `index` ```i``` as argument
     * @param {number} i // the starting index by default it's 0
     * @param {number} step // the step to increment the index by default it's 1
     * @example
     * HOperators.loop(5, i=>console.log(i)) // 0 1 2 3 4
     */
    static loop = loop

    /**
     * loops through the given `object` and calls the `callback` function with the `key` as argument
     * @memberof HOperators
     * @param {object} obj // the object to loop through
     * @param {CallableFunction} callback // the function to call in each iteration with the `key` as argument
     * @example
     * const obj = {name:"ahmed", age: 20};
     * HOperators.objloop(obj, (key, val) => console.log(key, val))
     * // name ahmed # the keys
     * // age 20 # the values
     */
    static objloop = objloop

    /**
     * The `keyloop` function loops through the given `object` and calls the `callback` function with the `key` as argument
     * @param {object} obj // the object to loop through
     * @param {CallableFunction} cb // the function to call in each iteration with the `key` as argument
     * @example
     * const obj = {name:"ahmed", age: 20};
     * keyloop(obj, key => console.log(key)) // name
     */
    static keyloop = keyloop

    /**
     * The `valloop` function loops through the given `object` and calls the `callback` function with the `value` as argument
     * @memberof HOperators
     * @param {object} obj // the object to loop through
     * @param {CallableFunction} cb // the function to call in each iteration with the `value` as argument
     * @example
     * const obj = {name:"ahmed", age: 20};
     * valloop(obj, val => console.log(val)) // ahmed
     */
    static valloop = valloop

}
