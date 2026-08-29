const quotes =
["To live doesn't mean you're alive",
"Life is a beach house don't let the sand in",
"Usually I'm the baddest",
"Nescient kerfuffling"];

let currentQuote = 0;

const displayQuote = document.getElementById("displayQuote");
const newQuoteBtn = document.getElementById("newQuoteBtn");

displayQuote.textContent = quotes[currentQuote];

newQuoteBtn.addEventListener("click", function() {
    currentQuote = currentQuote + 1;
    if(currentQuote===quotes.length) {
        currentQuote= 0;
    }

    displayQuote.textContent = quotes[currentQuote];
    });

