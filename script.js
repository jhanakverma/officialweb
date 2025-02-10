document.addEventListener("DOMContentLoaded", function () {
    // Check if the .logo element exists before accessing its classList
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.classList.add("show");
    }

    // Check if the .animated-heading element exists before accessing its classList
    const animatedHeading = document.querySelector(".animated-heading");
    if (animatedHeading) {
        animatedHeading.classList.add("show");
    }

    // Check if the .animated-text element exists before accessing its classList
    const animatedText = document.querySelector(".animated-text");
    if (animatedText) {
        animatedText.classList.add("show");
    }

    // Scroll event for inspiration section
    const inspiration = document.querySelector(".inspiration");
    if (inspiration) {
        window.addEventListener("scroll", () => {
            let boxPosition = inspiration.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (boxPosition < windowHeight / 2) {
                inspiration.classList.add("show");
            }
        });
    }
});
    
