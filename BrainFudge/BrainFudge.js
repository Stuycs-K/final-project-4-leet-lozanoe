//consts
const CANVAS_HEIGHT = 200;
const MAX_CELLS = 30000;

//vars
var cells = [];
var pointer = 2; //testing: starts at middle cell
var cellsX;
var loops = [];

var code = []
var index = 0
var input = []
var output = ''

//fonts
var inconsolata

function preload() {
  inconsolata = loadFont('assets/Inconsolata-Regular.ttf')
}

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
    
    //cell x animation
    let sqx = cellsX + i*CELL_SEPARATION
        
    //cell size animation
    if (i == pointer) {
      cell.size += (CELL_SIZE * 1.25 - cell.size)*0.25
    } else {
      cell.size += (CELL_SIZE - cell.size)*0.25
    }
    
    //cell transparency animation
    if (i == pointer) {
      cell.alpha += (255 - cell.alpha)*0.25
    } else {
      cell.alpha += (max(125 - 20*sq(abs(i-pointer)), 0) - cell.alpha)*0.25
    }
    
    //draw square
    cell.display(sqx);
  }
  
}//draw

function keyPressed() {
  if (parseInt(key) < 5) {
    pointer = parseInt(key);
  } 
  if (keyCode == UP_ARROW) {
    cells[pointer].incr();
  }
  if (keyCode == DOWN_ARROW) {
    cells[pointer].decr();
  }
} 

function windowResized() {
  resizeCanvas(windowWidth, CANVAS_HEIGHT);
}//window resize
