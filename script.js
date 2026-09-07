/* =========================================
   FRAME//BREAK
   Interactive JavaScript
========================================= */


/* =========================================
   START STORY
========================================= */

function startStory() {

    const story = document.getElementById("story");

    story.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   TALK TO CHARACTER
========================================= */

function talkToCharacter() {

    const response = document.getElementById("reader-response");

    response.textContent =
        "THE CHARACTER HEARD YOU. 👁";

    response.style.animation = "none";

    setTimeout(function () {

        response.style.animation = "glitch 0.5s";

    }, 50);

}


/* =========================================
   SCROLL REVEAL
   Panels become visible as the
   user scrolls.
========================================= */

const revealPanels = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


/* Observe every comic panel */

revealPanels.forEach(function(panel) {

    revealObserver.observe(panel);

});


/* =========================================
   FRAME BREAK
========================================= */

function breakFrame() {

    const panel = document.getElementById("break-panel");

    panel.classList.add("frame-breaking");

    panel.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    setTimeout(function() {

        panel.classList.remove("frame-breaking");

    }, 1800);

}


/* =========================================
   STORY ENDINGS
========================================= */

function chooseEnding(choice) {

    const ending = document.getElementById("ending");

    const endingTitle =
        document.getElementById("ending-title");

    const endingText =
        document.getElementById("ending-text");

    const endingArt =
        document.getElementById("ending-art");


    /* -------------------------
       ENDING 1
    ------------------------- */

    if (choice === "escape") {

        endingTitle.textContent =
            "FRAME BROKEN.";

        endingText.textContent =
            "You chose to break the frame. The character steps beyond the panel, leaving the comic world behind. But somewhere in the empty page, a new panel begins drawing itself...";

        endingArt.style.transform =
            "rotate(-8deg) scale(1.2)";

    }


    /* -------------------------
       ENDING 2
    ------------------------- */

    else {

        endingTitle.textContent =
            "THE STORY CONTINUES.";

        endingText.textContent =
            "You chose to stay. The panels close around you, but the character smiles. Maybe being inside the story isn't a prison after all. Maybe it is where the next chapter begins.";

        endingArt.style.transform =
            "rotate(8deg) scale(0.9)";

    }


    /* Show ending */

    ending.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   RESTART
========================================= */

function restartStory() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   RETURN TO COVER
========================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   SMALL PARALLAX EFFECT
========================================= */

window.addEventListener("scroll", function() {

    const cover = document.querySelector(".cover-content");

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        cover.style.transform =
            `translateY(${scrollPosition * 0.15}px)`;

    }

});
