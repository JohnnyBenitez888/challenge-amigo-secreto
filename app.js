// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
const ul = document.getElementById("listaAmigos");


function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  console.log("nombre: " + amigo);

  if (validarEntrada(amigo)) {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    let li = document.createElement("li");
    li.textContent = amigo;
    ul.appendChild(li);
  }

  console.log("Lista de amigos: " + amigos);
}

function sortearAmigo() {}

function validarEntrada(amigo) {
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return false;
  }
  return true;
}
