
function handleSubmit(e){
    let inputValue=document.getElementById("input-form").value
    console.log(inputValue)
    document.getElementById("output").innerHTML = inputValue;
    
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

