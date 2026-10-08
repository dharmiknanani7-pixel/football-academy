/* =====================================
   BLUE LOCK FOOTBALL ACADEMY
   MAIN STYLESHEET
===================================== */

:root {

    --bg: #05070b;
    --bg-light: #0b1018;
    --card: #101721;

    --blue: #168cff;
    --blue-light: #55b5ff;

    --white: #ffffff;
    --muted: #9aa7b7;

    --border: rgba(255,255,255,0.09);

    --shadow:
        0 20px 60px rgba(0,0,0,0.45);

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {

    font-family: 'Poppins', sans-serif;

    background:
        radial-gradient(
            circle at 20% 10%,
            rgba(22,140,255,0.10),
            transparent 30%
        ),
        var(--bg);

    color: var(--white);

    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}


/* =====================================
   NAVBAR
===================================== */

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    height: 85px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 6%;

    background:
        rgba(5,7,11,0.75);

    backdrop-filter: blur(18px);

    border-bottom: 1px solid var(--border);

    z-index: 1000;

}


.logo {

    font-family: 'Orbitron', sans-serif;

    font-size: 1.3rem;

    font-weight: 900;

    letter-spacing: 2px;

}

.logo span {
    color: var(--blue);
}

.logo small {

    display: block;

    font-family: 'Poppins';

    font-size: 0.45rem;

    color: var(--muted);

    letter-spacing: 3px;

}


.navbar nav {

    display: flex;

    gap: 30px;

}

.navbar nav a {

    position: relative;

    color: #aeb9c7;

    font-size: 0.85rem;

    font-weight: 500;

    transition: 0.3s;

}

.navbar nav a:hover,
.navbar nav a.active {

    color: white;

}

.navbar nav a::after {

    content: '';

    position: absolute;

    width: 0;

    height: 2px;

    bottom: -8px;

    left: 0;

    background: var(--blue);

    transition: 0.3s;

}

.navbar nav a:hover::after,
.navbar nav a.active::after {

    width: 100%;

}


.menu-toggle {

    display: none;

    border: none;

    background: transparent;

    color: white;

    font-size: 1.6rem;

}


/* =====================================
   HERO
===================================== */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    padding: 120px 8% 70px;

    overflow: hidden;

}


.hero-grid {

    position: absolute;

    inset: 0;

    opacity: 0.12;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.08) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.08) 1px,
            transparent 1px
        );

    background-size: 70px 70px;

    transform:
        perspective(500px)
        rotateX(55deg)
        scale(2);

    transform-origin: bottom;

}


.hero-content {

    max-width: 800px;

    position: relative;

    z-index: 2;

}


.hero-tag {

    color: var(--blue-light);

    font-size: 0.8rem;

    font-weight: 700;

    letter-spacing: 4px;

    margin-bottom: 25px;

}


.hero h1 {

    font-family: 'Orbitron', sans-serif;

    font-size: clamp(3rem, 8vw, 7rem);

    line-height: 0.95;

    letter-spacing: -4px;

}


.hero h1 span {

    display: block;

    color: transparent;

    -webkit-text-stroke: 2px var(--blue);

}


.hero-description {

    color: var(--muted);

    max-width: 600px;

    margin-top: 30px;

    line-height: 1.8;

}


.hero-buttons {

    display: flex;

    gap: 15px;

    margin-top: 35px;

    flex-wrap: wrap;

}


.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding: 14px 28px;

    border-radius: 6px;

    font-size: 0.8rem;

    font-weight: 700;

    letter-spacing: 1px;

    transition: 0.3s;

    cursor: pointer;

    border: none;

}


.primary-btn {

    color: white;

    background: var(--blue);

    box-shadow:
        0 10px 30px rgba(22,140,255,0.25);

}


.primary-btn:hover {

    transform: translateY(-4px);

    box-shadow:
        0 15px 40px rgba(22,140,255,0.45);

}


.outline-btn {

    border: 1px solid var(--border);

    background: rgba(255,255,255,0.03);

}


