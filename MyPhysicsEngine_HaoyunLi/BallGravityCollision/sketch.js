"use strict"

//let ballState = "moving";
let ball;
let force;
let state;

function setup() {
    state = "down";
    ball = [];
    createCanvas(600, 600);
    ball[0] = new Ball(width - 50, height / 2, -8, 0, 0, 0, 3, 50, color(127, 0, 0));
    ball[1] = new Ball(50, height / 2 - 20, 8, 0, 0, 0, 3, 50, color(127, 0, 0));
    ball[2] = new Ball(width - 50, height / 2 + 200, -5, 0, 0, 0, 5, 50, color(127, 0, 0));
    ball[3] = new Ball(50, height / 2 + 150, 5, 0, 0, 0, 5, 50, color(127, 0, 0));
    //gravity(0.2);
    force = new Force();
    for (let i = 0; i < ball.length; i++) {
        ball[i].ay = force.gravity(state);
    }

}

function draw() {
    background(127);
    for (let i = 0; i < ball.length; i++) {
        fill(ball[i].color);
        ellipse(ball[i].x, ball[i].y, ball[i].size, ball[i].size);
    }
    //for (let i = 0; i < ball.length; i++) {
    ball[0].move();
    ball[1].move();
    ball[2].move();
    ball[3].move();

    // }
    collisionDetect();
    text("click mouse to change gravity direction.", 30, 30);
}

function mouseClicked() {
    if (state == "down") {
        state = "up";
    } else {
        state = "down";
    }
    for (let i = 0; i < ball.length; i++) {
        ball[i].ay = force.gravity(state);
    }
}


function collisionDetect() {
    for (let i = 0; i < ball.length - 1; i++) {
        for (let j = i + 1; j < ball.length; j++) {
            let d = dist(ball[i].x, ball[i].y, ball[j].x, ball[j].y);
            if (d < (ball[1].size / 2) + (ball[2].size / 2)) {
                force.collide(ball[i], ball[j]);
            }
        }
    }
}
