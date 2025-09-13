// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

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

function generarIndice() {
    let numeroDeIndice = Math.floor(Math.random()*listaAmigos.length)
    return numeroDeIndice;
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado')

    if (listaAmigos.length === 0) {
        alert ('Por favor, ingrese un nombre')
    } else {
        let indice = generarIndice()
        let amigoSorteado = listaAmigos[indice];
        resultado.textContent = `El amigo sorteado es ${amigoSorteado}`
    }
}
    
function limpiarCampo() {
    document.querySelector ('#amigo').value ="";
}

