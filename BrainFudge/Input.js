var codeInput;
var mainInput;
var outputArea;

function setupInputs() {
  codeInput = createInput('>++++++++[<+++++++++>-]<.>++++[<+++++++>-]<+.+++++++..+++.>>++++++[<+++++++>-]<++.------------.>++++++[<+++++++++>-]<+.<.+++.------.--------.>>>++++[<++++++++>-]<+.');
  //codeInput.attribute('placeholder', 'insert valid BrainFuck code')
  //DO NOT change the order of these please :(
  codeInput.style('padding', '15px 20px')
  codeInput.style('font-size', '40px')
  
  mainInput = createElement('textarea')
  mainInput.attribute('placeholder', 'input text')
  mainInput.style('padding', '30px 35px')
  mainInput.style('font-size', '28px')
  mainInput.input(() => {
    input = mainInput.value() //update vars
  })
  
  outputArea = createElement('textarea')
  outputArea.attribute('placeholder', 'output text')
  outputArea.attribute('readonly', true)//readonly
  outputArea.style('padding', '30px 35px')
  outputArea.style('font-size', '28px')
  
  positionInputs();
}

function positionInputs() {
  codeInput.size(width*6/7)
  codeInput.position(width/2-codeInput.size().width/2, CANVAS_HEIGHT/2-(codeInput.size().height+2*15)/2) //replace 15 with first padding value
  
  mainInput.size((width*6/7-50)/3, 300)
  mainInput.position(width/2-25-mainInput.size().width, CANVAS_HEIGHT+height+50)
  
  outputArea.size((width*6/7-50)/3, 300)
  outputArea.position(width/2+25, CANVAS_HEIGHT+height+50)
}
