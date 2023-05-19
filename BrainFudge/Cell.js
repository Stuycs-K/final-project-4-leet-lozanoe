const CELL_SIZE = 70;
const CELL_SEPARATION = 100;

function Cell() {
  this.value = 0
  this.display = (x) => {
    //colors
    noStroke()
    fill('#915012')
    square(x, height/2-CELL_SIZE/2, CELL_SIZE, 15)
    //square()
  }
}
