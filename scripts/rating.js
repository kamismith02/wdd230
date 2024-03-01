var ratingInput = document.getElementById('rating');
var ratingOutput = document.getElementById('rating-value');

ratingInput.addEventListener('input', function () {
    ratingOutput.textContent = ratingInput.value;
});