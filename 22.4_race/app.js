const track1 = document.querySelectorAll("#player1-race td");
const track2 = document.querySelectorAll("#player2-race td");
let winner = "";

window.addEventListener("keyup", game);

function player1Move(e) {
  if(e.key === "ArrowRight") {
    for(let i = 0; i < track1.length; i++) {
      if(track1[i].getAttribute("class") === "active") {
        track1[i].classList.remove("active");
        track1[i+1].classList.add("active");
        if(i+1 === track1.length - 1 && track2[track2.length - 1].getAttribute("class") === "finish") {
          winner = "Player1";
        }
        break;
      }
    }
  }
  if(e.key === "ArrowLeft") {
    for(let i = 0; i < track1.length; i++) {
      if(track1[i].getAttribute("class") === "active" && i !== 0) {
        track1[i].classList.remove("active");
        track1[i-1].classList.add("active");
        break;
      }
    }
  }
}
function player2Move(e) {
  if(e.key === "d" || e.key === "D") {
    for(let i = 0; i < track2.length; i++) {
      if(track2[i].getAttribute("class") === "active") {
        track2[i].classList.remove("active");
        track2[i+1].classList.add("active");
        if(i+1 === track2.length - 1 && track1[track1.length - 1].getAttribute("class") === "finish") {
          winner = "Player2";
        }
        break;
      }
    }
  }
  if(e.key === "a" || e.key === "A") {
    for(let i = 0; i < track2.length; i++) {
      if(track2[i].getAttribute("class") === "active" && i !== 0) {
        track2[i].classList.remove("active");
        track2[i-1].classList.add("active");
        break;
      }
    }
  }
}

function game(e) {
  player1Move(e);
  player2Move(e);
  if(winner) {
    window.removeEventListener("keyup", game);
    announceWinner();
    addRestartBtn();
  }
}

function addRestartBtn () {
  const btn = document.createElement("button");
  btn.innerText = "restart";
  document.body.append(btn);
  btn.addEventListener("click", () => {
    reset();
  })
}
function announceWinner() {
  const p = document.createElement("p");
  p.innerText = `The winner is: ${winner}`;
  document.body.append(p);
}

function reset() {
  track1[0].classList.add("active");
  track2[0].classList.add("active");
  for(let i = 1; i < track1.length; i++) {
    track1[i].classList.remove("active");
    track2[i].classList.remove("active");
  }
  document.body.children[document.body.children.length-1].remove();
  document.body.children[document.body.children.length-1].remove();
  winner = "";
  window.addEventListener("keyup", game);
}

