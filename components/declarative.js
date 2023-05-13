import state from "../hooks/state.js";
import render from "../syntax/databinding.js";

const root = document.querySelector("#root");

function Counter(){
    const [count, setCount, subscribeListner] = state(0);
}