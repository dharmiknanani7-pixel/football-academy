/* =====================================
   BLUE LOCK FOOTBALL ACADEMY
   JAVASCRIPT
===================================== */


/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });

}


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================
   NUMBER COUNTERS
===================================== */

const counters =
    document.querySelectorAll(".counter");


const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const duration = 1500;

                const increment =
                    target / (duration / 16);


                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.textContent = target;

                    }

                };

                updateCounter();

                counterObserver.unobserve(counter);

            });

        },

        {
            threshold: 0.8
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =====================================
   PENALTY GAME
===================================== */

const shootButton =
    document.getElementById("shootButton");

const football =
    document.getElementById("football");

const goalkeeper =
    document.getElementById("goalkeeper");

const gameScore =
    document.getElementById("gameScore");

const gameMessage =
    document.getElementById("gameMessage");


let score = 0;
let shooting = false;


if (shootButton) {

    shootButton.addEventListener("click", () => {

        if (shooting) return;

        shooting = true;

        const directions = [

            {
                ballX: "-110px",
                ballY: "-250px",
                keeperX: "45%"
            },

            {
                ballX: "0px",
                ballY: "-270px",
                keeperX: "10%"
            },

            {
                ballX: "110px",
                ballY: "-250px",
                keeperX: "75%"
            }

        ];


        const random =
            directions[
                Math.floor(
                    Math.random() *
                    directions.length
                )
            ];


        goalkeeper.style.left =
            random.keeperX;


        football.style.transform =
            `translate(${random.ballX}, ${random.ballY}) scale(.7) rotate(360deg)`;


        setTimeout(() => {

            const saved =
                Math.random() > 0.35;


            if (saved) {

                gameMessage.textContent =
                    "🧤 SAVED! Try again!";

            } else {

                score++;

                gameScore.textContent =
                    score;

                gameMessage.textContent =
                    "⚡ GOAL! Incredible shot!";

            }


            football.style.transform =
                "translateY(0) scale(1)";


            goalkeeper.style.left =
                "45%";


            setTimeout(() => {

                shooting = false;

            }, 500);

        }, 700);

    });

}


/* =====================================
   APPOINTMENT FORM
===================================== */

const appointmentForm =
    document.getElementById("appointmentForm");


if (appointmentForm) {

    appointmentForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "playerName"
                ).value;

            const program =
                document.getElementById(
                    "program"
                ).value;

            const date =
                document.getElementById(
                    "date"
                ).value;


            const message =
                document.getElementById(
                    "appointmentMessage"
                );


            message.innerHTML =
                `⚡ Appointment request received for <strong>${name}</strong>.<br>
                Program: ${program}<br>
                Preferred Date: ${date}<br>
                Our academy team will contact you soon.`;

            appointmentForm.reset();

        }
    );

}


/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const message =
                document.getElementById(
                    "contactMessage"
                );


            message.textContent =
                "✓ Message received! Thank you for contacting Blue Lock Academy.";

            contactForm.reset();

        }
    );

}


/* =====================================
   CURRENT YEAR
===================================== */

const year =
    new Date().getFullYear();

document
    .querySelectorAll(".copyright")
    .forEach((element) => {

        element.innerHTML =
            `© ${year} Blue Lock Football Academy.`;

    });
