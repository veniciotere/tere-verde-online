window.onload = function () {
    checkAuth();

    document.getElementById("usuarioInfo").innerText =
        "Logado como: " + localStorage.getItem("usuarioLogado");

    listarUsuarios();
    listarEventosAdmin();
};

// CRIAR USUÁRIO
function criarUsuario() {
    cadastrarUsuario(
        document.getElementById("novoUsuario").value,
        document.getElementById("novaSenha").value,
        document.getElementById("perfil").value
    );
}

// CRIAR EVENTO
function criarEvento() {
    adicionarEvento(
        document.getElementById("nome").value,
        document.getElementById("data").value,
        "Ativo"
    );
}
