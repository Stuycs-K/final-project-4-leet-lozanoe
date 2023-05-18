//consts
const CANVAS_HEIGHT = 200;
const CELL_SIZE = 70;
const CELL_SEPARATION = 100;

//vars
var cells = [];
var pointer = 2; //testing: starts at middle cell
var cellsX;
var brackets = [];

var code = []
var input = []
var output = ''

function setup() {
  //setup is run once at the beginning of the sketch.
  
  //make canvas
  createCanvas(windowWidth, CANVAS_HEIGHT)
  cellsX = width/2
  
  //move canvas to middle of screen
  canvas = select('canvas')
  canvas.position(0, windowHeight/2-height/2)
  
  //just as a test
  for (let i = 0; i < 5; i++) {
    cells.push(0)
  }
  
  code = '[++[>++<-].'.split('')
  print(code);
}//setup


function draw() {
  //draw is run continuously throughout the program.
  background('#301c08')
  
  //used to test
  cellsX = mouseX
  
  //draw all the cells but like its just one rn
  for (let i = 0; i < cells.length; i++) {
    cell = cells[i]
    
    //calculate x based on index and a more general x (allows for smooth transitions)
    let sqx = cellsX + (i - pointer)*CELL_SEPARATION - CELL_SIZE/2
    
    //colors
    noStroke()
    fill('#915012')
    
    //draw square
    square(sqx, height/2-CELL_SIZE/2, CELL_SIZE, 15)
  }
  
}//draw


function windowResized() {
  resizeCanvas(windowWidth, CANVAS_HEIGHT);
}//window resize
