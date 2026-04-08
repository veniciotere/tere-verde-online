function salvarEvento() {
    const nome = document.getElementById("eventoNome").value;
    const data = document.getElementById("eventoData").value;

    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    eventos.push({ nome, data });

    localStorage.setItem("eventos", JSON.stringify(eventos));

    listarEventos();
}

function listarEventos() {
    const lista = document.getElementById("listaEventos");
    lista.innerHTML = "";

    let eventos = JSON.parse(localStorage.getItem("eventos")) || [];

    eventos.forEach(e => {
        const li = document.createElement("li");
        li.innerText = `${e.nome} - ${e.data}`;
        lista.appendChild(li);
    });
}

window.onload = listarEventos;
