var arr = [];
var num;
var numReturn = 0;
var disp;
var numId;
var dispId;
var booleanClick = true;
var win = 0;
var stoptime = true;
var hr = 0;
var min = 0;
var sec = 0;
var setupTime;
var lengthArr = 20;

var block = document.getElementById('block');

const timer = document.getElementById('stopwatch');

function div(nu, id) {
    return `<div class="square" onclick="cli(${id}, ${nu})"><span id="${id}" class="display">${nu}</span></div>`;
}

function newGame(num) {
    win = 0;
    stopTimer();
    resetTimer();
    startTimer();
    document.getElementsByClassName('hidden')[0].style.display = 'none';
    arr.length = 0;
    randomArray(num);
}

function randomArray(num) {
    lengthArr = num;
    for (let i = 0; i < lengthArr; i++) {
        let random = Math.floor(Math.random() * (lengthArr/2)) + 1;
        num = 0;
        for (let i = 0; i < arr.length; i++) {
            if (random == arr[i]) {
                num++;
            }
        }
        if (num < 2) {
            arr[i] = random;
        } else {
            i--;
        }
    }
    block.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        block.innerHTML += div(arr[i], i);
    }
}

function cli(id, numberClick) {
    if (booleanClick) {
        disp = document.getElementById(id);
        dispId = document.getElementById(numId);
        if (numReturn == 0) {
            disp.style.display = 'block';
            numReturn = numberClick;
        } else if (numReturn == numberClick && id != numId) {
            disp.style.display = 'block';
            numReturn = 0;
            win++;
            if (win == (lengthArr / 2)) {
                document.getElementsByClassName('hidden')[0].style.display = 'block';
                stopTimer();
                document.getElementById('win').innerText = ` ${min} min ${sec} sec!`
            }
        } else if (numReturn != numberClick && id != numId) {
            booleanClick = false;
            disp.style.display = 'block';
            numReturn = 0;
            setTimeout(function () {
                disp.style.display = 'none';
                dispId.style.display = 'none';
                booleanClick = true;
            }, 1000);
        }
        numId = id;
    }
}

// stopWatch


function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function resetTimer() {
    clearTimeout(setupTime);
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;

        setupTime = setTimeout("timerCycle()", 1000);
    }
}