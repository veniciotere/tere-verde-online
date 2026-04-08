function getEventos() {
    return JSON.parse(localStorage.getItem("eventos")) || [];
}

function salvarEventos(eventos) {
    localStorage.setItem("eventos", JSON.stringify(eventos));
}

// TODOS podem criar
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

// SÓ ADMIN pode excluir
function deletarEvento(id) {
    if (localStorage.getItem("perfil") !== "admin") {
        alert("Sem permissão!");
        return;
    }

    let eventos = getEventos();
    eventos = eventos.filter(e => e.id !== id);
    salvarEventos(eventos);
    listarEventosAdmin();
}

// SÓ ADMIN pode ativar/inativar
function alternarStatus(id) {
    if (localStorage.getItem("perfil") !== "admin") {
        alert("Sem permissão!");
        return;
    }

    let eventos = getEventos();

    eventos = eventos.map(e => {
        if (e.id === id) {
            e.status = e.status === "Ativo" ? "Inativo" : "Ativo";
        }
        return e;
    });

    salvarEventos(eventos);
    listarEventosAdmin();
}

// LISTAR EVENTOS
function listarEventosAdmin() {
    const lista = document.getElementById("listaEventos");
    if (!lista) return;

    lista.innerHTML = "";

    const perfil = localStorage.getItem("perfil");

    getEventos().forEach(e => {
        let botoes = "";

        if (perfil === "admin") {
            botoes = `
                <button onclick="alternarStatus(${e.id})">Ativar/Inativar</button>
                <button onclick="deletarEvento(${e.id})">Excluir</button>
            `;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            ${e.nome} - ${e.data} - ${e.status}
            ${botoes}
        `;

        lista.appendChild(li);
    });
}
