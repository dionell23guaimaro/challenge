// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);

    // Actualizar la lista visual
    mostrarAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
}

// Función para mostrar todos los amigos en la lista HTML
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el array amigos y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo aleatoriamente (ajustada a llamar sortearAmigo)
function sortearAmigo() {
    // Validar que haya amigos en el array
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}