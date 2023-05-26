//consts
const CANVAS_HEIGHT = 200;
const MAX_CELLS = 30000;

const OPS = 20 //operations per second lol

// visuals
var input = [];
var output = '';
var cellsX;

//Brainfudge converter st
var code = []
var index = 0

var cells = [];
var pointer = 0;

var loops = []
var run = false;

//UI
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
    code = codeInput.value().split('')
    let ok = checkInput(code)
    
    if (ok) {
      run = true;
    } else {
      //show error
    }
  });
  
  exitButt = createButton("EXIT");
  exitButt.position(width/2+50, 160);
  
  codeInput = createInput('>++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<++.------------.>++++++[<+++++++++>-]<+.<.+++.------.--------.>>>++++[<++++++++>-]<+.');
  //codeInput.attribute('placeholder', 'insert valid BrainFuck code')
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
  
  
}//setup

function draw() {
  //draw is run continuously throughout the program.
  background('#301c08')
  frameRate(60)
  
  //parsing
  if (run) {
    if (frameCount % (60/OPS) == 0) {
      operator = code[index];
      parseOp(operator)

      index++
    }
  }
  //Doing math to display cells
  renderCells();
  
  inputText = createInput(width/1*4);
  outputText = text(width/1*4);
  
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
  runButt.position(width/2, 160)
  exitButt.position(width/2+50, 160);

  codeInput.size(width*6/7)
  codeInput.style('padding', '15px 20px')
  codeInput.position(width/2-codeInput.size().width/2, CANVAS_HEIGHT/2-(codeInput.size().height+2*15)/2) //replace 15 with first padding value
}//window resize
