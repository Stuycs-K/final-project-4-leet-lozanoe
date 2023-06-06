//consts
const CANVAS_HEIGHT = 200;
const MAX_CELLS = 30000;
const INIT_CELLS = 20;


//Brainfudge converter
var ops = 5 //operations per second lol

var code = []
var index;

var cells = [];
var pointer;

var loops = []
var loopStatus; //init, run, pause, step, wait, skip, done
//wait means we're waiting for input
//skip means the loop needs to be skipped.
var skipIndex;

var output = '';
var input = ''
var inputPointer = 0;

var error

// visuals
var cellsX;
var offset;
var viewPointer;

//fonts
var inconsolata

function preload() {
  inconsolata = loadFont('assets/Inconsolata-Regular.ttf')
}

function setup() {
  //setup is run once at the beginning of the sketch.
  
  //make canvas
  createCanvas(windowWidth, CANVAS_HEIGHT)
  //move canvas to middle of screen
  canvas = select('canvas')
  canvas.position(0, 200)
  
  setupDropdowns() // in Dropdown tab
  setupButtons() //in Button tab
  setupInputs() //in Input tab
  setupCells() //in Cell tab
  
  cellsX = width/2
}//setup

function draw() {
  //draw is run continuously throughout the program.
  background('#301c08')
  frameRate(60)
  
  if (loopStatus == 'init' || loopStatus == 'done') {
    fill(255, 100)
    textSize(20)
    text(error, width/2+20, height-25)
  }  
  
  //running code
  if (loopStatus == 'run') {
    if (frameCount % (60/ops) == 0) {
      operator = code[index];
      parseOp(operator)

      index++ //will be offset in case of 'wait' in parseOp
    }
  }
  if (loopStatus == 'step') {
    operator = code[index];
    parseOp(operator)

    index++
    
    loopStatus = 'pause'
  }
  
  //input wait
  if (loopStatus == 'wait') {
    if (input.length > inputPointer) {
      operator = code[index];
      parseOp(operator)

      loopStatus = 'run'
      index++
    }
  }
  if (loopStatus == 'wait' || loopStatus == 'pause-wait') {
    fill(255, 100)
    textSize(20)
    text('waiting for input...', width/2+20, height-25)
  }
  
  
  //loop skips
  while (loopStatus == 'skip') {
    operator = code[index];
    
    //safeguard
    if (!operator) {
      print('wtf went wrong');
      break;
    }
    
    if (operator == '[' || operator == ']') {
      parseOp(operator)
    }
    
    index++
  }
  
  //check if code end
  if ((loopStatus == 'run' || loopStatus == 'pause') && index == code.length) {
    loopStatus = 'done';
    codeInput.removeAttribute('readonly')
    runButt.attribute('src', 'assets/button_play.svg')
  }
  
  //Doing math to display cells
  renderCells();
}//draw


function windowResized() {
  resizeCanvas(windowWidth, CANVAS_HEIGHT);
  
  positionButtons();
  positionDropdowns();
  positionInputs();
}//window resize
