function login(){

let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario == "admin" && senha == "1234"){
    alert("Login realizado!");
    window.location.href = "dashboard.html";
}else{
    alert("Usuário ou senha incorretos");
}

}
