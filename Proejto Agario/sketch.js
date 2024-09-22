var player;
var food = [];
var foodSize = 10;
var foodCount = 200;
var sizemultiplier = 0.05;
var mapSize = 2;

function setup() {
    createCanvas(1879, 931);
    player = new agar(width/2, height/2, 64, true);
    for (var i = 0; i <foodCount; i++) {
        var mapX = random(width*mapSize);
        var mapY = random(height*mapSize);
        food [i] = new agar(mapX, mapY, foodSize);

    }
}

function draw() {
    translate((width/2)-player.pos.x, (height/2)-player.pos.y);
    background(255);

    for (var i = food.length-1; i >= 0; i--) {
        food[i].show();
        if (player.isEating(food[i])) {
            food.splice (i, 1);
        }
    }
}

player.show();
player.update();