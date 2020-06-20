var icoFligh = document.getElementById("icoFligh")
var btn = document.getElementById("btn")
var icoCheck = document.getElementById("icoCheck")

btn.addEventListener("click", function() {
    this.classList.add("active");
})

btn.addEventListener("animationstart", function(){
    setTimeout(function(){
        icoCheck.style.display ="inline-block"
    },950)
})

icoFligh.addEventListener("animationend", function(){
    this.style.display="none";
})