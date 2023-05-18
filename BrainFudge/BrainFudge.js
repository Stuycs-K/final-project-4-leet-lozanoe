class Memory {
    constructor(size){
        this.size = size;
        this.arr = Array(size).fill(0)
        this.index = index;
        this.arr = arr;
    }
}

let blocks = new Memory(100);

function myFunction(charcter){
    if (character === "<"){
        blocks.index--;
    }
    if (character === ">"){
        blocks.index++;
    }
    if (character === "+"){
        blocks.arr[blocks.index]++;
    }if (charcter === "-"){
        blocks.arr[blocks.index]--;
    } 
    if (character === "["){
        continue;
        //WILL FIGURE OUT LOGIC
    }if (characer === "]"){
        continue;
    }
}
