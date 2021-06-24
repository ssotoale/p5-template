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
  words.forEach((phrase) => { 
    phraselist.push(phrase)});
  image(backgroundimg,0,0);
  console.log(phraselist);
  noStroke();
}

function draw() {
  let rate = 10;
  const mooX = 410;
  const mooY = 200;
}
