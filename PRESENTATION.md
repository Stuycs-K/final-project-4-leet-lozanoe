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
Here is where things get a little fun! This operator intializes a loop and only begins the loop if the value is not currently equal to 0. The brackets nest like parentheses.

### `]`
Serves as a loop of going back to the \[ character. Only loops back if the current pointer value is not 0.

### `,`
This is a way of getting input from the user in which the block of memories takes the character that the user types in. Although it really just takes the ASCII of it as a pointer value.

### `.`
This character prints the current cell the pointer is on. However, if the block is not readable ASCII, it may not be viewable to the user.

### Our implementation:
We have a visualzier for brainfuck and what we have is:
* An input box where you can type your input
  * Other implementations sometimes let the user put in an entire string within their brainfuck code but we have it separate.
* And output box which outputs what brainfuck code you wrote
* As well as play buttons and speed up buttons
* Each cell loops around 255

