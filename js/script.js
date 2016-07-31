// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// returns a random integer from 0 to topNum
function getRandomNumber(topNum) {
	return Math.floor(Math.random() * topNum);
}

// returns a quote object at a randomly chosen index from the quotes array
function getRandomQuote(quotes) {
	randomNum = getRandomNumber(quotes.length);
	return quotes[randomNum];
}

// replaces the html on the page with the html string of the random quote
function printQuote() {
  quote = getRandomQuote(quotes);
  htmlString = "<p class='quote'>" + quote.quote + "</p><p class='source'>" + quote.source + "<span class='citation'>" + quote.citation + "</span> <span class='year'>" + quote.year + "</span> </p>";
  document.getElementById('quote-box').innerHTML = htmlString;
}

printQuote();
