function setupButtons() {
  runButt = createButton("RUN");
  runButt.position(width/2-5-runButt.size().width, 160);
  runButt.mouseClicked(() => {
    if (loopStatus != 'init') {
      setupCells()
    }

    codeInput.attribute('readonly', true)
    code = codeInput.value().split('')
    let ok = checkInput(code)
    
    if (ok) {
      loopStatus = 'run'
    } else {
      //show error
    }
  });
  
  exitButt = createButton("EXIT");
  exitButt.position(width/2+5, 160);
  exitButt.mouseClicked(setupCells);
}