.outline-btn:hover {

    border-color: var(--blue);

}


.hero-stats {

    display: flex;

    gap: 50px;

    margin-top: 60px;

}


.hero-stats strong {

    font-family: 'Orbitron';

    font-size: 2rem;

}


.hero-stats span {

    display: block;

    color: var(--muted);

    font-size: 0.7rem;

    margin-top: 5px;

}


.hero-ball {

    position: absolute;

    right: 10%;

    top: 35%;

    font-size: clamp(8rem, 20vw, 20rem);

    opacity: 0.08;

    animation: floatBall 5s ease-in-out infinite;

    filter:
        drop-shadow(0 0 60px var(--blue));

}


@keyframes floatBall {

    0%,100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-30px) rotate(20deg);
    }

}


.hero-glow {

    position: absolute;

    width: 500px;
    height: 500px;

    background: var(--blue);

    filter: blur(180px);

    opacity: 0.12;

    right: -100px;

    bottom: -100px;

}


/* =====================================
   SECTIONS
===================================== */

.section {

    padding: 110px 8%;

}


.dark-section {

    background:
        linear-gradient(
            180deg,
            #080c12,
            #05070b
        );

}


.section-heading {

    margin-bottom: 55px;

}


.section-heading p {

    color: var(--blue-light);

    font-size: 0.7rem;

    letter-spacing: 4px;

    font-weight: 700;

    margin-bottom: 12px;

}


.section-heading h2 {

    font-family: 'Orbitron';

    font-size: clamp(2rem, 4vw, 3.5rem);

}


/* =====================================
   ABOUT
===================================== */

.about-grid {

    display: grid;

    grid-template-columns: 0.8fr 1.2fr;

    gap: 80px;

    align-items: center;

}


.about-text p {

    color: var(--muted);

    line-height: 1.9;

    margin-bottom: 20px;

}


.text-link {

    color: var(--blue-light);

    font-weight: 600;

}


.about-cards {

    display: grid;

    grid-template-columns: repeat(3,1fr);

    gap: 15px;

}


.feature-card {

    padding: 30px;

    min-height: 230px;

    background: var(--card);

    border: 1px solid var(--border);

    transition: 0.4s;

}


.feature-card:hover {

    transform: translateY(-10px);

    border-color: var(--blue);

}


.feature-card span {

    color: var(--blue);

    font-family: 'Orbitron';

}


.feature-card h3 {

    margin: 50px 0 15px;

}


.feature-card p {

    color: var(--muted);

    font-size: 0.8rem;

    line-height: 1.7;

}


/* =====================================
   PROGRAMS
===================================== */

.program-grid {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 20px;

}


.program-card {

    padding: 40px;

    background: var(--card);

    border: 1px solid var(--border);

    transition: 0.4s;

    position: relative;

    overflow: hidden;

}


.program-card::before {

    content: '';

    position: absolute;

    width: 150px;
    height: 150px;

    background: var(--blue);

    filter: blur(80px);

    opacity: 0;

    right: -50px;
    top: -50px;

    transition: 0.4s;

}


.program-card:hover {

    transform: translateY(-12px);

    border-color: var(--blue);

}


.program-card:hover::before {

    opacity: 0.25;

}


.program-card.featured {

    border-color: var(--blue);

}


.program-number {

    color: var(--blue);

    font-family: 'Orbitron';

}


.program-card h3 {

    font-family: 'Orbitron';

    margin-top: 40px;

}


.program-card > p {

    color: var(--blue-light);

    margin: 8px 0 25px;

}


.program-card ul {

    list-style: none;

}


.program-card li {

    color: var(--muted);

    padding: 8px 0;

    border-bottom: 1px solid var(--border);

}


.program-card a {

    display: inline-block;

    margin-top: 25px;

    color: white;

    font-size: 0.8rem;

}


/* =====================================
   TESTIMONIALS
===================================== */

.testimonial-grid {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 20px;

}


