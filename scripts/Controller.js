class Controller {

    static KEY_LEFT = 37;
    static KEY_UP = 38;
    static KEY_RIGHT = 39;
    static KEY_DOWN = 40;

    constructor() {

        this.key = 39;

    }

    handle()
    {

        window.addEventListener("keydown",ev => {
            if(ev.keyCode === Controller.KEY_LEFT || ev.keyCode === Controller.KEY_UP || ev.keyCode === Controller.KEY_RIGHT || ev.keyCode === Controller.KEY_DOWN)
            {
                if(ev.keyCode === Controller.KEY_LEFT && this.key !== Controller.KEY_RIGHT)
                    this.key = ev.keyCode;
                else if(ev.keyCode === Controller.KEY_RIGHT && this.key !== Controller.KEY_LEFT)
                    this.key = ev.keyCode;
                else if(ev.keyCode === Controller.KEY_UP && this.key !== Controller.KEY_DOWN)
                    this.key = ev.keyCode;
                else if(ev.keyCode === Controller.KEY_DOWN && this.key !== Controller.KEY_UP)
                    this.key = ev?.keyCode;
            }
        });

    }

}


