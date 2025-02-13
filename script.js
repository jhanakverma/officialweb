document.addEventListener("DOMContentLoaded", function () {
    // Show the logo
    document.querySelector(".logo").classList.add("show");

    // Scroll event for inspiration section
    const inspiration = document.querySelector(".inspiration");
    let hasSlidIn = false; // Flag to track if the section has already slid in

    window.addEventListener("scroll", () => {
        let boxPosition = inspiration.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (!hasSlidIn && boxPosition < windowHeight / 2) {
            inspiration.style.transform = "translateX(0)";
            inspiration.style.opacity = 1;
            hasSlidIn = true; // Prevent further movement
        }
    });
});
