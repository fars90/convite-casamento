const envelope = document.getElementById("envelope");
const instruction = document.getElementById("instruction");
const music = document.getElementById("music");
const muteButton = document.getElementById("muteButton");
const volumeSlider = document.getElementById("volumeSlider");

let step = 0;

if (music) {
  music.volume = 0.5;
}

envelope.addEventListener("click", () => {
  // tocar música no primeiro clique
  if (step === 0) {
    music.play().catch(() => {});
    envelope.classList.add("turned");
    step = 1;
  } else if (step === 1) {
    envelope.classList.add("open");
    step = 2;

    setTimeout(() => {
      envelope.classList.add("final");
      instruction.classList.add("hide");
    }, 2800);
  }
});

muteButton.addEventListener("click", (event) => {
  event.stopPropagation();

  music.muted = !music.muted;
  muteButton.textContent = music.muted ? "🔇" : "🔊";
});

volumeSlider.addEventListener("input", (event) => {
  music.volume = event.target.value;

  if (music.volume == 0) {
    music.muted = true;
    muteButton.textContent = "🔇";
  } else {
    music.muted = false;
    muteButton.textContent = "🔊";
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // app em segundo plano → pausa
    if (music && !music.paused) {
      music.pause();
    }
  } else {
    // voltou à app → retoma (opcional)
    if (music && step > 0 && !music.muted) {
      music.play().catch(() => {});
    }
  }
});
