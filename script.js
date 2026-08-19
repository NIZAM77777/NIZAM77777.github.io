// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ================= NAVBAR =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (window.scrollY > 50)
        navbar.classList.add("scroll");
    else
        navbar.classList.remove("scroll");

});

// ================= TYPING EFFECT =================

const text = [
    "Unity 2D Game Developer",
    "Unity 3D Game Developer",
    "Gameplay Programmer",
    "Mobile Game Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length)
        count = 0;

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }
    else{

        setTimeout(type,80);

    }

})();

// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


const gameCounter = document.getElementById("gameCounter");

let started = false;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !started) {

            started = true;

            let current = 0;
            const target = 5;

            const timer = setInterval(() => {

                current++;

                if (current < target) {
                    gameCounter.textContent = current;
                } else {
                    gameCounter.textContent = target + "+";
                    clearInterval(timer);
                }

            }, 250);

        }

    });

}, {
    threshold: 0.5
});

counterObserver.observe(document.querySelector(".stats"));