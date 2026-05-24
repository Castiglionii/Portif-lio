alert("JS funcionando");

const mascote = document.getElementById("mascote");
const somMascote = document.getElementById("somMascote");

somMascote.volume = 0.3;

mascote.addEventListener("click", () => {

  somMascote.currentTime = 0;

  somMascote.play();

});
