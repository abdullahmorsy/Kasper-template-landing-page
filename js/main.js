// swiper landing page
var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// change header color
const navbar = document.querySelector("header");
const secondSection = document.querySelector(".Services");
const secondSectionPosition = secondSection.offsetTop;
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= secondSectionPosition) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

//counter
let box = document.querySelectorAll(".box .number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No

window.addEventListener("scroll", function () {
    let sectionPos = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (sectionPos < windowHeight && sectionPos > 0) {
        if (!started) {
            let delay = 0;
            box.forEach((number) => {
                setTimeout(() => startCount(number), delay);
                delay += 500;
            });
        }
        started = true;
    }
});

function startCount(el) {
    let goal = el.dataset.goal;
    let duration = el.classList.contains("last-number") ? 2000 : 1500;
    let count = 0;
    let step = Math.ceil(goal / (duration / 10));

    let interval = setInterval(() => {
        count += step;
        if (count >= goal) {
            count = goal;
            clearInterval(interval);
        }
        el.textContent = count;
    }, 10);
}

// skills width
let sectionTwo = document.querySelector(".skills-testimonilas");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop + 200) {
        console.log("Reached Section Three");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};
