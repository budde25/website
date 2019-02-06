var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var scl = 20;

class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    generate(length, tailx, taily) {
        this.x = Math.floor(Math.random() * (canvas.width / scl)) * scl;
        this.y = Math.floor(Math.random() * (canvas.height / scl)) * scl;
        for (var i = 0; i < length; i++) {
            if (this.x == tailx[i] && this.y == taily[i]) {
                this.generate();
            }
        }
        this.draw();
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 20, 20);
    }

    clear() {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}