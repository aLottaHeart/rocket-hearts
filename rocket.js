class Rocket {

    constructor() {
        this.createRocket();
    }

    calculate() {
        if (this.movedWay < displayHeight) {
            this.moveRocket();
            this.drawRocket();
        }
        else {
            this.explode();
        }
    }

    moveRocket() {
        this.y -= this.speed;
        this.movedWay += this.speed;
    }

    drawRocket() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }

    explode() {

        if (this.explosionTime < 70) {
            fill(this.r, this.g, this.b, 255-255*this.explosionTime/50+150);
            noStroke();
            for (let i = 0; i < this.particleCount; i++) {
                let t = TWO_PI*i/this.particleCount;
                let xOffset = 16*pow(sin(t), 3);
                let yOffset = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
                let x = this.x + xOffset*this.explosionTime*0.1 + random(2);
                let y = this.y - yOffset*this.explosionTime*0.1 + random(2);
                ellipse(x, y, this.size, this.size);
            }
            this.explosionTime ++;
        } 
        else {
            this.createRocket();
        }
    }

    drawExplosion() {
    }

    createRocket() {
        this.x = random(displayWidth);
        this.y = displayHeight+random(displayHeight*0.2, displayWidth*0.3);
        this.size = 10;
        this.speed = random(7,12);
        this.movedWay = 0;
        this.explosionTime = 0;
        this.particleCount = 40;
        this.r = random(100,255);
        this.g = random(100,255);
        this.b = random(100,255); 
    }
}