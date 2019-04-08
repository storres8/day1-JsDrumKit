window.addEventListener("keydown", e => {
  e.preventDefault();
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (audio === null) {
    return;
  }
  console.log(audio);
  audio.play();
});
