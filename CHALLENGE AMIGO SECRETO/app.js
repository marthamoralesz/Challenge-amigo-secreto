// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombreAmigos = [];

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;
        
        if (amigoAgregado.trim() == "") {
            alert ('Por favor, ingresa un nombre');
        } else {
            listaNombreAmigos.push(amigoAgregado);
            limpiarCampo();
        }

        console.log(listaNombreAmigos.length)
        console.log(listaNombreAmigos)

}

function limpiarCampo() {
    document.querySelector ('#amigo').value ="";
}