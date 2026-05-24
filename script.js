window.onload = function () {

  const mascote = document.querySelector(".mascote");
  const som = document.getElementById("somMascote");

  som.volume = 0.3;

  mascote.addEventListener("click", function () {

    som.currentTime = 0;

    som.play();

    console.log("clicou no mascote");

  });

};
