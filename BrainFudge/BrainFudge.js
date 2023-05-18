let index = 0;
let cells = Array(100).fill(0);

// unshift and shift || push and pop

function parse(string){
    let loops=[]
    for(let i=0; i<string.length; i++){
        if (character === "<"){
            index--;
        }
        if (character === ">"){
            index++;
        }
        if (character === "+"){
            cells[index]++;
        }if (charcter === "-"){
            cells[index]--;
        } 
        if (character === "["){
            loops.shift(index);
            //WILL FIGURE OUT LOGIC
        }if (characer === "]"){
            loops.push(index);
            if(cells[index]!=0){
                i = index;
            }else{
                loops.unshift();
                loops.pop();
            }
        }
}
}
