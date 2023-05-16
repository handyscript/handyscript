import state from "../hooks/state.js";


const root = document.querySelector("#root");

function Counter(){
    const [count, setCount, subscribeListner] = state(0);

    // create a button element
    const container = document.createElement('div');

    const counter = document.createElement('h3');
    const incButton = document.createElement('button');
    const decButton = document.createElement('button');

    const increment = () => {
        setCount(count() + 1);
        console.log('Incrementing...', count());
    }

    const decrement = () => {
        setCount(count() - 1);
        console.log('Decrementing...', count());
    }

    counter.innerHTML = `Count: ${count()}`;
    incButton.innerHTML = `+`;
    decButton.innerHTML = `-`;

    const updateView = () => {
        counter.innerHTML = `Count: ${count()}`;
    }

    subscribeListner(updateView);

    incButton.onclick = increment;
    decButton.onclick = decrement;
  
    container.appendChild(counter);
    container.appendChild(incButton);
    container.appendChild(decButton);

    return container;
}

root.appendChild(Counter());