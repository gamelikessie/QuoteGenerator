// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

if (document.addEventListener) { // For all major browsers, except IE 8 and earlier
    window.addEventListener("load", printQuote, false);
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    document.getElementById('loadQuote').addEventListener("load", setInterval(printQuote, 7000));
} 
else if (document.attachEvent) { // For IE 8 and earlier versions
    window.attachEvent("load", printQuote, false);
    document.getElementById('loadQuote').attachEvent("click", printQuote, false);
    document.getElementById('loadQuote').addEventListener("load", setInterval(printQuote, 7000));
}

//Create an array of JavaScript objects to hold the data for your quotes
var quotes = [
    {
        quote : "Success is causing the world around you to aspire to your inspiration.",
        source : 'Chris Oyakhilome Dsc',
        citation : 'Rhapsody of Realities',
        year : "2013",
    },
    {
        quote : 'The size of your life is determined by the size of your mind.',
        source : 'Dr. Francis Kessie',
        citation : 'Your mind, your life',
        year : "2014",
    },
     {
        quote : "The life you are living now is what you saw yesterday",
        source : 'Chris Oyakhilome Dsc',
        citation : 'Power of your mind',
        year : "2016",
    },
    {
        quote : 'Success has techniques. A desirous man can learn it',
        source : 'Dr. Francis Kessie',
        citation : 'Your mind, your life',
        year : "2014",
    },
     {
        quote : "Success can be defined as the ability to minimize your errors",
        source : 'Chris Oyakhilome Dsc',
        citation : 'Power of your mind',
        year : "2010",
    },
     {
        quote : 'There are no natural born failures. All failure is man made',
        source : 'Chris Oyakhilome Dsc',
        citation : 'Recreating your world',
        year : "2011",
    }
];

var usedQuotes = []

//selects a random quote object from the quotes array and 
//returns the randomly selected quote object
function getRandomQuote() {
     var randPos = Math.floor(Math.random() * quotes.length)
     var selectedQuote = quotes.splice(randPos, 1)

     //keep track of all used quotes
     usedQuotes.push(selectedQuote[0])
     return selectedQuote[0]
};

//calls the getRandomQuote function and stores the returned quote object in a variable
//constructs a string with the different properties quote object and render in html
function printQuote() {
   if (quotes.length > 0){
        var randQoute = getRandomQuote();
    
    //log the selected quote in the console
    console.log(randQoute['quote'])

    var qouteString = "<p class='quote'>" + randQoute['quote'] + "</p>"
    if (randQoute['source'])
        qouteString += "<p class='source'>" + randQoute['source']
    if (randQoute['citation'])
        qouteString += "<span class='citation'>"+ randQoute['citation'] +"</span>" 
    if (randQoute['year'])
        qouteString += "<span class='year'>" + randQoute['year'] + "</span> </p>"
    
    document.getElementById("quote-box").innerHTML = qouteString;
    colorAndCapitalize();

    }
    else 
    {
        //put all used qoutes back into quote array and restart
        usedQuotes.forEach(function(item) {quotes.push(item);})
        usedQuotes = [];
        console.log('restarting........');
    }
};

//Capitalize the qoute string and change color for different quote
function colorAndCapitalize() {
    document.querySelector(".quote").style.textTransform = "capitalize";
    var buttonClick = document.getElementById('loadQuote')
    var randomHex = '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )
    var bodyColor = randomHex.slice(0, 4) + "000"; 
    var buttonColor = randomHex.slice(0, 4) + "888"; //button should differ slightly
    document.body.style.background = bodyColor;
    buttonClick.style.backgroundColor = buttonColor;
};





