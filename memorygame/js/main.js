//console.log("Up and running!");

//console.log()
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay =[];

//var cardOne = cards[0];
//var cardTwo = cards[2];
//var cardThree = cards[1];
//var cardFour = cards[4];


//cardsInPlay.push(cardOne);
//console.log;

//cardsInPlay.push (cardTwo);
//console.log("User flipped king");

function checkForMatch(){

//this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay[0] === cardsInPlay[1]) {
 
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}

function flipCard (){

var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);

//console.log("user flipped  " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

//console.log(cards[cardId].cardImage);
//console.log(cards[cardId].suit);



if (cardsInPlay.length===2) {
     checkForMatch();
}
/*	console.log;
else if (cardsInPlay[0]===cardsInPlay[1]) 
alert("You found a match!");
else
	alert( "Sorry, try again.");*/

}

//flipCard(0);
//flipCard(2);

/*if (cardsInPlay.length===2) {
	console.log;
}else if (cardsInPlay[0]===cardsInPlay[1]) {
alert("You found a match!");
}else{
	alert( "Sorry, try again.");
} */

function createBoard(){

for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
  
  
    document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();


