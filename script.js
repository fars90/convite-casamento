const envelope = document.getElementById("envelope");
const instruction = document.getElementById("instruction");

let step = 0;

envelope.addEventListener("click", () => {
  if (step === 0) {
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
