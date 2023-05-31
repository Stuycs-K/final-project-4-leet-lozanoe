//consts
const CANVAS_HEIGHT = 200;
const MAX_CELLS = 30000;
const INIT_CELLS = 20;
const OPS = 15 //operations per second lol

//Brainfudge converter
var code = []
var index;

var cells = [];
var pointer;

var loops = []
var loopStatus; //init, run, pause, forward, back, wait, skip, done
//wait means we're waiting for input
//skip means the loop needs to be skipped.
var skipIndex;

var output = '';
var input = ''
var inputPointer = 0;

//UI
var runButt;
var exitButt;
var codeInput;
var mainInput;
var outputArea;

// visuals
var cellsX;
var offset;

//fonts
var inconsolata

function preload() {
  inconsolata = loadFont('assets/Inconsolata-Regular.ttf')
}

function setup_cells(){
  index = 0
  loopStatus = "init"
  codeInput.removeAttribute('readonly')
  
  //clear output
  output = ''
  outputArea.value(output)
  
  //reset cell stuff
  cells = []
  for (let i = 0; i < INIT_CELLS; i++) {
    cells.push(new Cell())
  }
  
  //sets pointer to middle cell
  pointer = 0
  offset = floor(INIT_CELLS/2);
}

function setup() {
  //setup is run once at the beginning of the sketch.
  
  //make canvas
  createCanvas(windowWidth, CANVAS_HEIGHT)
  //move canvas to middle of screen
  canvas = select('canvas')
  canvas.position(0, 200)
  
  //making butts and inputs
  runButt = createButton("RUN");
  runButt.position(width/2-5-runButt.size().width, 160);
  runButt.mouseClicked(() => {
    if (loopStatus != 'init') {
      setup_cells()
    }

    codeInput.attribute('readonly', true)
    code = codeInput.value().split('')
    let ok = checkInput(code)
    
    if (ok) {
      loopStatus = 'run'
    } else {
      //show error
    }
  });
  
  exitButt = createButton("EXIT");
  exitButt.position(width/2+5, 160);
  exitButt.mouseClicked(setup_cells);
  
  codeInput = createInput('>++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<++.------------.>++++++[<+++++++++>-]<+.<.+++.------.--------.>>>++++[<++++++++>-]<+.');
  //codeInput.attribute('placeholder', 'insert valid BrainFuck code')
  //DO NOT change the order of these please :(
  codeInput.size(width*6/7)
  codeInput.style('padding', '15px 20px')
  codeInput.position(width/2-codeInput.size().width/2, CANVAS_HEIGHT/2-(codeInput.size().height+2*15)/2) //replace 15 with first padding value
  codeInput.style('font-size', '40px')
  
  mainInput = createElement('textarea')
  mainInput.attribute('placeholder', 'input text')
  mainInput.size((width*6/7-50)/3, 300)
  mainInput.style('padding', '30px 35px')
  mainInput.position(width/2-25-mainInput.size().width, CANVAS_HEIGHT+height+50)
  mainInput.style('font-size', '28px')
  mainInput.input(() => {
    input = mainInput.value() //update vars
  })
  
  outputArea = createElement('textarea')
  outputArea.attribute('placeholder', 'output text')
  outputArea.attribute('readonly', true)//readonly
  outputArea.size((width*6/7-50)/3, 300)
  outputArea.style('padding', '30px 35px')
  outputArea.position(width/2+25, CANVAS_HEIGHT+height+50)
  outputArea.style('font-size', '28px')
  
  setup_cells()
  
  cellsX = width/2
}//setup

function draw() {
  //draw is run continuously throughout the program.
  background('#301c08')
  frameRate(60)
  
  //running code
  if (loopStatus == 'run') {
    if (frameCount % (60/OPS) == 0) {
      operator = code[index];
      parseOp(operator)

      index++ //will be offset in case of 'wait' in parseOp
    }
  }
  if (loopStatus == 'wait') {
    if (input.length > inputPointer) {
      operator = code[index];
      parseOp(operator)

      loopStatus = 'run'
      index++
    }
  }
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
  if (loopStatus == 'run' && index == code.length) {
    loopStatus = 'done';
    codeInput.removeAttribute('readonly')
  }
  
  //Doing math to display cells
  renderCells();
}//draw

function windowResized() {
  resizeCanvas(windowWidth, CANVAS_HEIGHT);
  
  runButt.position(width/2-5-runButt.size().width, 160)
  exitButt.position(width/2+5, 160);

  codeInput.size(width*6/7)
  codeInput.position(width/2-codeInput.size().width/2, CANVAS_HEIGHT/2-(codeInput.size().height+2*15)/2) //replace 15 with first padding value
  
  mainInput.size((width*6/7-50)/3, 300)
  mainInput.position(width/2-25-mainInput.size().width, CANVAS_HEIGHT+height+50)
  
  outputArea.size((width*6/7-50)/3, 300)
  outputArea.position(width/2+25, CANVAS_HEIGHT+height+50)
}//window resize
