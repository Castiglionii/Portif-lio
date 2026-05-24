let tocando = false;

function tocarSom() {

  if (tocando) return;

  const som = document.getElementById("somMascote");

  tocando = true;

  som.volume = 0.3;

  som.currentTime = 0;

  som.play();

  som.onended = () => {
    tocando = false;
  };

}
