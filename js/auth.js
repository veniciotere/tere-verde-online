function initUsers() {
    if (!localStorage.getItem("usuarios")) {
        const usuarios = [
            { usuario: "Marcos", senha: "123456", perfil: "admin" }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

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

function checkAuth() {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

// CADASTRAR USUÁRIO
function cadastrarUsuario(usuario, senha, perfil) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find(u => u.usuario === usuario);

    if (existe) {
        alert("Usuário já existe!");
        return;
    }

    usuarios.push({ usuario, senha, perfil });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário criado!");
}

// EXCLUIR USUÁRIO (SÓ MARCOS)
function excluirUsuario(usuario) {
    const perfil = localStorage.getItem("perfil");

    if (perfil !== "admin") {
        alert("Sem permissão!");
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

    usuarios.forEach(u => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${u.usuario} (${u.perfil})
            <button onclick="excluirUsuario('${u.usuario}')">Excluir</button>
        `;

        lista.appendChild(li);
    });
}
