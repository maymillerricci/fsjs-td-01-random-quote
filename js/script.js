// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

// returns a random integer from 0 to topNum
function getRandomNumber(topNum) {
	return Math.floor(Math.random() * topNum);
}

// returns an array of integers from 0 to topNum
function makeRange(topNum) {
  range = []
  for (i = 0; i < topNum; i++) {
    range.push(i);
  }
  return range;
}

numbersArray = makeRange(quotes.length);

// returns a quote object at a randomly chosen index from the quotes array
// but don't repeat until each one has been used
function getNonRepeatingRandomQuote(quotes) {
	if (numbersArray.length === 0 ) {
    numbersArray = makeRange(quotes.length);
  }
  
	randomIndex = getRandomNumber(numbersArray.length);
	quote = quotes[numbersArray[randomIndex]];
  numbersArray.splice(randomIndex, 1);
  return quote;
}

// changes the background color to a new random color
function changeBackgroundColor() {
	red = getRandomNumber(255);
	green = getRandomNumber(255);
	blue = getRandomNumber(255);
	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style["background-color"] = newColor;
}

// replaces the html on the page with the html string of the random quote
function printQuote() {
  quote = getNonRepeatingRandomQuote(quotes);
  htmlString = "<p class='quote'>" + quote.quote + "</p><p class='source'>" + quote.source;
  if (quote.citation) {
  	htmlString += "<span class='citation'>" + quote.citation + "</span>"; 
  }
  if (quote.year) {
  	htmlString += "<span class='year'>" + quote.year + "</span>"; 
  }
  htmlString += "</p>";
  document.getElementById("quote-box").innerHTML = htmlString;
  changeBackgroundColor();
}

printQuote();
