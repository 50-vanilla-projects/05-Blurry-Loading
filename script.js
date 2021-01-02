image = document.querySelector("img");
percentage = document.querySelector("#loader");
let second = 0;
let blur;
let opacity;

let interval = setInterval(keepTime, 5);

function keepTime() {
  second++;
  if (blur == 30 || second == 100) {
    clearInterval(interval);
  }
  console.log(second);
  console.log(blur);
  blur = 30 - 0.3 * second;
  image.style.filter = `blur(${blur}px)`;
  percentage.innerHTML = `${second} %`;
  opacity = 1 - 0.01 * second;
  percentage.style.opacity = opacity;
}