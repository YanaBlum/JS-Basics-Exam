# Web Dev Basics

## Intro

The following exercises will test your knowledge in basic Javascript concepts.

Please start off by *forking* this repo, and then *clone* it to your local machine.

The different exercises are split into different js files and the `index.html` file includes a link to each of them.

To test your code, open the `index.html` file in your browser and either use the debugger or `console.log`s.

**Good Luck! :)**

***

## Exercise 1

In the `ex1.js` file you will find two things:
1. An object called `books`:
    - Each key is the title of the book
    - Each value is an object which contains the `author` of the book and the number of `pages` that book has
2. A function named `getBookInfo`.
    - This function `prompt`s the user to input a name of a book and stores the user's input in a variable called `bookName`

You should add two `console.log`s to this function. One should print the number of `pages` for the `bookName` that was entered, and the other should print the name of the `author` for the `bookName` that was entered.

*Uncomment the invokation of the function to test your work.

*Add and commit your code*.

***

## Exercise 2

In the `ex2.js` file you will find an array of objects named `expenses`. Each object represents a single expense. Each expense object has the following properties:
  - `amount` - a number representing how much the expense was
  - `date` - a string representing the date the expense was made
  - `item` - a string representing what was purchased
  - `category` - representing the type of expense

Create a function called `getTotalByCategory` that receives one paramter named `category` (a string with a category name). The function should loop over all of the expenses and calculate the sum of all the amounts for the expenses in the category received. The function should return the found sum. For example, if we invoke the function with `'food'` like so: `getTotalByCategory('food')`, the return value should be: `2034.5`.

*Add and commit your code*.

***

## Exercise 3

Head over to the `ex3.js` file and create an object called `task`. The object should have the following properties:
  - `name` - a string representing the name of the task, you can set the default value to `shoobert`
  - `time` - a number representing the amount of time (in minutes) it took to complete the task, you can set the default value to `10`
  - `isCompleted` - a boolean representing if the task is completed or not (is `true` if it's completed and `false` if not). You can set the default value to `false`

The object should have the following methods:
  - `markCompleted` - should not receive any parameters, and just sets the object's `isCompleted` property to `true`
  - `editProp` - should receive 2 parameters, `prop` and `value`. The method should then change the correct property to the new value. For example:
    - If we invoke `task.editProp('name', 'doobi')` then the `name` of the `task` should change to `doobi`.
    - If we invoke `task.editProp('time', 20)` then the `time` of the `task` should change to `20`.

*Add and commit your code*.

***

## Exercise 4

This exercise will test your knowledge regarding `DOM`. In the `index.html` file you will find an `<input>` element with `id` of `name` and a `<button>` element with `id` of `submit`. You will also find a `<div>` element with `id` of `content`.

The goal here is when a user enters their name into the input and clicks on the button, your code will add their name to the page.

To do this, head over to the `ex4.js` file and do the following:

a. Create a function called `addInputToPage` which receives one parameter (called `input`), a string, and appends it to the page inside a `<p>` element. Make sure to append to the `<div>` with `id` of `content`. You can test that this works by adding this invokation to your code: `addInputToPage('shoobert')`

b. Next, create an event listener for the `button` that selects the value of the input from the `DOM` and invokes the `addInputToPage` function with the input.

c. *Extension*: On click of a button append the value 10 times (instead of once)

*Add and commit your code*.

***

## Extension

If you want to show us some of your skills in HTML and CSS, feel free to create something interesting with HTML and CSS. You'll need to create a `styles.css` file, and don't forget to link it in your `index.html` ;)

***

### *Add, commit, and push your code*.