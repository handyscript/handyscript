function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

var myUi = `
<div>
<temp.create name="button" >
        <button class="bg-white border rounded-lg py-1 hover:bg-gray-50 shadow-sm px-3 text-gray-700">_children_</button>
</temp.create>
</div>
`
myUi=elementFromHtml(myUi)