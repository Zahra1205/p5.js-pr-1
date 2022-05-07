function preload(){
}
function setup(){
canvas= createCanvas(600, 500) ;
canvas.position(110, 170);
video=createCapture(VIDEO); 
video.hide();
}
function draw(){
image(video, 100, 100, 400, 300);
fill(100, 230, 255)
  stroke(100, 230, 255)
  rect(45, 90, 30, 320);
  fill(100, 230, 255)
  stroke(100, 230, 255)
  rect(525, 90, 30, 320);
  fill(100, 230, 255)
  stroke(100, 230, 255)
  rect(90, 40, 420, 30);
  fill(100, 230, 255)
  stroke(100, 230, 255)
  rect(90, 425, 420, 30);
  fill(255, 100, 255)
  stroke(255, 100, 255)
  circle(60, 60, 70);
  fill(255, 100, 255)
  stroke(255, 100, 255)
  circle(540, 440, 70);
  fill(255, 100, 255)
  stroke(255, 100, 255)
  circle(540, 60, 70);
  fill(255, 100, 255)
  stroke(255, 100, 255)
  circle(60, 440, 70);
}
function take_snapshot(){
    save("img.png");
}