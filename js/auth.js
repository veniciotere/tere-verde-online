// Usuário fake (admin)
const adminUser = {
    email: "admin@tereverde.com",
    senha: "123456"
};

function login(email, senha) {
    if (email === adminUser.email && senha === adminUser.senha) {
        localStorage.setItem("logado", "true");
        window.location.href = "admin.html";
    } else {
        alert("Login inválido!");
    }
}

function verificarLogin() {
    const logado = localStorage.getItem("logado");

    if (!logado) {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("logado");
    window.location.href = "index.html";
}
