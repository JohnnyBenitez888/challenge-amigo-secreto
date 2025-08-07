// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Variables
let amigos = [];
const ul = document.getElementById("listaAmigos");

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  console.log("nombre: " + amigo);//verificar input

  if (validarEntrada(amigo)) {
    if (amigos.includes(amigo)) {
      alert(`${amigo} ya está en la lista.`);
      limpiar();
    } else {
      limpiar();
      let li = document.createElement("li");
      li.textContent = mayusPrimeraLetra(amigo);
      ul.appendChild(li);
      amigos.push(li.textContent);
    }
  }

  console.log("Lista de amigos: " + amigos);//verificar lista de amigos
};

function sortearAmigo() {}
function limpiar() {
    document.getElementById("amigo").value = "";
};

function validarEntrada(amigo) {
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return false;
  };
  return true;
};

function mayusPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