.testimonial {

    padding: 35px;

    background: var(--card);

    border: 1px solid var(--border);

}


.stars {

    color: #ffd84d;

    margin-bottom: 20px;

}


.testimonial p {

    color: var(--muted);

    line-height: 1.8;

}


.testimonial h4 {

    margin-top: 25px;

}


.testimonial span {

    color: var(--blue-light);

    font-size: 0.75rem;

}


/* =====================================
   GAME
===================================== */

.game-section {

    padding: 110px 8%;

    background:

        radial-gradient(
            circle at center,
            rgba(22,140,255,0.12),
            transparent 50%
        );

}


.game-section .section-heading {

    text-align: center;

}


.game-section .section-heading span {

    color: var(--muted);

}


.football-game {

    max-width: 800px;

    min-height: 480px;

    margin: auto;

    position: relative;

    overflow: hidden;

    border: 1px solid var(--border);

    background:

        linear-gradient(
            180deg,
            #0d4f28,
            #06321a
        );

    border-radius: 20px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: flex-end;

    padding-bottom: 40px;

}


.scoreboard {

    position: absolute;

    top: 20px;

    left: 20px;

    background: rgba(0,0,0,0.6);

    padding: 12px 20px;

    border-radius: 8px;

    font-family: 'Orbitron';

}


.goal {

    position: absolute;

    top: 60px;

    width: 300px;

    height: 170px;

    border: 7px solid white;

    border-bottom: 10px solid white;

}


.goal-net {

    position: absolute;

    inset: 0;

    background-image:
        linear-gradient(
            45deg,
            rgba(255,255,255,0.12) 1px,
            transparent 1px
        );

    background-size: 20px 20px;

}


#goalkeeper {

    position: absolute;

    font-size: 3rem;

    bottom: 5px;

    left: 45%;

    transition: 0.4s;

}


.game-ball {

    position: absolute;

    bottom: 90px;

    font-size: 3rem;

    cursor: pointer;

    transition: 0.7s cubic-bezier(.2,.8,.2,1);

}


#shootButton {

    z-index: 5;

}


#gameMessage {

    margin-top: 15px;

    font-size: 0.8rem;

}


/* =====================================
   PAGE HERO
===================================== */

.page-hero {

    min-height: 65vh;

    display: flex;

    align-items: center;

    padding: 130px 8% 80px;

    background:

        radial-gradient(
            circle at 70% 30%,
            rgba(22,140,255,0.16),
            transparent 35%
        );

}


.page-hero-content {

    max-width: 800px;

}


.page-hero-content p:first-child {

    color: var(--blue-light);

    letter-spacing: 4px;

    font-size: 0.7rem;

    font-weight: 700;

    margin-bottom: 20px;

}


.page-hero h1 {

    font-family: 'Orbitron';

    font-size: clamp(3rem,7vw,6rem);

}


.page-hero h1 span {

    color: transparent;

    -webkit-text-stroke: 2px var(--blue);

}


.page-hero-content > p:last-child {

    color: var(--muted);

    max-width: 600px;

    margin-top: 25px;

    line-height: 1.8;

}


/* =====================================
   PHILOSOPHY
===================================== */

.philosophy-grid {

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    gap: 20px;

}


.philosophy-card {

    padding: 35px;

    background: var(--card);

    border: 1px solid var(--border);

    transition: 0.4s;

}


.philosophy-card:hover {

    transform: translateY(-10px);

    border-color: var(--blue);

}


.philosophy-card > span {

    font-size: 2rem;

}


.philosophy-card h3 {

    margin: 30px 0 12px;

}


.philosophy-card p {

    color: var(--muted);

    line-height: 1.7;

    font-size: 0.85rem;

}


/* =====================================
   COACHES
===================================== */

.coach-grid {

    display: grid;

    grid-template-columns:
        repeat(3,1fr);

    gap: 25px;

}


.coach-card {

    text-align: center;

    padding: 40px;

    background: var(--card);

    border: 1px solid var(--border);

}


