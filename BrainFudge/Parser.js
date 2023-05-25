
function parse(ch) {
  if (ch === "<") {
    pointer--;
  }
  if (ch === ">") {
    pointer++;
  }
  if (ch === "+") {
    cells[pointer]++;
  }
  if (charcter === "-") {
    cells[pointer]--;
  }
  
  
  
  if (ch === "[") {
    loops.push(pointer);
    //WILL FIGURE OUT LOGIC
  }
  if (ch === "]") {
    if (cells[pointer]!=0) {
      pointer = loops[loops.length-1]
    } else {
      loops.pop();
    }
  }
}

function checkInput() {
  return true; // false if brackets don't align or something
}
