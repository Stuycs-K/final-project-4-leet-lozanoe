var speedDropdown;

function setupDropdowns() {
  speedDropdown = createSelect();
  speedDropdown.option('INSTANT');
  speedDropdown.option('10x');
  speedDropdown.option('5x');
  speedDropdown.option('2x');
  speedDropdown.option('1x');
  
  speedDropdown.selected('1x');
  
  positionDropdowns()
}

function positionDropdowns() {
  speedDropdown.position(width/2+95+(width*6/7-50)/3-speedDropdown.size().width, windowHeight-68.5);
}
