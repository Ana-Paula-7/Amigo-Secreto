//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];

function adicionarParticipante() {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();

  if (nome && !participantes.includes(nome)) {
    participantes.push(nome);
    atualizarLista();
    nomeInput.value = "";
  }
}

function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  participantes.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortear() {
  if (participantes.length < 2) {
    alert("Adicione pelo menos 2 participantes.");
    return;
  }

  const sorteados = [...participantes];
  let resultado = "";

  // Embaralhar sorteados
  for (let i = sorteados.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sorteados[i], sorteados[j]] = [sorteados[j], sorteados[i]];
  }

  // Garantir que ninguém tire a si mesmo
  for (let i = 0; i < participantes.length; i++) {
    if (participantes[i] === sorteados[i]) {
      sortear(); // Refaz sorteio se alguém tirou a si mesmo
      return;
    }
  }

  for (let i = 0; i < participantes.length; i++) {
    resultado += `${participantes[i]} ➡️ ${sorteados[i]}<br>`;
  }

  document.getElementById("resultado").innerHTML = resultado;
}
