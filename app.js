
function handleSubmit(e){
    let inputValue=document.getElementById("input-form").value
    console.log(inputValue)
    document.getElementById("output").innerHTML = inputValue;
    
}
function elSubmit(e){
let el=document.getElementById("element-name").value;
    console.log(el);
    
    var x = document.getElementById(el).nodeName;
    console.log(x);
    
}

