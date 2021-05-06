function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(153,154,158);
  noLoop()
  

  stroke(254,226,90)
  strokeWeight(5)
  line(0,360,40,400)
  strokeWeight(4)
  line(0,380,20,400)
  
  strokeWeight(2)
  line(360,0,400,40)
  strokeWeight(1)
  line(380,0,400,20)
  
  strokeWeight(5)
  line(360,400,400,360)
  strokeWeight(4)
  line(380,400,400,380)
  
  strokeWeight(5)
  line(160,400,200,360)
  strokeWeight(4)
  line(180,400,200,380)
  
  strokeWeight(5)
  line(40,0,400,360)
  strokeWeight(4)
  line(20,0,400,380)
  strokeWeight(3)
  line(0,0,400,400)
  strokeWeight(2)
  line(0,20,380,400)
  strokeWeight(1)
  line(0,40,360,400)
  
  strokeWeight(5)
  line(360,0,300,60)
  strokeWeight(4)
  line(380,0,300,80)
  strokeWeight(3)
  line(300,100,400,0)
  strokeWeight(2)
  line(400,20,300,120)
  strokeWeight(1)
  line(400,40,300,140)
  
  strokeWeight(5)
  line(200,160,100,260)
  strokeWeight(4)
  line(200,180,100,280)
  strokeWeight(3)
  line(100,300,200,200)
  strokeWeight(2)
  line(200,220,100,320)
  strokeWeight(1)
  line(200,240,100,340)
  
  strokeWeight(5)
  line(100,60,160,0)
  strokeWeight(4)
  line(100,80,180,0)
  strokeWeight(3)
  line(100,100,200,0)
  strokeWeight(2)
  line(100,120,200,20)
  strokeWeight(1)
  line(100,140,200,40)
  
  strokeWeight(5)
  line(300,260,400,160)
  strokeWeight(4)
  line(300,280,400,180)
  strokeWeight(3)
  line(300,300,400,200)
  strokeWeight(2)
  line(300,320,400,220)
  strokeWeight(1)
  line(300,340,400,240)
  
  strokeWeight(5)
  line(240,0,400,160)
  strokeWeight(4)
  line(220,0,400,180)
  strokeWeight(3)
  line(200,0,400,200)
  strokeWeight(2)
  line(180,0,400,220)
  strokeWeight(1)
  line(160,0,400,240)
  
  strokeWeight(5)
  line(0,160,240,400)
  strokeWeight(4)
  line(0,180,220,400)
  strokeWeight(3)
  line(0,200,200,400)
  strokeWeight(2)
  line(0,220,180,400)
  strokeWeight(1)
  line(0,240,160,400)
  
  
    stroke(254,226,90,50)
  strokeWeight(1)
  for (let i = 40; i <= 360; i +=10) {
    let r = random(-400, 400);
    line(i, i, i - r, i + r);
  }
}

function mousePressed() {
  redraw();
  
  
  
  
  
  
  
  stroke(254,226,90,0)
  //line(200,0,200,400)
  //line(0,200,400,200)
  //line(100,0,100,400)
  //line(300,0,300,400)
  //line(0,100,400,100)
  //line(0,300,400,300)
  
  line(360,0,0,360)
  line(380,0,0,380)
  line(0,400,400,0)
  line(400,20,20,400)
  line(400,40,40,400)
  
  line(0,160,160,0)
  line(0,180,180,0)
  line(200,0,0,200)
  line(0,220,220,0)
  line(0,240,240,0)
  
  line(40,0,400,360)
  line(20,0,400,380)
  line(0,0,400,400)
  line(0,20,380,400)
  line(0,40,360,400)
  
  line(160,400,400,160)
  line(180,400,400,180)
  line(200,400,400,200)
  line(220,400,400,220)
  line(240,400,400,240)
  
  line(240,0,400,160)
  line(220,0,400,180)
  line(200,0,400,200)
  line(180,0,400,220)
  line(160,0,400,240)
  
  line(0,160,240,400)
  line(0,180,220,400)
  line(0,200,200,400)
  line(0,220,180,400)
  line(0,240,160,400)

}


