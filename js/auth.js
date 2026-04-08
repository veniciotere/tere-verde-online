const ADMIN = {
    email: "admin@tere.com",
    senha: "123"
};

function login(email, senha) {
    if (email === ADMIN.email && senha === ADMIN.senha) {
        localStorage.setItem("auth", "true");
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
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}
