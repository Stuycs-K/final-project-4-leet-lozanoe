var exitButt
var runButt;
var forwardButt;


function setupButtons() {
  exitButt = createImg('assets/button_jump_left.svg', 'EXIT');
  exitButt.size(40, 20)
  runButt = createImg('assets/button_play.svg', 'PLAY/PAUSE');
  runButt.size(30, 30)
  forwardButt = createImg('assets/button_step_right.svg', 'FORWARD');
  forwardButt.size(20, 20)
  
  
  positionButtons();
  
  exitButt.mouseClicked(() => {
    if (loopStatus == 'run') { 
      runButt.attribute('src', 'assets/button_play.svg')
    }
    
    setupCells();
  });
  runButt.mouseClicked(() => {
    if (loopStatus == 'run') {
      runButt.attribute('src', 'assets/button_play.svg')
      loopStatus = 'pause';
    } else {
      codeInput.attribute('readonly', true)
      code = codeInput.value().split('')
      let ok = checkInput(code)
      
      if (ok) {
        runButt.attribute('src', 'assets/button_pause.svg')
        loopStatus = 'run'
      } else {
        //show error
      }
    }
  });
  forwardButt.mouseClicked(() => {
    if (loopStatus == 'run') { 
      runButt.attribute('src', 'assets/button_play.svg')
    }
    
    loopStatus = 'step';
  });
}

function positionButtons() {
  exitButt.position(width/2-75-exitButt.size().width/2, windowHeight-60);
  runButt.position(width/2-runButt.size().width/2, windowHeight-65);
  forwardButt.position(width/2+75-forwardButt.size().width/2, windowHeight-60);
}
