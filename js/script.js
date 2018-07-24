// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
const quotes = [
  {
      text: "How lucky I am to have something that makes saying goodbye so hard.",
      source: "A.A. Milne",
      citation: "Winnie the Pooh",
      year: 1926,
      genre: ["Children's literature", "Children's Poetry"]
  },
  {
      text: 'We all can dance", he said, "if we find the music that we love.',
      source: "Giles Andreae",
      citation: "Giraffes Can’t Dance"
  },
  {
      text: "The moment you doubt whether you can fly, you cease forever to be able to do it",
      source: "J.M. Barrie",
      citation: "Peter Pan",
      year: 1911,
      genre: ["Children's literature", "Fairy Tales"]
  },
  {
      text: "On the night you were born, the moon smiled with such wonder that the stars peeked in to see you and the night wind whispered, ‘Life will never be the same.’",
      source: "Nancy Tillman"
  },
  {
      text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      source: "J.K. Rowling",
      citation: "Harry Potter and The Chamber of Secrets",
      year: 1998,
      genre: ["Children's literature", "Fantasy"]
  },
  {
    text: "I don't understand it any more than you do, but one thing I've learned is that you don't have to understand things for them to be.",
    source: "Madeleine L'Engle",
    citation: "A Wrinkle in Time",
    year: 1998,
    genre: ["Children's literature", "Fantasy"]
  },
  {
    text: "You're mad, bonkers, completely off your head. But I'll tell you a secret. All the best people are.",
    source: "Lewis Carroll",
    citation: "Alice in Wonderland",
    genre: ["Children's literature", "Fantasy"]
  },
  {
    text: "Little by little does the trick",
    source: "Aesop",
    genre: ["Fables"]
  }
];
// Create the getRandomQuote function and name it getRandomQuote



// Create the printQuote function and name it printQuote



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);