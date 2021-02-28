/**
 * Main script
 */
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const GameH = new GameHandler();
const GameObjects = [];
let controller = new Controller();
controller.handle();
ctx.fillStyle = 'green';
ctx.fillRect(0,0, GameHandler.GRID_WIDTH, GameHandler.GRID_HEIGHT);
let sn = new Snake(0,0,10,10,ctx);
let fruit = new Fruit(ctx,10,10);
fruit.appear();
GameObjects.push(sn);
GameObjects.push(fruit);
sn.drawSnake();
sn.printScore();
GameH.update(GameObjects,controller);