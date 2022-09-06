enlargeButton = document.getElementById("enlargeButton");
smalldt = document.getElementById("smalldt");
enlargeButton.addEventListener("click", onButtonClick);
function onButtonClick() {
    smalldt.style.transform= "scale(1.75)";
    smalldt.style.display="block";
    smalldt.style.margin="auto";
}
smalldt.addEventListener("mouseout",mouseleave);
function mouseleave(){
    smalldt.style.transform= "";
    smalldt.style.display="";
    smalldt.style.margin="";
}
showButton=document.getElementById("showButton");
cadembed = document.getElementById("cad")
showButton.addEventListener("click", onButtonClick2);

function onButtonClick2(){
    cadembed.classList.remove(dontshow);
}