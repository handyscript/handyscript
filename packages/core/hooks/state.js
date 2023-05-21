
iniEleVal = {} 
allSlices = {} 
stateElements={}
var onChangeFuncs={}





function state(defaultValue,id) {
    iniEleVal[id]= document.getElementById(id)?.innerHTML;
    if(!(id in allSlices )){
        allSlices[id]=id
        onChangeFuncs[id]=[]
    }

  let value = defaultValue;
  const getValue = () => value
  const setValue = newValue => {
    if(typeof(newValue)=="function"){
        value = newValue(getValue());
    }else{
        value = newValue;
    }
    render(id)
    if(id in onChangeFuncs){
        onChangeFuncs[id].forEach(fun => {
            fun()
        });
    }
    }
  return [getValue, setValue]; 
}






function start(id) {
   render(id) 
}



function render(id) {
    let ValHTML = iniEleVal[id]
    .replaceAll('<chunk>', '`')
    .replaceAll('</chunk>', '`')
    .replaceAll('&amp;', '&')
    .replaceAll('&gt;', '>')
    .replaceAll('<put>', '`+')
    .replaceAll('</put>', '+`')

    // console.log(ValHTML)

    // console.log(iniEleVal[id])

    let loopReg = /\<loop[^\\>]+\>/g
    let loops=ValHTML.match(loopReg)
    if(loops!=null){
    for (let i = 0; i < loops.length; i++) {
            const regName = new RegExp('name=?\"[^/~]+\"','ig')
            let _Name =regName.test(loops[i])? loops[i].match(/name=?\"[^/~]+\"/ig)[0].slice(6,-1) : "def"
            ValHTML=ValHTML
            .replace(/\<loop[^\\>]+\>/, '<handy> ( new Array('+ loops[i]?.match(/times=\"[^\"]+\"/g)[0].slice(7,-1) +').fill("hi").map((m,'+ _Name +')=>{ return (`')
            .replace(/\<\/loop\>/, '`)}).join(" ") )</handy>')
    }    
    }

    // console.log(ValHTML)
    ValHTML = ValHTML
    .replaceAll('<handy>', 'Ⓢ')
    .replaceAll('</handy>', 'Ⓔ')

    // console.log(ValHTML)

    let ifReg = /\<if[^\\>]+\>/g
    let ifs=ValHTML.match(ifReg)
    if(ifs!=null){
    for (let i = 0; i < ifs.length; i++) {
            ValHTML=ValHTML
            .replace(/\<if[^\\>]+\>/, '`+( '+ ifs[i]?.match(/con=\"[^\"]+\"/g)[0].slice(5,-1)+ " ? `" )
            .replace(/\<\/if\>/, '`:"")+`')
    }    
    }
    // console.log(ifs)





    let reg = /Ⓢ[^\Ⓔ]+Ⓔ/g
    let scripts = ValHTML.match(reg)
    let arr = ValHTML.split(reg)
    var result = "";
    // console.log(ValHTML)
    // console.log(scripts)
    // console.log(arr)
    for (let i = 0; i < scripts?.length; i++) {
        try {
            sc=eval(scripts[i]?.slice(1, -1))==undefined? "" : eval(scripts[i]?.slice(1, -1));
            if(Array.isArray(sc)){
                sc=sc.join(" ")
            }
            result += arr[i] + (sc || "")
            if (i == scripts?.length - 1) {
                result += arr[i + 1]
            }
        } catch (error) {
            console.log(error)
            result += `<div style='color:#f44;background:#f442;padding:8px; width:fit-content;border-radius:8px;'>
            <span>
            ${error}
            </span>
            </div>`
        }
    }
    if (!scripts) {
        result=iniEleVal[id]
    }
    document.getElementById(id).innerHTML = result
    document.getElementById(id).style.display = "block";
}


// console.log(scripts)
// console.log(arr)
// console.log(result)
// document.getElementById("button").textContent= eval(buttonHTML)


// setInterval(()=>{
//     age.update(++i)
//     render()
//     console.log(age.value)
// },1000)







function startAll(){
    setTimeout(()=>{
        for (const key in allSlices) {
                start(key)
        } 
    },100)
}




function onChange(state,fun){
    onChangeFuncs[state].push(fun)
}