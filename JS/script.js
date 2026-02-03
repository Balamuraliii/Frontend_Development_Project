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
// ================== ARRAY + DOM MANIPULATION ==================

// Array of images
const images = [
    "Images/orange.jpeg",
    "Images/blue.jpeg"
];

let currentIndex = 0;
const galleryImg = document.getElementById("galleryImage");

// Function to change image
function changeImage() {
    currentIndex++;

    // Loop back using condition
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    galleryImg.src = images[currentIndex];
}

// Change image every 3 seconds (setInterval)
setInterval(changeImage, 3000);
