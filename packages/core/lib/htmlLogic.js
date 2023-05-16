

/**
 * 
 * @param {string} html 
 * @returns {HTMLElement}
 * @example
 * this is string "<p>hello</p>"  // this is html element <p>hello</p>
 */

function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}



document.body.onload = (() => {

    htmlLogic(document.body)

    /**
     *  
     * @param {html element } element 
     * it will start from the element u give her and go thro each child and implement the html logic on it
     */
    function htmlLogic(element) {
        let children = Array.from(element.children)
        children.forEach((child) => {
            try {
                if (child.getAttribute("loop")) {
                    loopEle(child)
                }
                if (child.getAttribute("data")) {
                    dataAtr(child)
                }
                if (child.getAttribute("code") == "" || child.getAttribute("code")) {
                    codeAtr(child)
                }
                if (child.getAttribute("if")) {
                    ifAtr(child)
                }
                if (child.getAttribute("-style")) {
                    styleAtr(child)
                }
                if (child.getAttribute("inside")==""|| child.getAttribute("inside")) {
                    insideAtr(child)
                }
            } catch (err) {
                console.log(err)
                child.innerHTML="<div style='background:#f003;color:#f00;padding:4px 10px;width:fit-content;border-radius:8px;'>"+err.message+"</div>"
            }
            htmlLogic(child)
        })
    }

})










/**
 * 
 * @param {html element} ele 
 * you give this html element that have a data att on it and it will generate a data from the data att
 * 
 */

function dataAtr(ele) {
    if (ele.getAttribute("name")) {
        window["__"+ele.getAttribute("name")] = new Object(eval(` new Object(${ele.getAttribute("data")})`))
        let data = window["__"+ele.getAttribute("name")]
        window[ele.getAttribute("name")] = (key)=>{
            return data[key]
        }
        for (const key in data) {
            if (Array.isArray(data[key])) {
                ele.innerHTML = ele.innerHTML.replaceAll("_" + key + "_", "[" + data[key].map(m => "'" + m + "'") + "]")
            } else {
                ele.innerHTML = ele.innerHTML.replaceAll("_" + key + "_", data[key])
            }

        }
    } else {
        let data = eval(` new Object(${ele.getAttribute("data")})`)
        for (const key in data) {
            if (Array.isArray(data[key])) {
                ele.innerHTML = ele.innerHTML.replaceAll("_" + key + "_", "[" + data[key].map(m => "'" + m + "'") + "]")
            } else {
                ele.innerHTML = ele.innerHTML.replaceAll("_" + key + "_", data[key])
            }
}
    }

}


/**
 * 
 * @param {html element} ele 
 * you give this html element that have a code att on it and it will render the content of the element as code
 * @example 
        codeAtr(<p code>1 + 1</p>) // <p>2</p>
 */
function codeAtr(ele) {
    let content = ele.innerHTML
    let val= eval(content)
    ele.innerHTML = val? val:val==0? 0 : ''
}


/**
 * 
 * @param {html element} ele 
 * you give this html element that have a if att on it and it will render only if the content of if is true
 * @example 
        (<p if="1==2">hello</p>) // it wont render the p tag bc the if condition is not correct
 */


function ifAtr(ele) {
    let con = ele.getAttribute("if")
    if (!eval(con)) {
        ele.style.display = "none"
    }
}

/**
 * 
 * @param {html element} ele 
 * you give this html element that have a -style att on it and it will return an element with style that -style att have
 * @example 
        (<p -style="{color:'red'}">hello</p>) // hello <= the color of the p tag is  red
 */


function styleAtr(ele) {
    let style = ele.getAttribute("-style")
    console.log(style)
    Object.assign(ele.style,eval(`new Object(${style})`));
}

/**
 * 
 * @param {html element} ele 
 * you give this html element that have a inside att on it and it will return a the element but any thing inside _(any)_ will render as code
 *  
 * @example 
        <p inside>_(1+2)_hello</p> // <p inside> 3 hello </p>
 */

function insideAtr(ele) {
    ele.innerHTML = ele.innerHTML.replaceAll("_(","{{{")
                                .replaceAll(")_","}}}")
    ele.innerHTML = ele.innerHTML.replaceAll(/{{{[^/}}}]+}}}/g,(f)=>" "+eval(f.slice(2,-2)))
}

/**
 * 
 * @param {html element} ele 
 * you give this html element that have a loop and name  att on it and it will loop inside the array in the in att and return for each item in the array an element
 *  
 * @example 
        <div loop='color' in="['red','blue']"><p -for='color' item></p></div> //  <div> <p>red</p> <p>blue</p> </div>
 */

function loopEle(ele) {
    let _loop = ele.getAttribute("loop")
    let _In = ele.getAttribute("in")
    let array = window[_loop] = new Object(eval(` new Object(${_In})`))
    result = ""
    for (let i = 0; i < array.length; i++) {
        let getTexts = ele.querySelectorAll("[item]")
        getTexts.forEach((text) => {
            if (text.getAttribute("-for")==_loop) {
                if (text.getAttribute("item")) {
                    text.innerHTML = eval("array[" + i + "]." + text.getAttribute("item"))
                } else {
                    text.innerHTML = eval("array[" + i + "]")
                }
            }

        })
        result += ele.innerHTML;
        result = result.replaceAll("_i-"+_loop+"_", i)
        result = result.replaceAll("_v-"+_loop+"_", array[i])
    }

    ele.innerHTML = result;
}
