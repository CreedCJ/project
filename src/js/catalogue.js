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
    mobileMenu.classList.toggle("-translate-x-full");
    mobileMenu.classList.toggle("translate-x-0");
});




const catalogMenuBtn = document.getElementById("catalogMenuBtn");
const catalogSidebar = document.getElementById("catalogSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openCatalogSidebar() {
    catalogSidebar.classList.remove("-translate-x-full");
    sidebarOverlay.classList.remove("opacity-0", "pointer-events-none");
    sidebarOverlay.classList.add("opacity-100");
    document.body.classList.add("overflow-hidden");
}

function closeCatalogSidebar() {
    catalogSidebar.classList.add("-translate-x-full");
    sidebarOverlay.classList.add("opacity-0", "pointer-events-none");
    sidebarOverlay.classList.remove("opacity-100");
    document.body.classList.remove("overflow-hidden");
}

catalogMenuBtn?.addEventListener("click", openCatalogSidebar);
closeSidebar?.addEventListener("click", closeCatalogSidebar);
sidebarOverlay?.addEventListener("click", closeCatalogSidebar);



const likeButtons = document.querySelectorAll(".likeButton");

    likeButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent.trim() === "♡") {
                button.textContent = "♥";
                button.classList.add("text-red-500");
            } else {
                button.textContent = "♡";
                button.classList.remove("text-red-500");
            }
        });
    });