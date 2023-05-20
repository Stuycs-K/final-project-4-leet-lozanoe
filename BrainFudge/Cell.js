const CELL_SIZE = 70;
const CELL_SEPARATION = 100;

function Cell() {
  this.value = 0
  
  this.inc = () => {
    this.value++
    this.value %= 256
  }
  this.dec = () => {
    this.value--
    this.value %= 256
  }
  
  this.ascii = () => {
    return char(this.value)
  }
  this.setValue = (b) => {
    this.value = unchar(b)
  }
  
  
  this.display = (x) => {    
    noStroke()
    fill('#915012')
    square(x-CELL_SIZE/2, height/2-CELL_SIZE/2, CELL_SIZE, 15)
    
    fill(255)
    textFont(inconsolata, 28)
    textAlign(CENTER, BASELINE)
    text(this.value, x, height/2+7) //+7 for visual center of square
  }//display
}
