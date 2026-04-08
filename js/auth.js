// Inicializa usuários
function initUsers() {
    if (!localStorage.getItem("usuarios")) {
        const usuarios = [
            { usuario: "Marcos", senha: "123456", perfil: "admin" }
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
        localStorage.setItem("usuarioLogado", user.usuario);
        localStorage.setItem("perfil", user.perfil);
        window.location.href = "admin.html";
    } else {
        alert("Login inválido");
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
    localStorage.removeItem("perfil");
    window.location.href = "index.html";
}

// CADASTRAR USUÁRIO (APENAS ADMIN)
function cadastrarUsuario(usuario, senha, perfil) {
    const perfilLogado = localStorage.getItem("perfil");

    if (perfilLogado !== "admin") {
        alert("Sem permissão!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.usuario === usuario);

    if (existe) {
        alert("Usuário já existe!");
        return;
    }

    usuarios.push({ usuario, senha, perfil });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    listarUsuarios();
}

// EXCLUIR USUÁRIO (SÓ ADMIN)
function excluirUsuario(usuario) {
    const perfil = localStorage.getItem("perfil");

    if (perfil !== "admin") {
        alert("Sem permissão!");
        return;
    }

    if (usuario === "Marcos") {
        alert("Não pode excluir o usuário principal!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    usuarios = usuarios.filter(u => u.usuario !== usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    listarUsuarios();
}

// LISTAR USUÁRIOS
function listarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    if (!lista) return;

    lista.innerHTML = "";

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const perfil = localStorage.getItem("perfil");

    usuarios.forEach(u => {
        const li = document.createElement("li");

        let botao = "";

        if (perfil === "admin" && u.usuario !== "Marcos") {
            botao = `<button onclick="excluirUsuario('${u.usuario}')">Excluir</button>`;
        }

        li.innerHTML = `
            ${u.usuario} (${u.perfil})
            ${botao}
        `;

        lista.appendChild(li);
    });
}
