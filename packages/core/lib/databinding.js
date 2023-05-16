
/**
 * template engine in javascript for custom data binding
 * @param {string} template 
 * @param {Object} data 
 * @returns 
 * @example
 * const data = {
 *  title: 'Hello World',
 *  description: 'This is a simple template engine in javascript'
 *  sayHello: () => alert('Hello World')
 * };
 * const template = `
 * <div>
 *    <h1>{{title}}</h1>
 *    <p>{{description}}</p>
 *    <button onclick={{sayHello()}}>Say Hello</button>
 * </div>
 * `;
 * 
 * document.body.innerHTML = render(template, data);
 */

export default function render(template, data) {
    const regex = /{{\s*(.*?)\s*}}/g; // regular expression to match {{expression}}
    return template.replace(regex, (match, expression) => {
        if (expression.startsWith('on')) { // handle inline event handlers
            const eventName = expression.slice(2); // extract the event name
            // const eventHandler = () => data[expression]; // extract the event handler function
            const eventHandler = data[expression]; // extract the event handler function
            return `on${eventName}="${eventHandler}"`; // insert the event handler function
        } else { // handle data binding expressions
            let value = data;
            for (const prop of expression.split('.')) { // support dot notation for nested objects
                value = value[prop];
            }
            return value;
        }
    });
}
