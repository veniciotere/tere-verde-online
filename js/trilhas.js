const trilhas = [
    { nome: "Pedra do Sino", dificuldade: "Difícil" },
    { nome: "Cartão Postal", dificuldade: "Média" },
    { nome: "Suspensa", dificuldade: "Fácil" }
];

const lista = document.getElementById("listaTrilhas");

trilhas.forEach(t => {
    const li = document.createElement("li");
    li.innerText = `${t.nome} - ${t.dificuldade}`;
    lista.appendChild(li);
});
