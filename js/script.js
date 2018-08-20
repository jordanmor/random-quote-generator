// FSJS - Random Quote Generator

/*=============-=============-=============-=============
                      GLOBAL VARIABLES
===============-=============-=============-===========*/
const quoteBox = document.getElementById('quote-box');
const body = document.querySelector('body');
const button = document.getElementById('loadQuote');
const quoteSpeed = 12000;
let count = 0;
let randomQuotesArray = shuffle(quotes);

/*=============-=============-=============-=============
                        FUNCTIONS
===============-=============-=============-===========*/

function avoidRepetition(prevArray, newArray) {
  const prevQuote = prevArray[prevArray.length - 1];
  const newQuote = newArray[0];
  if (prevQuote === newQuote) {
      // move first quote to end of newArray
      const firstItem = newArray.shift();
      newArray.push(firstItem);
      return newArray;
  }

  return newArray;
}

function shuffle(array) {
  // make shallow copy of current quotes array
  let newArr = array.slice();
  let i = newArr.length, j, currentEl;
  // While there remain elements to shuffle…
  while (--i > 0) {
      // Pick a remaining element…
      j = Math.floor(Math.random() * i);
      // And swap it with the current element.
      currentEl = newArr[j];
      newArr[j] = newArr[i];
      newArr[i] = currentEl;
  }
  // make sure the newArr does not start with the last quote of the previous randomQuotesArray
  avoidRepetition(array, newArr);
  return newArr;
}

function getRandomQuote() {
  if(count === randomQuotesArray.length) {
    randomQuotesArray = shuffle(randomQuotesArray);
    count = 0;
  }
  const quote = randomQuotesArray[count];

  count++;

  return quote;
}

function printQuote() {
  const selectedQuote = getRandomQuote();
  const { quote, source, citation, year, tags} = selectedQuote;
  const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

  let html = '';
  html += `<p class="quote">${quote}</p>`;
  html += `<p class="source">${source}`;

  if (citation) html += `<span class="citation">${citation}</span>`;
  if (year) html += `<span class="year">${year}</span></p>`;
  if (tags) html += `<p class="tags">${tags.map(capitalize).join(', ')}</p>`;
  
  quoteBox.innerHTML = html;
  randomBgColor();
}

function randomBgColor() {
  const createRandomNum = num => Math.floor(Math.random() * num);

  let r = createRandomNum(256), g = createRandomNum(256), b = createRandomNum(256);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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
