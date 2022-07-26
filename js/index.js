const ratings = document.querySelector('.ratings');
const result = document.querySelector('#val-rating');
const submit = document.querySelector('.submit');
const secRating = document.querySelector('.sec-rating');
const secResult = document.querySelector('.sec-result');

ratings.addEventListener('click', (event) => {
  let ratingSelect = event.target.innerText;
  result.innerText = ratingSelect;

  if (ratingSelect >= 1 && ratingSelect <= 5) {
    submit.addEventListener('click', () => {
      secRating.style.display = 'none';
      secResult.style.display = 'flex';
    });
  }
});
