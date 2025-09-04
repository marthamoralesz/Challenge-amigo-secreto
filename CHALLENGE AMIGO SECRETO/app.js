// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;
        
        if (amigoAgregado.trim() == "") {
            alert ('Por favor, ingresa un nombre');
        } else {
            listaAmigos.push(amigoAgregado);
            mostrarAmigos();
            limpiarCampo();

        }

}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML ="";
    for (i=0; i<listaAmigos.length; i++) {
        let amigo = listaAmigos[i];
        let nuevoElemento = document.createElement('li')
        nuevoElemento.textContent = amigo;
        lista.appendChild(nuevoElemento);
    }
}


function limpiarCampo() {
    document.querySelector ('#amigo').value ="";
}

