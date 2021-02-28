/**
 * Handle the life cycle of the game and print the state of the game
 */

class GameHandler{

    static GRID_SIZE = 10;
    static GRID_WIDTH = 300;
    static GRID_HEIGHT = 300;
    static UPDATE_TIME__MS = 60;

    constructor() {

        this.updatefct = null;

    }

    /**
     * Update each UPDATE_TIME__MS seconds the life cycle of the game, change the constant UPDATE_TIME__MS to accelerate the game
     * @param GameObjects
     * @param controller
     */

    update(GameObjects,controller)
    {

        this.updatefct = setInterval(()=>{
            let snake = GameObjects[0];
            let fruit = GameObjects[1];
            if(!snake.collide() && !snake.self)
            {
                switch (controller.key)
                {

                    case Controller.KEY_DOWN:
                        snake.moveDown();
                        break;
                    case Controller.KEY_LEFT:
                        snake.moveLeft();
                        break;
                    case Controller.KEY_RIGHT:
                        snake.moveRight();
                        break;
                    case Controller.KEY_UP:
                        snake.moveUp();
                        break;
                    default:
                        break;
                }
                if(snake.collideFruit(fruit))
                {
                    fruit.changePos();
                    switch (controller.key)
                    {
                        case Controller.KEY_DOWN:
                            snake.growDown();
                            break;
                        case Controller.KEY_RIGHT:
                            snake.growRight();
                            break;
                        case Controller.KEY_LEFT:
                            snake.growLeft();
                            break;
                        case Controller.KEY_UP:
                            snake.growUp();
                            break;
                        default:
                            break;
                    }
                    sn.score++;
                    sn.printScore();
                }
            }
            else{
                clearInterval(this.updatefct);
                alert("Vous avez perdu !");
            }
            fruit.appear();
        },GameHandler.UPDATE_TIME__MS);

    }

}