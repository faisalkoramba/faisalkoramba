// Initialize AOS Animations
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1200, // Animation duration in ms
        once: true,     // Only animate elements once when they enter the viewport
    });
});

// Contact Form Submission Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
    this.reset(); // Resets form fields after submission
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    });
});
