let text = document.querySelector("h3");

window.addEventListener("keydown", e => {
  e.preventDefault();
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio === null) {
    return;
  }

  let textArray = ["NICE!", "SWEET!", "FIRE!", "LOVE IT!"];

  let ranNum = Math.floor(Math.random() * Math.floor(4));

  audio.play();
  text.classList.add("text-pop-up-top");
  text.innerText = textArray[ranNum];
  audio.currentTime = 0;
  key.classList.add("playing");
});

function removeTrans(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
  text.classList.remove("text-pop-up-top");
  text.innerText = "";
}

let allKeys = document.querySelectorAll(".key");

allKeys.forEach(key => {
  key.addEventListener("transitionend", removeTrans);
});
