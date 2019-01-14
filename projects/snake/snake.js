var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var scl = 20;

class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.tailLength = 0;
        this.tailx = [];
        this.taily = [];
        this.dir = "right";
    }

    update() {

        var i;
        if (this.tailLength > 0) {
            for (i = 0; i < this.tailLength - 1; i++) {
                this.tailx[i] = this.tailx[i + 1];
                this.taily[i] = this.taily[i + 1];
            }
            this.tailx[this.tailLength - 1] = this.x;
            this.taily[this.tailLength - 1] = this.y;
        }


        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        if (this.x < 0) {
            this.x = canvas.width - scl;
        }

        if (this.x > canvas.width -scl) {
            this.x = 0;
        }

        if (this.y < 0) {
            this.y = canvas.height - scl;
        }

        if (this.y > canvas.height -scl) {
            this.y = 0;
        }

    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, 20, 20);

       var i;
       for (i = 0; i < this.tailLength; i++) {
            ctx.fillRect(this.tailx[i], this.taily[i], 20, 20);
       }
    }

    clear() {
        ctx.fillStyle = "black";

        if (this.tailLength > 0) {
            ctx.fillRect(this.tailx[0], this.taily[0], 20, 20);
        } else {
            ctx.fillRect(this.x, this.y, 20, 20);
        }
    }

    clearAll() {
        console.log('clear');
        ctx.fillStyle = "black";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    direction(x, y) {
        if (x === 1 && y === 0) {
            this.xspeed = 1;
            this.yspeed = 0;
        } else if (x === -1 && y === 0) {
            this.xspeed = -1;
            this.yspeed = 0;
        } else if (x === 0 && y === 1) {
            this.xspeed = 0;
            this.yspeed = 1;
        } else if (x === 0 && y === -1) {
            this.xspeed = 0;
            this.yspeed = -1;
        }
    }
    
    tail() {
        
    }
}