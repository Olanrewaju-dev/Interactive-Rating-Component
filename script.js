var ratingCard = document.getElementById("cont");

var submit = document.getElementById("btn");

var thankUCard = document.getElementById("thankYou");

function onClick() {
  ratingCard.classList.add("noDisplay");
  thankUCard.classList.remove("Display");
}

submit.addEventListener("click", onClick);

// var rating = document.getElementById("selected-rating");

// var rating1 = document.getElementById("rating-1");
// var rating2 = document.getElementById("rating-2");
// var rating3 = document.getElementById("rating-3");
// var rating4 = document.getElementById("rating-4");
// var rating5 = document.getElementById("rating-5");

// function onClickRating() {
//   switch (rating) {
//     case 1:
//       return = ;
//       break;
//     default:
//       break;
//   }
// }

// rating.addEventListener("click", onClickRating);
