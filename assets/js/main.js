const campo0 = document.getElementById("campo0");
const campo1 = document.getElementById("campo1");
const campo2 = document.getElementById("campo2");
const campo3 = document.getElementById("campo3");
const campo4 = document.getElementById("campo4");
const campo5 = document.getElementById("campo5");
const campo6 = document.getElementById("campo6");
const campo7 = document.getElementById("campo7");
const campo8 = document.getElementById("campo8");
const campo9 = document.getElementById("campo9");
const campo10 = document.getElementById("campo10");
const campo11 = document.getElementById("campo11");
const campo12 = document.getElementById("campo12");
const campo13 = document.getElementById("campo13");
const campo14 = document.getElementById("campo14");
const campo15 = document.getElementById("campo15");
const campo16 = document.getElementById("campo16");
const campo17 = document.getElementById("campo17");
const campo18 = document.getElementById("campo18");
const campo19 = document.getElementById("campo19");
const campo20 = document.getElementById("campo20");
const campo21 = document.getElementById("campo21");
const campo22 = document.getElementById("campo22");
const campo23 = document.getElementById("campo23");
const campo24 = document.getElementById("campo24");
const botaoEncontrar = document.querySelector(".btn-encontrar-diamantes");
const formularioLogin = document.getElementById("login-form");
const loginContainer = document.querySelector(".login-container");

function login(event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verifique se as credenciais são válidas (faça a lógica de verificação adequada aqui)
  const isValid = username === "M" && password === "1";

  if (isValid) {
    localStorage.setItem("isAuthenticated", true); // Define o valor "isAuthenticated" como verdadeiro

    // Oculta o formulário e remove o efeito de desfoque
    formularioLogin.style.display = "none";
    loginContainer.style.background = "none";
    loginContainer.style.backdropFilter = "";
    loginContainer.style.webkitBackdropFilter = "";

    // Resto da lógica para mostrar a tela inicial normal
  } else {
    alert("Credenciais inválidas. Por favor, tente novamente."); // Exibe uma mensagem de erro
  }
}

// Adicione um evento de clique ao botão de login
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", login);

document.addEventListener("DOMContentLoaded", function () {
  const campos = document.querySelectorAll(".campo");
  const botaoEncontrar = document.querySelector(".btn-encontrar-diamantes");
  const cronometroElement = document.getElementById("cronometro");

  let botaoBloqueado = false;

  botaoEncontrar.addEventListener("click", function () {
    if (botaoBloqueado) {
      return;
    }

    botaoEncontrar.textContent = "Hackeando o sistema aguarde...";

    openPopup("Hackeando o sistema aguarde...", 5000);

    cronometro();

    const matriz = [
      [campo0, campo1, campo2, campo3, campo4],
      [campo5, campo6, campo7, campo8, campo9],
      [campo10, campo11, campo12, campo13, campo14],
      [campo15, campo16, campo17, campo18, campo19],
      [campo20, campo21, campo22, campo23, campo24],
    ];

    function embaralharMatriz(matriz) {
      let elementos = matriz.flat();
      for (let i = elementos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elementos[i].innerHTML, elementos[j].innerHTML] = [
          elementos[j].innerHTML,
          elementos[i].innerHTML,
        ];
      }
    }

    embaralharMatriz(matriz);

    const camposAleatorios = [...campos]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    camposAleatorios.forEach((campo) => {
      campo.innerHTML = `<img src="assets/img/cristal.png" alt="cristal">`;
    });

    console.log(matriz);

    botaoEncontrar.disabled = true;
    botaoBloqueado = true;
    botaoEncontrar.classList.add("btn-bloqueado");

    // imagem.src = "assets/img/loading.gif";

    function openPopup(mensagem, duracao) {
      console.log("Abriu o popup");
      const popup = document.createElement("div");
      popup.className = "popup";

      const imagem = document.createElement("img");
      imagem.src = "assets/img/celGif.gif";
      imagem.alt = "Descrição da Imagem";

      const texto = document.createElement("p");
      texto.textContent = mensagem;

      popup.appendChild(imagem);
      popup.appendChild(texto);

      document.body.appendChild(popup);

      setTimeout(function () {
        document.body.removeChild(popup);
      }, duracao);
    }

    function cronometro() {
      cronometroElement.textContent = "60 segundos";
      isCronometroRunning = true;

      let segundos = 60;
      const intervalId = setInterval(() => {
        segundos--;
        cronometroElement.textContent = `${segundos} segundos`;

        if (segundos === 0) {
          clearInterval(intervalId);
          cronometroElement.textContent =
            "INTELIGÊNCIA ARTIFICIAL DESBLOQUEADA"; // Altera o texto do cronômetro
          isCronometroRunning = false;

          campos.forEach((campo) => {
            campo.innerHTML = `<img src="assets/img/campo.png" alt="campo">`;
          });

          botaoEncontrar.disabled = false;
          botaoBloqueado = false;
          botaoEncontrar.classList.remove("btn-bloqueado");
        }
      }, 1000);
    }
  });
});
