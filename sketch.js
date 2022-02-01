function setup() {
  createCanvas(1000, 1000);
  background(0)
	const size = width * 0.3;
	ellipse(width/2, height/2, 250, 250);
	line(30, 20, 85, 75);
	strokeWeight(20,20);
	stroke(47, 115, 125);
}

function draw() {
	line(0, 1000, 1000, 0);
	stroke(47,115, 125);

beginShape();
  vertex(184, 95);
  quadraticVertex(227, 398, 282, 96);
  bezierVertex(430, 360, 125, 352, 138, 216);
endShape(CLOSE)


	

  //pirntln(mouseX, mouseY);
}