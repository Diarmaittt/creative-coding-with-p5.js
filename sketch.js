function setup(){
  createCanvas(400,600);
}

function draw(){
  background(100);
  push();//模式1：无线条
  noStroke();
  push();//1-A黄色
  fill('#E6C107');
  push();//1-A-a
  translate(30,250);
  rotate(-PI/18);
  beginShape();//strokeWeight:20 pixels
  vertex(0,0);
  vertex(280,0);
  vertex(280,20);
  vertex(0,20);
  endShape();
  pop();
  
  push();//1-A-b
  translate(300,490);
  beginShape();//strokeWeight:17 pixels
  vertex(0,45);
  vertex(95,0);
  vertex(94,17);
  vertex(1,62);
  endShape();
  pop();
  pop();//1
  
  push();//1-E
  fill('#F1F0FE');
  translate(169,370);
  beginShape();
  vertex(38,0);
  vertex(88,0);//
  vertex(40,120);
  vertex(-10,120);//origin
  endShape();
  pop();//1
  
  push();//1-B
  stroke('#020398');
  strokeWeight(10);
  strokeCap(PROJECT);
  push();//1-B-a
  translate(155,100);
  rotate(-PI/13);
  line(0,0,55,0);
  pop();
  
  push();//1-B-b
  translate(180,70);
  rotate(-PI/16);
  line(0,0,0,430);
  pop();
  pop();//1
  
  push();//1-C左下方平行线
  rotate(PI/9);
  translate(260,250);
  
  push();//1-C-a
  fill('#B80000');
  translate(20,15);
  beginShape();
  vertex(0,0);//the paralell lines:red
  vertex(25,-8);
  vertex(25,180);
  vertex(0,188);
  endShape();
  pop();
  
  push();//1-C-b
  fill('#E6C107');
  translate(0,50);
  beginShape();
  vertex(0,0);//the paralell lines:yellow
  vertex(20,-4);
  vertex(20,250);
  vertex(0,250);
  endShape();
  pop();
  pop();//1
  
  push();//1-D右下方平行线红色
  rotate(-PI/6);
  translate(-35,590);
  fill('#B80000');
  beginShape();
  vertex(-7,0);
  vertex(105,0);
  vertex(99,20);
  vertex(0,20);
  endShape();
  pop();//1
  
  push();//1-F
  translate(72,72);
  fill('#B80000');
  ellipse(0,0,140,140);
  pop();
  
  push();
  rotate(PI/6);
  translate(240,-40);
  fill(0);
  rect(0,0,140,140);
  pop();
}
  