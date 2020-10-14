
function showCssEditor()
{   
    let htmleditor=document.getElementById("htmlcontainer")
    let csseditor=document.getElementById("csseditor")
    htmleditor.classList.add("hide")
    csseditor.classList.remove("hide")
}
function showHtmlEditor()
{   
    let htmleditor=document.getElementById("htmlcontainer")
    let csseditor=document.getElementById("csseditor")
    csseditor.classList.add("hide")
    htmleditor .classList.remove("hide")
}

function handleSubmit(e){
    let inputValue=document.getElementById("input-form").value 
    let outputBox=document.getElementById("output")
    console.log(inputValue)
    outputBox.innerHTML = inputValue;
    showCssEditor()
}
function elSubmit(e){
    let elVal=document.getElementById("element-name").value;
    console.log(elVal);
    let el=document.getElementById(elVal);
    if(el)
    { var x = el.nodeName;
        console.log(x);}
    else
    alert('Not Found')
}
