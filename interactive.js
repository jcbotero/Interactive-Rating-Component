



document.querySelectorAll('.b').forEach(button => button.addEventListener("click", e=>{
  event.target.style.backgroundColor = 'hsl(217, 12%, 63%)';
  event.target.style.color = 'white';
})); /* asi cambio el background color de cada boton y tbn el color del texto cuando el boton es oprimido*/
/* en el sector hago la ruta hasta la tag button */
/* y luego la forEach me dice que color poner a cada boton */

document.querySelectorAll('.b').forEach(button => button.addEventListener("dblclick", e=>{
  event.target.style.backgroundColor = 'hsl(205, 11%, 22%)';
})); /* este hace lo mismo del de arriba pero con doble click */


let resultado = document.getElementById("option"); 


document.getElementById("1").onclick = function() {
  resultado.innerText = "You selected 1 out of 5";
}; 

document.getElementById("2").onclick = function() {
  resultado.innerText = "You selected 2 out of 5";
};

document.getElementById("3").onclick = function() {
  resultado.innerText = "You selected 3 out of 5";
};

document.getElementById("4").onclick = function() {
  resultado.innerText = "You selected 4 out of 5";
}; 

document.getElementById("5").onclick = function() {
  resultado.innerText = "You selected 5 out of 5";
};  // asi puede hacer...primero traigo en una variable el id de la tag
    // donde ubico el innertext.. luego le doy un id a cada boton 
    //que al hacer click me introduzca el text a la tag
    

function message() {  

  document.getElementById("answer").style.display= "";
  answer.className = "message";// asi hago que js referencie la classname de un div para que pueda agarrar el code css //

  }; // esta funcion me dispara el mensaje al darle submit

 