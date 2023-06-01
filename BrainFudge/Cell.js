const CELL_SIZE = 60;
const CELL_SEPARATION = 100;

function Cell() {
  this.value = 0
  this.size = CELL_SIZE
  this.alpha = 0
  
  this.incr = () => {
    this.value++
    this.value %= 256
    
    this.size = CELL_SIZE*1.5
  }
  this.decr = () => {
    this.value--
    this.value = ((this.value % 256) + 256) % 256
    
    this.size = CELL_SIZE*0.85
  }
  
  this.ascii = () => {
    return char(this.value)
  }
  this.setValue = (b) => {
    this.value = unchar(b)
  }
  
  
  this.display = (x) => {
    noStroke()
    fill(145, 80, 18, this.alpha)
    square(x-this.size/2, height/2-this.size/2, this.size, 15)
    
    fill(255, this.alpha)
    textFont(inconsolata, 28)
    textAlign(CENTER, BASELINE)
    text(this.value, x, height/2+7) //+7 for visual center of square
  }//display
}

function renderCells(){
  //cell positioning
  cellsX += (width/2 - (pointer+offset)*CELL_SEPARATION - cellsX) * 0.25
  
  
  //draw all the cells but like its just *actually five* rn
  for (let i = 0; i < cells.length; i++) {
    cell = cells[i]
    
    //cell x animation
    let sqx = cellsX + i*CELL_SEPARATION
        
    //cell size animation
    if (abs(i - (pointer+offset)) < 6) {
      if (i == pointer+offset) {
        cell.size += (CELL_SIZE * 1.25 - cell.size)*0.25
      } else {
        cell.size += (CELL_SIZE - cell.size)*0.25
      }
      
      //cell transparency animation
      if (i == pointer+offset) {
        cell.alpha += (255 - cell.alpha)*0.25
      } else {
        cell.alpha += (max(180 - 30*abs(i-(pointer+offset)), 0) - cell.alpha)*0.25
      }
      
      //draw square
      cell.display(sqx);
    }
  }
}

function setupCells(){
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
