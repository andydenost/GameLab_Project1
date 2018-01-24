class Ball {

    constructor(x, y, vx, vy, ax, ay, m, size, color) { //position, velocity, accelerated velocity, mass, size, color
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.ax = ax;
        this.ay = ay;
        this.m = m;
        this.size = size;
        this.color = color;
        this.speedLose = 1;
    }

    move() {
        this.vx += this.ax; // speed change
        this.vy += this.ay;
        this.x += this.vx; //position change
        this.y += this.vy;
        if (this.x > width - this.size / 2 || this.x < this.size / 2) {
            if (this.x > width - this.size / 2) {
                this.x = width - this.size / 2
            }
            if (this.x < this.size / 2) {
                this.x = this.size / 2
            }
            this.vx = -this.vx;
        }
        if (this.y > height - this.size / 2 || this.y < this.size / 2) {
            if (this.y > height - this.size / 2) {
                this.y = height - this.size / 2
                this.y += this.speedLose;
            }
            if (this.y < this.size / 2) {
                this.y = this.size / 2
                this.y -= this.speedLose;
            }
            this.vy = -this.vy;
        }
    }

    /* collision(ux1, uy1, x1, y1, m1) {
         this.ux1 = ux1;
         this.uy1 = uy1;
         this.m1 = m1;
         this.x1 = x1;
         this.y1 = y1;
         this.ux = this.vx;
         this.uy = this.vy;
         //this.u = sqrt(sq(this.vx) + sq(this.vy));
         this.vx = (this.ux * (this.m - this.m1) + (2 * this.m1 * this.ux1)) / (this.m + this.m1);
         this.vy = (this.uy * (this.m - this.m1) + (2 * this.m1 * this.uy1)) / (this.m + this.m1);
         console.log("ball " + this.vx + " " + this.vy);
     }*/
}
