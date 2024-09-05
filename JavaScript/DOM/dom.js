console.log("Llamado desde dom.html");


// Agarrar un elemento del DOM
let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

// Pripiedades mas 
//extrae todo el conteido html de la etiqueta
console.log(elementoDOM.innerHTML);
//extrae todo el contenido de texto de la etiqueta
console.log(elementoDOM.innerText);

elementoDOM.innerText = "Te cambie desde el js";
console.log(elementoDOM.innerHTML);
elementoDOM.innerHTML = "<span>cambie ogtra vez<span>";
console.log(elementoDOM.innerHTML);

// Agregar otro elemento del HTML
const contenido = document.querySelector("#content");

console.log(contenido);
contenido.innerHTML = '<article><h1>Ingresado desde JS</h1><h2>y yo soy su hermano</h2></article>';

/*
realiza una function que reciba un array numerico y que retorne
un array completamente nuevo con los numeros que sean multiplos de 3
y que la suma de todos sus numeros sea menor que 100
*/


// Agarramos el botón
const btnApretable = document.getElementById('btn-magic');

btnApretable.addEventListener('click',() => {
    alert('Este mensaje es la mágia del botón!!');
    console.log('despues del clic');
});