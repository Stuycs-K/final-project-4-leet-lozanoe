
function parseOp(ch) {
  if (ch === "<") {
    pointer--;
  }
  if (ch === ">") {
    pointer++;
  }
  if (ch === "+") {
    cells[pointer].incr();
  }
  if (ch === "-") {
    cells[pointer].decr();
  }
  
  if (ch === ".") {
    output += cells[pointer].ascii()
    outputArea.value(output) //update screen UI
  }
  if (ch === ",") {
    if (input.length > inputPointer) {
      cells[pointer].setValue(input.charAt(inputPointer))
      inputPointer++;
    } else {
      loopStatus = 'wait';
      index--;//to offset index increment in main run loop
    }
  }

  
  if (ch === "[") {
    loops.push(index);
    //WILL FIGURE OUT LOGIC
  }
  if (ch === "]") {
    if (cells[pointer].value != 0) {
      index = loops[loops.length-1]
    } else {
      loops.pop();
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
