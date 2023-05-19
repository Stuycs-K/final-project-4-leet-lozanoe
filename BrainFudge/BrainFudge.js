//consts
const CANVAS_HEIGHT = 200;

//vars
var cells = [];
var pointer = 2; //testing: starts at middle cell
var cellsX;
var loops = [];

var code = []
var index = 0
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
    cells.push(new Cell())
  }
  
  code = '[++[>++<-].'.split('')
  print(code);
}//setup

function draw() {
  //draw is run continuously throughout the program.
  background('#301c08')
  
  //used to test transitions
  cellsX += (mouseX - pointer*CELL_SEPARATION - cellsX) * 0.25
  
  
  //draw all the cells but like its just *actually five* rn
  for (let i = 0; i < cells.length; i++) {
    cell = cells[i]
    
    //calculate x based on index and a more general x (allows for smooth transitions)
    let sqx = cellsX + i*CELL_SEPARATION - CELL_SIZE/2
        
    //draw square
    cell.display(sqx);
  }
  
}//draw

function keyPressed() {
  if (parseInt(key) < 5) {
    pointer = parseInt(key);
  }
} 

function windowResized() {
  resizeCanvas(windowWidth, CANVAS_HEIGHT);
}//window resize
