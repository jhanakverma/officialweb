document.addEventListener("DOMContentLoaded", function () {
    // Show the logo
    document.querySelector(".logo").classList.add("show");

    // Scroll event for inspiration section
    const inspiration = document.querySelector(".inspiration");
    let lastScrollTop = 0;
    let scrollSpeed = 0;

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollSpeed = Math.abs(scrollTop - lastScrollTop); // Calculate scroll speed
        lastScrollTop = scrollTop;

        let boxPosition = inspiration.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (boxPosition < windowHeight / 2) {
            // Adjust sliding speed based on scroll speed
            const slideDistance = Math.min(scrollSpeed * 0.5, 100); // Limit slide distance
            inspiration.style.transform = `translateX(${slideDistance}%)`;
            inspiration.style.opacity = 1;
        } else {
            // Reset if the user scrolls back up
            inspiration.style.transform = "translateX(-100%)";
            inspiration.style.opacity = 0;
        }
    });
});
