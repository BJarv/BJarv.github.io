function start4() {//////////////////////////////////////////////////////
	var bg = new Sprite();

	bg.width = 2380;
	bg.height = 1890;

	clearColor = [0, .5, .5, .5];
	var can = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	world.x = -70 * 10;
	world.y = -70 * 5.19;

	var u = 70;
	
	var gxv = 8;
	var gyv = 15;

	var auto = "auto4";  ///////////////////////////////////////////////////////////
	setCookie(auto, 0);
	setCookie("continue", 3);

	l90 = new Object();
	l90.reverse = false;
	l90.turn = false;
	l90.rot = 0;

	var trap = new Sprite();
	trap.width = 35;
	trap.height = 35;
	trap.image = Textures.load("Resources/snap_trap-png.png");
	trap.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	var trap2 = new Sprite();
	trap2.width = 35;
	trap2.height = 35;
	trap2.image = Textures.load("Resources/snap_trap-png.png");
	trap2.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	var trapCount = 2;
	
	l90.update = function(d) {
		if (!this.turn) {
			if (this.reverse) {
				this.rot -= 0.02;
			} else {
				this.rot += 0.02;
			}
			if (this.rot > 1.45) {
				this.turn = true;
				this.reverse = !this.reverse;
				setTimeout(function() {
					l90.turn = false;
				}, 1000);
			} else if (this.rot < 0) {
				this.turn = true;
				this.reverse = !this.reverse;
				setTimeout(function() {
					l90.turn = false;
				}, 1000);
			}
		}
		this.ms0 = Math.sin(this.rot);
		this.mc0 = Math.cos(this.rot);
		this.ms1 = Math.sin(this.rot + .15);
		this.mc1 = Math.cos(this.rot + .15);
		this.ms2 = Math.sin(this.rot + .3);
		this.mc2 = Math.cos(this.rot + .3);
		this.ns0 = Math.sin(-this.rot);
		this.nc0 = Math.cos(-this.rot);
		this.ns1 = Math.sin(-this.rot - .15);
		this.nc1 = Math.cos(-this.rot - .15);
		this.ns2 = Math.sin(-this.rot - .3);
		this.nc2 = Math.cos(-this.rot - .3);

	};

	l180 = new Object();
	l180.reverse = false;
	l180.turn = false;
	l180.rot = 0;
	l180.ms0 = 0;
	l180.mc0 = 0;
	l180.ms1 = 0;
	l180.mc1 = 0;
	l180.ms2 = 0;
	l180.mc2 = 0;

	l180.update = function(d) {
		if (!this.turn) {
			if (this.reverse) {
				this.rot -= 0.02;
			} else {
				this.rot += 0.02;
			}
			if (this.rot > 2.9) {
				this.turn = true;
				this.reverse = !this.reverse;
				setTimeout(function() {
					l180.turn = false;
				}, 1000);
			} else if (this.rot < 0) {
				this.turn = true;
				this.reverse = !this.reverse;
				setTimeout(function() {
					l180.turn = false;
				}, 1000);
			}
		}
		this.ms0 = Math.sin(this.rot);
		this.mc0 = Math.cos(this.rot);
		this.ms1 = Math.sin(this.rot + .15);
		this.mc1 = Math.cos(this.rot + .15);
		this.ms2 = Math.sin(this.rot + .3);
		this.mc2 = Math.cos(this.rot + .3);
		this.ns0 = Math.sin(-this.rot);
		this.nc0 = Math.cos(-this.rot);
		this.ns1 = Math.sin(-this.rot - .15);
		this.nc1 = Math.cos(-this.rot - .15);
		this.ns2 = Math.sin(-this.rot - .3);
		this.nc2 = Math.cos(-this.rot - .3);
	};

	l360 = new Object();
	l360.reverse = false;
	l360.turn = false;
	l360.rot = 0;
	l360.ms0 = 0;
	l360.mc0 = 0;
	l360.ms1 = 0;
	l360.mc1 = 0;
	l360.ms2 = 0;
	l360.mc2 = 0;
	l360.ns0 = 0;
	l360.nc0 = 0;
	l360.ns1 = 0;
	l360.nc1 = 0;
	l360.ns2 = 0;
	l360.nc2 = 0;
	
	l360.update = function(d) {
		this.rot += 0.018;
		this.ms0 = Math.sin(this.rot);
		this.mc0 = Math.cos(this.rot);
		this.ms1 = Math.sin(this.rot + .15);
		this.mc1 = Math.cos(this.rot + .15);
		this.ms2 = Math.sin(this.rot + .3);
		this.mc2 = Math.cos(this.rot + .3);
		this.ns0 = Math.sin(-this.rot);
		this.nc0 = Math.cos(-this.rot);
		this.ns1 = Math.sin(-this.rot - .15);
		this.nc1 = Math.cos(-this.rot - .15);
		this.ns2 = Math.sin(-this.rot - .3);
		this.nc2 = Math.cos(-this.rot - .3);
	};

	var ll = 2.5;
	var lights = new Array();
	//NEW LIGHTS HERE/////////////////////lights.edit//////////////////////////////////////////////////////////
	//lights[0] = new Light(70 * 3.5, 70 * 4.5, 1, "down");
    lights[0] = new Light(70 * 6.5, 70 * 15.5, 2, "down", 0);//360
    lights[1] = new Light(70 * 6.5, 70 * 15.5, 2, "right", 0);
    lights[2] = new Light(70 * 6.5, 70 * 15.5, 2, "up", 0);
    lights[3] = new Light(70 * 6.5, 70 * 15.5, 2, "left", 0);//end360 lights
    lights[4] = new Light(70 * 6.5, 70 * 18.5, 1, "left", 1);
    lights[5] = new Light(70 * 8.5, 70 * 9.5, 0, "down", 0);
    lights[6] = new Light(70 * 4.5, 70 * 2.5, 1, "down", 1);
    lights[7] = new Light(70 * 13.5, 70 * 14.5, 0, "right", 0);
    lights[8] = new Light(70 * 18.5, 70 * 10.5, 0, "left", 0);
    lights[9] = new Light(70 * 18.5, 70 * 13.5, 0, "left", 0); //doesnt move on purpose
    lights[10] = new Light(70 * 22.5, 70 * 12.5, 0, "right", 0);
    lights[11] = new Light(70 * 25.5, 70 * 16.5, 0, "left", 0);
    lights[12] = new Light(70 * 30.5, 70 * 21.5, 1, "down", 0);


	function findPoints(point) {
		var points = new Object();
		points.x0 = point.x0;
		points.y0 = point.y0;
		points.x1 = point.x1;
		points.y1 = point.y1;
		points.x2 = point.x2;
		points.y2 = point.y2;
		points.clock = point.clock;
		points.rotation = point.rotation;
		points.direc = point.direc;
		points.origin = point.origin;

		if (points.clock == 0) {//////////////CLOCKWISE
			if (points.rotation == 0) {// 90 clockwise
				if (points.direc == "up") {
					points.x0 = points.origin.x + l90.ns0 * -u * ll;
					points.y0 = points.origin.y + l90.nc0 * -u * ll;
					points.x1 = points.origin.x + l90.ns1 * -u * ll;
					points.y1 = points.origin.y + l90.nc1 * -u * ll;
					points.x2 = points.origin.x + l90.ns2 * -u * ll;
					points.y2 = points.origin.y + l90.nc2 * -u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l90.ns0 * u * ll;
					points.y0 = points.origin.y + l90.nc0 * u * ll;
					points.x1 = points.origin.x + l90.ns1 * u * ll;
					points.y1 = points.origin.y + l90.nc1 * u * ll;
					points.x2 = points.origin.x + l90.ns2 * u * ll;
					points.y2 = points.origin.y + l90.nc2 * u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l90.mc0 * u * ll;
					points.y0 = points.origin.y + l90.ms0 * u * ll;
					points.x1 = points.origin.x + l90.mc1 * u * ll;
					points.y1 = points.origin.y + l90.ms1 * u * ll;
					points.x2 = points.origin.x + l90.mc2 * u * ll;
					points.y2 = points.origin.y + l90.ms2 * u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l90.mc0 * -u * ll;
					points.y0 = points.origin.y + l90.ms0 * -u * ll;
					points.x1 = points.origin.x + l90.mc1 * -u * ll;
					points.y1 = points.origin.y + l90.ms1 * -u * ll;
					points.x2 = points.origin.x + l90.mc2 * -u * ll;
					points.y2 = points.origin.y + l90.ms2 * -u * ll;
				}
			} else if (points.rotation == 1) {// 180 clockwise
				if (points.direc == "up") {
					points.x0 = points.origin.x + l180.mc0 * -u * ll;
					points.y0 = points.origin.y + l180.ms0 * -u * ll;
					points.x1 = points.origin.x + l180.mc1 * -u * ll;
					points.y1 = points.origin.y + l180.ms1 * -u * ll;
					points.x2 = points.origin.x + l180.mc2 * -u * ll;
					points.y2 = points.origin.y + l180.ms2 * -u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l180.mc0 * u * ll;
					points.y0 = points.origin.y + l180.ms0 * u * ll;
					points.x1 = points.origin.x + l180.mc1 * u * ll;
					points.y1 = points.origin.y + l180.ms1 * u * ll;
					points.x2 = points.origin.x + l180.mc2 * u * ll;
					points.y2 = points.origin.y + l180.ms2 * u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l180.ns0 * -u * ll;
					points.y0 = points.origin.y + l180.nc0 * -u * ll;
					points.x1 = points.origin.x + l180.ns1 * -u * ll;
					points.y1 = points.origin.y + l180.nc1 * -u * ll;
					points.x2 = points.origin.x + l180.ns2 * -u * ll;
					points.y2 = points.origin.y + l180.nc2 * -u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l180.ns0 * u * ll;
					points.y0 = points.origin.y + l180.nc0 * u * ll;
					points.x1 = points.origin.x + l180.ns1 * u * ll;
					points.y1 = points.origin.y + l180.nc1 * u * ll;
					points.x2 = points.origin.x + l180.ns2 * u * ll;
					points.y2 = points.origin.y + l180.nc2 * u * ll;
				}
			} else if (points.rotation == 2) {// 360 clockwise
				if (points.direc == "up") {
					points.x0 = points.origin.x + l360.ns0 * -u * ll;
					points.y0 = points.origin.y + l360.nc0 * -u * ll;
					points.x1 = points.origin.x + l360.ns1 * -u * ll;
					points.y1 = points.origin.y + l360.nc1 * -u * ll;
					points.x2 = points.origin.x + l360.ns2 * -u * ll;
					points.y2 = points.origin.y + l360.nc2 * -u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l360.ns0 * u * ll;
					points.y0 = points.origin.y + l360.nc0 * u * ll;
					points.x1 = points.origin.x + l360.ns1 * u * ll;
					points.y1 = points.origin.y + l360.nc1 * u * ll;
					points.x2 = points.origin.x + l360.ns2 * u * ll;
					points.y2 = points.origin.y + l360.nc2 * u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l360.mc0 * u * ll;
					points.y0 = points.origin.y + l360.ms0 * u * ll;
					points.x1 = points.origin.x + l360.mc1 * u * ll;
					points.y1 = points.origin.y + l360.ms1 * u * ll;
					points.x2 = points.origin.x + l360.mc2 * u * ll;
					points.y2 = points.origin.y + l360.ms2 * u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l360.mc0 * -u * ll;
					points.y0 = points.origin.y + l360.ms0 * -u * ll;
					points.x1 = points.origin.x + l360.mc1 * -u * ll;
					points.y1 = points.origin.y + l360.ms1 * -u * ll;
					points.x2 = points.origin.x + l360.mc2 * -u * ll;
					points.y2 = points.origin.y + l360.ms2 * -u * ll;
				}
			}
		} else if (points.clock == 1) {/////////////COUNTERCLOCKWISE
			if (points.rotation == 0) {// 90 counterclockwise
				if (points.direc == "up") {
					points.x0 = points.origin.x + l90.ms0 * -u * ll;
					points.y0 = points.origin.y + l90.mc0 * -u * ll;
					points.x1 = points.origin.x + l90.ms1 * -u * ll;
					points.y1 = points.origin.y + l90.mc1 * -u * ll;
					points.x2 = points.origin.x + l90.ms2 * -u * ll;
					points.y2 = points.origin.y + l90.mc2 * -u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l90.ms0 * u * ll;
					points.y0 = points.origin.y + l90.mc0 * u * ll;
					points.x1 = points.origin.x + l90.ms1 * u * ll;
					points.y1 = points.origin.y + l90.mc1 * u * ll;
					points.x2 = points.origin.x + l90.ms2 * u * ll;
					points.y2 = points.origin.y + l90.mc2 * u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l90.nc0 * u * ll;
					points.y0 = points.origin.y + l90.ns0 * u * ll;
					points.x1 = points.origin.x + l90.nc1 * u * ll;
					points.y1 = points.origin.y + l90.ns1 * u * ll;
					points.x2 = points.origin.x + l90.nc2 * u * ll;
					points.y2 = points.origin.y + l90.ns2 * u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l90.nc0 * -u * ll;
					points.y0 = points.origin.y + l90.ns0 * -u * ll;
					points.x1 = points.origin.x + l90.nc1 * -u * ll;
					points.y1 = points.origin.y + l90.ns1 * -u * ll;
					points.x2 = points.origin.x + l90.nc2 * -u * ll;
					points.y2 = points.origin.y + l90.ns2 * -u * ll;
				}
			} else if (points.rotation == 1) {// 180 counterclockwise
				if (points.direc == "up") {
					points.x0 = points.origin.x + l180.nc0 * u * ll;
					points.y0 = points.origin.y + l180.ns0 * u * ll;
					points.x1 = points.origin.x + l180.nc1 * u * ll;
					points.y1 = points.origin.y + l180.ns1 * u * ll;
					points.x2 = points.origin.x + l180.nc2 * u * ll;
					points.y2 = points.origin.y + l180.ns2 * u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l180.nc0 * -u * ll;
					points.y0 = points.origin.y + l180.ns0 * -u * ll;
					points.x1 = points.origin.x + l180.nc1 * -u * ll;
					points.y1 = points.origin.y + l180.ns1 * -u * ll;
					points.x2 = points.origin.x + l180.nc2 * -u * ll;
					points.y2 = points.origin.y + l180.ns2 * -u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l180.ms0 * u * ll;
					points.y0 = points.origin.y + l180.mc0 * u * ll;
					points.x1 = points.origin.x + l180.ms1 * u * ll;
					points.y1 = points.origin.y + l180.mc1 * u * ll;
					points.x2 = points.origin.x + l180.ms2 * u * ll;
					points.y2 = points.origin.y + l180.mc2 * u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l180.ms0 * -u * ll;
					points.y0 = points.origin.y + l180.mc0 * -u * ll;
					points.x1 = points.origin.x + l180.ms1 * -u * ll;
					points.y1 = points.origin.y + l180.mc1 * -u * ll;
					points.x2 = points.origin.x + l180.ms2 * -u * ll;
					points.y2 = points.origin.y + l180.mc2 * -u * ll;
				}
			} else if (points.rotation == 2) {// 360 counterclockwise
				if (points.direc == "up") {
					points.x0 = points.origin.x + l360.nc0 * u * ll;
					points.y0 = points.origin.y + l360.ns0 * u * ll;
					points.x1 = points.origin.x + l360.nc1 * u * ll;
					points.y1 = points.origin.y + l360.ns1 * u * ll;
					points.x2 = points.origin.x + l360.nc2 * u * ll;
					points.y2 = points.origin.y + l360.ns2 * u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l360.ms0 * u * ll;
					points.y0 = points.origin.y + l360.mc0 * u * ll;
					points.x1 = points.origin.x + l360.ms1 * u * ll;
					points.y1 = points.origin.y + l360.mc1 * u * ll;
					points.x2 = points.origin.x + l360.ms2 * u * ll;
					points.y2 = points.origin.y + l360.mc2 * u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l360.ns0 * u * ll;
					points.y0 = points.origin.y + l360.nc0 * u * ll;
					points.x1 = points.origin.x + l360.ns1 * u * ll;
					points.y1 = points.origin.y + l360.nc1 * u * ll;
					points.x2 = points.origin.x + l360.ns2 * u * ll;
					points.y2 = points.origin.y + l360.nc2 * u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l360.ns0 * -u * ll;
					points.y0 = points.origin.y + l360.nc0 * -u * ll;
					points.x1 = points.origin.x + l360.ns1 * -u * ll;
					points.y1 = points.origin.y + l360.nc1 * -u * ll;
					points.x2 = points.origin.x + l360.ns2 * -u * ll;
					points.y2 = points.origin.y + l360.nc2 * -u * ll;
				}
			}

		}
		return points;
	}

	/*
	//light updates////////////////////////////////////////////////////////////////////////
	lights[0].update = function (d) {
	var points = new Object();
	points.x0 = this.x0;
	points.y0 = this.y0;
	points.x1 = this.x1;
	points.y1 = this.y1;
	points.x2 = this.x2;
	points.y2 = this.y2;
	points.rotation = this.rotation;
	points.direc = this.direc;
	points.origin = this.origin;
	points = findPoints(points);

	this.xy0.x = points.x0;
	this.xy0.y = points.y0;
	this.xy1.x = points.x1;
	this.xy1.y = points.y1;
	this.xy2.x = points.x2;
	this.xy2.y = points.y2;

	//box collisions//////////////////////////////////////////////////////////////////////////////
	//this.bcollisions[0] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy0);
	//this.bcollisions[1] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy1);
	//this.bcollisions[2] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy2);

	//for (var i = 0; i < this.bcollisions.length; i++) {
	//    if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) { ////////////////////////////////////
	/*if (i % 4 == 0) { //MUST SCALE WITH LIGHT COUNT
	this.lp[0].x = this.bcollisions[i].point.x;
	this.lp[0].y = this.bcollisions[i].point.y;
	} else if (i % 4 == 1) {
	this.lp[1].x = this.bcollisions[i].point.x;
	this.lp[1].y = this.bcollisions[i].point.y;
	} else if (i % 4 == 2) {
	this.lp[2].x = this.bcollisions[i].point.x;
	this.lp[2].y = this.bcollisions[i].point.y;
	}

	} else {
	if (i == 0) {
	this.lp[0].x = points.x0;
	this.lp[0].y = points.y0;
	} else if (i == 1) {
	this.lp[1].x = points.x1;
	this.lp[1].y = points.y1;
	} else if (i == 2) {
	this.lp[2].x = points.x2;
	this.lp[2].y = points.y2;
	} */
	//    }
	//}*/
	//};

	//light without boxes////////////////lights.edit////////////////////////////////
	lights[0].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[1].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[2].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[3].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[4].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.xy0.x = points.x0;
		this.xy0.y = points.y0;
		this.xy1.x = points.x1;
		this.xy1.y = points.y1;
		this.xy2.x = points.x2;
		this.xy2.y = points.y2;

		//box collisions//////////////////////////////////////////////////////////////////////////////
		this.bcollisions[0] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[1] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[2] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[3] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[4] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[5] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[6] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[7] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[8] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[9] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[10] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[11] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[12] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy2);
		this.bcollisions[18] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[19] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[20] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		this.bcollisions[21] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[22] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[23] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		this.bcollisions[23] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[24] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[25] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		this.bcollisions[26] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[27] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[28] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		this.bcollisions[23] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy0);
		this.bcollisions[24] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy1);
		this.bcollisions[25] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy2);
		this.bcollisions[26] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy0);
		this.bcollisions[27] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy1);
		this.bcollisions[28] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy2);
			
		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {
				if (i % 3 == 0) {
					this.lp[0].x = this.bcollisions[i].point.x;
					this.lp[0].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 1) {
					this.lp[1].x = this.bcollisions[i].point.x;
					this.lp[1].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 2) {
					this.lp[2].x = this.bcollisions[i].point.x;
					this.lp[2].y = this.bcollisions[i].point.y;
				}
			} else {
				if (i == 0) {
					this.lp[0].x = points.x0;
					this.lp[0].y = points.y0;
				} else if (i == 1) {
					this.lp[1].x = points.x1;
					this.lp[1].y = points.y1;
				} else if (i == 2) {
					this.lp[2].x = points.x2;
					this.lp[2].y = points.y2;
				}
			}
		}

	};
	lights[5].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[6].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[7].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.xy0.x = points.x0;
		this.xy0.y = points.y0;
		this.xy1.x = points.x1;
		this.xy1.y = points.y1;
		this.xy2.x = points.x2;
		this.xy2.y = points.y2;

		//box collisions//////////////////////////////////////////////////////////////////////////////
		this.bcollisions[0] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy0);
		this.bcollisions[1] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy1);
		this.bcollisions[2] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy2);
		this.bcollisions[3] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy0);
		this.bcollisions[4] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy1);
		this.bcollisions[5] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy2);
		this.bcollisions[6] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy0);
		this.bcollisions[7] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy1);
		this.bcollisions[8] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy2);
		this.bcollisions[9] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy0);
		this.bcollisions[10] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy1);
		this.bcollisions[11] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy2);
		this.bcollisions[12] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy2);
		this.bcollisions[18] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[19] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[20] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		this.bcollisions[21] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[22] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[23] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		this.bcollisions[24] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[25] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[26] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		this.bcollisions[27] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[28] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[29] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		this.bcollisions[30] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy0);
		this.bcollisions[31] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy1);
		this.bcollisions[32] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy2);
		this.bcollisions[33] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy0);
		this.bcollisions[34] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy1);
		this.bcollisions[35] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy2);
			
		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {
				if (i % 3 == 0) {
					this.lp[0].x = this.bcollisions[i].point.x;
					this.lp[0].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 1) {
					this.lp[1].x = this.bcollisions[i].point.x;
					this.lp[1].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 2) {
					this.lp[2].x = this.bcollisions[i].point.x;
					this.lp[2].y = this.bcollisions[i].point.y;
				}
			} else {
				if (i == 0) {
					this.lp[0].x = points.x0;
					this.lp[0].y = points.y0;
				} else if (i == 1) {
					this.lp[1].x = points.x1;
					this.lp[1].y = points.y1;
				} else if (i == 2) {
					this.lp[2].x = points.x2;
					this.lp[2].y = points.y2;
				}
			}
		}

	};
	lights[8].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;
	};
	var stop = false;
	lights[9].update = function(d) {
		var points = new Object();
		if (!stop) {
			stop = true;

			points.rotation = this.rotation;
			points.direc = this.direc;
			points.origin = this.origin;
			points.clock = this.clock;
			points = findPoints(points);

			this.lp[0].x = points.x0;
			this.lp[0].y = points.y0;
			this.lp[1].x = points.x1;
			this.lp[1].y = points.y1;
			this.lp[2].x = points.x2;
			this.lp[2].y = points.y2;
		}
	};
	lights[10].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.xy0.x = points.x0;
		this.xy0.y = points.y0;
		this.xy1.x = points.x1;
		this.xy1.y = points.y1;
		this.xy2.x = points.x2;
		this.xy2.y = points.y2;

		//box collisions//////////////////////////////////////////////////////////////////////////////
		this.bcollisions[0] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy0);
		this.bcollisions[1] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy1);
		this.bcollisions[2] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy2);
		this.bcollisions[3] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy0);
		this.bcollisions[4] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy1);
		this.bcollisions[5] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy2);
		this.bcollisions[6] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy0);
		this.bcollisions[7] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy1);
		this.bcollisions[8] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy2);
		this.bcollisions[9] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy0);
		this.bcollisions[10] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy1);
		this.bcollisions[11] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy2);
		this.bcollisions[12] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[2].tl, boxes[2].bl, this.origin, this.xy2);
		this.bcollisions[18] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[19] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[20] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		this.bcollisions[21] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[22] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[23] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		this.bcollisions[24] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[25] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[26] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		this.bcollisions[27] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[28] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[29] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		this.bcollisions[30] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy0);
		this.bcollisions[31] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy1);
		this.bcollisions[32] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy2);
		this.bcollisions[33] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy0);
		this.bcollisions[34] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy1);
		this.bcollisions[35] = intersect(boxes[2].tl, boxes[2].tr, this.origin, this.xy2);
		
		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {
				if (i % 3 == 0) {
					this.lp[0].x = this.bcollisions[i].point.x;
					this.lp[0].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 1) {
					this.lp[1].x = this.bcollisions[i].point.x;
					this.lp[1].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 2) {
					this.lp[2].x = this.bcollisions[i].point.x;
					this.lp[2].y = this.bcollisions[i].point.y;
				}
			} else {
				if (i == 0) {
					this.lp[0].x = points.x0;
					this.lp[0].y = points.y0;
				} else if (i == 1) {
					this.lp[1].x = points.x1;
					this.lp[1].y = points.y1;
				} else if (i == 2) {
					this.lp[2].x = points.x2;
					this.lp[2].y = points.y2;
				}
			}
		}

	};
	lights[11].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.xy0.x = points.x0;
		this.xy0.y = points.y0;
		this.xy1.x = points.x1;
		this.xy1.y = points.y1;
		this.xy2.x = points.x2;
		this.xy2.y = points.y2;

		//box collisions//////////////////////////////////////////////////////////////////////////////
		this.bcollisions[0] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[1] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[2] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[3] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[4] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[5] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[6] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[7] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[8] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[9] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[10] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[11] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[12] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[2].tr, boxes[2].br, this.origin, this.xy2);
		
			
		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {
				if (i % 3 == 0) {
					this.lp[0].x = this.bcollisions[i].point.x;
					this.lp[0].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 1) {
					this.lp[1].x = this.bcollisions[i].point.x;
					this.lp[1].y = this.bcollisions[i].point.y;
				} else if (i % 3 == 2) {
					this.lp[2].x = this.bcollisions[i].point.x;
					this.lp[2].y = this.bcollisions[i].point.y;
				}
			} else {
				if (i == 0) {
					this.lp[0].x = points.x0;
					this.lp[0].y = points.y0;
				} else if (i == 1) {
					this.lp[1].x = points.x1;
					this.lp[1].y = points.y1;
				} else if (i == 2) {
					this.lp[2].x = points.x2;
					this.lp[2].y = points.y2;
				}
			}
		}

	};
	lights[12].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;
	};
	
	function Light(x, y, rotation, direc, clock) {
		light = new Object();
		light.origin = new Vector(x, y);
		light.lp = new Array(3);
		light.reverse = false;
		light.rotation = rotation;
		light.clock = clock;
		light.bcollisions = new Array();
		light.x0 = 0;
		light.y0 = 0;
		light.x1 = 0;
		light.y1 = 0;
		light.x2 = 0;
		light.y2 = 0;
		light.xy0 = new Vector(light.x0, light.y0);
		light.xy1 = new Vector(light.x1, light.y1);
		light.xy2 = new Vector(light.x2, light.y2);
		light.direc = direc;
		for (var i = 0; i < light.lp.length; i++) {
			light.lp[i] = new Vector(light.origin.x, light.origin.y);
		}
		return light;
	};

	var xcenter = 420;
	var ycenter = 315;
	var traps = 0;
	
	var levelDone = false;
	var minusTrap = false;
	
	var extraItemOne = new Sprite();
	extraItemOne.image = Textures.load("Resources/bonus_item.png");
	extraItemOne.width = 50;
	extraItemOne.height = 40;
	extraItemOne.x = 70 * 12 + 6;
	extraItemOne.y = 70 * 11 + 17;
	
	var extraItemTwo = new Sprite();
	extraItemTwo.image = Textures.load("Resources/bonus_item.png");
	extraItemTwo.width = 50;
	extraItemTwo.height = 40;
	extraItemTwo.x = 70 * 18 + 5;
	extraItemTwo.y = 70 * 21 + 17;

	var winItem = new Sprite();
	//winItem.image = Textures.load("Resources/briefcase.png");
	winItem.width = 70*6;
	winItem.height = 70;
	winItem.x = 70 * 13;
	winItem.y = 70 * 5 - 30;

	var roofOne = new Sprite();
	roofOne.image = Textures.load("Resources/level_3_roof_1.png");
	roofOne.index = -1;
	roofOne.width = u * 5.6 + 4;
	roofOne.height = u * 4.75 + 16;
	roofOne.x = u * 1.5 + 12;
	roofOne.y = u * 1.25 - 12;
	
	var roofTwo = new Sprite();
	roofTwo.image = Textures.load("Resources/level_3_roof_2.png");
	roofTwo.index = -1;
	roofTwo.width = u * 7.6 + 4;
	roofTwo.height = u * 6.75 + 16;
	roofTwo.x = u * 25.5 + 12;
	roofTwo.y = u * 18.25 - 12;
	
	var switchOne = new Sprite();
	switchOne.image = Textures.load("Resources/switch_1_on.png");
	//switchOne.index = 0;
	switchOne.width = u - 5;
	switchOne.height = u - 5;
	switchOne.x = u * 6;
	switchOne.y = u * 2 + 7;
	
	var switchTwo = new Sprite();
	switchTwo.image = Textures.load("Resources/switch_2_on.png");
	//switchTwo.index = 0;
	switchTwo.width = u - 5;
	switchTwo.height = u - 5;
	switchTwo.x = u * 32;
	switchTwo.y = u * 23 + 7;
	
	var gateLeft = new Sprite();
	gateLeft.image = Textures.load("Resources/gate_left.png");
	gateLeft.msg = false;
	gateLeft.active = true;
	gateLeft.width = u * 2.75 + 2;
	gateLeft.height = u * 2;
	gateLeft.x = u * 13.25 - 1;
	gateLeft.y = u * 4;
	
	var gateRight = new Sprite();
	gateRight.image = Textures.load("Resources/gate_right.png");
    gateRight.width = u * 2.75 + 5;
	gateRight.height = u * 2;
	gateRight.x = u * 16;
	gateRight.y = u * 4;
	
	var laser = new Sprite();
	laser.image = Textures.load("Resources/lazer_turned_on.png");
	laser.msg = false;
	laser.active = true;
	laser.width = u * 8;
	laser.height = u;
	laser.x = u * 12;
	laser.y = u * 9;

	var dirtcount = 22;
	var dirts = new Array();
	for (var i = 0; i < dirtcount; i++) {////////////////////////////////////////////////////////////dirts array
		dirts[i] = new Object();
	}
	dirts.at = function(x, y) {
		var coords = new Object();
		coords.x = 70 * x;
		coords.y = 70 * y;
		return coords;
	};

	//make sure to scale the dirts array////////////////////////////////////////////////////////////////////////
	dirts[0] = dirts.at(4,19);
	dirts[1] = dirts.at(5,19);
	dirts[2] = dirts.at(14,14);
	dirts[3] = dirts.at(14,15);
	dirts[4] = dirts.at(15,15);
	dirts[5] = dirts.at(16,15);
	dirts[6] = dirts.at(17,15);
	dirts[7] = dirts.at(17,14);
	dirts[8] = dirts.at(21,19);
	dirts[9] = dirts.at(21,20);
	dirts[10] = dirts.at(22,20);
	dirts[11] = dirts.at(22,21);
	dirts[12] = dirts.at(23,16);
	dirts[13] = dirts.at(23,17);
	dirts[14] = dirts.at(24,16);
	dirts[15] = dirts.at(22,13);
	dirts[16] = dirts.at(23,13);
	dirts[17] = dirts.at(24,13);
	dirts[18] = dirts.at(23,12);
	dirts[19] = dirts.at(24,12);
	dirts[20] = dirts.at(25,12);
	dirts[21] = dirts.at(16,14);


	var walls = new Array();
	for (var i = 0; i < 118; i++) {////////////////////////////////////////////////////////////walls array
		walls[i] = new Object();
	}

	walls.u = function(x1, y, x2) {
		var coords = new Object();
		coords.left = 70 * x1;
		coords.right = 70 * x2;
		coords.bot = 70 * y;
		coords.top = coords.bot - 4;
		return coords;
	};
	walls.d = function(x1, y, x2) {
		var coords = new Object();
		coords.left = 70 * x1;
		coords.top = 70 * y;
		coords.right = 70 * x2;
		coords.bot = coords.top + 3;
		return coords;
	};
	walls.l = function(x, y1, y2) {
		var coords = new Object();
		coords.top = 70 * y1;
		coords.right = 70 * x;
		coords.left = coords.right - 3;
		coords.bot = 70 * y2;
		return coords;
	};
	walls.r = function(x, y1, y2) {
		var coords = new Object();
		coords.left = 70 * x;
		coords.top = 70 * y1;
		coords.right = coords.left + 3;
		coords.bot = 70 * y2;
		return coords;
	};

	//MAKE SURE TO SET WALLS LENGTH//////////////////////////////////////////////////////
	//walls[0] = walls.l(2, 5, 15);
	//walls[1] = walls.u(2, 5, 12);
	//walls[2] = walls.r(4, 8, 15);
	//walls[3] = walls.d(2, 15, 4);
	walls[0] = walls.d(4,26,8);
	walls[1] = walls.r(8,24,26);
	walls[2] = walls.u(6,24,8);
	walls[3] = walls.r(6,23,24);
	walls[4] = walls.d(6,23,11);
	walls[5] = walls.r(11,22,23);
	walls[6] = walls.u(9,22,11);
	walls[7] = walls.r(9,20,22);
	walls[8] = walls.u(6,20,9);
	walls[9] = walls.r(6,18,20);
	walls[10] = walls.d(6,18,8);
	walls[11] = walls.l(8,18,19);
	walls[12] = walls.d(8,19,12);
	walls[13] = walls.l(12,19,22);
	walls[14] = walls.d(12,22,18);
	walls[15] = walls.l(18,22,23);
	walls[16] = walls.d(18,23,23);
	walls[17] = walls.r(23,21,23);
	walls[18] = walls.d(23,21,24);
	walls[19] = walls.r(24,17,21);
	walls[20] = walls.d(24,17,25);
	walls[21] = walls.r(25,16,17);
	walls[22] = walls.d(25,16,26);
	walls[23] = walls.l(26,16,18);
	walls[24] = walls.d(26,18,27);
	walls[25] = walls.l(27,18,19);
	walls[26] = walls.u(26,19,27);
	walls[27] = walls.l(26,19,22);
	walls[28] = walls.d(26,22,28);
	walls[29] = walls.l(28,22,25);
	walls[30] = walls.d(28,25,33);
	walls[31] = walls.r(33,19,25);
	walls[32] = walls.u(28,19,33);
	walls[33] = walls.r(28,18,19);
	walls[34] = walls.d(28,18,32);
	walls[35] = walls.r(32,16,18);
	walls[36] = walls.u(31,16,32);
	walls[37] = walls.r(31,15,16);
	walls[38] = walls.u(29,15,31);
	walls[39] = walls.r(29,14,15);
	walls[40] = walls.u(28,14,29);
	walls[41] = walls.l(28,12,14);
	walls[42] = walls.u(23,12,28);
	walls[43] = walls.l(22,12,13);
	walls[44] = walls.u(22,13,23);
	walls[45] = walls.l(22,13,14);
	walls[46] = walls.u(18,14,22);
	walls[47] = walls.r(18,10,14);
	walls[48] = walls.d(18,10,19);
	walls[49] = walls.r(19,9,10);
	walls[50] = walls.d(19,9,21);
	walls[51] = walls.r(21,6,9);
	walls[52] = walls.u(19,6,21);
	walls[53] = walls.r(19,5,6);
	walls[55] = walls.l(13,5,6);
	walls[56] = walls.u(11,6,13);
	walls[57] = walls.l(11,6,9);
	walls[58] = walls.d(11,9,13);
	walls[59] = walls.l(13,9,10);
	walls[60] = walls.d(13,10,14);
	walls[61] = walls.l(14,10,16);
	walls[62] = walls.u(13,16,14);
	walls[63] = walls.l(13,16,17);
	walls[64] = walls.u(9,17,13);
	walls[65] = walls.r(9,13,17);
	walls[66] = walls.u(6,13,9);
	walls[67] = walls.r(6,12,13);
	walls[68] = walls.d(6,12,13);
	walls[69] = walls.r(13,10,12);
	walls[70] = walls.u(8,10,13);
	walls[71] = walls.r(8,9,10);
	walls[72] = walls.u(6,9,8);
	walls[73] = walls.r(6,7,9);
	walls[74] = walls.u(3,7,6);
	walls[75] = walls.r(3,6,7);
	walls[76] = walls.d(3,6,6);
	walls[77] = walls.r(6,5,6);
	walls[78] = walls.d(6,5,7);
	walls[79] = walls.r(7,2,5);
	walls[80] = walls.u(5,2,7);
	walls[81] = walls.l(5,2,3);
	walls[82] = walls.u(4,2,5);
	walls[83] = walls.r(4,2,3);
	walls[84] = walls.u(2,2,4);
	walls[85] = walls.l(2,2,8);
	walls[86] = walls.d(2,8,4);
	walls[87] = walls.l(4,8,9);
	walls[88] = walls.u(2,9,4);
	walls[89] = walls.l(2,9,12);
	walls[90] = walls.d(2,12,4);
	walls[91] = walls.l(4,12,16);
	walls[92] = walls.u(1,16,4);
	walls[93] = walls.l(1,16,20);
	walls[94] = walls.d(1,20,3);
	walls[95] = walls.l(3,20,23);
	walls[96] = walls.d(3,23,4);
	walls[97] = walls.l(4,23,26);
    walls[98] = walls.r(6,15,16);
    walls[99] = walls.l(7,15,16);
    walls[100] = walls.d(6,15,7);
    walls[101] = walls.u(6,16,7);
    walls[102] = walls.d(26,13,27);
    walls[103] = walls.u(26,14,27);
    walls[104] = walls.r(26,13,14);
    walls[105] = walls.l(27,13,14);
    walls[106] = walls.r(30,21,22);
    walls[107] = walls.l(31,21,22);
    walls[108] = walls.d(30,21,31);
    walls[109] = walls.u(30,22,31);
    walls[110] = walls.u(16,20,21);
    walls[111] = walls.l(21,17,20);
    walls[112] = walls.d(19,17,21);
    walls[113] = walls.r(19,17,18);
    walls[114] = walls.d(17,18,19);
    walls[115] = walls.r(17,18,19);
    walls[116] = walls.d(16,19,17);
    walls[117] = walls.r(16,19,20);
    
    walls[54] = walls.u(13,6,19);


	var boxcount = 3;
	//////BOXES ARRAY////////////////////////////////////////////////
	var boxes = new Array();
	for (var i = 0; i < boxcount; i++) {
		boxes[i] = new Sprite();
		boxes[i].image = Textures.load("Resources/box_game_sprite_update-2.png");
		boxes[i].width = 67;
		boxes[i].height = 67;
		boxes[i].x = -70;
		boxes[i].y = 0;
		boxes[i].placed = false;
		boxes[i].tl = new Vector(boxes[i].x, boxes[i].y);
		//top left
		boxes[i].tr = new Vector((boxes[i].x + boxes[i].width), boxes[i].y);
		//top right
		boxes[i].bl = new Vector(boxes[i].x, (boxes[i].y + boxes[i].height));
		//bottom left
		boxes[i].br = new Vector((boxes[i].x + boxes[i].width), (boxes[i].y + boxes[i].height));
		//bottom right
		world.addChild(boxes[i]);
	}

	gInput.addBool(32, "place");

	var red = new Sprite();
	red.image = Textures.load("Resources/red.png");
	var green = new Sprite();
	green.image = Textures.load("Resources/green.png");

	var cursor = new Sprite();
	cursor.image = red.image;
	cursor.index = -2;
	cursor.width = 70;
	cursor.height = 70;
	cursor.x = 70 * 13;
	cursor.y = 70 * 8;
	cursor.speed = 70;

	cursor.isdirt = function() {
		for (var i = 0; i < dirts.length; i++) {
			if (this.x == dirts[i].x && this.y == dirts[i].y) {
				return true;
			}
		}
		return false;
	};

	cursor.isBox = function() {
		for (var i = 0; i < boxes.length; i++) {
			if (this.x == boxes[i].x) {
				if (this.y == boxes[i].y) {
					return true;
				}
			}
		}
		return false;
	};

	cursor.update = function() {
		if (!this.moving) {
			this.image = red.image;
			if (this.isdirt()) {
				if (!this.isBox()) {
					this.image = green.image;
				}
			}
			if (gInput.up) {
				this.moving = true;
				if (this.y != -70) {
					this.y -= this.speed;
				}
				if (world.y < -2 && this.y < bg.height - ycenter) {
					world.y += this.speed;
				}
				setTimeout(function() {
					cursor.moving = false;
				}, 200);
			} else if (gInput.down) {
				this.moving = true;
				if (this.y != bg.height - 70) {
					this.y += this.speed;
				}
				if (world.y > -bg.height + canvas.height && this.y > ycenter + 70) {
					world.y -= this.speed;
				}
				setTimeout(function() {
					cursor.moving = false;
				}, 200);
			} else if (gInput.left) {
				this.moving = true;
				if (this.x != 0) {
					this.x -= this.speed;
				}
				if (world.x < -2 && this.x < xcenter + 70 * 22) {
					world.x += this.speed;
				}
				setTimeout(function() {
					cursor.moving = false;
				}, 200);
			} else if (gInput.right) {
				this.moving = true;
				if (this.x != bg.width - 70) {
					this.x += this.speed;
				}
				if (world.x > -bg.width + canvas.width && this.x > xcenter + 70) {
					world.x -= this.speed;
				}
				setTimeout(function() {
					cursor.moving = false;
				}, 200);
			}
			if (screenMan.screens.find(pauseMenu)) {
				cursor.speed = 0;
				for (var k = 0; k < 2; k++) {
					boxes[k].alpha = .2;
				}
			} else if (!screenMan.screens.find(pauseMenu) && !screenMan.screens.find(scriptScreen)) {
				cursor.speed = 70;
				for (var k = 0; k < 2; k++) {
					boxes[k].alpha = 1;
				}
			}
			if (gInput.place && boxcount > 1 && this.isdirt() && !this.isBox()) {
				this.moving = true;
				boxes[boxcount - 1].x = this.x;
				boxes[boxcount - 1].y = this.y;
				boxes[boxcount - 1].placed = true;
				sounds.play("Audio/boxbeingdroppedondirt_.mp3");
				boxcount--;
				setTimeout(function() {
					cursor.moving = false;
				}, 200);
			} else if (gInput.place && boxcount == 1 && this.isdirt() && !this.isBox()) {
				this.moving = true;
				boxes[boxcount - 1].x = this.x;
				boxes[boxcount - 1].y = this.y;
				boxes[boxcount - 1].placed = true;
				sounds.play("Audio/boxbeingdroppedondirt_.mp3");
				boxcount--;
				world.x = -70 * 3;
				world.y = -70 * 18;
				daysong.pause();
 				nightsong.play();
 				gameScreen4.image = Textures.load("Resources/level_3.png");
				world.addChild(player);
				world.addChild(guard);
				world.addChild(guard2);
				world.addChild(guard3);
				world.addChild(guard4);
				world.addChild(guard5);
				world.addChild(guard6);
				world.addChild(guard7);
				world.addChild(guard8);
				world.addChild(guard9);
				world.addChild(extraItemOne);
				world.addChild(extraItemTwo);
				world.addChild(winItem);
				setTimeout(function() {
					traps = 2;
				}, 300);
				world.addChild(l90);
				world.addChild(l180);
				world.addChild(l360);
				for (var i = 0; i < lights.length; i++) {
					world.addChild(lights[i]);
				}
				this.remove();
			}
		}
	};

	/*//Right guard (left) 1
	var guard = new Sprite();
	guard.image = Textures.load("Resources/bat_full.png");
	guard.width = 67;
	guard.height = 67;
	guard.x = 70 * 11;
	guard.y = 70 * 25;
	guard.alerted = false;
	guard.frameWidth = 63;
	guard.frameHeight = 49;
	guard.frameCount = 20;
	guard.frameRate = 7;
	guard.moveRate = 7;
	guard.speed = 2;
	guard.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

	var availSpace = 0;

	guard.update = function() {
		if (trap.collision(guard)) {
			setTimeout(function() {
				guard.x = 0;
				guard.y = 0;
				world.removeChild(guard);
				trap.alpha = 0;
			}, 250);
		}
		
		availSpace += guard.speed;

		if (availSpace <= 70) {//curently working
			guard.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard.y -= guard.speed;
		}
		if (availSpace >= 70) {
			guard.y -= 0;
			guard.animation = "right";
			//guard2.frameRate = guard2.moveRate;
			guard.x += guard.speed;
		}

		if (availSpace >= 210) {
			guard.x -= guard.speed;
			guard.animation = "down";
			//guard2.frameRate = guard2.moveRate;
			guard.y += guard.speed;
		}

		if (availSpace >= 350) {
			guard.y -= guard.speed;
			guard.animation = "left";
			//guard2.frameRate = guard2.moveRate;
			guard.x -= guard.speed;
		}

		if (availSpace >= 490) {
			guard.x += guard.speed;
			guard.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard.y -= guard.speed;
		}

		if (availSpace >= 560) {
			guard.y += guard.speed;
			//guard2.frameRate = guard2.moveRate;
			availSpace = 0;
		}

	};*/



	/*function short_collision(px, py) {
		if (px > 70 * 8 - 35 && px < 70 * 9 - 30 && py > 70 * 5 - 35 && py < 70 * 6) {
			return true;
		}
		return false;
	}

	function long_collision(px, py) {
		if (px > 70 * 8 - 35 && px < 70 * 9 - 30 && py > 70 * 5 - 35 && py < 70 * 8) {
			return true;
		}
		return false;
	}*/

	var player = new Sprite();
	player.image = Textures.load("Resources/Jax_walk_FULL.png");
	player.width = 62;
	player.height = 62;
	player.x = 70 * 6;
	player.y = 70 * 24.5;
	
	player.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	player.gcollision = function(sprite) {
		if (this.x < sprite.x + sprite.width + gxv && this.x + this.width > sprite.x - gxv && this.y < sprite.y + sprite.height + gyv && this.y + this.height > sprite.y + gyv) {
			return true;
		} else {
			return false;
		}
	};

