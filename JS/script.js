// Button click alert
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Thank you for your interest in SuperPhone X!");
    });
});

// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
