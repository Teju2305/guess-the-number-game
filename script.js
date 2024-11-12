let number = 0;
let text = document.querySelector("#hint");
let remain = document.querySelector("#remaining");

let attempts = 5;
let count = 0;

document.getElementById("number").addEventListener("input", function () {
  this.style.border = "3px solid #4CAF50";
});
function rand() {
  number = Math.floor(Math.random() * 100) + 1;
}

function check() {
  if (count === 0) {
    rand();
  }

  let num = Number(document.querySelector("#number").value);
  count++;

  if (num <= 0 || num > 100) {
    alert("Fill the correct range value");
    return;
  }

  let difference = number - num;

  if (difference > 50) {
    text.innerHTML = "Way off 😣! My number is much greater than " + num;
  } else if (difference > 30) {
    text.innerHTML = "Far off 😐! My number is greater than " + num;
  } else if (difference > 10) {
    text.innerHTML = "Getting closer! 😊 My number is greater than " + num;
  } else if (difference >= 1) {
    text.innerHTML =
      "Very close! 😃 My number is just a bit greater than " + num;
  } else if (difference == 0) {
    text.innerHTML = "Congratulations! You guessed it right! 🎉";
    triggerPaperShower();
    document.querySelector("#btn").disabled = true;
    return;
  } else {
    text.innerHTML = "Just a bit off! 😅 My number is less than " + num;
  }
  remain.innerHTML = "Remaining Attempts " + (attempts - count);
  if (count == attempts) {
    text.innerHTML = `You failed! The correct number was ${number}. Try Again`;
    document.querySelector("#btn").disabled = true;
    remain.innerHTML = "Remaining Attempts " + (attempts - count);
    return;
  }
}

function reset() {
  text.innerHTML = "";
  count = 0;
  document.querySelector("#number").value = "";
  document.querySelector("#btn").disabled = false;
  remain.innerHTML = "";
}

/* paper fall*/

function triggerPaperShower() {
  const colors = [
    "#ffeb3b",
    "#ff5722",
    "#4caf50",
    "#2196f3",
    "#e91e63",
    "#9c27b0",
    "#00bcd4",
  ];

  for (let i = 0; i < 500; i++) {
    const paperPiece = document.createElement("div");
    paperPiece.classList.add("paper-piece");

    paperPiece.style.left = `${Math.random() * 100}vw`;
    paperPiece.style.top = `${Math.random() * -100}px`;

    paperPiece.style.animationDuration = `${Math.random() * 4 + 1}s`;

    paperPiece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(paperPiece);

    paperPiece.addEventListener("animationend", () => {
      paperPiece.remove();
    });
  }
}
