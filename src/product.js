// =====================================================
// WHATSAPP-STYLE IMAGE SLIDER FOR 4 CARDS
// =====================================================

const recipeCards = document.querySelectorAll(".recipe-card");


// =====================================================
// FOUR IMAGES
// =====================================================

const recipeImages = [
    "./images/image 64.jpg",
    "./images/image 53.jpg",
    "./images/image 67.jpg",
    "./images/image 64.jpg"
];


// =====================================================
// INFORMATION FOR EACH IMAGE
// =====================================================

const recipeInfo = [
    {
        title: "Sweet Autumn Salad",
        category: "Recipe",
        time: "10 minutes"
    },

    {
        title: "Fresh Fruit Bowl",
        category: "Recipe",
        time: "5 minutes"
    },

    {
        title: "Healthy Daily Snack",
        category: "Snack",
        time: "5 minutes"
    },

    {
        title: "Fresh Garden Salad",
        category: "Recipe",
        time: "15 minutes"
    }
];


// =====================================================
// HOW LONG EACH IMAGE STAYS
// =====================================================

const duration = 5000;


// =====================================================
// APPLY STATUS EFFECT TO EACH CARD
// =====================================================

recipeCards.forEach((card) => {

    // -----------------------------------------------
    // Get elements inside card
    // -----------------------------------------------

    const image = card.querySelector("img");

    const title = card.querySelector("h3");

    const infoContainer =
        card.querySelector(".absolute.top-4");

    const category =
        infoContainer?.querySelector("span:first-child");

    const time =
        infoContainer?.querySelector("span:last-child");


    // -----------------------------------------------
    // Current image
    // -----------------------------------------------

    let currentImage = 0;


    // -----------------------------------------------
    // Timer
    // -----------------------------------------------

    let timer = null;

    let progressTimer = null;


    // -----------------------------------------------
    // Progress
    // -----------------------------------------------

    let progress = 0;


    // =================================================
    // CREATE WHATSAPP PROGRESS BAR
    // =================================================

    const progressContainer =
        document.createElement("div");

    progressContainer.className =
        "absolute top-3 left-3 right-3 z-30 flex gap-1";


    // Create 4 progress bars
    recipeImages.forEach((img, index) => {

        const background =
            document.createElement("div");

        background.className =
            "relative h-[3px] flex-1 rounded-full bg-white/40 overflow-hidden";


        const bar =
            document.createElement("span");

        bar.className =
            "absolute left-0 top-0 h-full bg-white transition-none";


        bar.style.width =
            index < currentImage ? "100%" : "0%";


        background.appendChild(bar);

        progressContainer.appendChild(background);

    });


    card.appendChild(progressContainer);


    // Get progress bars
    const progressBars =
        progressContainer.querySelectorAll("span");


    // =================================================
    // UPDATE PROGRESS BARS
    // =================================================

    function updateProgress() {

        progressBars.forEach((bar, index) => {

            if (index < currentImage) {

                bar.style.width = "100%";

            } else if (index > currentImage) {

                bar.style.width = "0%";

            } else {

                bar.style.width =
                    `${progress}%`;
            }

        });
    }


    // =================================================
    // SHOW IMAGE
    // =================================================

    function showImage() {

        const imageData =
            recipeInfo[currentImage];


        // Fade image
        image.classList.add("opacity-0");


        setTimeout(() => {

            image.src =
                recipeImages[currentImage];

            image.alt =
                imageData.title;


            // Update title
            if (title) {

                title.textContent =
                    imageData.title;
            }


            // Update category
            if (category) {

                category.textContent =
                    imageData.category;
            }


            // Update time
            if (time) {

                time.textContent =
                    imageData.time;
            }


            // Fade image back
            image.classList.remove("opacity-0");

        }, 200);


        progress = 0;

        updateProgress();

        startTimer();
    }


    // =================================================
    // START TIMER
    // =================================================

    function startTimer() {

        clearTimeout(timer);

        clearInterval(progressTimer);


        progress = 0;

        updateProgress();


        // Progress animation
        progressTimer = setInterval(() => {

            progress +=
                100 / (duration / 100);


            if (progress >= 100) {

                progress = 100;

                clearInterval(progressTimer);
            }


            updateProgress();

        }, 100);


        // Change image after 5 seconds
        timer = setTimeout(() => {

            nextImage();

        }, duration);
    }


    // =================================================
    // NEXT IMAGE
    // =================================================

    function nextImage() {

        currentImage++;


        if (currentImage >= recipeImages.length) {

            currentImage = 0;
        }


        showImage();
    }


    // =================================================
    // INITIALIZE CARD
    // =================================================

    showImage();

});




const images = [
    "./images/fruit-mixxx.png",
    "./images/fruit-mixxx-2.png",
    "./images/fruit-mixxx-3.png",
    "./images/fruit-mixxx.png"
];

const productImage = document.getElementById("productImage");
const nextButton = document.getElementById("nextButton");
const dots = document.querySelectorAll(".slider-dot");

let currentIndex = 0;


// Function to change image
function changeImage(index) {

    currentIndex = index;

    // Change image
    productImage.src = images[currentIndex];

    // Change active dot
    dots.forEach((dot, i) => {

        if (i === currentIndex) {

            dot.classList.remove("text-[#AFAFAF]");
            dot.classList.add("text-[#2D2D2D]");

        } else {

            dot.classList.remove("text-[#2D2D2D]");
            dot.classList.add("text-[#AFAFAF]");

        }

    });

}


// Arrow → next image
nextButton.addEventListener("click", () => {

    currentIndex++;

    // Go back to first image
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    changeImage(currentIndex);

});


// Dots → specific image
dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        const index = Number(dot.dataset.index);

        changeImage(index);

    });

});