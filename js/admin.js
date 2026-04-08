function criarUsuario() {
    cadastrarUsuario(
        document.getElementById("novoUsuario").value,
        document.getElementById("novaSenha").value,
        document.getElementById("perfil").value
    );
}

// Executa ao carregar
window.onload = function () {
    checkAuth();
    listarUsuarios();
    listarEventosAdmin();
};
