// ===============================
// FRUITS DROPDOWN
// ===============================

const fruitsButton = document.getElementById("fruitsButton");
const fruitOptions = document.getElementById("fruitOptions");
const fruitsArrow = document.getElementById("fruitsArrow");


fruitsButton.addEventListener("click", () => {

    if (fruitOptions.classList.contains("grid-rows-[0fr]")) {

        // OPEN
        fruitOptions.classList.remove(
            "grid-rows-[0fr]",
            "opacity-0"
        );

        fruitOptions.classList.add(
            "grid-rows-[1fr]",
            "opacity-100"
        );

        fruitsArrow.classList.add("rotate-180");

    } else {

        // CLOSE
        fruitOptions.classList.remove(
            "grid-rows-[1fr]",
            "opacity-100"
        );

        fruitOptions.classList.add(
            "grid-rows-[0fr]",
            "opacity-0"
        );

        fruitsArrow.classList.remove("rotate-180");

    }

});


const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });