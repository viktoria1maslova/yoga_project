class App {
    timer = {
        min_tens: document.getElementById('min_tens'),
        min: document.getElementById('min'),
        sec_tens: document.getElementById('sec_tens'),
        sec: document.getElementById('sec')
    };

    #interval

    submit (event) {
        event.preventDefault();
        
    }

    #clearTimer() {
        if (this.#interval) {
            clearInterval(this.#interval);
        }
        this.#setTimer ({
            min_tens:0,
            min: 0,
            sec_tens:0,
            sec: 0
        })
    }

    #startTimer(time) {
    
    }

    #setTimer({ min_tens, min, sec_tens, sec }) {
        this.timer.min_tens.innerText = min_tens;
        this.timer.min.innerText = min;
        this.timer.sec_tens.innerText = sec_tens;
        this.timer.sec.innerText = sec;
    }

}

const app = new App ();