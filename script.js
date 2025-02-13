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
            const treeImage = document.querySelector(".tree-image");
            const treeHeight = treeImage.offsetHeight; // Height of the tree section
            const scrollPosition = window.scrollY;

            console.log("Scroll Position:", scrollPosition); // Debug scroll position
            console.log("Tree Height:", treeHeight); // Debug tree section height

            // Trigger the slider effect when the user scrolls past the tree section
            if (scrollPosition > treeHeight * 0.8) {
                inspiration.classList.add("show");
                console.log("Inspiration Section Visible"); // Debug inspiration section visibility
            }
        });
    }
});
    
