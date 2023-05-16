
/**
 * it adds an event listener to the `HTMLelement`
 * @param {HTMLelement} ele // the element to add the event listener
 * @param {string} type // the event type
 * @param {function} listener // the event listener
 * @param {object} options // the event options
 * @example
 * on(get("#root"), "click", () => console.log("clicked")) => <div id="root"></div>
 * on(get(".btn"), "click", () => console.log("clicked")) => <button class="btn"></button>
 */
export function on(ele, type, listener, options) { ele.addEventListener(type, listener, options) }

/**
 * it removes the event listener from the `HTMLelement`
 * @param {HTMLelement} ele // the element to remove the event listener
 * @param {string} type // the event type
 * @param {function} listener // the event listener
 * @param {object} options // the event options
 * @example
 * off(get("#root"), "click", () => console.log("clicked")) => <div id="root"></div>
 * // the event listener will be removed
 * const listener = () => console.log("clicked");
 * on(get(".btn"), "click", listener);
 */
export function off(ele, type, listener, options) { ele.removeEventListener(type, listener, options) }

/**
 * @param {HTMLelement} ele // the element to add the event listener
 * @param {string} type // the event type
 * @param {function} listener // the event listener
 * @param {object} options // the event options
 * @example
 * once(get("button"), "click", () => console.log("clicked")) => <button>Click me once</button>
 * // the event listener will be added
 * // but it will be removed after the first click
 */
export function once(ele, type, listener, options) { ele.addEventListener(type, listener, { ...options, once: true }) }
