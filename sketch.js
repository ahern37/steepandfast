function setup() {
  createCanvas(1000, 1000);
  background(125,50,115)
  const size = width * .15;
  translate(width/2, height/2);
  triangle(0, -100, 100, 100, -100, 100);
}

function draw() {
  ellipse(mouseX, mouseY, 20, 20);
}