// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 1000);

});

// ===============================
// TYPING EFFECT
// ===============================

new Typed(".typing", {

    strings: [

        "Full Stack Java Developer",
        "Web Developer",
        "Problem Solver"

    ],

    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true

});

// ===============================
// AOS ANIMATION
// ===============================

AOS.init({

    duration: 1000,
    once: true

});

// ===============================
// PARTICLES JS
// ===============================

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80,

            density: {

                enable: true,
                value_area: 800

            }

        },

        color: {

            value: "#00c6ff"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.5

        },

        size: {

            value: 3,
            random: true

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#7f5af0",

            opacity: 0.4,

            width: 1

        },

        move: {

            enable: true,

            speed: 2,

            direction: "none",

            random: false,

            straight: false,

            out_mode: "out"

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,
                mode: "grab"

            },

            onclick: {

                enable: true,
                mode: "push"

            },

            resize: true

        },

        modes: {

            grab: {

                distance: 180,

                line_linked: {

                    opacity: 1

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});

// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        if (pageYOffset >= sectionTop) {

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");

        }

    });

});

// ===============================
// SMOOTH SCROLL
// ===============================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",

    function(e){

        e.preventDefault();

        document
        .querySelector(
        this.getAttribute("href")
        )
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// CONTACT FORM
// ===============================

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener(
"submit",

function(e){

    e.preventDefault();

    alert(
    "Thank you! Your message has been received."
    );

    contactForm.reset();

});

}

// ===============================
// CARD HOVER EFFECT
// ===============================

const cards =
document.querySelectorAll(

".skill-card, .project-card, .glass-card"

);

cards.forEach(card => {

card.addEventListener(

"mouseenter",

() => {

card.style.transform =
"translateY(-10px)";

}

);

card.addEventListener(

"mouseleave",

() => {

card.style.transform =
"translateY(0px)";

}

);

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(

"%cWelcome to Kanishkka Portfolio",

"color:#00c6ff;font-size:20px;font-weight:bold;"

);