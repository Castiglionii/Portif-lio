window.addEventListener("DOMContentLoaded", () => {

  const mascote = document.getElementById("mascote");
  const somMascote = document.getElementById("somMascote");

  console.log(mascote);
  console.log(somMascote);

  mascote.onclick = async () => {

    try {

      somMascote.volume = 0.3;

      await somMascote.play();

      console.log("Som tocando");

    } catch(err) {

      console.log("Erro ao tocar:", err);

    }

  };

});
