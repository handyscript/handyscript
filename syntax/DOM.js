import { objloop }  from "./operateurs.js";

/**
 * it returns a `HTMLelement` with the given `tag`, `props` and `children`
 * @param {string} tag // the tag of the element
 * @param {object} props // the props of the element
 * @param  {string[] | HTMLElement[]} children // the children of the element
 * @returns {HTMLelement}
 * @example
 * _( "div", { id: "root" }, "Hello World" ) => <div id="root">Hello World</div>
 */
export default function _(tag, props, ...children){ 
    const element = document.createElement(tag);

    // check if there are props
    if (props){
        objloop(props, (key, value) => element[key] = value);
    }

    // check for edge cases for the `tages` that can't have children
    if (["img", "input", "br", "hr"].includes(tag)) {
        return element;
    }

    // check if there is no children
    if (children.length === 0) {
        return element;
    }

    // check for edge cases for the `tages` that can have only text as children
    if (["script", "style"].includes(tag)) {
        element.appendChild(document.createTextNode(children[0]));
        return element;
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    });
    return element;
}

/**
 * it returns the first `HTMLelement` that matches the query
 * @param {string} q // the query
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @returns {HTMLelement}
 * @example
 * get("#root") => <div id="root"></div>
 * get(".btn") => <button class="btn"></button>
 * get("button") => <button class="btn"></button>
 */
export function get(q, root=document){ return root.querySelector(q) }

/**
 * it returns all the `HTMLelement`s that matches the query
 * @param {string} q // the query
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @returns {NodeList}
 * @example
 * getAll("#root") => [<div id="root"></div>]
 * getAll(".btn") => [<button class="btn"></button>, <button class="btn"></button>]
 * getAll("button") => [<button class="btn"></button>, <button class="btn"></button>]
 */
export function getAll(q, root=document) { return root.querySelectorAll(q) }

/**
 * it pops the `HTMLelement` from the DOM
 * @param {string} q // the query
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @returns {HTMLelement}
 * @example
 * pop("#root") => <div id="root"></div>
 * pop("button", "button#btn") => <button id="btn"></button>
 */
export function pop(q, root=document) { return root.removeChild(get(q, root)) }


/**
 * it removes the `HTMLelement` from the DOM
 * @param {HTMLelement} ele // the element to remove
 * @example
 * remove(get("#root")) => <div id="root"></div>
 * remove(get(".btn")) => <button class="btn"></button>
 */
export function remove(ele) { ele.remove() }

/**
 * it removes all the `HTMLelement`s that matches the query from the DOM
 * @param {string} q // the query
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @example
 * removeAll("#root") => <div id="root"></div>
 * removeAll(".btn") => <button class="btn"></button>
 * removeAll("button", get("#root")) => <button class="btn"></button>
 */
export function removeAll(q, root=document) { [...getAll(q, root)].forEach(remove) }

/**
 * it appends the `HTMLelement` to the DOM
 * @param {HTMLelement} ele // the element to append
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @example
 * append(get("#root")) => <div id="root"></div>
 * append(get(".btn")) => <button class="btn"></button>
 * const btn = _("button", {class: "btn"}, "Hello World");
 * append(btn, get("#root")) =>  <div id="root"><button class="btn"></button></div>
 */
export function append(ele, root=document) { root.appendChild(ele) }

/**
 * it prepends the `HTMLelement` to the DOM
 * @param {HTMLelement} ele // the element to prepend
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @example
 * prepend(get("#root")) => <div id="root"></div>   
 * prepend(get(".btn")) => <button class="btn"></button>
 * const btn = _("button", {class: "btn"}, "Hello World");
 * prepend(btn, get("#root")) =>  <div id="root"><button class="btn"></button></div>
 */
export function prepend(ele, root=document) { root.prepend(ele) }

/**
 * it appends the `HTMLelement` to the DOM using the `innerHTML` property
 * @param {HTMLelement} ele // the element to append
 * @param {string} content // the content to append
 * @example
 * inner(get("#root"), "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
 * 
 * inner(get(".btn"), "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
 * 
 * const btn = _("button", {class: "btn"}, "Hello World");
 * inner(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
 */
export function inner(ele, content) { ele.innerHTML = content }

/**
 * it appends all the `HTMLelement` to the DOM using the `innerHTML` property
 * @param {string} q // the query
 * @param {string} content // the content to append
 * @param {HTMLelement} root // the root element by default it's the `document`
 * @example
 * innerAll("#root", "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
 * 
 * innerAll(".btn", "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
 * 
 * const btn = _("button", {class: "btn"}, "Hello World");
 * innerAll(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
 */
export function innerAll(q, content, root=document) { [...getAll(q, root)].forEach(ele => inner(ele, content)) }

/**
 * it adds the `HTMLelement` to the DOM using the `innerHTML` property
 * @param {HTMLelement} ele // the element to add
 * @param {string} content // the content to add
 * @example
 * innerAdd(get("#root"), "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
 * 
 * innerAdd(get(".btn"), "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
 * 
 * const btn = _("button", {class: "btn"}, "Hello World");
 * innerAdd(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
 */ 
export function innerAdd(ele, content) { ele.innerHTML += content }

/**
 * 
 * @param {string} q // the query
 * @param {string} content // the content to add
 * @param {Document} root // the root element by default it's the `document`
 * @example
 * innerAddAll("#root", "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
 * 
 * innerAddAll(".btn", "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
 * 
 * const btn = _("button", {class: "btn"}, "Hello World");
 * innerAddAll(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
 */
export function innerAddAll(q, content, root=document) { [...getAll(q, root)].forEach(ele => innerAdd(ele, content)) }