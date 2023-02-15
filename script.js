var circle01;
var circle02;
var circle03;

// var colors;

function setup() {
    createCanvas(800, 300);
    circle01 = new Circle();
    circle02 = new Circle();
    circle03 = new Circle();

// Ch08_02
//    circle = {
//      x: width / 2,
//      y: height / 2,
//      size: 50,
//      draw: function() {
//        ellipse(this.x, this.y, this.size, this.size);
//      },
//      grow: function() {
//        if (this.size < 200) {
//          this.size = this.size + 1;
//        }
//      }
//    }

//    colors = {
//      black: 0,
//      darkGrey: 55,
//      lightGray: 175,
//      white: 255,
//      paintItBlack: function () {
//        background(this.black);
//      }
//    };
}
  
  function draw() {
    background(220);
      fill(237, 34, 93);
      noStroke();

      circle01.draw();
      circle01.grow();
      
      circle02.x = 150;
      circle02.draw();
      circle02.grow();

      circle03.x = 650;
      circle03.draw();
      circle03.grow();

// Ch08_02
//    circle.draw();
//    circle.grow();

//    if (frameCount > 120) {
//      colors.paintItBlack();
//    }
}

function Circle() {
  this.x = width / 2,
  this.y = height / 2,
  this.size = 50,
  this.draw = function() {
    ellipse(this.x, this.y, this.size, this.size);
  },
  this.grow = function() {
    if (this.size < 200) {
      this.size = this.size + 1;
    }
  }
}

// Ch08_02
// var colors = {
//  black: 0,
//  white: 255
// };


// var foo = 'bar';
// colors[foo] = 42;

//colors['255'] = 'white';

// colors.black = 0;
// colors.darkGrey = 55;
// colors.gray = 125;
// colors.lightGray = 175;
// colors.white = 255;
// console.log(colors);