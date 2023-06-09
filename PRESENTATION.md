# BrainFudge Presentation

## What is Brainfuck?
Brainfuck is an esoteric programming language created in 1993 by Urban Müller. Notable for its extreme minimalism, the language consists of only eight simple commands, a data pointer and an instruction pointer ([Wikepedia](https://en.wikipedia.org/wiki/Brainfuck)).

It is also a Turing complete language, which means it fulfills basic computation theory requirements to be considered a language. However, to get anything slightly complicated done, you must break a task down into the smallest steps.

## Basic Overview
Brainfuck uses a array of 30,000 cells with each taking up a byte in memory. Additionally, each cell is initalized to 0. In Brainfuck, there are operators to modify the values, traverse the cells, as well as loop instructions. These memory cells are paired with a pointer that marks the current cell.

## Operators
The eight operators are as follows: `+`, `-`, `<`, `>`, `[`, `]`, `.`, and `,`.

#### `+`
Increases the value of the current cell by 1. If the cell is at 255, it will wrap around to 0 (this is not the case for all interpreters). 

#### `-`
Decreases the value of the current cell by 1. If the cell is at 0, it will wrap around to 255.

#### `>`
Moves the pointer to the right by one. The cell to the right of the current cell becomes the new current cell.

#### `<`
Moves the pointer to the left by one. The cell to the left of the current cell becomes the new current cell.

#### `[`
Here is where things get a little fun! This operator signifies a loop. If the value of the current cell is 0. it will jump to the corresponding `]` and exit the loop.

#### `]`
This operator will jump to the corresponding `[`, unless the value of the current cell is 0, in which case code will continue to be executed.

#### `.`
Outputs the ASCII character corresponding to the current cell's value.

#### `,`
Reads an ASCII character and sets the current cell's value to the corresponding value of the ASCII character read.

## BrainFudge Overview
BrainFudge is a visualizer for running Brainfuck code. Given valid Brainfuck code, our program can run the code while simulating how operations are carried out. The program is customizeable: the user may run their code at different speeds and enter their own inputs.

#### Loops

Loops are quite important to BrainFuck. Almost all complex programs will include one or more loops.

A simple loop such as:
```
+++++++[-]
```
will decrement a starting cell of 7 to 0. This is analagous to:
```
cell = 7
while cell != 0:
  cell -= 1
```
Sure, I could write out `cell += 1` seven times but we're focusing on the loop.

You could also use loops as multiplication:
```
++++[>+++++<-]
```
This would setup a cell of 4 and then increase the cell to the right by 5 a total of four times, resulting in a final cell value of 20.
```
x = 4
y = 0
while x != 0:
  y += 5
  x -= 1
```
Finally, loops can be used to continuously take input.
```
>,----------[++++++++++>,----------]<[<]>[.>]
```
For example, here is an implementation of the `cat` command in bash.

Note: loops might not get run at all if the **value of the starting cell** is 0. 

```
[+++++.>+++++.]
```
This loop will not run at all because cells are initialized at 0.

####

## Usage
At the top of the screen is the input for code. While we will automatically filter out any whitespace, attempting to run code with a character other than the eight operators will not work.

Below the code input are the memory cells. Below that are two text boxes: one for input and one for output. If the code reaches an input operator but finds no character to read, it will wait until one is given.

Controls are at the very bottom. There is a reset button, a play/pause button, and a step button. You can also change the speed of the simulation. 

## Examples
#### Hello World
When the site loads, sample Brainfuck code is automatically provided. Running it will yield `Hello, World!`.

This code was produced using another team's [final project](https://github.com/Stuycs-K/final-project-3-shekyank-linv). Check it out if you are interested.

#### Rotation Cipher
We can also write a super simple and unsecure rotation cipher. A simple loop can take our input and increase the cell by any number before outputting it.