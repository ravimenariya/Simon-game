let main = document.querySelectorAll(".main .box");
let userOutput = document.getElementById("userOutput");
let startButton = document.getElementById("startButton");
let check = document.getElementById("userInput");

var audio = new Audio('mixkit-quick-win-video-game-notification-269.wav');
let str = "";
let c = 1;

function generate() {
    let rn = Math.floor(Math.random() * 4);
    main[rn].classList.add("glow");
    str += rn + 1;
    setTimeout(() => {
        main[rn].classList.remove("glow");
        audio.play();
    }, 250);
}

function checkFunc() {
    let userInput = document.getElementById("userInput");
    let s = userInput.value;

    if (s == str) {
        userOutput.textContent = "Correct sequence!";
        setTimeout(
            () => {
                userOutput.textContent = "Enter new Sequence";
            },
            700
        )
        userInput.value = null;
        c++;
        return 1;
    } else {
        userOutput.innerHTML = `Wrong sequence! <br> Your Score : ${c} `;
        userInput.value = null;
        c = 1;
        return 0;
    }
}

startButton.addEventListener("click", function () {
    userOutput.innerText = "Enter Sequence"
    startButton.innerText = `Level : ${c}`;
    startButton.style.backgroundColor = "#ff6347";
    setTimeout(() => {
        generate();
    }, 500);
});

check.addEventListener("keyup", function (event) {
    if (event.code === 'Enter') {
        let f = checkFunc();
        if (f == 1) {
            setTimeout(() => {
                startButton.innerText = `Level : ${c}`;
                startButton.style.backgroundColor = "#ff6347";
                setTimeout(() => {
                    generate();
                }, 300);
            }, 250);
        }
        else {
            startButton.innerText = `Restart`;
            startButton.style.backgroundColor = "#13aa52";
            str = "";
        }
    }
});

