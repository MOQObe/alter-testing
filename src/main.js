// Splitting
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
Splitting();

let navItems = document.querySelectorAll(".js-navItem");
if (navItems.length) {
  var classes = ["ml-auto", "m-auto", "mr-auto"];

  navItems.forEach((navItem) => {
    const classIndex = Math.floor(Math.random() * classes.length);
    navItem.classList.add(classes[classIndex]);
  });
}

// Function to calculate the distance between two points (mouse and element) in percentage
function calculateDistancePercentage(
  mouseX,
  mouseY,
  elementX,
  elementY,
  containerWidth,
  containerHeight
) {
  const dx = mouseX - elementX;
  const dy = mouseY - elementY;
  const distanceXPercentage = (Math.abs(dx) / containerWidth) * 100;
  const distanceYPercentage = (Math.abs(dy) / containerHeight) * 100;
  return { x: distanceXPercentage, y: distanceYPercentage };
}
// Function to handle the mousemove event
function handleMouseMove(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  const elements = document.querySelectorAll(".char");
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const elementX = rect.left + rect.width / 2;
    const elementY = rect.top + rect.height / 2;

    const distancePercentage = calculateDistancePercentage(
      mouseX,
      mouseY,
      elementX,
      elementY,
      containerWidth,
      containerHeight
    );

    // Calculate the overall distance as a number between 0 and 100
    const distance = Math.min(
      (distancePercentage.x + distancePercentage.y) / 2, // Take the average of X and Y distances
      13   // Limit the distance value to 100
    );

    // console.log("distance: ", distance);
    element.style.filter = "drop-shadow(" + distance.toFixed(2) + "px " + distance.toFixed(2) + "px " + (distance.toFixed(2) * 2) + "px white) blur(" + distance.toFixed(2) + "px)";
    // element.style.filter = "blur(" + distance.toFixed(2) + "px)";
    //   console.log(`Distance to element: ${distance.toFixed(2)}`);
  });
}
document.addEventListener("mousemove", handleMouseMove);


import Lenis from '@studio-freight/lenis'
const lenis = new Lenis({
    lerp: 0.1,
    infinite: true
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
