var ratingCard = document.getElementById("cont");

var submit = document.getElementById("btn");

var thankUCard = document.getElementById("thankYou");

function onSubmit() {
  ratingCard.classList.add("noDisplay");
  thankUCard.classList.remove("Display");
}

submit.addEventListener("click", onSubmit);

var rating = document.getElementById("selected-rating");

var rating1 = document.getElementById("rating-1");
var rating2 = document.getElementById("rating-2");
var rating3 = document.getElementById("rating-3");
var rating4 = document.getElementById("rating-4");
var rating5 = document.getElementById("rating-5");

rating1.addEventListener("click", () => {
  return (rating.innerHTML = " 1 of 5 star rating");
});

rating2.addEventListener("click", () => {
  return (rating.innerHTML = " 2 of 5 star rating");
});

rating3.addEventListener("click", () => {
  return (rating.innerHTML = " 3 of 5 star rating");
});

rating3.addEventListener("click", () => {
  return (rating.innerHTML = " 3 of 5 star rating");
});

rating4.addEventListener("click", () => {
  return (rating.innerHTML = " 4 of 5 star rating");
});

rating5.addEventListener("click", () => {
  return (rating.innerHTML = " 5 of 5 star rating!");
});