.coach-avatar {

    width: 130px;
    height: 130px;

    margin: auto;

    border-radius: 50%;

    display: grid;

    place-items: center;

    font-size: 4rem;

    background:
        linear-gradient(
            145deg,
            #182331,
            #07111c
        );

    border: 2px solid var(--blue);

}


.coach-card h3 {

    margin-top: 25px;

}


.coach-card p {

    color: var(--blue-light);

}


.coach-card span {

    display: block;

    color: var(--muted);

    margin-top: 10px;

    font-size: 0.75rem;

}


/* =====================================
   TIMELINE
===================================== */

.timeline {

    max-width: 900px;

    margin: auto;

}


.timeline-item {

    display: grid;

    grid-template-columns: 150px 1fr;

    gap: 30px;

    padding: 35px 0;

    border-bottom: 1px solid var(--border);

}


.timeline-year {

    font-family: 'Orbitron';

    color: var(--blue);

    font-size: 1.4rem;

}


.timeline-item p {

    color: var(--muted);

    margin-top: 10px;

    line-height: 1.7;

}


/* =====================================
   ACHIEVEMENTS
===================================== */

.achievement-stats {

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    gap: 20px;

}


.achievement-stat {

    text-align: center;

    padding: 40px;

    border: 1px solid var(--border);

    background: var(--card);

}


.achievement-stat strong {

    display: block;

    font-family: 'Orbitron';

    font-size: 3rem;

    color: var(--blue);

}


.achievement-stat span {

    color: var(--muted);

    font-size: 0.8rem;

}


.medal-grid {

    display: grid;

    grid-template-columns:
        repeat(4,1fr);

    gap: 20px;

}


.medal-card {

    padding: 40px 25px;

    text-align: center;

    background: var(--card);

    border: 1px solid var(--border);

    transition: 0.4s;

}


.medal-card:hover {

    transform: translateY(-12px);

    border-color: var(--blue);

}


.medal-icon {

    font-size: 4rem;

    margin-bottom: 20px;

}


.medal-card p {

    color: var(--blue-light);

    font-size: 0.7rem;

    letter-spacing: 2px;

}


.medal-card h3 {

    margin: 15px 0;

}


.medal-card strong {

    display: block;

    font-family: 'Orbitron';

    font-size: 1.5rem;

}


.medal-card span {

    color: var(--muted);

    font-size: 0.8rem;

}


.milestone-list {

    max-width: 900px;

    margin: auto;

}


.milestone {

    display: flex;

    gap: 30px;

    padding: 25px 0;

    border-bottom: 1px solid var(--border);

}


.milestone > span {

    color: var(--blue);

    font-family: 'Orbitron';

}


.milestone p {

    color: var(--muted);

    margin-top: 8px;

}


/* =====================================
   APPOINTMENT
===================================== */

.appointment-wrapper {

    max-width: 1100px;

    margin: auto;

    display: grid;

    grid-template-columns:
        0.9fr 1.1fr;

    gap: 70px;

    align-items: center;

}


.appointment-info > p:first-child {

    color: var(--blue-light);

    letter-spacing: 4px;

    font-size: 0.7rem;

}


.appointment-info h2 {

    font-family: 'Orbitron';

    font-size: clamp(2.2rem,5vw,4.5rem);

    margin: 20px 0;

}


.appointment-info h2 span {

    color: var(--blue);

}


.appointment-info > p {

    color: var(--muted);

    line-height: 1.8;

}


.appointment-benefits {

    margin-top: 35px;

}


.appointment-benefits div {

    padding: 15px 0;

    border-bottom: 1px solid var(--border);

}


.appointment-benefits span {

    margin-right: 15px;

}


.appointment-form,
.contact-form {

    padding: 40px;

    background: var(--card);

    border: 1px solid var(--border);

}


.appointment-form h3 {

    font-family: 'Orbitron';

    font-size: 1.5rem;

    margin-bottom: 30px;

}


