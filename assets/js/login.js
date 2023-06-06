// Função para verificar as credenciais de login
function login(event) {
  event.preventDefault(); // Evita o comportamento padrão de recarregar a página

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verifique se as credenciais são válidas (faça a lógica de verificação adequada aqui)
  const isValid = username === "Martini" && password === "123";

  if (isValid) {
    localStorage.setItem("isAuthenticated", true); // Define o valor "isAuthenticated" como verdadeiro
    Remove o blur e mostra a tela inicial normal...
  } else {
    alert("Credenciais inválidas. Por favor, tente novamente."); // Exibe uma mensagem de erro
  }
}

// Adicione um evento de clique ao botão de login
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", login);
