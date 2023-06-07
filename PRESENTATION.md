# BrainFudge Presentation

## What is Brainfuck?
Brainfuck is an esoteric programming language created in 1993 by Urban Müller. Notable for its extreme minimalism, the language consists of only eight simple commands, a data pointer and an instruction pointer. [Wikepedia](https://en.wikipedia.org/wiki/Brainfuck)

## Basic Overview
Brainfuck uses a array of 30,000 cells with each taking up a byte in memory. Additionally, each cell is initalized to 0. In brainfuck, there are operators to modify the values, traverse the cells, as well as loop instructions.

## Operators
The eight operators are as follows: `+`, `-`, `<`, `>`, `[`, `]`, `.`, and `,`.

### `+`
This operator increments the value of the current cell by 1

### `-`
This operator decreases the value of the current cell by 1

### `>`
Moves the pointer to the right by one.

### `<`
Moves the pointer to the left by one

### `[`
Here is where things get a little fun! This operator intializes a loop and only begins the loop if the value is not currently equal to 0. It works like parentheses.

### `]`
Here is 
