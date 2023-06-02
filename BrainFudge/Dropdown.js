var speedDropdown;

function setupDropdowns() {
  speedDropdown = createSelect();
  
  speedDropdown.option('INSTANT', 'instant');
  speedDropdown.disable('instant')
  
  speedDropdown.option('10x', 60);
  speedDropdown.option('5x', 30);
  speedDropdown.option('2x', 12);
  speedDropdown.option('1x', 6);
  
  speedDropdown.selected(6);
  
  speedDropdown.changed(() => {
    if (speedDropdown.value() == 'instant') {
      
    } else {
      ops = speedDropdown.value();
    }
  });
  
  positionDropdowns()
}

function positionDropdowns() {
  speedDropdown.position(width/2+95+(width*6/7-50)/3-speedDropdown.size().width, windowHeight-68.5);
}
