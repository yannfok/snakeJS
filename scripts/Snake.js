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

    drawSnake() {

        this.canvas.fillStyle = "green";
        this.canvas.fillRect(0, 0, GameHandler.GRID_WIDTH, GameHandler.GRID_HEIGHT);
        this.canvas.fillStyle = "red";
        this.canvas.fillRect(this.x, this.y, this.w, this.h);
        for (let i = 0; i < this.queue.length; i++)
            this.canvas.fillRect(this.queue[i].x,this.queue[i].y,this.queue[i].w,this.queue[i].h);

    }

    moveRight() {

        this.follow();
        this.x += Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

    moveLeft() {

        this.follow();
        this.x -= Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

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

    moveUp() {

        this.follow();
        this.y -= Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

    moveDown() {

        this.follow();
        this.y += Snake.VELOCITY;
        this.self = this.selfCollide();
        this.drawSnake();

    }

    collide() {

        return this.x < 0 || this.x > GameHandler.GRID_WIDTH - GameHandler.GRID_SIZE || this.y < 0 || this.y > GameHandler.GRID_HEIGHT - GameHandler.GRID_SIZE;

    }

    collideFruit(fruit) {

        return this.x === fruit.x && this.y === fruit.y;

    }

    get last()
    {

        if(this.queue.length!==0) return this.queue[this.queue.length-1];
        else return this;

    }

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

    printScore()
    {

        let p = document.querySelector("p");
        p.innerHTML = `Votre score  est ${this.score}`;

    }

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

