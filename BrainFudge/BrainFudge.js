//consts
const CANVAS_HEIGHT = 200;
const MAX_CELLS = 30000;

// visuals
var output = '';
var cellsX;

//Brainfudge converter stuff
var loops = [];
var code = []
var index = 0
var input = []
var cells = [];
var pointer = 0;

//input
var runButt;
var exitButt;
var codeInput;

//test const
const INIT_CELLS = 20;

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
  
  //making butts
  runButt = createButton("RUN");
  runButt.position(width/2, 160);
  runButt.mouseClicked(() => {
    let ok = checkInput()
    
    if (ok) {
      //start parsing and live demo
    } else {
      //show error
    }
  });
  
  exitButt = createButton("EXIT");
  exitButt.position(width/2+50, 160);
  
  codeInput = createInput('');
  codeInput.attribute('placeholder', 'insert valid BrainFuck code')
  //DO NOT change the order of these please :(
  codeInput.size(width*6/7)
  codeInput.style('padding', '15px 20px')
  codeInput.position(width/2-codeInput.size().width/2, CANVAS_HEIGHT/2-(codeInput.size().height+2*15)/2) //replace 15 with first padding value
  codeInput.style('font-size', '40px')
  
  
  //move canvas to middle of screen
  canvas = select('canvas')
  canvas.position(0, 200)
  
  //just as a test
  for (let i = 0; i < INIT_CELLS; i++) {
    cells.push(new Cell())
  }
  //sets pointer to middle cell
  pointer = floor(INIT_CELLS/2)
  
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
      cell.alpha += (max(180 - 30*abs(i-pointer), 0) - cell.alpha)*0.25
    }
    
    //draw square
    cell.display(sqx);
  }
  
}//draw

function keyPressed() {
  if (key == 'd') {
    pointer++
  } 
  if (key == 'a') {
    pointer--
  }
  if (key == 'w') {
    cells[pointer].incr();
  }
  if (key == 's') {
    cells[pointer].decr();
  }
} 

function windowResized() {
  resizeCanvas(windowWidth, CANVAS_HEIGHT);
}//window resize
