// FSJS - Random Quote Generator

/*=============-=============-=============-=============
                       PROJECT DATA
===============-=============-=============-===========*/

const quotes = [
  {
      quote: "How lucky I am to have something that makes saying goodbye so hard.",
      source: "A.A. Milne",
      citation: "Winnie the Pooh",
      year: 1926,
      tags: ["children's literature", "children's poetry"]
  },
  {
      quote: 'We all can dance", he said, "if we find the music that we love.',
      source: "Giles Andreae",
      citation: "Giraffes Can’t Dance"
  },
  {
      quote: "The moment you doubt whether you can fly, you cease forever to be able to do it",
      source: "J.M. Barrie",
      citation: "Peter Pan",
      year: 1911,
      tags: ["children's literature", "fairy tales"]
  },
  {
      quote: "On the night you were born, the moon smiled with such wonder that the stars peeked in to see you and the night wind whispered, ‘Life will never be the same.’",
      source: "Nancy Tillman"
  },
  {
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      source: "J.K. Rowling",
      citation: "Harry Potter and The Chamber of Secrets",
      year: 1998,
      tags: ["children's literature", "fantasy"]
  },
  {
    quote: "I don't understand it any more than you do, but one thing I've learned is that you don't have to understand things for them to be.",
    source: "Madeleine L'Engle",
    citation: "A Wrinkle in Time",
    year: 1998,
    tags: ["children's literature", "fantasy"]
  },
  {
    quote: "You're mad, bonkers, completely off your head. But I'll tell you a secret. All the best people are.",
    source: "Lewis Carroll",
    citation: "Alice in Wonderland",
    tags: ["children's literature", "fantasy"]
  },
  {
    quote: "Little by little does the trick",
    source: "Aesop",
    tags: ["fables"]
  }
];

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

// Creates a random number from 0 up to, but not including, the selected number
const createRandomNum = num => Math.floor(Math.random() * num);

// A function to capitalize the first letter of a string
const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

// Changes the body's background color with random rgb numbers from 0 to 255;
function randomBgColor() {
  let r = createRandomNum(256), g = createRandomNum(256), b = createRandomNum(256);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Returns a random quote from the quotes array using a random index number;
function getRandomQuote(array) {
  const randomIndex = createRandomNum(array.length);
  return array[randomIndex];
}

function printQuote() {
  const selectedQuote = getRandomQuote(quotes);
  // Use object destructuring for cleaner code
  const { quote, source, citation, year, tags} = selectedQuote;

  let html = '';
  html += `<p class="quote">${quote}</p>`;
  html += `<p class="source">${source}`;
  if (citation) {
    html += `<span class="citation">${citation}</span>`;
  }
  if (year) {
    html += `<span class="year">${year}</span></p>`;
  }
  if (tags) {
    // capitalize each tag from the tag array and join together into one string
    const str = tags.map(capitalize).join(', ');
    html += `<p class="tags">${str}</p>`;
  }
  
  quoteBox.innerHTML = html;
  randomBgColor();
}

/*=============-=============-=============-=============
                       PROGRAM INIT
===============-=============-=============-===========*/

// printQuote() is called to compensate for initial setInterval delay
printQuote();
let timer = setInterval( printQuote, quoteSpeed);

/*=============-=============-=============-=============
                    EVENT LISTENERS
===============-=============-=============-===========*/

// Every time button is clicked, the timer is cleared and reset
button.addEventListener('click', () => {
  clearInterval(timer);
  printQuote();
  timer = setInterval( printQuote, quoteSpeed);
}, false);