.input-row {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 15px;

}


.input-group {

    margin-bottom: 20px;

}


.input-group label {

    display: block;

    font-size: 0.75rem;

    color: #c2ccd7;

    margin-bottom: 8px;

}


.input-group input,
.input-group select,
.input-group textarea {

    width: 100%;

    padding: 14px;

    border: 1px solid var(--border);

    background: #080c12;

    color: white;

    outline: none;

    border-radius: 5px;

    font-family: inherit;

}


.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {

    border-color: var(--blue);

}


#appointmentMessage,
#contactMessage {

    margin-top: 20px;

    color: var(--blue-light);

    font-size: 0.8rem;

}


/* =====================================
   CONTACT
===================================== */

.contact-grid {

    max-width: 1100px;

    margin: auto;

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 70px;

}


.contact-info > p:first-child {

    color: var(--blue-light);

    letter-spacing: 4px;

    font-size: 0.7rem;

}


.contact-info h2 {

    font-family: 'Orbitron';

    font-size: 4rem;

    margin: 20px 0 50px;

}


.contact-info h2 span {

    color: var(--blue);

}


.contact-item {

    display: flex;

    gap: 20px;

    margin-bottom: 30px;

}


.contact-item > span {

    font-size: 1.5rem;

}


.contact-item p {

    color: var(--muted);

    font-size: 0.85rem;

    line-height: 1.7;

}


/* =====================================
   CTA
===================================== */

.cta-section {

    padding: 140px 8%;

    text-align: center;

    background:

        radial-gradient(
            circle,
            rgba(22,140,255,0.15),
            transparent 55%
        );

}


.cta-content p {

    color: var(--blue-light);

    letter-spacing: 4px;

    font-size: 0.7rem;

}


.cta-content h2 {

    font-family: 'Orbitron';

    font-size: clamp(3rem,7vw,6rem);

    margin: 20px 0 40px;

}


.cta-content h2 span {

    display: block;

    color: transparent;

    -webkit-text-stroke: 2px var(--blue);

}


/* =====================================
   FOOTER
===================================== */

footer {

    padding: 70px 8% 30px;

    text-align: center;

    border-top: 1px solid var(--border);

}


.footer-logo {

    font-family: 'Orbitron';

    font-size: 1.5rem;

    font-weight: 900;

}


.footer-logo span {

    display: block;

    color: var(--muted);

    font-family: 'Poppins';

    font-size: 0.55rem;

    letter-spacing: 3px;

}


footer > p {

    color: var(--muted);

    margin: 15px 0 30px;

}


.footer-links {

    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 25px;

}


.footer-links a {

    color: var(--muted);

    font-size: 0.8rem;

}


.footer-links a:hover {

    color: var(--blue);

}


.copyright {

    color: #566171;

    font-size: 0.7rem;

    margin-top: 40px;

}


/* =====================================
   SCROLL ANIMATION
===================================== */

.reveal {

    opacity: 0;

    transform: translateY(40px);

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;

}


.reveal.show {

    opacity: 1;

    transform: translateY(0);

}


/* =====================================
   RESPONSIVE
===================================== */

@media(max-width: 1000px) {

    .about-grid,
    .appointment-wrapper,
    .contact-grid {

        grid-template-columns: 1fr;

    }

    .about-cards {

        grid-template-columns:
            repeat(3,1fr);

    }

    .philosophy-grid,
    .medal-grid {

        grid-template-columns:
            repeat(2,1fr);

    }

}


@media(max-width: 800px) {

    .menu-toggle {

        display: block;

    }

    .navbar nav {

        position: absolute;

        top: 85px;

        left: 0;

        width: 100%;

        display: none;

        flex-direction: column;

        padding: 30px;

        background: #070a10;

        border-bottom: 1px solid var(--border);

    }

    .navbar nav.open {

        display: flex;

    }

    .program-grid,
    .testimonial-grid,
    .coach-grid,
    .achievement-stats {

        grid-template-columns: 1fr 1fr;

    }

}


