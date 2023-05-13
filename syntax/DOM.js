import { objloop }  from "./operateurs.js";

/**
 * the `DOM` object contains functions to create and manipulate `HTMLelement`s
 * @namespace DOM
 * @example
 * import { _ } from "./syntax/DOM.js";
 */
const DOM = {
    /**
     * it returns a `HTMLelement` with the given `tag`, `props` and `children`
     * @param {string} tag // the tag of the element
     * @param {object} props // the props of the element
     * @param  {string[] | HTMLElement[]} children // the children of the element
     * @returns {HTMLelement}
     * @example
     * _( "div", { id: "root" }, "Hello World" ) => <div id="root">Hello World</div>
     */
    _: (tag, props, ...children) => { 
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
    },

    /**
     * it returns the first `HTMLelement` that matches the query
     * @param {string} q // the query
     * @returns {HTMLelement}
     * @example
     * get("#root") => <div id="root"></div>
     * get(".btn") => <button class="btn"></button>
     * get("button") => <button class="btn"></button>
     */
    get : (q, root=document) => root.querySelector(q),

    /**
     * it returns all the `HTMLelement`s that matches the query
     * @param {string} q // the query
     * @returns {NodeList}
     * @example
     * getAll("#root") => [<div id="root"></div>]
     * getAll(".btn") => [<button class="btn"></button>, <button class="btn"></button>]
     * getAll("button") => [<button class="btn"></button>, <button class="btn"></button>]
     */
    getAll : (q, root=document) => root.querySelectorAll(q),

    /**
     * it pops the `HTMLelement` from the DOM
     * @param {string} q // the query
     * @example
     * pop("#root") => <div id="root"></div>
     * pop(".btn") => <button class="btn"></button>
     * pop("button", get("#root")) => <button class="btn"></button>
     */
    pop: (q, root=document) => { root.removeChild(q) },

    /**
     * it removes the `HTMLelement` from the DOM
     * @param {HTMLelement} ele // the element to remove
     * @returns {void}
     * @example
     * remove(get("#root")) => <div id="root"></div>
     * remove(get(".btn")) => <button class="btn"></button>
     */
    remove: ele => ele.remove(),

    /**
     * it removes all the `HTMLelement`s that matches the query from the DOM
     * @param {string} q // the query
     * @example
     * removeAll("#root") => <div id="root"></div>
     * removeAll(".btn") => <button class="btn"></button>
     * removeAll("button", get("#root")) => <button class="btn"></button>
     */
    removeAll: (q, root=document) => { [...getAll(q, root)].forEach(remove) },

    /**
     * it appends the `HTMLelement` to the DOM
     * @param {HTMLelement} ele // the element to append
     * @returns {void}
     * @example
     * append(get("#root")) => <div id="root"></div>
     * append(get(".btn")) => <button class="btn"></button>
     * const btn = _("button", {class: "btn"}, "Hello World");
     * append(btn, get("#root")) =>  <div id="root"><button class="btn"></button></div>
     */
    append: (ele, root=document) => root.appendChild(ele),

    /**
     * it prepends the `HTMLelement` to the DOM
     * @param {HTMLelement} ele // the element to prepend
     * @returns {void}
     * @example
     * prepend(get("#root")) => <div id="root"></div>   
     * prepend(get(".btn")) => <button class="btn"></button>
     * const btn = _("button", {class: "btn"}, "Hello World");
     * prepend(btn, get("#root")) =>  <div id="root"><button class="btn"></button></div>
     */
    prepend: (ele, root=document) => root.prepend(ele),

    /**
     * it appends the `HTMLelement` to the DOM using the `innerHTML` property
     * @param {HTMLelement} ele // the element to append
     * @example
     * inner(get("#root"), "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
     * 
     * inner(get(".btn"), "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
     * 
     * const btn = _("button", {class: "btn"}, "Hello World");
     * inner(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
     */
    inner: (ele, content) => { ele.innerHTML = content },

    /**
     * it appends all the `HTMLelement` to the DOM using the `innerHTML` property
     * @param {string} q // the query
     * @param {string} content // the content to append
     * @example
     * innerAll("#root", "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
     * 
     * innerAll(".btn", "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
     * 
     * const btn = _("button", {class: "btn"}, "Hello World");
     * innerAll(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
     */
    innerAll: (q, content, root=document) =>  { [...getAll(q, root)].forEach(ele => inner(ele, content)) },

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
    innerAdd: (ele, content) => { ele.innerHTML += content },

    /**
     * 
     * @param {string} q // the query
     * @param {string} content // the content to add
     * @param {Document} root // the root element
     * @example
     * innerAddAll("#root", "<button class="btn"></button>") => <div id="root"><button class="btn"></button></div>
     * 
     * innerAddAll(".btn", "<button class="btn"></button>") => <button class="btn"><button class="btn"></button></button>
     * 
     * const btn = _("button", {class: "btn"}, "Hello World");
     * innerAddAll(btn, "<button class="btn"></button>") =>  <button class="btn"><button class="btn"></button></button>
     */
    innerAddAll: (q, content, root=document) => { [...getAll(q, root)].forEach(ele => innerAdd(ele, content)) },
    
}

export const { 
    get,
    getAll,
    pop,
    remove,
    removeAll,
    append,
    prepend,
    inner,
    innerAll,
    innerAdd,
    innerAddAll
} = DOM;