let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let backgroundimg;
let dojawords;
let phraselist = [];


function preload() {
  words = loadStrings('./dojawords.txt');
  backgroundimg = loadImage('https://wallpaperaccess.com/full/1862683.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke();
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}
