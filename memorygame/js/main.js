console.log("Up and running!");

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

var cardsInPlay;

//var cardOne = cards[0];
//var cardTwo = cards[2];
//var cardThree = cards[1];
//var cardFour = cards[4];


//cardsInPlay.push(cardOne);
//console.log;

//cardsInPlay.push (cardTwo);
//console.log("User flipped king");

function checkForMatch(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard (cardId){

console.log("user flipped  " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();

/*if (cardsInPlay.length===2) 
	console.log;
else if (cardsInPlay[0]===cardsInPlay[1]) 
alert("You found a match!");
else
	alert( "Sorry, try again.");*/

};

flipCard(0);
flipCard(2);

/*if (cardsInPlay.length===2) {
	console.log;
}else if (cardsInPlay[0]===cardsInPlay[1]) {
alert("You found a match!");
}else{
	alert( "Sorry, try again.");
} */

