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
