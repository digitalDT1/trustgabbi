document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav_menu ul");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
            // Fade Out & Switch to Hamburger
            menu.style.opacity = "0";
            menu.style.transform = "translateY(-10px)";
            setTimeout(() => {
                menu.classList.remove("active");
                menu.style.display = "none";
            }, 300);
            hamburger.innerHTML = "&#9776;"; // Change back to ☰
        } else {
            // Fade In & Switch to Cancel Button
            menu.style.display = "flex";
            setTimeout(() => {
                menu.classList.add("active");
                menu.style.opacity = "1";
                menu.style.transform = "translateY(0)";
            }, 10);
            hamburger.innerHTML = "&#10006;"; // Change to ✖
        }
    });
});
//// END OF NAVBAR

document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.querySelector(".hero_container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    heroSection.classList.add("animate");
                } else {
                    heroSection.classList.remove("animate"); // Remove class to allow re-trigger
                }
            });
        },
        { threshold: 0.5 } // Triggers when 50% of the hero section is visible
    );

    observer.observe(heroSection);
});


///// END OF HERO
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".services_card");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;

        serviceCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.animationDelay = `${index * 0.2}s`; // Delay per card
                card.classList.add("visible");
            } else {
                card.classList.remove("visible"); // Reset when out of view
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load
});

///// END OF SECTION



document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about_content");

    function checkVisibility() {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

        if (isVisible) {
            aboutSection.classList.add("visible");
            aboutSection.classList.remove("hidden");
        } else {
            aboutSection.classList.add("hidden");
            aboutSection.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once to check if it's already in view
});

///// END OF ABOUT SECTION

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".contact_form form input, .contact_form form textarea, .contact_form form button");
    
    function checkScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("scroll-effect");
            } else {
                el.classList.remove("scroll-effect");
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});