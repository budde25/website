var snake = new Snake();
var fruit = new Fruit();
snake.draw();
fruit.generate();

setInterval(clock, 100);

function clock() {
    snake.clear();

    if (snake.x === fruit.x && snake.y === fruit.y) {
        fruit.generate(snake.tailLength, snake.tailx, snake.taily);
        snake.tailLength++;
    }

    if (snake.tailLength > 1) {
        var i;
        for (i = 0; i < snake.tailLength; i++) {
            if (snake.x === snake.tailx[i] && snake.y === snake.taily[i]) {
                console.log('Game Over');
                snake.clearAll();
                snake.tailLength = 0;
                snake.tailx = [];
                snake.taily = [];
                fruit.draw();
            }
        }
    }

    snake.update();
    snake.draw();
}

document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:
            //console.log('Left key pressed');
            if (snake.dir != "right") {
                snake.direction(-1,0);
                snake.dir = "left";
            }
          break;
       case 38:
            //console.log('Up key pressed');
            if (snake.dir != "down") {
                snake.direction(0,-1);
                snake.dir = "up";
            }
          break;
       case 39:
            //console.log('Right key pressed');
            if (snake.dir != "left") {
                snake.direction(1,0);
                snake.dir = "right";
            }
          break;
       case 40:
            //console.log('Down key pressed');
            if (snake.dir != "up") {
                snake.direction(0,1);
                snake.dir = "down";
            }
          break;
    }
};