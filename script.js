window.addEventListener("DOMContentLoaded", () => {

  console.log("JS funcionando");

  const mascote = document.getElementById("mascote");
  const somMascote = document.getElementById("somMascote");

  if (!mascote) {
    console.log("Mascote não encontrado");
    return;
  }

  if (!somMascote) {
    console.log("Áudio não encontrado");
    return;
  }

  somMascote.volume = 0.3;

  mascote.addEventListener("click", () => {

    console.log("Clique detectado");

    somMascote.currentTime = 0;

    somMascote.play();

  });

});
