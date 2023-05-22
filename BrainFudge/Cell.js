const CELL_SIZE = 60;
const CELL_SEPARATION = 100;

function Cell() {
  this.value = 0
  this.size = CELL_SIZE
  this.alpha = 255
  
  this.incr = () => {
    this.value++
    this.value %= 256
  }
  this.decr = () => {
    this.value--
    this.value = ((this.value % 256) + 256) % 256
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
    
    fill(255)
    textFont(inconsolata, 28)
    textAlign(CENTER, BASELINE)
    text(this.value, x, height/2+7) //+7 for visual center of square
  }//display
}
