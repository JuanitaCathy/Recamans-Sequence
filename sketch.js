let numbers = [];
let count = 1;
let sequence = [];
let index = 0;
let scle = 0;
let arcs = [];
let biggest = 0;

class Arc {
  constructor(start, end, dir) {
    this.start = start;
    this.end = end;
    this.dir = dir;
  }

  show() {
    let diameter = abs(this.end - this.start);
    let x = (this.end + this.start) / 2;
    //strokeWeight(.5);
    noFill();
    if (this.dir == 0) {
      arc(x, 0, diameter, diameter, PI, 0);
      stroke('#BF40BF');
      

    } else {
      arc(x, 0, diameter, diameter, 0, PI);
      stroke(0,200,200);
      
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(35);
  background(0);
  numbers[index] = true;
  sequence.push(index);
}

function step() {
  let next = index - count;
  if (next < 0 || numbers[next]) {
    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);

  let a = new Arc(index, next, count % 2);
  arcs.push(a);
  index = next;

  if (index > biggest) {
    biggest = index;
  }

  count++;
}

function draw() {
  step();
  translate(0, height / 2);
  scle = (width / biggest, 0.1);
  scale(scle);
  background(0);

  for (let a of arcs) {
    a.show();
  }
}