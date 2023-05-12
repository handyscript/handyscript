const and =(...args)=>args.every((arg)=>arg==true);
const or =(...args)=>args.some((arg)=>arg==true);
const not =(arg)=>!arg
const is=(q,t=()=>{},f=()=>{})=>{if(q){if (typeof(t)=="function") {t()} else {return t }}else{if (typeof(f)=="function") {f()} else {return f}}}
const get = (q)=> document.querySelector(q);
const getAll = (q)=> document.querySelectorAll(q);
const onClick =(ele,fun)=>{ele?.addEventListener("click",fun)};
const onHover =(ele,fun)=>{ele?.addEventListener("mouseover",fun)};
const onOut =(ele,fun)=>{ele?.addEventListener("mouseout",fun)};
const loop =(times,fun)=>{for (let i = 0; i < times; i++) {fun(i)}};
const print =(v)=> console.log(v)
const hide = (ele)=> ele.style.display="none"
const show = (ele)=> ele.style.display="block";



// onClick(button,()=>console.log("hello world"))
// onHover(button,()=>console.log("over"))
// onOut(button,()=>console.log("out"))


//console.log(and(true,true,true)); //true
//console.log(or(false,false,false)); // false
//console.log(not(false)); // true
//console.log(is(true,"hello",()=>{console.log("hi")})); // hello





















