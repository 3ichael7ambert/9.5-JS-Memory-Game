const gameContainer = document.getElementById("game");
//const h1 = document.getElementByTag("h1");

// let wiggles = true;
// while (wiggle)
// {
//   setTimeout(h1.style.right="100px",1000);
//   wiggle=false;
// }
// while (!wiggle)
// {
//   setTimeout(h1.style.left="100px",1000);
//   wiggle=true;
// }

// function randomRGB() {

//     const r = Math.floor(Math.random() *256);
//     const g = Math.floor(Math.random() *256);
//     const b = Math.floor(Math.random() *256);

//     return `rgb(${r},${g},${b})`

// }

// const letters = document.querySelectorAll('.letter');

// setInterval(function () {
//     for (let letter of letters) {
//         letter.style.color = randomRGB();

//     }
// },500)


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

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
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


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
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

function flipBack(event) {
  event.target.style.background = "linear-gradient(olive,olivedrab)";
}
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (event.target.style.background="linear-gradient(olive,olivedrab"){
  event.target.style.background = event.target.className;////////
  }
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

///
//flipping effect
///
const cards = document.querySelectorAll('#game div');
function flipCard() {
  this.classList.toggle('flip');
}
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



cards.forEach(card => card.addEventListener('click', flipCard));

///
//Object to track if cards are flipped
///
// function cardsFlippedFunc(COLORS) {
//   var cardsFlipped= {};
//   for (var i = 0; i < COLORS.length; ++i)
//     if (COLORS[i] !== undefined) cardsFlipped[i] = COLORS[i];
//   return cardsFlipped;
// }


