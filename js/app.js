// creacion de la variable de header
//document.getElementByTagMe

var header = document.querySelector('header');

    //esta funcion va ser que mi scrool tenga u evento cuando lo dezplace
// sintaxis addEventListener(evento, function)    
wiindow.onLoad = function (){
var position = window.scrollY;
if (position > 50px){
    addEventListener('scroll', shrink);

}
function shrink(){
    header.classList = 'shirnk';
}
function remove(){
    header.classList.remove('shrink')
}