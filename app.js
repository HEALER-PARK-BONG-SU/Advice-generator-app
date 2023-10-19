const number = document.querySelector('.number');
const adviceContainer = document.querySelector('.advice');
const diceContainer = document.querySelector('.dice-img');
const url = `https://api.adviceslip.com/advice`;

diceContainer.addEventListener('click', displayData);

async function displayData() {
  adviceContainer.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { id, advice } = data.slip;
    number.textContent = id;
    adviceContainer.textContent = advice;
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener('DOMContentLoaded', displayData);
