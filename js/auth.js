// Inicializa usuários (primeira vez)
function initUsers() {
    if (!localStorage.getItem("usuarios")) {
        const usuarios = [
            { usuario: "Marcos", senha: "123456" }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

// LOGIN
function login(usuario, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const user = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (user) {
        localStorage.setItem("auth", "true");
        localStorage.setItem("usuarioLogado", usuario);
        window.location.href = "admin.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}

// VERIFICA LOGIN
function checkAuth() {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
}

// CADASTRAR NOVO USUÁRIO
function cadastrarUsuario(usuario, senha) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.usuario === usuario);

    if (existe) {
        alert("Usuário já existe!");
        return;
    }

    usuarios.push({ usuario, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");
}
