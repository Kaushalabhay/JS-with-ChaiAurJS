<!-- MD = Mark Down file -->

# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution Code

## project 1

``` JavaScript
    // console.log("Abhay kaushal")

    const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click' , function (e) {
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
      }
  });
});

```



## Project 2 Solution

``` javaScript
const form = document.querySelector('form');


form.addEventListener('submit' , function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid Height`;
  }else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid Weight`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show The result
    results.innerHTML = `<span>${bmi}</span>`;
  }
})

```



## Project 3 Solution

```javaScript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function (){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
} , 1000);

```



## Project 4 Solution

``` JavaScript

const randomNumber = parseInt(Math.random() * 100 + 1); 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit,addEventListener('click' , function (e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }else if(guess > 100){
    alert('Please enter a number less than 100');
  }else if(guess < 1){
    alert('Please enter a number greater than 0');
  }else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed the Right Number , ${guess} = ${randomNumber}`);
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Number is TOOO low , ${guess} < ${randomNumber}`);
  }else if(guess > randomNumber){
    displayMessage(`Number is TOOO High , ${guess} > ${randomNumber}`);
  }
}

function displayGuess(guess){
  userInput.value = " ";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled' , '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```


## Project 5 Solution

```JawaScript
// Generate Random colour

  const RandomColour = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};


// Function to change colour
let interval;
const startChangingColour = function () {
  function changeByColour() {
    document.body.style.backgroundColor = RandomColour();
  }

  if(!interval){
  interval = setInterval(changeByColour, 1000);
  }
};


// Function to stop changing colour
const stopChangingColour = function () {
  clearInterval(interval);
  interval = null;
};


// Selecting Start BUTTON
document.querySelector('#start').addEventListener('click', startChangingColour);


// Selecting Stop BUTTON
document.querySelector('#stop').addEventListener('click', stopChangingColour);


```



## Project 6 solution

```JavaScript
  // THIS PROJECT GIVES YOU THE PRESSED KEY , ITS KEY-CODE AND CODE 

const insert = document.getElementById('insert');

window.addEventListener('keydown' , (e) => {
  insert.innerHTML = 
  `<div class = 'color'>
  <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
  </div>`
})


```