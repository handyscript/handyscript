// making state management system like `useState` hook in react: const [count, setCount] = useState(0);
// 1. create a state
// 2. create a function to update (dispatch) the state
// 3. create a function to get the state
// 4. return the function to get the state and function to update the state
// 5. subscribe to the state changes and update the UI (re-render) when the state changes the dom

/**
 * state management system like `useState` hook in react
 * @param {any} initialValue
 * @returns {[()=>any, (newValue: any)=>void, (listener: (state: any)=>void)=>void]}
 * @example
 * const [count, setCount] = state(0);
 * console.log(count());
 * setCount(1);
 * console.log(count());
 */
export default function state(initialState) {
  let currentState = initialState;
  const listeners = new Set();
  
  const getState = () => currentState; // return the current state

  const setState = (newState) => {
    currentState = typeof newState === 'function' ? newState(currentState) : newState; // if newState is a function, call it with currentState as argument
    listeners.forEach(listener => listener(currentState)); // call all listeners with the new state
  };

  const subscribe = (listener) => { // add a listener to the listeners set
    listeners.add(listener); 
    return () => listeners.delete(listener); // return a function to remove the listener from the listeners set
  };

  return [getState, setState, subscribe];
}
