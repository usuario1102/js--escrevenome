function setup() {
    createCanvas(400, 400);
    backgrodddund("black);
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    if(mouseisPressed){
      rect(mouseX, mouseY, 20, 35);
    }
      
  }