////////////////////GUARDS HERERRRRRRRRRRRRR
//top left guard
var guard = new Sprite();
	guard.image = Textures.load("Resources/bat_full.png");
	guard.width = 67;
	guard.height = 67;
	guard.x = 70 * 3;
	guard.y = 70 * 11;
	guard.alerted = false;
	guard.frameWidth = 64;
	guard.frameHeight = 51;
	guard.frameCount = 20;
	guard.frameRate = 7;
	guard.moveRate = 7;
	guard.speed = 2;
	guard.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

var availSpace = 0;

guard.update = function(){ 

availSpace += guard.speed;

	if (trap.collision(guard)) {
			setTimeout(function() {
			guard.x = -1000;
			guard.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard)) {
			setTimeout(function() {
			guard.x = -1000;
			guard.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace <= 70) {
			guard.animation = "right";
			guard.x += guard.speed;
	}
	if (availSpace >= 70) {
		guard.x += 0;
		guard.animation = "up";
		guard.y -= guard.speed;
	}

	if (availSpace >= 210) {
		guard.y += guard.speed;
		guard.animation = "left";
		guard.x -= guard.speed;
	}

	if (availSpace >= 350) {
		guard.x += guard.speed;
		guard.animation = "down";
		guard.y += guard.speed;
	}

	if (availSpace >= 490) {
		guard.y -= guard.speed;
		guard.animation = "right";
		guard.x += guard.speed;
	}

	if (availSpace >= 560) {
		guard.x -= guard.speed
		availSpace = 0;
	}


};


//bottom left guard of map
var guard2 = new Sprite();
	guard2.image = Textures.load("Resources/bat_full.png");
	guard2.width = 67;
	guard2.height = 67;
	guard2.x = 70 * 4;
	guard2.y = 70 * 22;
	guard2.alerted = false;
	guard2.frameWidth = 64;
	guard2.frameHeight = 51;
	guard2.frameCount = 20;
	guard2.frameRate = 7;
	guard2.moveRate = 7;
	guard2.speed = 2;
	guard2.addAnimations(["down", "up",  "right", "left"], [5, 5, 5, 5]);

var availSpace2 = 0;

guard2.update = function(){ 

availSpace2 += guard2.speed;
	if (trap.collision(guard2)) {
			setTimeout(function() {
			guard2.x = -1000;
			guard2.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard2)) {
			setTimeout(function() {
			guard2.x = -1000;
			guard2.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace2 <= 70) {
		guard2.animation = "left";
		guard2.x -= guard2.speed;
	}
	if (availSpace2 >= 70) {
		guard2.x += 0;
		guard2.animation = "right";
		guard2.x += guard2.speed;
	}

	if (availSpace2 >= 560) {
		guard2.x -= guard2.speed;
		guard2.animation = "left";
		guard2.x -= guard2.speed;
	}

	if (availSpace2 >= 980) {
		guard2.x += guard2.speed;
		availSpace2 = 0;
	}

};

//bottom middle (square path)
var guard3 = new Sprite();
	guard3.image = Textures.load("Resources/bat_full.png");
	guard3.width = 67;
	guard3.height = 67;
	guard3.x = 70 * 17;
	guard3.y = 70 * 20;
	guard3.alerted = false;
	guard3.frameWidth = 64;
	guard3.frameHeight = 51;
	guard3.frameCount = 20;
	guard3.frameRate = 7;
	guard3.moveRate = 7;
	guard3.speed = 2;
	guard3.addAnimations(["down", "up",  "right", "left"], [5, 5, 5, 5]);

var availSpace3 = 0;

guard3.update = function(){ 

availSpace3 += guard3.speed;
	if (trap.collision(guard3)) {
			setTimeout(function() {
			guard3.x = -1000;
			guard3.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard3)) {
			setTimeout(function() {
			guard3.x = -1000;
			guard3.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace3 <= 70) {
		guard3.animation = "down";
		guard3.y += guard3.speed;
	}
	if (availSpace3 >= 70) {
		guard3.y += 0;
		guard3.animation = "left";
		guard3.x -= guard3.speed;
	}

	if (availSpace3 >= 140) {
		guard3.x += guard3.speed;
		guard3.animation = "up";
		guard3.y -= guard3.speed;
	}

	if (availSpace3 >= 210) {
		guard3.y += guard3.speed;
		guard3.animation = "right";
		guard3.x += guard3.speed;
	}

	if (availSpace3 >= 280){
		guard3.x -= guard3.speed;
		availSpace3 = 0;
	}

};



//bottom middle up-down
var guard4 = new Sprite();
	guard4.image = Textures.load("Resources/bat_full.png");
	guard4.width = 67;
	guard4.height = 67;
	guard4.x = 70 * 20;
	guard4.y = 70 * 21;
	guard4.alerted = false;
	guard4.frameWidth = 64;
	guard4.frameHeight = 51;
	guard4.frameCount = 20;
	guard4.frameRate = 7;
	guard4.moveRate = 7;
	guard4.speed = 2;
	guard4.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

var availSpace4 = 0;

guard4.update = function(){ 

availSpace4 += guard4.speed;
	if (trap.collision(guard4)) {
			setTimeout(function() {
			guard4.x = -1000;
			guard4.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard4)) {
			setTimeout(function() {
			guard4.x = -1000;
			guard4.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace4 <= 70) {
		guard4.animation = "up";
		guard4.y -= guard4.speed;
	}
	
	if (availSpace4 >= 70) {
		guard4.y -= 0;
		guard4.animation = "down";
		guard4.y += guard4.speed;
	}

	if (availSpace4 >= 210) {
		guard4.y -= guard4.speed;
		guard4.animation = "up";
		guard4.y -= guard4.speed;
	}

	if (availSpace4 >= 280) {
		guard4.y += guard4.speed;
		availSpace4 = 0;
	}
};


//cover2 (left right)
var guard5 = new Sprite();
	guard5.image = Textures.load("Resources/bat_full.png");
	guard5.width = 67;
	guard5.height = 67;
	guard5.x = 70 * 29;
	guard5.y = 70 * 22;
	guard5.alerted = false;
	guard5.frameWidth = 64;
	guard5.frameHeight = 51;
	guard5.frameCount = 20;
	guard5.frameRate = 7;
	guard5.moveRate = 7;
	guard5.speed = 2;
	guard5.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);


var availSpace5 = 0;

guard5.update = function(){ 

availSpace5 += guard5.speed;

	if (trap.collision(guard5)) {
			setTimeout(function() {
			guard5.x = -1000;
			guard5.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard5)) {
			setTimeout(function() {
			guard5.x = -1000;
			guard5.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace5 <= 70) {
		guard5.animation = "left";
		guard5.x -= guard5.speed;
	}
	if (availSpace5 >= 70) {
		guard5.x -= 0;
		guard5.animation = "right";
		guard5.x += guard5.speed;
	}

	if (availSpace5 >= 350) {
		guard5.x -= guard5.speed;
		guard5.animation = "left";
		guard5.x -= guard.speed;
	}

	if (availSpace5 >= 560) {
		guard5.x += guard5.speed;
		availSpace5 = 0;
	}
};


//cover2 (up down)
var guard6 = new Sprite();
	guard6.image = Textures.load("Resources/bat_full.png");
	guard6.width = 67;
	guard6.height = 67;
	guard6.x = 70 * 29;
	guard6.y = 70 * 19;
	guard6.alerted = false;
	guard6.frameWidth = 64;
	guard6.frameHeight = 51;
	guard6.frameCount = 20;
	guard6.frameRate = 7;
	guard6.moveRate = 7;
	guard6.speed = 2;
	guard6.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);


var availSpace6 = 0;

guard6.update = function(){ 

availSpace6 += guard6.speed;
	if (trap.collision(guard6)) {
			setTimeout(function() {
			guard6.x = -1000;
			guard6.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard6)) {
			setTimeout(function() {
			guard6.x = -1000;
			guard6.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace6 <= 350) {
		guard6.animation = "down";
		guard6.y += guard6.speed;
	}
	if (availSpace6 >= 350) {
		guard6.y += 0;
		guard6.animation = "up";
		guard6.y -= guard6.speed;
	}

	if (availSpace6 >= 700) {
		guard6.y += guard6.speed;
		availSpace6 = 0;
	}
};

//square guard above cover 2

var guard7 = new Sprite();
	guard7.image = Textures.load("Resources/bat_full.png");
	guard7.width = 67;
	guard7.height = 67;
	guard7.x = 70 * 27;
	guard7.y = 70 * 14;
	guard7.alerted = false;
	guard7.frameWidth = 64;
	guard7.frameHeight = 51;
	guard7.frameCount = 20;
	guard7.frameRate = 7;
	guard7.moveRate = 7;
	guard7.speed = 2;
	guard7.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);


var availSpace7 = 0;

guard7.update = function(){ 

availSpace7 += guard7.speed;
	if (trap.collision(guard7)) {
			setTimeout(function() {
			guard7.x = -1000;
			guard7.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard7)) {
			setTimeout(function() {
			guard7.x = -1000;
			guard7.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace7 <= 70) {
		guard7.animation = "right";
		guard7.x += guard7.speed;
	}
	if (availSpace7 >= 70) {
		guard7.x += 0;
		guard7.animation = "down";
		guard7.y += guard7.speed;
	}

	if (availSpace7 >= 140) {
		guard7.y -= guard7.speed;
		guard7.animation = "left";
		guard7.x -= guard7.speed;
	}

	if (availSpace7 >= 350) {
		guard7.x += guard7.speed;
		guard7.animation = "up";
		guard7.y -= guard7.speed;
	}

	if (availSpace7 >= 420) {
		guard7.y += guard7.speed;
		guard7.animation = "right";
		guard7.x += guard7.speed;
	}
	
	if (availSpace7 >= 560) {
		guard7.x -= guard7.speed;
		availSpace7 = 0;
	}
};

//top middle (left side)
var guard8 = new Sprite();
	guard8.image = Textures.load("Resources/bat_full.png");
	guard8.width = 67;
	guard8.height = 67;
	guard8.x = 70 * 14;
	guard8.y = 70 * 13;
	guard8.alerted = false;
	guard8.frameWidth = 64;
	guard8.frameHeight = 51;
	guard8.frameCount = 20;
	guard8.frameRate = 7;
	guard8.moveRate = 7;
	guard8.speed = 2;
	guard8.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);


var availSpace8 = 0;

guard8.update = function(){ 

availSpace8 += guard8.speed;
	if (trap.collision(guard8)) {
			setTimeout(function() {
			guard8.x = -1000;
			guard8.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard8)) {
			setTimeout(function() {
			guard8.x = -1000;
			guard8.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace8 <= 490) {
		guard8.animation = "up";
		guard8.y -= guard8.speed;
	}
	if (availSpace8 >= 490) {
		guard8.y -= 0;
		guard8.animation = "down";
		guard8.y += guard8.speed;
	}

	if (availSpace8 >= 980) {
		guard8.y -= guard8.speed;
		availSpace8 = 0;
	}
};


//top middle (right side)
var guard9 = new Sprite();
	guard9.image = Textures.load("Resources/bat_full.png");
	guard9.width = 67;
	guard9.height = 67;
	guard9.x = 70 * 17;
	guard9.y = 70 * 6;
	guard9.alerted = false;
	guard9.frameWidth = 64;
	guard9.frameHeight = 51;
	guard9.frameCount = 20;
	guard9.frameRate = 7;
	guard9.moveRate = 7;
	guard9.speed = 2;
	guard9.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);


var availSpace9 = 0;

guard9.update = function(){ 

availSpace9 += guard9.speed;
	if (trap.collision(guard9)) {
			setTimeout(function() {
			guard9.x = -1000;
			guard9.y = 0;
			//world.removeChild(guard);
			trap.alpha = 0;
	}, 250)};
	if (trap2.collision(guard9)) {
			setTimeout(function() {
			guard9.x = -1000;
			guard9.y = 0;
			//world.removeChild(guard);
			trap2.alpha = 0;
	}, 250)};

	if (availSpace9 <= 490) {
		guard9.animation = "down";
		guard9.y += guard9.speed;
	}
	if (availSpace9 >= 490) {
		guard9.y -= 0;
		guard9.animation = "up";
		guard9.y -= guard9.speed;
	}

	if (availSpace9 >= 980) {
		guard9.y += guard9.speed;
		availSpace9 = 0;
	}
};


	player.tl = new Vector(player.x, player.y);
	//top left
	player.tr = new Vector((player.x + player.width), player.y);
	//top right
	player.bl = new Vector(player.x, (player.y + player.height));
	//bottom left
	player.br = new Vector((player.x + player.width), (player.y + player.height));
	//bottom right

	player.frameWidth = 62.8;
	player.frameHeight = 49;
	player.frameCount = 20;
	player.frameRate = 7;
	player.moveRate = 7;

	//Add all of the animatios at once
	//First supply an array of animations names
	//Then supply an array of animation lengths
	//This assumes that the animations are one after the other
	player.addAnimations(["up", "down", "left", "right"], [5, 5, 5, 5]);

	//You cxan also add a single animation like this
	//the numbers are the first frame and the length of the animation
	player.addAnimation("idle", 0, 1);

	//Set the starting animation
	player.animation = "down";

	gInput.addBool(40, "down");
	gInput.addBool(38, "up");
	gInput.addBool(37, "left");
	gInput.addBool(39, "right");
	player.speed = 2;
	player.noright = false;
	player.noleft = false;
	player.noup = false;
	player.nodown = false;

	player.update = function(d) {
		if (player.y < 6.5 * u && player.x < 7 * u) {
			roofOne.alpha = 0.2;
		}
		if (player.y > 6.5 * u || player.x > 7 * u) {
			roofOne.alpha = 1;
		}
		if (player.y > 17.5 * u && player.x > 26 * u) {
			roofTwo.alpha = 0.2;
		}
		if (player.y < 17.5 * u || player.x < 26 * u) {
			roofTwo.alpha = 1;
		}
		if (player.collision(laser) && laser.active){
		    setTimeout(function() {
				screenMan.push(gameOver);
			}, 150);	    
	    }
	    if (player.y > u * 6.5 && !laser.active && !laser.msg){
	    	player.speed = 0;
			player.frameRate = 0;
			traps = 0;
	    	textSwitchOne();
	    	laser.msg = true;
	    }
	    if (player.y < u * 18.5 && !gateLeft.active && !gateLeft.msg){
	    	player.speed = 0;
			player.frameRate = 0;
			traps = 0;
	    	textSwitchTwo();
	    	gateLeft.msg = true;
	    	walls[54].bot = 70 * 5;
	    	walls[54].top = 70 * 4.5;
	    }
		
		if(player.gcollision(guard)){ ////////////////////////////////////BACK IN WITH GUARDS
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard2)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard3)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard4)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard5)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard6)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard7)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard8)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		if(player.gcollision(guard9)){
			setCookie("auto", 1, 30);
			screenMan.push(gameOver);
		}
		//If the character misn't moving, set the frameRate to 0
		//If the character had an idle animation we wouldn't need to do this
		player.tl = new Vector(player.x, player.y);
		//top left
		player.tr = new Vector((player.x + player.width), player.y);
		//top right
		player.bl = new Vector(player.x, (player.y + player.height));
		//bottom left
		player.br = new Vector((player.x + player.width), (player.y + player.height));
		//bottom right
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].tl = new Vector(boxes[i].x, boxes[i].y);
			//top left
			boxes[i].tr = new Vector((boxes[i].x + boxes[i].width), boxes[i].y);
			//top right
			boxes[i].bl = new Vector(boxes[i].x, (boxes[i].y + boxes[i].height));
			//bottom left
			boxes[i].br = new Vector((boxes[i].x + boxes[i].width), (boxes[i].y + boxes[i].height));
			//bottom right
		}
		this.frameRate = 0;
		var speed = this.speed;
		for (var i = 0; i < boxes.length; i++) {
			if (player.noleft || player.noright) {
				if (player.collisionvert(boxes[i])) {
					player.noleft = false;
					player.noright = false;
				}
			}
			if (player.noup || player.nodown) {
				if (player.collisionhorz(boxes[i])) {
					player.noup = false;
					player.nodown = false;
				}
			}
		}
		if (!gInput.down) {
			player.nodown = false;
		}
		if (!gInput.up) {
			player.noup = false;
		}
		if (!gInput.left) {
			player.noleft = false;
		}
		if (!gInput.right) {
			player.noright = false;
		}

		if (gInput.down) {
			player.noup = false;
			if (!player.nodown) {
				player.down(speed);
			}
		}
		if (gInput.up) {
			player.nodown = false;
			if (!player.noup) {
				player.up(speed);
			}
		}
		if (gInput.left) {
			player.noright = false;
			if (!player.noleft) {
				player.left(speed);
			}
		}
		if (gInput.right) {
			player.noleft = false;
			if (!player.noright) {
				player.right(speed);
			}
		}
		if (screenMan.screens.find(pauseMenu)) {
			traps = 0;
			player.speed = 0;
			player.moveRate = 0;
			player.alpha = .5;
			for (var k = 0; k < 2; k++) {
				boxes[k].alpha = .2;
			}
		} else if (!screenMan.screens.find(pauseMenu) && !screenMan.screens.find(scriptScreen)) {
			player.speed = 2;
			player.moveRate = 7;
			player.alpha = 1;
			for (var k = 0; k < 2; k++) {
				boxes[k].alpha = 1;
			}
		}
		if (gInput.place && traps != 0 && !minusTrap) {
			minusTrap = true;
			if(trapCount == 2){
				trap.x = player.x + 17.5;
				trap.y = player.y + 17.5;
				world.addChild(trap);
				trapCount--;
			} else if (trapCount == 1) {
				trap2.x = player.x + 17.5;
				trap2.y = player.y + 17.5;
				world.addChild(trap2);
				trapCount--;
			}
			traps--;
			setTimeout(function(){
				minusTrap = false;
			}, 200);
		}
		
		if (screenMan.screens.find(gameOver)) {
			traps = 0;
			setCookie(auto, 1);
			player.speed = 0;
			player.moveRate = 0;
			player.alpha = .5;
			player.remove();
			for (var k = 0; k < 2; k++) {
				boxes[k].alpha = .2;
			}
		}
		//This just makes it so the position values are always whole numbers
		//which makes the pixel sprite look better
		//otherwise we get ugly pixel antialiasing
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
	};

	/*//////////////////////////////////////////////////////////////////////////////////////////////////

	 gInput.addBool(84, "loop");
	 gInput.addBool(89, "getloop");

	 paths = new Object();
	 paths.pt = new Array();
	 paths.looping = false;
	 paths.pt0 = false;
	 paths.pt1 = false;
	 paths.pt2 = false;
	 paths.pt3 = false;
	 paths.pt[0] = new Vector();
	 paths.pt[1] = new Vector();
	 paths.pt[2] = new Vector();
	 paths.pt[3] = new Vector();

	 paths.getPaths = function() {
	 paths.pt[0].x = player.x + u;
	 paths.pt[0].y = player.y;
	 paths.pt[1].x = player.x + u;
	 paths.pt[1].y = player.y + u;
	 paths.pt[2].x = player.x;
	 paths.pt[2].y = player.y + u;
	 paths.pt[3].x = player.x;
	 paths.pt[3].y = player.y;
	 };

	 var isx = function(pt){
	 if(player.x > pt.x + nh && player.x < pt.x + ph){
	 return true;
	 }

	 return false;
	 };
	 var isy = function(pt){
	 if(player.y > pt.y + nh && player.y < pt.y + ph){
	 return true;
	 }
	 return false;
	 };

	 /////////////////////////////////////////////////////////////////////////////////////////////*/

	function startGame4() {
		textLevelThree();
		world.addChild(gateLeft);
		world.addChild(gateRight);
		world.addChild(laser);
	}


	world.draw = function(ctx) {
		this.drawChildren(ctx);
		var bigW = 30;
		var smallW = 11;
		/*ctx.fillStyle = "lightgreen";
		ctx.fillText("noup " + player.noup, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4));
		ctx.fillText("nodown " + player.nodown, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 10);
		ctx.fillText("noleft " + player.noleft, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 20);
		ctx.fillText("noright " + player.noright, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 30);*/
		//ctx.fillText("lights[4].xy1.x: " + lights[4].xy1.y, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 40);
		//ctx.fillText("lights[4].origin.x: " + lights[4].origin.y, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 50);
		//ctx.fillText("continue cookie: " + getCookie("continue"), canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 40);
		//ctx.fillText("auto cookie: " + getCookie(auto), canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 50);
		ctx.fillStyle = "white";
		ctx.font="30px Verdana";
		ctx.fillText("x" + boxcount, canvas.width/2 + -world.x + (70 * 4) - 20, canvas.height/2 + -world.y + (70 * 4) + 10);
		ctx.fillText("x" + traps, canvas.width/2 + -world.x + (70 * 4) + 90, canvas.height/2 + -world.y + (70 * 4) + 10);
		
		ctx.strokeStyle = "orange";
		ctx.lineWidth = smallW;
		//var g = 76;
		for (var i = 0; i < lights.length; i++) {
			ctx.beginPath();
			ctx.moveTo(lights[i].origin.x, lights[i].origin.y);
			ctx.lineTo(lights[i].lp[0].x, lights[i].lp[0].y);
			ctx.stroke();
			ctx.lineWidth = bigW;
			ctx.beginPath();
			ctx.moveTo(lights[i].origin.x, lights[i].origin.y);
			ctx.lineTo(lights[i].lp[1].x, lights[i].lp[1].y);
			ctx.stroke();
			ctx.lineWidth = smallW;
			ctx.beginPath();
			ctx.moveTo(lights[i].origin.x, lights[i].origin.y);
			ctx.lineTo(lights[i].lp[2].x, lights[i].lp[2].y);
			ctx.stroke();
			/*ctx.beginPath();
			 ctx.moveTo(walls[g].left, walls[g].top);
			 ctx.lineTo(walls[g].right, walls[g].bot);
			 ctx.stroke();*/
		}

	};

	// CONTROL CHECKS
	player.up = function(speed) {
		var after = this.y - player.speed;
		for (var i = 0; i < boxes.length; i++) {
			if (upcollide(after, boxes[i]) || wallcollideup(after)) {
				this.noup = true;
			}
		}
		if (!this.noup) {
			if (world.y < 0 && player.y < bg.height - ycenter) {
				world.y += player.speed;
			}
			this.animation = "up";
			this.y = after;
			this.frameRate = this.moveRate;
		}
	};
	player.down = function(speed) {
		var after = this.y + player.speed;
		for (var i = 0; i < boxes.length; i++) {
			if (downcollide(after, boxes[i]) || wallcollidedown(after)) {
				this.nodown = true;
			}
		}
		if (!this.nodown) {
			if (player.y + 315 < bg.height && player.y > ycenter) {
				world.y -= player.speed;
			}
			this.animation = "down";
			this.y = after;
			this.frameRate = this.moveRate;
		}

	};
	player.left = function(speed) {
		var after = this.x - player.speed;
		for (var i = 0; i < boxes.length; i++) {
			if (leftcollide(after, boxes[i]) || wallcollideleft(after)) {
				this.noleft = true;
			}
		}
		if (!this.noleft) {
			if (world.x < 0 && player.x < bg.width - xcenter) {
				//console.log(player.speed);
				world.x += player.speed;
			}
			this.animation = "left";
			this.x = after;
			this.frameRate = this.moveRate;
		}
	};
	player.right = function(speed) {
		var after = this.x + player.speed;
		for (var i = 0; i < boxes.length; i++) {
			if (rightcollide(after, boxes[i]) || wallcollideright(after)) {
				this.noright = true;
			}
		}
		if (!this.noright) {
			if (player.x + 420 < bg.width && player.x > xcenter) {
				world.x -= player.speed;
			}
			this.animation = "right";
			this.x = after;
			this.frameRate = this.moveRate;
		}
	};

	//BOX COLLIDE CHECKS
	var upcollide = function(after, obj) {
		if (after + nh > obj.y && after + nh < (obj.y + obj.height) && !player.collisionvert(obj)) {
			return true;
		} else {
			return false;
		}
	};

	var downcollide = function(after, obj) {
		if (((after + player.height + nh) < (obj.y + obj.height)) && ((((after + player.height + nh) > (obj.y) && !player.collisionvert(obj))))) {
			return true;
		} else {
			return false;
		}
	};

	var leftcollide = function(after, obj) {
		if ((after > obj.x + nh && ((after + nh < (obj.x + obj.width) && !player.collisionhorz(obj))))) {
			return true;
		} else {
			return false;
		}
	};

	var rightcollide = function(after, obj) {
		if (((after + player.width + nh) < (obj.x + obj.width)) && ((((after + player.width) > (obj.x + nh) && !player.collisionhorz(obj))))) {
			return true;
		} else {
			return false;
		}
	};

	var ph = player.speed;
	var nh = -player.speed;

	//WALL COLLIDE CHECKS
	var wallcollideup = function(after) {
		for (var i = 0; i < walls.length; i++) {
			if (after + nh > walls[i].top && after + nh < (walls[i].bot) && player.wallcollisionvert(i)) {
				return true;
			}
		}
		return false;
	};
	var wallcollidedown = function(after) {
		for (var i = 0; i < walls.length; i++) {
			if ((after + player.width + nh) < (walls[i].bot) && (after + player.width) > (walls[i].top + nh) && player.wallcollisionvert(i)) {
				return true;
			}
		}
		return false;
	};
	var wallcollideleft = function(after) {
		for (var i = 0; i < walls.length; i++) {
			if (after > walls[i].left + nh && after + nh < walls[i].right && player.wallcollisionhorz(i)) {
				return true;
			}
		}
		return false;
	};
	var wallcollideright = function(after) {
		for (var i = 0; i < walls.length; i++) {
			if ((after + player.width + nh) < (walls[i].right) && (after + player.width) > (walls[i].left + nh) && player.wallcollisionhorz(i)) {
				return true;
			}
		}
		return false;
	};

	//BOX SLIDE OFF CHECKS
	player.collisionvert = function(sprite) {
		if (this.x + this.width < sprite.x + ph || this.x > sprite.x + sprite.width + nh) {
			return true;
		} else {
			return false;
		}
	};
	player.collisionhorz = function(sprite) {
		if (this.y + this.height < sprite.y + ph || this.y > sprite.y + sprite.height + nh) {
			return true;
		} else {
			return false;
		}
	};

	//WALL SLIDE OFF CHECKS
	player.wallcollisionhorz = function(i) {
		if (this.y > walls[i].bot + nh || this.y + this.height < walls[i].top + ph) {
			return false;
		} else {
			return true;
		}
	};
	player.wallcollisionvert = function(i) {
		if (this.x > walls[i].right + nh || this.x + this.width < walls[i].left + ph) {
			return false;
		} else {
			return true;
		}
	};
	
	extraItemOne.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	extraItemTwo.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	winItem.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	switchOne.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	switchTwo.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	

	function intersect(l0p0, l0p1, l1p0, l1p1) {
		var coll = new Object();
		coll.occurred = false;
		coll.point = new Vector(0, 0);

		var qp = l1p0.sub(l0p0);
		var r = l0p1.sub(l0p0);
		var s = l1p1.sub(l1p0);
		var rXs = r.cross(s);
		var qpXr = qp.cross(r);
		var qpXs = qp.cross(s);

		if (qpXr.length == 0 && qpXs.length == 0) {//colinear
			var min0 = Math.min(l0p0.x, l0p1.x);
			var max0 = Math.min(l0p0.x, l0p1.x);
			var min1 = Math.min(l1p0.x, l1p1.x);
			var max1 = Math.min(l1p0.x, l1p1.x);

			coll.occurred = (min0 <= max1) && (min1 <= max0);
			coll.point = l0p0.add(l0p1).add(l1p0).add(l1p1).div(4);
		} else if (rXs.length == 0) {//parallel
			coll.occurred = false;
		} else {
			var t = qpXs.div(rXs.z).z;
			var u = qpXr.div(rXs.z).z;

			coll.occurred = (t >= 0 && t <= 1 && u >= 0 && u <= 1);
			coll.point = l0p0.add(r.mult(t));
		}
		return coll;
	}

	var pcollisions = new Array();

	startGame4();
	
	var trapGive = false;

	var done1 = false;
	var done2 = false;
	var post1 = false;
	var post2 = false;
	world.update = function(d) {
		//player with light collisions HERE///////////////////lights.edit////////////////////////////////////////
		if (!cursor.active && levelScriptThree) {
			cursor.moving = true;
			setTimeout(function() {
				cursor.moving = false;
			}, 150);
			screenMan.push(inventory);
			world.addChild(cursor);
			world.addChild(switchOne);
			world.addChild(switchTwo);
			world.addChild(roofOne);
			world.addChild(roofTwo);
			world.addChild(gateLeft);
			world.addChild(gateRight);
			world.addChild(laser);
			cursor.active = true;
		}
		if (switchOneDone && !post1){
			post1 = true;
        	minusTrap = true;
        	setTimeout(function() {
				traps = trapCount;
				minusTrap = false;
			}, 500);
        }
        if (switchTwoDone && !post2){
        	post2 = true;
        	minusTrap = true;
        	setTimeout(function() {
				traps = trapCount;
				minusTrap = false;
			}, 500);
        }
		if (winItem.collision(player) && !levelDone && !laser.active) {
			for (var k = 0; k < 2; k++) {
				boxes[k].alpha = 0;
			}
			player.speed = 0;
			laser.alpha = 0;
			guard8.x = -1000;
			guard9.x = -1000;
			textEndLevelThree();
			levelDone = true;
		}
		if (extraItemOne.collision(player)) {
			setTimeout(function() {
				extraItemOne.x = 0;
				extraItemOne.y = 0;
				world.removeChild(extraItemOne);
				extraItemOne.alpha = 0;
				setCookie("ex3", 1);
			}, 250);
		}
		if (extraItemTwo.collision(player)) {
			setTimeout(function() {
				extraItemTwo.x = 0;
				extraItemTwo.y = 0;
				world.removeChild(extraItemTwo);
				extraItemTwo.alpha = 0;
				setCookie("ex4", 1);
			}, 250);
		}
		
		if (switchOne.collision(player) && !done1) {
			done1 = true;
			switchOne.image = Textures.load("Resources/switch_1_off.png");
			sounds.play("Audio/boxbeingdroppedondirt_.mp3");
			laser.image = Textures.load("Resources/lazer_turned_off.png");
			laser.active = false;
		}
		if (switchTwo.collision(player) && !done2) {
			done2 = true;
			switchTwo.image = Textures.load("Resources/switch_2_off.png");
			sounds.play("Audio/boxbeingdroppedondirt_.mp3");
			gateLeft.x = u * 11.25 - 1;
			gateRight.x = u * 18;
			gateLeft.active = false;
		}

		pcollisions[0] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[0]);
		pcollisions[1] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[0]);
		pcollisions[2] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[1]);
		pcollisions[3] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[1]);
		pcollisions[4] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[2]);
		pcollisions[5] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[2]);
		//[0]
		pcollisions[6] = intersect(player.tl, player.br, lights[1].origin, lights[1].lp[0]);
		pcollisions[7] = intersect(player.tr, player.bl, lights[1].origin, lights[1].lp[0]);
		pcollisions[8] = intersect(player.tl, player.br, lights[1].origin, lights[1].lp[1]);
		pcollisions[9] = intersect(player.tr, player.bl, lights[1].origin, lights[1].lp[1]);
		pcollisions[10] = intersect(player.tl, player.br, lights[1].origin, lights[1].lp[2]);
		pcollisions[11] = intersect(player.tr, player.bl, lights[1].origin, lights[1].lp[2]);
		//[1]
		pcollisions[12] = intersect(player.tl, player.br, lights[2].origin, lights[2].lp[0]);
		pcollisions[13] = intersect(player.tr, player.bl, lights[2].origin, lights[2].lp[0]);
		pcollisions[14] = intersect(player.tl, player.br, lights[2].origin, lights[2].lp[1]);
		pcollisions[15] = intersect(player.tr, player.bl, lights[2].origin, lights[2].lp[1]);
		pcollisions[16] = intersect(player.tl, player.br, lights[2].origin, lights[2].lp[2]);
		pcollisions[17] = intersect(player.tr, player.bl, lights[2].origin, lights[2].lp[2]);
		//[2]
		pcollisions[18] = intersect(player.tl, player.br, lights[3].origin, lights[3].lp[0]);
		pcollisions[19] = intersect(player.tr, player.bl, lights[3].origin, lights[3].lp[0]);
		pcollisions[20] = intersect(player.tl, player.br, lights[3].origin, lights[3].lp[1]);
		pcollisions[21] = intersect(player.tr, player.bl, lights[3].origin, lights[3].lp[1]);
		pcollisions[22] = intersect(player.tl, player.br, lights[3].origin, lights[3].lp[2]);
		pcollisions[23] = intersect(player.tr, player.bl, lights[3].origin, lights[3].lp[2]);
		//[3]
		pcollisions[24] = intersect(player.tl, player.br, lights[4].origin, lights[4].lp[0]);
		pcollisions[25] = intersect(player.tr, player.bl, lights[4].origin, lights[4].lp[0]);
		pcollisions[26] = intersect(player.tl, player.br, lights[4].origin, lights[4].lp[1]);
		pcollisions[27] = intersect(player.tr, player.bl, lights[4].origin, lights[4].lp[1]);
		pcollisions[28] = intersect(player.tl, player.br, lights[4].origin, lights[4].lp[2]);
		pcollisions[29] = intersect(player.tr, player.bl, lights[4].origin, lights[4].lp[2]);
		//[4]
		pcollisions[30] = intersect(player.tl, player.br, lights[5].origin, lights[5].lp[0]);
		pcollisions[31] = intersect(player.tr, player.bl, lights[5].origin, lights[5].lp[0]);
		pcollisions[32] = intersect(player.tl, player.br, lights[5].origin, lights[5].lp[1]);
		pcollisions[33] = intersect(player.tr, player.bl, lights[5].origin, lights[5].lp[1]);
		pcollisions[34] = intersect(player.tl, player.br, lights[5].origin, lights[5].lp[2]);
		pcollisions[35] = intersect(player.tr, player.bl, lights[5].origin, lights[5].lp[2]);
		//[5]
		pcollisions[36] = intersect(player.tl, player.br, lights[6].origin, lights[6].lp[0]);
		pcollisions[37] = intersect(player.tr, player.bl, lights[6].origin, lights[6].lp[0]);
		pcollisions[38] = intersect(player.tl, player.br, lights[6].origin, lights[6].lp[1]);
		pcollisions[39] = intersect(player.tr, player.bl, lights[6].origin, lights[6].lp[1]);
		pcollisions[40] = intersect(player.tl, player.br, lights[6].origin, lights[6].lp[2]);
		pcollisions[41] = intersect(player.tr, player.bl, lights[6].origin, lights[6].lp[2]);
		//[6]
		pcollisions[42] = intersect(player.tl, player.br, lights[7].origin, lights[7].lp[0]);
		pcollisions[43] = intersect(player.tr, player.bl, lights[7].origin, lights[7].lp[0]);
		pcollisions[44] = intersect(player.tl, player.br, lights[7].origin, lights[7].lp[1]);
		pcollisions[45] = intersect(player.tr, player.bl, lights[7].origin, lights[7].lp[1]);
		pcollisions[46] = intersect(player.tl, player.br, lights[7].origin, lights[7].lp[2]);
		pcollisions[47] = intersect(player.tr, player.bl, lights[7].origin, lights[7].lp[2]);
		//[7]
		pcollisions[48] = intersect(player.tl, player.br, lights[8].origin, lights[8].lp[0]);
		pcollisions[49] = intersect(player.tr, player.bl, lights[8].origin, lights[8].lp[0]);
		pcollisions[50] = intersect(player.tl, player.br, lights[8].origin, lights[8].lp[1]);
		pcollisions[51] = intersect(player.tr, player.bl, lights[8].origin, lights[8].lp[1]);
		pcollisions[52] = intersect(player.tl, player.br, lights[8].origin, lights[8].lp[2]);
		pcollisions[53] = intersect(player.tr, player.bl, lights[8].origin, lights[8].lp[2]);
		//[8]
		pcollisions[54] = intersect(player.tl, player.br, lights[9].origin, lights[9].lp[0]);
		pcollisions[55] = intersect(player.tr, player.bl, lights[9].origin, lights[9].lp[0]);
		pcollisions[56] = intersect(player.tl, player.br, lights[9].origin, lights[9].lp[1]);
		pcollisions[57] = intersect(player.tr, player.bl, lights[9].origin, lights[9].lp[1]);
		pcollisions[58] = intersect(player.tl, player.br, lights[9].origin, lights[9].lp[2]);
		pcollisions[59] = intersect(player.tr, player.bl, lights[9].origin, lights[9].lp[2]);
		//[9]
		pcollisions[60] = intersect(player.tl, player.br, lights[10].origin, lights[10].lp[0]);
		pcollisions[61] = intersect(player.tr, player.bl, lights[10].origin, lights[10].lp[0]);
		pcollisions[62] = intersect(player.tl, player.br, lights[10].origin, lights[10].lp[1]);
		pcollisions[63] = intersect(player.tr, player.bl, lights[10].origin, lights[10].lp[1]);
		pcollisions[64] = intersect(player.tl, player.br, lights[10].origin, lights[10].lp[2]);
		pcollisions[65] = intersect(player.tr, player.bl, lights[10].origin, lights[10].lp[2]);
		//[10]
		pcollisions[66] = intersect(player.tl, player.br, lights[11].origin, lights[11].lp[0]);
		pcollisions[67] = intersect(player.tr, player.bl, lights[11].origin, lights[11].lp[0]);
		pcollisions[68] = intersect(player.tl, player.br, lights[11].origin, lights[11].lp[1]);
		pcollisions[69] = intersect(player.tr, player.bl, lights[11].origin, lights[11].lp[1]);
		pcollisions[70] = intersect(player.tl, player.br, lights[11].origin, lights[11].lp[2]);
		pcollisions[71] = intersect(player.tr, player.bl, lights[11].origin, lights[11].lp[2]);
		//[11]
		pcollisions[72] = intersect(player.tl, player.br, lights[12].origin, lights[12].lp[0]);
		pcollisions[73] = intersect(player.tr, player.bl, lights[12].origin, lights[12].lp[0]);
		pcollisions[74] = intersect(player.tl, player.br, lights[12].origin, lights[12].lp[1]);
		pcollisions[75] = intersect(player.tr, player.bl, lights[12].origin, lights[12].lp[1]);
		pcollisions[76] = intersect(player.tl, player.br, lights[12].origin, lights[12].lp[2]);
		pcollisions[77] = intersect(player.tr, player.bl, lights[12].origin, lights[12].lp[2]);
		//[12]

		var lose = false;
		if (!lose) {
			for (var i = 0; i < pcollisions.length; i++) {
				if ((pcollisions[i] != undefined) && pcollisions[i].occurred) {
					setCookie(auto, 1);
					screenMan.push(gameOver);
					lose = true;
					break;
				}
			}
		}
		this.updateChildren(d);
	};
};