// ================= RECIPE STATUS SLIDER =================

const recipes = [
    {
        image: "./images/image 64.jpg",
        title: "Sweet Autumn Salad",
        category: "Recipe",
        time: "10 minutes"
    },

    {
        image: "./images/image 53.jpg",
        title: "Fresh Fruit Bowl",
        category: "Recipe",
        time: "5 minutes"
    },

    {
        image: "./images/image 67.jpg",
        title: "Healthy Daily Snack",
        category: "Snack",
        time: "5 minutes"
    },

    {
        image: "./images/image 64.jpg",
        title: "Fresh Garden Salad",
        category: "Recipe",
        time: "15 minutes"
    }
];


const recipeStatus = document.getElementById("recipeStatus");
const recipeImage = document.getElementById("recipeStatusImage");
const recipeTitle = document.getElementById("recipeTitle");
const recipeCategory = document.getElementById("recipeCategory");
const recipeTime = document.getElementById("recipeTime");
const recipeProgress = document.getElementById("recipeProgress");

const recipeNext = document.getElementById("recipeNext");
const recipePrev = document.getElementById("recipePrev");


let currentRecipe = 0;
let recipeTimer;
let progressTimer;

const duration = 5000;
let progress = 0;


// ================= CREATE PROGRESS BARS =================

function createProgressBars() {

    recipeProgress.innerHTML = "";

    recipes.forEach((recipe, index) => {

        const bar = document.createElement("div");

        bar.className =
            "relative h-[3px] flex-1 rounded-full bg-white/40 overflow-hidden";

        bar.innerHTML = `
            <span
                id="progress-${index}"
                class="absolute left-0 top-0 h-full bg-white w-0"
            ></span>
        `;

        recipeProgress.appendChild(bar);
    });
}


// ================= UPDATE PROGRESS =================

function updateProgressBars() {

    recipes.forEach((recipe, index) => {

        const progressBar =
            document.getElementById(`progress-${index}`);

        if (!progressBar) return;

        if (index < currentRecipe) {
            progressBar.style.width = "100%";
        }

        else if (index > currentRecipe) {
            progressBar.style.width = "0%";
        }

        else {
            progressBar.style.width = `${progress}%`;
        }

    });
}


// ================= SHOW RECIPE =================

function showRecipe(index) {

    currentRecipe = index;

    const recipe = recipes[currentRecipe];

    // Fade image out
    recipeImage.classList.add("opacity-0");

    setTimeout(() => {

        recipeImage.src = recipe.image;
        recipeTitle.textContent = recipe.title;
        recipeCategory.textContent = recipe.category;
        recipeTime.textContent = recipe.time;

        recipeImage.classList.remove("opacity-0");

    }, 200);


    progress = 0;

    updateProgressBars();

    startRecipeTimer();
}


// ================= NEXT =================

function nextRecipe() {

    currentRecipe++;

    if (currentRecipe >= recipes.length) {
        currentRecipe = 0;
    }

    showRecipe(currentRecipe);
}


// ================= PREVIOUS =================

function previousRecipe() {

    currentRecipe--;

    if (currentRecipe < 0) {
        currentRecipe = recipes.length - 1;
    }

    showRecipe(currentRecipe);
}


// ================= TIMER =================

function startRecipeTimer() {

    clearInterval(recipeTimer);
    clearInterval(progressTimer);

    progress = 0;

    progressTimer = setInterval(() => {

        progress += 100 / (duration / 100);

        if (progress >= 100) {
            progress = 100;
        }

        updateProgressBars();

    }, 100);


    recipeTimer = setTimeout(() => {
        nextRecipe();
    }, duration);
}


// ================= BUTTONS =================

recipeNext.addEventListener("click", () => {
    nextRecipe();
});

recipePrev.addEventListener("click", () => {
    previousRecipe();
});


// ================= PAUSE ON HOLD =================

recipeStatus.addEventListener("mousedown", () => {

    clearTimeout(recipeTimer);
    clearInterval(progressTimer);

});


recipeStatus.addEventListener("mouseup", () => {

    startRecipeTimer();

});


recipeStatus.addEventListener("touchstart", () => {

    clearTimeout(recipeTimer);
    clearInterval(progressTimer);

}, {
    passive: true
});


recipeStatus.addEventListener("touchend", () => {

    startRecipeTimer();

}, {
    passive: true
});


// ================= MOBILE SWIPE =================

let touchStartX = 0;
let touchEndX = 0;


recipeStatus.addEventListener("touchstart", (e) => {

    touchStartX = e.changedTouches[0].screenX;

}, {
    passive: true
});


recipeStatus.addEventListener("touchend", (e) => {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

}, {
    passive: true
});


function handleSwipe() {

    const swipeDistance = touchEndX - touchStartX;

    // Swipe left = next
    if (swipeDistance < -50) {
        nextRecipe();
    }

    // Swipe right = previous
    if (swipeDistance > 50) {
        previousRecipe();
    }

}


// ================= INITIALIZE =================

createProgressBars();

showRecipe(0);