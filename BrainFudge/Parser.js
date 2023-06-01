
function parseOp(ch) {
  if (ch === "<") {
    pointer--;
    if (pointer+offset < 5) {
      cellsX = width/2 - (pointer+offset+2)*CELL_SEPARATION //makes it visually correct
      
      cells.unshift(new Cell());
      offset++;
    }
  }
  if (ch === ">") {
    pointer++;
    if (cells.length - (pointer + offset) < 5) {
      cells.push(new Cell());
    }
  }
  if (ch === "+") {
    cells[pointer+offset].incr();
  }
  if (ch === "-") {
    cells[pointer+offset].decr();
  }
  
  if (ch === ".") {
    output += cells[pointer+offset].ascii()
    outputArea.value(output) //update screen UI
  }
  if (ch === ",") {
    if (input.length > inputPointer) {
      cells[pointer+offset].setValue(input.charAt(inputPointer))
      inputPointer++;
    } else {
      loopStatus = 'wait';
      index--;//to offset index increment in main run loop
    }
  }

  
  if (ch === "[") {
    loops.push(index);
    
    if (cells[pointer+offset].value == 0) {
      loopStatus = 'skip'
      skipIndex = index
    }
  }
  if (ch === "]") {
    if (loopStatus == 'skip') {
      if (loops.pop() == skipIndex) {
        loopStatus = 'run'
      }
    } else {
      if (cells[pointer+offset].value != 0) {
        index = loops[loops.length-1]
      } else {
        loops.pop();
      }
    }
  }
}

function checkInput() {
  let num = 0
  let errorMessage = ""
  inpString = codeInput.value()
  for (let i = 0; i < inpString.length; i++){
    if (inpString[i] === "["){
      num++;
    }if (inpString[i] === "]"){
      num--;
    }
  }
  if (num === 0){
    return true;
  }else{
    if (num > 0){
      errorMessage = `There are ${num} excess brackets of [`;
    }
    if (num < 0){
      errorMessage = `There are ${num} excess brackets of ]`;
    }
    return false
  }
}
