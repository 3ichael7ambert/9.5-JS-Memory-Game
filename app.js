const gameContainer = document.getElementById("game");


/////
let card1 = null;
let card2 = null;
let cardsFlipped = 0;
let noClicking = false;
////

let countdown =0;
let clickCount=0;


////////////////////////////
/////Header change color
//////////////////////////////
function randomRGB() {
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r},${g},${b})`
}
const letters = document.querySelectorAll('.letter');
setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();

    }
},500)

//counter
setInterval (function () {countdown+=1;},1000);


////////////

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// SHuffle  array
function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
let shuffledColors = shuffle(COLORS);


//creates div based on array
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



///////////////////////////
function flipBack(event) {
  // event.target.style.background = "linear-gradient(olive,olivedrab)";
} ////

// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);


  // if (e.target.style.background="linear-gradient(olive,olivedrab"){
  //   e.target.style.background = e.target.className;////////
  //   }

//////////////////
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;
  clickCount+=1;
  let currentCard = e.target;
  // currentCard.style.backgroundColor = currentCard.classList[0];
  currentCard.style.background = e.target.className;

  if (!card1 || !card2) {
    currentCard.classList.add("flipped");
    card1 = card1 || currentCard;
    card2 = currentCard === card1 ? null : currentCard;
  }

  if (card1 && card2) {
    noClicking = true;
    // debugger
    let gif1 = card1.className;
    let gif2 = card2.className;

    if (gif1 === gif2) {
      cardsFlipped += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function() {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.toggle("flipped");
        card1.style.background="linear-gradient(olive,olivedrab";
        card2.style.background="linear-gradient(olive,olivedrab";
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }


function count(){
  countdown+=1;
  return countdown;
}


setInterval(count(),1);

  if (cardsFlipped === COLORS.length) alert(`You Won, in ${countdown} seconds and you guessed ${clickCount} times.`);
///////////////////////////////////////////


  // let cardBack = document.createElement("div");
  //     cardBack.className = "back-face";
  //     cardBack.style.background = event.target.className;
  //     event.target.appendChild(cardBack);
  // setTimeout(flipBack(event),1000);///////
  // if (event.target.className==="front-face") {
  //   event.target.className="back-face"
  // } else if (event.target.className==="back-face") {
  //   event.target.className="front-face"}
    
}


// when the DOM loads
createDivsForColors(shuffledColors);

/////////////////////////////////////
//flipping effect
///
// const cards = document.querySelectorAll('#game div');
// function flipCard() {
//   this.classList.toggle('flip');
// }

// cards.forEach(card => card.addEventListener('click', flipCard));

///////////////////////////////////




// let hasFlippedCard = false;
// let firstCard, secondCard;

// const cards = document.querySelectorAll('#game div');
// function flipCard() {
//   this.classList.add('flip');

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;
//    return;
//  }

//  secondCard = this;
//  hasFlippedCard = false;

//  checkForMatch();
// }

// function checkForMatch() {
//  if (firstCard.classList === secondCard.classList {
//    disableCards();
//    return;
//  }

//  unflipCards();
// }

// function disableCards() {
//  firstCard.removeEventListener('click', flipCard);
//  secondCard.removeEventListener('click', flipCard);
// }

// function unflipCards() {
//  setTimeout(() => {
//    firstCard.classList.remove('flip');
//    secondCard.classList.remove('flip');
//  }, 1500);
// }




///
//Object to track if cards are flipped
///
// function cardsFlippedFunc(COLORS) {
//   var cardsFlipped= {};
//   for (var i = 0; i < COLORS.length; ++i)
//     if (COLORS[i] !== undefined) cardsFlipped[i] = COLORS[i];
//   return cardsFlipped;
// }




















// function createDivsForColors(colorArray) {
//   for (let color of colorArray) {
//     // create a new div
//     const newDiv = document.createElement("div");
//     const newFront = document.createElement("div");
//     const newBack = document.createElement("div");
//     // give it a class attribute for the value we are looping over
//     newDiv.classList.add(color);
//     newFront.className.add("front-face");
//     newBack.className.add("back-face");
//     // call a function handleCardClick when a div is clicked on
//     newDiv.addEventListener("click", handleCardClick);

//     // append the div to the element with an id of game
//     gameContainer.append(newDiv);
//     newDiv.append(newFront);
//     newDiv.append(newBack);
//   }
// }