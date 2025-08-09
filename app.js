let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);

    input.value = "";

    mostrarLista();
}
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

  
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }


    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}
