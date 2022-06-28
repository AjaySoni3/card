let suffleBtn = document.querySelector(".suffle");
let sortBtn = document.querySelector(".sort");

let card = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function radom(card) {
  for (let i = 0; i < card.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = card[i];
    card[i] = card[j];
    card[j] = temp;
  }
}

suffleBtn.addEventListener("click", (e) => {
  radom(card);
  console.log(card);
});

let sortArry = card.sort();

console.log(sortArry);
