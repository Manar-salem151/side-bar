let open =document.getElementById("open")
let close =document.getElementById("close")
let side=document.querySelector(".side")

    open.onclick=function(){
    open.classList.toggle("hide") 
    close.style.display="block"
    side.style.display="block"
}
close.onclick=function(){
    side.style.display="none"
    open.classList.toggle("hide") 
}