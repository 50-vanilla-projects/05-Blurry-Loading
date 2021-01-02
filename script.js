/* For blurry loading, I had no trouble with the math and came up
with the formulas on my own. But I learned the ins and outs of
setInterval() and clearInterval(), and was reminded how to change
an attribute's style properties with javascript. */


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
  blur = 30 - 0.3 * second;
  image.style.filter = `blur(${blur}px)`;
  percentage.innerHTML = `${second} %`;
  opacity = 1 - 0.01 * second;
  percentage.style.opacity = opacity;
}