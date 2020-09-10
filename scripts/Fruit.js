class Fruit extends GameObject{

    static COLORS = ["blue","orange","cyan","purple","pink"];

    constructor(canvas,w,h) {
        super(canvas);
        this.x = this.randomPositionX;
        this.y = this.randomPositionY;
        this.w = w;
        this.h = h;
    }

    changePos()
    {

        this.x = this.randomPositionX;
        this.y = this.randomPositionY;

    }

    get randomPositionX()
    {

        return Fruit.roundInt(Fruit.getRndInteger(0, GameHandler.GRID_WIDTH-10));

    }

    get randomPositionY()
    {

        return Fruit.roundInt(Fruit.getRndInteger(0,GameHandler.GRID_HEIGHT-10));

    }

    static roundInt(n)
    {

            let j = n/10;
            if(Math.ceil(j)-j<=0.5)
                return Math.ceil(j)*10;
            else
                return Math.floor(j)*10;


    }

    static getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    appear()
    {

        this.canvas.fillStyle = Fruit.COLORS[Fruit.getRndInteger(0,Fruit.COLORS.length-1)];
        this.canvas.fillRect(this.x,this.y,this.w,this.h);

    }

}