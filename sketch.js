var movers = [];

function setup() {
  var canvas = createCanvas(windowWidth,300);
  canvas.parent('canvasp');
  
  //initialize movers
  for(var i = 0; i < 100; i++){
    movers[i] = new Mover(random(width), random(height));
  }
}

function draw() {
  background(0);
  
  for(var i = 0; i < movers.length; i++){
    movers[i].run(movers);
  }
}

//mover class
function Mover(x,y){
  this.acceleration = createVector(0,0);
  this.velocity = p5.Vector.random2D();
  this.position = createVector(x,y);
  this.mass = random(1,6);
}

Mover.prototype.run = function(movers){
  this.update();
  this.borders();
  this.render();
}

Mover.prototype.applyForce = function(force){
  this.acceleration.add(force);
}

Mover.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

Mover.prototype.render = function(){
  fill(0);
  stroke(255);
  ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
}

Mover.prototype.borders = function(){
  if(this.position.x < 0) this.velocity.x = this.velocity.x * -1;
  if(this.position.x > width) this.velocity.x = this.velocity.x * -1;
  if(this.position.y < 0) this.velocity.y = this.velocity.y * -1;
  if(this.position.y > height) this.velocity.y = this.velocity.y * -1;
}
