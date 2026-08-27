const quotes = [
    "Code is like humor, if you have to explain it,its bad!
    "To live doesnt mean you're alive",
    "I will retire with the crown",
    "No im not lucky im blesses"
];

const quoteText = document.getElementById("quote");
const quoteBtn = document.getElementById("quoteBtn");

for(let i =0; i < quotes.length; i++) {
    console.log(quotes[i]);
}

quoteText.textContent = quotes[0];