document.addEventListener("DOMContentLoaded", () => {
    // Lógica do Carrossel / Slider
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.querySelector(".prev-arrow");
    const nextBtn = document.querySelector(".next-arrow");
    
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        // Garante que o índice navegue em loop
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener("click", () => {
        showSlide(currentSlide + 1);
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
        });
    });

    // Toggle do Menu Hambúrguer (Mobile)
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const nav = document.querySelector(".navigation");

    hamburgerBtn.addEventListener("click", () => {
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
            nav.style.position = "absolute";
            nav.style.top = "100%";
            nav.style.left = "0";
            nav.style.width = "100%";
            nav.style.backgroundColor = "#fff";
            nav.style.borderBottom = "1px solid #ccc";
        }
    });
});