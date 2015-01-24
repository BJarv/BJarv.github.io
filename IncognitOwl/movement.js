/**
 * @author Brandon Jarvinen
 */
clearColor = [1, 1, 1, 1];
use2D = true;
initGame("canvas");

var player = new Sprite();
player.image = Textures.load("http://farm8.staticflickr.com/7297/12423082713_bb63071bc2_b.jpg");
player.width = 100;
player.height = 100;
player.x = 100;
player.y = 100;

player.frameWidth = 255;
player.frameHeight = 202;
player.frameCount = 4;
player.frameRate = 1;
player.moveRate = 15;

var cursor = new Sprite();
cursor.image = Textures.load("http://i.imgur.com/QmfNXwL.png");
cursor.width = 40;
cursor.height = 40;
cursor.x = 100;
cursor.y = 300;
cursor.moving = false;

gInput.addBool(87, "c_up");
gInput.addBool(83, "c_down");
gInput.addBool(65, "c_left");
gInput.addBool(68, "c_right");

cursor.update = function (d) {
    if (!this.moving) {
        if (gInput.c_up) {
            this.moving = true;
            this.y -= this.height;
            setTimeout(function() {cursor.moving = false;}, 50);
        } else if (gInput.c_down) {
            this.moving = true;
            this.y += this.height;
            setTimeout(function() {cursor.moving = false;}, 50);
        } else if (gInput.c_left) {
            this.moving = true;
            this.x -= this.width;
            setTimeout(function() {cursor.moving = false;},  50);
        } else if (gInput.c_right) {
            this.moving = true;
            this.x += this.width;
            setTimeout(function() {cursor.moving = false;}, 50);
        }
    }
}

//Add all of the animatios at once
//First supply an array of animations names
//Then supply an array of animation lengths
//This assumes that the animations are one after the other
player.addAnimations(["down", "right", "up", "left"], [1, 1, 1, 1]);

//You cxan also add a single animation like this
//the numbers are the first frame and the length of the animation
player.addAnimation("idle", 0, 1);

//Set the starting animation
player.animation = "down";

gInput.addBool(40, "down");
gInput.addBool(38, "up");
gInput.addBool(37, "left");
gInput.addBool(39, "right");
player.speed = 4;
player.update = function (d) {
    //If the character isn't moving, set the frameRate to 0
    //If the character had an idle animation we wouldn't need to do this
    this.frameRate = 0;
    var speed = this.speed * d;
    if (gInput.down) {
        this.animation = "down";
        this.y += speed;
        this.frameRate = this.moveRate;
    }
    if (gInput.up) {
        this.animation = "up";
        this.y -= speed;
        this.frameRate = this.moveRate;
    }
    if (gInput.left) {
        this.animation = "left";
        this.x -= speed;
        this.frameRate = this.moveRate;
    }
    if (gInput.right) {
        this.animation = "right";
        this.x += speed;
        //The right animation is weird on this sprite and appears to go in reverse when playing forward
        //so I reverse the player directio here
        this.frameRate = -this.moveRate;
    }

    //This just makes it so the position values are always whole numbers
    //which makes the pixel sprite look better
    //otherwise we get ugly pixel antialiasing
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
}

world.addChild(cursor);
world.addChild(player);