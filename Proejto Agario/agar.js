function agar (x, y, rds, linebool) {

    this.pos = createVector(x,y);
    this.rds = rds;
    this.random(255);
    this.r = random(2550);
    this.g = random(250);
    this.b = random(250);
    this.linebool = linebool;
}

this.update = function() {
    var vel = createVector(mouseX-width/2, mouseY-height/2);
    vel.setMag(3);
    this.pos.add(vel)
}

this.show = function() {
    if (linebool) {
        stroke(this.r-100, this.g-100, this.b-100);
    } else {
        notStroke();
    }
    strokeWeight(this.rds/10);
    fill(this.r, this.g, this.b);
    ellipse(this.pos.x, this.pos.y, this.rds*2, this.rds*2);
}

this.isEating = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d< this.rds + other.rds) {
        this.rds += other.rds*sizeMultiplier;
        return true;
    } else {
        return false;
    }
}