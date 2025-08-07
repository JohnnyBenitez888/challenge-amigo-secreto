// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  console.log("nombre: " + amigo); //verificar input

  if (validarEntrada(amigo)) {
    actualizarListaAmigos(amigo);
  }
}

function actualizarListaAmigos(amigo) {
  if (amigos.includes(`<li>${mayusPrimeraLetra(amigo)}</li>`)) {
    alert(`${amigo} ya está en la lista.`);
    limpiar();
  } else {
    limpiar();
    amigos.push(`<li>${mayusPrimeraLetra(amigo)}</li>`);

    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
      listaAmigos.innerHTML += amigos[i];
    }

    console.log("Lista actualizada: " + amigos); //verificar lista actualizada
  }

}

function sortearAmigo() {
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    if (amigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }else if (amigos.length === 1) {
        alert("Solo hay un amigo en la lista, agrega a más amigos." );
        return;
    }else{
        let num = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[num];
        console.log("Amigo sorteado: " + amigoSorteado); //verificar amigo sorteado
        document.getElementById("resultado").innerHTML = amigoSorteado;
        amigos.length = 0;
    }
}

function limpiar() {
  document.getElementById("amigo").value = "";
}

function validarEntrada(amigo) {
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return false;
  }
  return true;
}

function mayusPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
