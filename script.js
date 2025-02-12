document.addEventListener("DOMContentLoaded", function () {
    // Show the logo
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.classList.add("show");
    }

    // Show the animated heading
    const animatedHeading = document.querySelector(".animated-heading");
    if (animatedHeading) {
        animatedHeading.classList.add("show");
    }

    // Show the animated text
    const animatedText = document.querySelector(".animated-text");
    if (animatedText) {
        animatedText.classList.add("show");
    }

    // Scroll event for inspiration section
    const inspiration = document.querySelector(".inspiration");
    if (inspiration) {
        window.addEventListener("scroll", () => {
            const frontSection = document.querySelector(".front");
            const frontHeight = frontSection.offsetHeight;
            const scrollPosition = window.scrollY;

            console.log("Scroll Position:", scrollPosition); // Debug scroll position
            console.log("Front Height:", frontHeight); // Debug front section height

            if (scrollPosition > frontHeight * 0.8) {
                inspiration.classList.add("show");
                console.log("Inspiration Section Visible"); // Debug inspiration section visibility
            }
        });
    }
});
    
