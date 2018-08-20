// FSJS - Random Quote Generator

/*=============-=============-=============-=============
                      GLOBAL VARIABLES
===============-=============-=============-===========*/

const quoteBox = document.getElementById('quote-box');
const body = document.querySelector('body');
const button = document.getElementById('loadQuote');
const quoteSpeed = 2000;

/*=============-=============-=============-=============
                        FUNCTIONS
===============-=============-=============-===========*/

// Random number from 0 up to, but not including, selected number
const createRandomNum = num => Math.floor(Math.random() * num);

const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

function randomBgColor() {
  let r = createRandomNum(256), g = createRandomNum(256), b = createRandomNum(256);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function getRandomQuote(array) {
  const randomIndex = createRandomNum(array.length);
  return array[randomIndex];
}

function printQuote() {
  const selectedQuote = getRandomQuote(quotes);
  const { quote, source, citation, year, tags} = selectedQuote;

  let html = '';
  html += `<p class="quote">${quote}</p>`;
  html += `<p class="source">${source}`;

  if (citation) html += `<span class="citation">${citation}</span>`;
  if (year) html += `<span class="year">${year}</span></p>`;
  if (tags) html += `<p class="tags">${tags.map(capitalize).join(', ')}</p>`;
  
  quoteBox.innerHTML = html;
  randomBgColor();
}

/*=============-=============-=============-=============
                       PROGRAM INIT
===============-=============-=============-===========*/

printQuote();
let timer = setInterval( printQuote, quoteSpeed);

/*=============-=============-=============-=============
                    EVENT LISTENERS
===============-=============-=============-===========*/

// Timer cleared and reset with button click
button.addEventListener('click', () => {
  clearInterval(timer);
  printQuote();
  timer = setInterval( printQuote, quoteSpeed);
}, false);
