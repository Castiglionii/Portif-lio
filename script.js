const mascote = document.getElementById("mascote");
const somMascote = document.getElementById("somMascote");

/* volume */
somMascote.volume = 0.3;

/* tocar som */

mascote.addEventListener("click", () => {

  somMascote.currentTime = 0;

  somMascote.play();

});
