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
    runButt.attribute('src', 'assets/button_play.svg')
    
    setupCells();
  });
  runButt.mouseClicked(() => {
    if (loopStatus == 'run') {
      runButt.attribute('src', 'assets/button_play.svg')
      loopStatus = 'pause';
    } else if (loopStatus == 'wait') {
      runButt.attribute('src', 'assets/button_play.svg')
      loopStatus = 'pause-wait';
    } else {
      if (loopStatus == 'done') {
        setupCells();
      }
      if (loopStatus == 'pause-wait') {
        runButt.attribute('src', 'assets/button_pause.svg')
        loopStatus = 'wait'
      }
      
      codeInput.attribute('readonly', true)
      
      let ok = true;
      if (loopStatus == 'init' || loopStatus == 'done') {
        code = codeInput.value().split('')
        ok = isProblematic(code)
      }
      
      
      if (!ok) {
        runButt.attribute('src', 'assets/button_pause.svg')
        loopStatus = 'run'
        print(input)
      } else {
        //show error
      }
    }
  });
  forwardButt.mouseClicked(() => {
    if (loopStatus == 'run') { 
      runButt.attribute('src', 'assets/button_play.svg')
    }
    
    if (loopStatus == 'run' || loopStatus == 'pause') {
      loopStatus = 'step';
    }
    
  });
}

function positionButtons() {
  exitButt.position(width/2-75-exitButt.size().width/2, windowHeight-60);
  runButt.position(width/2-runButt.size().width/2, windowHeight-65);
  forwardButt.position(width/2+75-forwardButt.size().width/2, windowHeight-60);
}
