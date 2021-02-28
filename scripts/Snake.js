/**
 * Class who handle the snake
 */

class Snake extends GameObject {

    static VELOCITY = 10;

    constructor(x, y, w, h, canvas) {
        super(canvas);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.self = false;
        this.score = 1;
        this.queue = [];
    }

    /**
     * Draw the snake on the canvas
     */

    drawSnake() {

        this.canvas.fillStyle = "green";
        this.canvas.fillRect(0, 0, GameHandler.GRID_WIDTH, GameHandler.GRID_HEIGHT);
        this.canvas.fillStyle = "red";
        this.canvas.fillRect(this.x, this.y, this.w, this.h);
        for (let i = 0; i < this.queue.length; i++)
            this.canvas.fillRect(this.queue[i].x,this.queue[i].y,this.queue[i].w,this.queue[i].h);

    }

    /**
     * Handle the move to right
     */

    moveRight() {

        this.follow();
        this.x += Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

    /**
     * Handle the move to left
     */

    moveLeft() {

        this.follow();
        this.x -= Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

    /**
     * Handle the follow of the queue of the snake
     */

    follow()
    {

        for (let i = this.queue.length-1; i >= 0 ; i--) {
            if(i===0){
                this.queue[i].y = this.y;
                this.queue[i].x = this.x;
            }else{
                this.queue[i].y = this.queue[i-1].y;
                this.queue[i].x = this.queue[i-1].x;
            }
        }

    }

    /**
     * Handle the move to up
     */


    moveUp() {

        this.follow();
        this.y -= Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }


    /**
     * Handle the move to down
     */

    moveDown() {

        this.follow();
        this.y += Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

    /**
     * Know if the snake collide the border the canvas
     * @returns {boolean}
     */

    collide() {

        return this.x < 0 || this.x > GameHandler.GRID_WIDTH - GameHandler.GRID_SIZE || this.y < 0 || this.y > GameHandler.GRID_HEIGHT - GameHandler.GRID_SIZE;

    }

    /**
     * Know if the snake collide a fruit
     * @param fruit
     * @returns {boolean}
     */

    collideFruit(fruit) {

        return this.x === fruit.x && this.y === fruit.y;

    }

    /**
     * Returns the last square of the queue of the snake
     * @returns {Snake|*}
     */

    get last()
    {

        if(this.queue.length!==0) return this.queue[this.queue.length-1];
        else return this;

    }

    /**
     * Grow the queue of the snake in a direction
     */

    growLeft()
    {

        this.queue[this.queue.length] = new Snake(this.last.x-this.last.w,this.last.y,10,10,this.canvas);

    }

    growRight()
    {

        this.queue[this.queue.length] = new Snake(this.last.x+this.last.w,this.last.y,10,10,this.canvas);

    }

    growUp()
    {

        this.queue[this.queue.length] = new Snake(this.last.x,this.last.y-this.last.h,10,10,this.canvas);

    }

    growDown()
    {

        this.queue[this.queue.length] = new Snake(this.last.x,this.last.y+this.last.h,10,10,this.canvas);

    }

    /**
     * Print the current score on the screen
     */

    printScore()
    {

        let p = document.querySelector("p");
        p.innerHTML = `Votre score  est ${this.score}`;

    }

    /**
     * Know if the snake collide is own queue
     * @returns {boolean}
     */

    selfCollide()
    {
        for(let i = 0;i<this.queue.length;i++)
        {
            if(this.queue[i].x === this.x && this.queue[i].y === this.y)
                return true;
        }
        for (let i = 0; i < this.queue.length; i++) {
           for(let j = 0;j<this.queue.length;j++)
           {
               if(i===j)continue;
               if(this.queue[i].x === this.queue[j].x && this.queue[i].y === this.queue[j].y)
                   return true;
           }
        }
        return false;
    }

}

