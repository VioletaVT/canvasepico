var eventomouse=""
var posicionx
var posiciony
var aww= document.getElementById("Cap")
var agua= aww.getContext("2d")
var color= "pink"
var ancho= 3
aww.addEventListener("mousedown", ola)
function ola(){
    eventomouse="click"
    console.log(eventomouse)
    color=document.getElementById("lala").value
    ancho=document.getElementById("guau").value
}
aww.addEventListener("mouseup", alo)
function alo(){
    eventomouse="soltar"
    console.log(eventomouse)
}
aww.addEventListener("mouseleave",adio)
function adio(){
    eventomouse="bye"
    console.log(eventomouse)
}
aww.addEventListener("mousemove",semovio)
function semovio(s){
 derecha=s.clientX-aww.offsetLeft
 arriba=s.clientY-aww.offsetTop
 if (eventomouse=="click"){
    agua.beginPath()
agua.strokeStyle=color
agua.lineWidth= ancho
console.log("x:"+posicionx)
console.log("y:"+posiciony)
agua.moveTo(posicionx,posiciony)
agua.lineTo(derecha,arriba)
agua.stroke()
 }
 posicionx=derecha
 posiciony=arriba
}
function jaja(){
    agua.clearRect(0,0,aww.width,aww.height)
}
