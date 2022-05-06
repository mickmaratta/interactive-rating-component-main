let ratingContainer = document.querySelector(".ratings");
let ratings = document.querySelectorAll(".rating");
let submit = document.querySelector(".submit");
let mainContainer = document.querySelector(".main-container");
let thankYouContainer = document.querySelector(".thank-you");
let chosenRating;
//console.log(ratings)

ratings.forEach((rating, clickedIdx) => {   
    rating.addEventListener("click", () => {
        ratings.forEach((rating, idx) => {
            rating.classList.remove("active")
        })        
        rating.classList.add("active")
        chosenRating = clickedIdx + 1
        console.log(`Rating of ${chosenRating} was clicked`)
    })
});

submit.addEventListener("click", () => {
    console.log("You clicked submit")
    mainContainer.style.display = "none";
    thankYouContainer.style.display = "flex";
    chosenRating = chosenRating.toString()
    document.getElementById("rating-selection").innerHTML = chosenRating;
})



