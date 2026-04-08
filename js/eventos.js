function getEventos() {
    return JSON.parse(localStorage.getItem("eventos")) || [];
}

function salvarEventos(eventos) {
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

function adicionarEvento(nome, data, status) {
    const eventos = getEventos();

    eventos.push({
        id: Date.now(),
        nome,
        data,
        status
    });

    salvarEventos(eventos);
    listarEventosAdmin();
}

function deletarEvento(id) {
    let eventos = getEventos();
    eventos = eventos.filter(e => e.id !== id);
    salvarEventos(eventos);
    listarEventosAdmin();
}

function listarEventosAdmin() {
    const lista = document.getElementById("listaEventos");
    if (!lista) return;

    lista.innerHTML = "";

    getEventos().forEach(e => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${e.nome} - ${e.data} - ${e.status}
            <button onclick="deletarEvento(${e.id})">Excluir</button>
        `;

        lista.appendChild(li);
    });
}
