var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var scl = 20;

class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    generate() {
        this.x = Math.floor(Math.random() * (canvas.width / scl)) * scl;
        this.y = Math.floor(Math.random() * (canvas.height /scl)) * scl;
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