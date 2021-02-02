let next = adelante, prev = atras;

let img = document.getElementsByClassName("fondo");


let Imagenes = [ "Imagenes/cris.jpg","Imagenes/edu.jpg"];
img[1].style.backgroundImage ="url('" + Imagenes[0] + "')";
img[2].style.backgroundImage ="url('" + Imagenes[1] + "')";
img[0].style.backgroundImage ="url('" + Imagenes[Imagenes.length-1] + "')";
console.log(img)
var atras = Imagenes.length - 1;
var adelante = 1;




function setNext_Prev(next, prev) {
    adelante = next;
    atras = prev;
}

window.onload = setInterval(function(){ transicionD()}, 5000);

function transicionI() {
    next = adelante, prev = atras;
  
    img[1].style.animationName = "desplazarse3";
    img[0].style.animationName = "desplazarse4";
    
    setTimeout(callbackIzquierda, 2450)
}

function transicionD() {
    next = adelante, prev = atras;

    img[1].style.animationName = "desplazarse";
    img[2].style.animationName = "desplazarse2";

    setTimeout(callbackDerecha, 2450);
}

function callbackIzquierda() {
    
    img[1].style.backgroundImage = "url('" + Imagenes[atras] + "')";

    next--;
    prev--;
    
    setNext_Prev(next, prev);
    if (next == -1) {
        next = imagenes.length - 1;
    }
    if (prev == -1) {
        prev = imagenes.length - 1;
    }
    setNext_Prev(next, prev);
    
    intercambio();
    noneAnimation(0);
    img[0].style.animationName = "none";
    img[1].style.animationName = "none";


}

function callbackDerecha() {
    
    img[1].style.backgroundImage = "url('" + imagenes[adelante] + "')";

    next++;
    prev++;
    
    setNext_Prev(next, prev);

    if (prev == imagenes.length) {
        prev = 0;
    }
    if (next == imagenes.length) {
        next = 0;
    }
    setNext_Prev(next, prev);
    
    intercambio();
    noneAnimation(2);



}
