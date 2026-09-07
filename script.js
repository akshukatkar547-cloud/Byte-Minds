let currentPanel = 0;
let soundOn = true;

const panels = [

    {
        title: "THE STRANGE WATCH",
        emoji: "⌚",
        text: "Aarav is running late for college when he notices an old man dropping a strange silver watch.",
        dialogue: '"Don\'t wear it."',
        effect: "CLICK!",
        background: "#3a3a3a"
    },

    {
        title: "10 SECONDS",
        emoji: "⏱️",
        text: "A bus suddenly comes speeding toward Aarav. He closes his eyes... and everything stops.",
        dialogue: '"WHAT?!"',
        effect: "FREEZE!",
        timer: true,
        background: "#17202a"
    },

    {
        title: "THE RULE",
        emoji: "⚠️",
        text: "The watch can freeze time for exactly 10 seconds. But one strange rule appears.",
        dialogue: '"YOU MAY CHANGE ANYTHING... EXCEPT THE FUTURE."',
        effect: "WARNING!",
        background: "#3d2b1f"
    },

    {
        title: "THE FUN BEGINS",
        emoji: "😂",
        text: "Aarav starts using his new power for completely ridiculous things. Moving phones. Stealing his lunch back. Even changing his teacher's presentation.",
        dialogue: '"I LOVE HOMEWORK ❤️"',
        effect: "HAHA!",
        background: "#263238"
    },

    {
        title: "THE GIRL WHO CAN MOVE",
        emoji: "👧",
        text: "One afternoon, Aarav freezes time. But someone else is moving. A mysterious girl walks straight toward him.",
        dialogue: '"You\'re wearing it."',
        effect: "WHOOSH!",
        background: "#311b3b"
    },

    {
        title: "THE TRUTH",
        emoji: "🔮",
        text: "Mira reveals the truth. The watch doesn't stop time. It steals 10 seconds from the future and gives them to the present.",
        dialogue: '"Every second has a price."',
        effect: "REVEAL!",
        background: "#17202a"
    },

    {
        title: "THE COUNTDOWN",
        emoji: "💥",
        text: "The watch suddenly begins counting down. Someone is taking back every second Aarav stole.",
        dialogue: '"09:59... 09:58... 09:57..."',
        effect: "TICK! TICK!",
        timer: true,
        background: "#4a1717"
    },

    {
        title: "THE CHASE",
        emoji: "🏃",
        text: "A masked man appears. He can move during frozen time too. Aarav runs through a city where everything is completely frozen.",
        dialogue: '"Give me the watch."',
        effect: "RUN!",
        background: "#202020"
    },

    {
        title: "THE TWIST",
        emoji: "😱",
        text: "Aarav catches the masked man and removes his mask. His heart stops. The man is... Aarav. But much older.",
        dialogue: '"I came back because you haven\'t made the mistake yet."',
        effect: "SHOCK!",
        background: "#111111"
    },

    {
        title: "THE CHOICE",
        emoji: "⌚",
        text: "Millions of people are frozen. Aarav finally understands the cost of the watch. He has only two choices.",
        dialogue: '"KEEP THE WATCH... OR DESTROY IT."',
        effect: "CRACK!",
        background: "#000000"
    }

];

function startStory() {

    document.getElementById("home").style.display = "none";
    document.getElementById("story").style.display = "block";

    showPanel();

}

function showPanel() {

    const panel = panels[currentPanel];

    document.getElementById("panelNumber").textContent =
        String(currentPanel + 1).padStart(2, "0");

    document.getElementById("panelTitle").textContent =
        panel.title;

    document.getElementById("panelText").textContent =
        panel.text;

    document.getElementById("dialogue").textContent =
        panel.dialogue;

    document.getElementById("soundEffect").textContent =
        panel.effect;

    document.getElementById("emoji").textContent =
        panel.emoji;

    document.getElementById("scene").style.backgroundColor =
        panel.background;

    /* TIMER */

    const timer = document.getElementById("timer");

    if (panel.timer) {

        timer.classList.add("active");

        startTimer();

    } else {

        timer.classList.remove("active");

    }

    /* PROGRESS */

    const progress =
        ((currentPanel + 1) / panels.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

    /* BUTTONS */

    document.getElementById("prevBtn").disabled =
        currentPanel === 0;

    document.getElementById("nextBtn").textContent =
        currentPanel === panels.length - 1
            ? "FINISH ▶"
            : "NEXT ▶";

    /* ANIMATION */

    const scene = document.getElementById("scene");

    scene.style.transform = "scale(.96)";

    setTimeout(() => {

        scene.style.transform = "scale(1)";

    }, 100);

}

function nextPanel() {

    if (currentPanel < panels.length - 1) {

        currentPanel++;

        showPanel();

    } else {

        finishStory();

    }

}

function previousPanel() {

    if (currentPanel > 0) {

        currentPanel--;

        showPanel();

    }

}

function finishStory() {

    document.getElementById("story").style.display =
        "none";

    document.getElementById("endScreen").style.display =
        "flex";

}

function restartStory() {

    currentPanel = 0;

    document.getElementById("endScreen").style.display =
        "none";

    document.getElementById("story").style.display =
        "block";

    showPanel();

}

function toggleSound() {

    soundOn = !soundOn;

    const button =
        document.getElementById("soundBtn");

    button.textContent =
        soundOn ? "🔊 Sound" : "🔇 Muted";

}

/* COUNTDOWN */

let countdownInterval;

function startTimer() {

    clearInterval(countdownInterval);

    let seconds = 10;

    document.getElementById("time").textContent =
        seconds;

    countdownInterval = setInterval(() => {

        seconds--;

        document.getElementById("time").textContent =
            seconds;

        if (seconds <= 0) {

            clearInterval(countdownInterval);

        }

    }, 1000);

}
