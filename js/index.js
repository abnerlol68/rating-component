let preRating = 0;
let rating = 0;

const getRating = (value) => {
  if (isNaN(value)) {
    console.error(`Input for getRating isn't number`);
    return;
  }
  
  rating = value;

  const btn = document.getElementsByClassName('btn')[rating - 1];
  btn.style.color = "hsl(0, 0%, 100%)";
  btn.style.backgroundColor = "hsl(217, 12%, 63%)";

  const preBtn = document.getElementsByClassName('btn')[preRating - 1];

  if (preBtn === undefined) {
    preRating = value;
    return;
  }

  preBtn.style.color = "hsl(217, 12%, 63%)";
  preBtn.style.backgroundColor = "hsl(216, 22%, 24%)";

  preRating = value;
}

const submitRating = () => {
  const valRating = document.getElementById('val-rating');
  valRating.innerText = rating;
  document.getElementsByClassName('sec-result')[0].style.display = "flex";
  document.getElementsByClassName('sec-rating')[0].style.display = "none";
}
