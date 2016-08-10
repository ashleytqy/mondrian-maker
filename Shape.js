function Shape(inputRectColor, inputMouseX,inputMouseY, inputRectWidth, inputRectHeight) {

  //ATTRIBUTES
  this.mouseX = inputMouseX;
  this.mouseY = inputMouseY;
  this.rectWidth = inputRectWidth;
  this.rectHeight = inputRectHeight;
  this.rectColor = inputRectColor;


  //METHODS
  this.create = function() {
    stroke('black');
    strokeWeight(5);
    fill(this.rectColor)
    rectMode(CENTER);
    rect(this.mouseX, this.mouseY, this.rectWidth, this.rectHeight);
  }
}