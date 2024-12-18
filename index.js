document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle mobile menu and hamburger/X icon
    menuToggle.addEventListener('click', function () {
        // Toggle active state for hamburger (transforms to X)
        menuToggle.classList.toggle('active');

        // Toggle mobile menu visibility
        const isMenuOpen = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isMenuOpen ? 'none' : 'flex';
    });
});

// Array to hold reviews
const reviews = [
    {
        image: "review_img1.png",
        description: "The team provided exceptional service for our substation project. Their professionalism and timely execution of 33kV line development were impressive. Highly recommend them for electrical works!",
        author: "Bhaskar Rao"
    },
    {
        image: "review_img2.png",
        description: "Their expertise in both electrical and civil construction is unmatched. The Koyalagudem project they completed for us exceeded expectations in both quality and efficiency.",
        author: "Subramanyam"
    },
    {
        image: "review_img3.png",
        description: "We hired them for highway electrical maintenance, and the results were flawless. The street lighting solutions improved visibility and safety significantly. Great job!",
        author: "Anvitha"
    },
    {
        image: "review_img4.png",
        description: "The Chervugattu to Kamineni line development was handled very efficiently. Their attention to detail and use of modern equipment ensured smooth completion of the project.",
        author: "Vinay Kumar"
    },
    {
        image: "review_img5.png",
        description: "Highly skilled contractors! They provided excellent services for both high-tension and low-tension works. Reliable and professional team to work with.",
        author: "Venkat Reddy"
    }
];

// DOM element where carousel items will be inserted
const carouselInner = document.getElementById("carousel-inner");

// Function to dynamically generate carousel items
function generateCarouselItems() {
    reviews.forEach((review, index) => {
        const isActive = index === 0 ? "active" : ""; // Add 'active' class for the first item
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${review.image}" class="rounded-circle mb-3" alt="${review.author}" style="width: 150px; height: 150px; object-fit: cover;">
                <blockquote class="blockquote">
                    <p class="mb-2">${review.description}</p>
                    <br>
                    <footer class="blockquote-footer">${review.author}</footer>
                </blockquote>
            </div>
        `;
        carouselInner.insertAdjacentHTML("beforeend", carouselItem);
    });
}

// Initialize the carousel content
generateCarouselItems();
