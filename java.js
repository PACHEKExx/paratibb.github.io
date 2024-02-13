
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

// Agrega un evento de clic al botón para reproducir la música
document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('myAudio').play();
});