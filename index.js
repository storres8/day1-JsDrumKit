window.addEventListener("keydown", e => {
  e.preventDefault();
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio === null) {
    return;
  }
  //   console.log(key);
  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");
});

function removeTrans(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

let allKeys = document.querySelectorAll(".key");

allKeys.forEach(key => {
  key.addEventListener("transitionend", removeTrans);
});
