function init() {
  const botaoConselho = document.getElementById("proximo");
  botaoConselho && botaoConselho.addEventListener("click", clickBtn);

  var frase = document.getElementById("paragrafo");
  frase && pegarFrase(frase);

  var restart = document.getElementById("restart");
  restart && restart.addEventListener("click", re);
}

function clickBtn(e) {
  e.preventDefault();
  window.location = "/conselho.html";
}

function pegarFrase(frase) {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((conselhoBode) => {
      frase.innerHTML = conselhoBode.slip.advice;
    });
}

function re() {
  location.reload(true);
}

init();
