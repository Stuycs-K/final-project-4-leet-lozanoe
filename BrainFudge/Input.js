function setupInputs() {
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
}
