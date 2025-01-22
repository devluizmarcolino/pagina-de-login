document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((msg) => (msg.style.display = "none"));
  document.getElementById("successMessage").style.display = "none";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById("emailError").textContent =
      "O e-mail é obrigatório";
    document.getElementById("emailError").style.display = "block";
    return;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Digite um e-mail válido";
    document.getElementById("emailError").style.display = "block";
    return;
  }

  if (!password) {
    document.getElementById("passwordError").textContent =
      "A senha é obrigatória";
    document.getElementById("passwordError").style.display = "block";
    return;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "A senha deve ter pelo menos 6 caracteres";
    document.getElementById("passwordError").style.display = "block";
    return;
  }

  const submitButton = document.querySelector(".submit-btn");
  submitButton.textContent = "Carregando...";
  submitButton.disabled = true;

  setTimeout(() => {
    document.getElementById("successMessage").style.display = "block";
    submitButton.textContent = "Entrar";
    submitButton.disabled = false;

    document.getElementById("loginForm").reset();
  }, 1500);
});