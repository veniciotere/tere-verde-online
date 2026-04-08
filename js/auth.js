function excluirUsuario(usuario) {
    const perfil = localStorage.getItem("perfil");

    // Só admin pode excluir
    if (perfil !== "admin") {
        alert("Sem permissão!");
        return;
    }

    // Não pode excluir o Marcos
    if (usuario === "Marcos") {
        alert("Não pode excluir o usuário principal!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios = usuarios.filter(u => u.usuario !== usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    listarUsuarios();
}
