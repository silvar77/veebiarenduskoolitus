


let nimeElement = document.getElementById('name');

let mailiElement = document.getElementById('email');

let textarea = document.getElementById('sonum');

let saada = document.getElementById('saada');



saada.addEventListener("click", function () {
  
  if (nimeElement.length == '' || mailiElement.length == '' || textarea.value == '') {
    document.getElementById("teade").innerHTML = alert("Error!!!");
  } 
  else {    
    nimeElement.value = '';
    mailiElement.value = '';
    textarea.value = '';
    document.getElementById("teade").innerHTML = alert("Sending succsess!");
  }
})



