//Make your own Mondrian!

var bgColor = "#424C55";
var rectWidth = 50;
var rectHeight = 100;
var rectColor = 'white';
shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgColor);
  
  var r = floor(random(1, 7));
  var photo = "images/" + r + ".jpg";
  var img = document.createElement("img");
  img.setAttribute("src", photo);
  img.style.position = "absolute";
  img.style.width = "200px";
  img.style.height = "auto";
  $("#image").empty().append(img);
}

function draw() {
}

function mouseMoved() {
  render();
}

function mousePressed() {
  if (mouseY > 0) {
    //only create permanent shape when mouse is within canvas
    var newShape = new Shape(rectColor, mouseX, mouseY, rectWidth, rectHeight);
    shapes.push(newShape);
  }
}

//changing colour
function keyTyped() {
  if (key === 'r') {
    rectColor = '#DA4167';
  } else if (key === 'y') {
    rectColor = '#F2C459';
  } else if (key === 'b') {
    rectColor = '#15397F';
  } else if (key === 'w') {
    rectColor = 'white';
  } else if (key === 'q') {
    rectColor = 'black';
  }

  render();
}

//changing size && clearing
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rectWidth -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    rectWidth += 20;
  } else if (keyCode === UP_ARROW) {
    rectHeight += 20;
  } else if (keyCode === DOWN_ARROW) {
    rectHeight -= 20;
  }
  render();

  if (keyCode === BACKSPACE) {
    clear();
    background(bgColor);
    //clear shapes array 
    shapes = [];
  }
}


function render() {
  background(bgColor);
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].create();
  }

  stroke('black');
  strokeWeight(5);
  fill(rectColor)
  rectMode(CENTER);
  rect(mouseX, mouseY, rectWidth, rectHeight);
}
