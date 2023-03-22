var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;
var stopwatchOn = false;
var stopwatchPaused = false;

var interval;

function start() {
    if (stopwatchOn) return;
    stopwatchOn = true;

    watch();
    interval = setInterval(watch, 10);
}

function pause() {
    if (!stopwatchOn) return;

    stopwatchPaused = !stopwatchPaused;

    let pauseButton = document.getElementById('pause');
    if (stopwatchPaused) {
        clearInterval(interval);
        pauseButton.innerText = 'Despausar';
    } 
    else {
        interval = setInterval(watch, 10);
        pauseButton.innerText = 'Pausar';
    }
}

function stop() {
    stopwatchOn = false;
    stopwatchPaused = false;
    clearInterval(interval);

    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;

    let stopwatch = document.getElementById('watch');
    stopwatch.innerHTML = `00:00:00<span id="milisec">:00</span>`;
    
    let pauseButton = document.getElementById('pause');
    pauseButton.innerText = 'Pausar';
}

function watch() {
    milisec++
    //100milisec == +1s
    if (milisec == 100) {
        milisec = 0;
        sec++;
        //60s = +1min
        if (sec == 60) {
            sec = 0;
            min++;
            //60min = +1h
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }

    let stopwatch = document.getElementById('watch');
    stopwatch.innerHTML = twoDigits(hour) +':'+ twoDigits(min) +':'+ twoDigits(sec) +`<span id="milisec">:${twoDigits(milisec)}</span>`;
}

function twoDigits(digit) {
    if (digit < 10) return '0' + digit;
    else return digit;
}