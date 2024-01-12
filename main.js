const prevBtn = document.querySelector("body .all .buttons .prev");
const nextBtn = document.querySelector("body .all .buttons .next");
const balls = document.querySelectorAll("body .all .balls .ball");
let i = 0;

function makeLine(value) {
  balls[value].classList.add("line");
  balls[value + 1].classList.add("active");
}

function removeLine(value) {
  balls[value - 1].classList.remove("line");
  balls[value].classList.remove("active");
}

nextBtn.addEventListener("click", function () {
  if (i < balls.length - 1) {
    makeLine(i);
    i++;
  }
  if (i === 3) {
    nextBtn.classList.remove("active");
  } else {
    nextBtn.classList.add("active");
  }
  if (i > 0) {
    prevBtn.classList.add("active");
  } else {
    prevBtn.classList.remove("active");
  }
});

prevBtn.addEventListener("click", function () {
  if (i > 0) {
    removeLine(i);
    i--;
  }
  if (i > 0) {
    prevBtn.classList.add("active");
    nextBtn.classList.add("active");
  } else {
    prevBtn.classList.remove("active");
    nextBtn.classList.add("active");
  }
});
