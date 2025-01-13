const gameBoard = document.getElementById('game-board');


const cardValues = ['🍎', '🍌', '🍓', '🍇', '🍒', '🍍', '🍋', '🥝'];
const cards = [...cardValues, ...cardValues]; 
let flippedCards = [];
let matchedPairs = 0;


cards.sort(() => Math.random() - 0.5);


cards.forEach((value) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="card-front">${value}</div>
    <div class="card-back"></div>
  `;
  gameBoard.appendChild(card);


  card.addEventListener('click', () => handleCardFlip(card, value));
});

function handleCardFlip(card, value) {
  if (card.classList.contains('flip') || flippedCards.length === 2) return;

  card.classList.add('flip');
  flippedCards.push({ card, value });


  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  const [first, second] = flippedCards;
  if (first.value === second.value) {
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === cardValues.length) {
      setTimeout(() => alert('You Win!'), 500);
    }
  } else {

    setTimeout(() => {
      first.card.classList.remove('flip');
      second.card.classList.remove('flip');
      flippedCards = [];
    }, 1000);
  }
}
