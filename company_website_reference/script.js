const character = document.getElementById("character");
const block = document.getElementById("block");

function jump() {
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

function checkDead() {
  const characterTop = parseInt(window.getComputedStyle(character).top);
  const blockLeft = parseInt(window.getComputedStyle(block).left);

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("bruh");
  }
}

setInterval(checkDead, 10);

