class Stopwatch {
    constructor(minutesEl, secondsEl, millisecondsEl, startEl, pauseEl, stopEl) {
        this.minutes = 0;
        this.seconds = 0;
        this.counting = false;

        this.minutesEl = minutesEl;
        this.secondsEl = secondsEl;
        this.millisecondsEl = millisecondsEl;

        this.minutesEl.innerHTML = "00" + ":";
        this.secondsEl.innerHTML = "00" + ":";
        this.millisecondsEl.innerHTML = "000";


        this.minutesEl.style = "display: inline; font-size: 6em; text-align: center";
        this.secondsEl.style = "display: inline; font-size: 6em; text-align: center";
        this.millisecondsEl.style = "display: inline; font-size: 6em; text-align: center";

        this.prevTime, this.stopwatchInterval, this.elapsedTime = 0;

        startEl.addEventListener('click', this.startTimer.bind(this));
        pauseEl.addEventListener('click', this.pauseTimer.bind(this));
        stopEl.addEventListener('click', this.stopTimer.bind(this));
    }

    updateTime() {
        this.tempTime = this.elapsedTime;
        this.milliseconds = this.tempTime % 1000;
        this.tempTime = Math.floor(this.tempTime / 1000);
        this.seconds = this.tempTime % 60;
        this.tempTime = Math.floor(this.tempTime / 60);
        this.minutes = this.tempTime % 60;
        this.tempTime = Math.floor(this.tempTime / 60);

        this.time = this.minutes + " : " + this.seconds + ":" + this.milliseconds;

        const padding = val => (val > 9 ? val : "0" + val);

        this.minutesEl.innerHTML = padding(this.minutes) + ":";
        this.secondsEl.innerHTML = padding(this.seconds) + ":";
        this.millisecondsEl.innerHTML = padding(padding(this.milliseconds));
    }


    startTimer() {
        if (!this.stopwatchInterval) {
            this.stopwatchInterval = setInterval(() => {
                if (!this.prevTime) {
                    this.prevTime = Date.now();
                }

                this.elapsedTime += Date.now() - this.prevTime;
                this.prevTime = Date.now();

                this.updateTime();
            }, 50);
        }

    }

    pauseTimer() {
        if (this.stopwatchInterval) {
            clearInterval(this.stopwatchInterval);
            this.stopwatchInterval = null;
        }
        this.prevTime = null;
    }


    stopTimer() {
        this.elapsedTime = 0;
        this.updateTime();
        clearInterval(this.stopwatchInterval);
        this.prevTime = null;
        this.pauseTimer();
    }

}

const timer = document.getElementById('timer1');
const minutes = document.getElementById('minutes1');
const seconds = document.getElementById('seconds1');
const milliseconds = document.getElementById('milliseconds1');

const startButton = document.getElementById('start1');
const pauseButton = document.getElementById('pause1');
const resetButton = document.getElementById('stop1');
const superTimer = new Stopwatch(
    minutes,
    seconds,
    milliseconds,
    startButton,
    pauseButton,
    resetButton
);


const superTimer2 = new Stopwatch(
    document.getElementById('minutes2'),
    document.getElementById('seconds2'),
    document.getElementById('milliseconds2'),
    document.getElementById('start2'),
    document.getElementById('pause2'),
    document.getElementById('stop2')
);