@media(max-width:600px) {

    .section {

        padding: 80px 6%;

    }

    .navbar {

        padding: 0 6%;

    }

    .hero {

        padding-left: 6%;

        padding-right: 6%;

    }

    .hero h1 {

        letter-spacing: -2px;

    }

    .hero-stats {

        gap: 25px;

    }

    .hero-stats strong {

        font-size: 1.4rem;

    }

    .about-cards,
    .program-grid,
    .testimonial-grid,
    .philosophy-grid,
    .coach-grid,
    .achievement-stats,
    .medal-grid {

        grid-template-columns: 1fr;

    }

    .timeline-item {

        grid-template-columns: 1fr;

        gap: 10px;

    }

    .input-row {

        grid-template-columns: 1fr;

    }

    .appointment-form,
    .contact-form {

        padding: 25px;

    }

    .contact-info h2 {

        font-size: 2.8rem;

    }

    .football-game {

        min-height: 420px;

    }

}
/* =========================
   APPOINTMENT REPORT
========================= */

.appointment-report {
    display: none;

    margin-top: 35px;

    padding: 35px;

    background:
        linear-gradient(145deg, #0d151a, #070a0d);

    border: 1px solid rgba(55, 231, 255, .4);

    position: relative;

    overflow: hidden;
}

.appointment-report.show {
    display: block;

    animation: reportAppear .6s ease;
}

@keyframes reportAppear {

    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}

.report-header {
    display: flex;

    justify-content: space-between;

    align-items: center;

    border-bottom: 1px solid #253139;

    padding-bottom: 20px;
}

.report-header span {
    color: #37e7ff;

    font-family: "Orbitron", sans-serif;

    font-size: 11px;

    letter-spacing: 3px;
}

.report-header h3 {
    font-family: "Orbitron", sans-serif;

    margin-top: 8px;

    font-size: 22px;
}

.report-check {
    width: 45px;
    height: 45px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: rgba(55, 231, 255, .1);

    border: 1px solid #37e7ff;

    color: #37e7ff;

    font-size: 22px;
}

.report-status {
    display: inline-block;

    margin: 25px 0;

    padding: 8px 14px;

    border: 1px solid rgba(55, 231, 255, .3);

    color: #37e7ff;

    font-size: 9px;

    letter-spacing: 2px;
}

.report-details {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 18px;

    padding: 20px 0;
}

.report-details div {
    padding: 15px;

    background: rgba(255,255,255,.025);

    border: 1px solid #192329;
}

.report-details small,
.appointment-id small {
    display: block;

    color: #65727a;

    font-size: 8px;

    letter-spacing: 2px;

    margin-bottom: 7px;
}

.report-details strong {
    font-size: 13px;

    color: white;
}

.appointment-id {
    margin-top: 15px;

    padding: 18px;

    background: #05080a;

    border: 1px dashed #34444c;

    text-align: center;
}

.appointment-id strong {
    display: block;

    color: #37e7ff;

    font-family: "Orbitron", sans-serif;

    font-size: 20px;

    letter-spacing: 3px;
}

.barcode-container {
    background: white;

    margin-top: 25px;

    padding: 20px;

    text-align: center;
}

.barcode-container svg {
    max-width: 100%;

    height: 90px;
}

.barcode-container p {
    color: #222;

    font-size: 10px;

    margin-top: 8px;
}

.report-actions {
    display: flex;

    gap: 12px;

    margin-top: 20px;
}

.report-actions button {
    flex: 1;
}


/* PRINT VERSION */

@media print {

    body * {
        visibility: hidden;
    }

    .appointment-report,
    .appointment-report * {
        visibility: visible;
    }

    .appointment-report {
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;

        display: block;

        border: none;
    }

    .report-actions {
        display: none;
    }

}


/* MOBILE */

@media(max-width: 600px) {

    .report-details {
        grid-template-columns: 1fr;
    }

    .report-actions {
        flex-direction: column;
    }

}
