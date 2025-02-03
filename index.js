function run(){
    let htmlCode = document.getElementById("html-code");
    let cssCode = document.getElementById("css-code");
    let jsCode = document.getElementById("js-code");

    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = htmlCode.value +"<style>"+cssCode.value+"</style>";
    output.contentWindow.eval(jsCode.value)
}
function dlmode(){
    if(document.body.style.backgroundColor==="white"){
        document.body.style.backgroundColor="";
        document.body.style.color="";
        document.getElementById("dlbut").style.color="";
        document.getElementById("html-code").style.backgroundColor="";
    document.getElementById("css-code").style.backgroundColor="";
    document.getElementById("js-code").style.backgroundColor="";
    document.getElementById("html-code").style.outline="";
    document.getElementById("css-code").style.outline="";
    document.getElementById("js-code").style.outline="";
    } else {
    document.body.style.backgroundColor="white";
    document.body.style.color="black";
    document.getElementById("dlbut").style.color="black";
    document.getElementById("html-code").style.backgroundColor="white";
    document.getElementById("css-code").style.backgroundColor="white";
    document.getElementById("js-code").style.backgroundColor="white";
    document.getElementById("html-code").style.outline="2px solid black";
    document.getElementById("css-code").style.outline="2px solid black";
    document.getElementById("js-code").style.outline="2px solid black";
    document.getElementById("output").style.outline="2px solid black";
    }
}