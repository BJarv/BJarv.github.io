function start2() {//////////////////////////////////////////////////////
	var bg = new Sprite();

	bg.width = 1190;
	bg.height = 2240;

	clearColor = [0, .5, .5, .5];
	var can = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	world.x = -70 * 1;
	world.y = -70 * 22;

	var u = 70;

	//
	var gxv = 8;
	var gyv = 15;
	//

	var auto = "auto2";
	setCookie(auto, 0);
	setCookie("continue", 1);

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

	l360.update = function(d) {
		this.rot += 0.02;
		this.ms0 = Math.sin(this.rot);
		this.mc0 = Math.cos(this.rot);
		this.ms1 = Math.sin(this.rot + .15);
		this.mc1 = Math.cos(this.rot + .15);
		this.ms2 = Math.sin(this.rot + .3);
		this.mc2 = Math.cos(this.rot + .3);
	};

	var lights = new Array();
	//NEW LIGHTS HERE/////////////////////lights.edit//////////////////////////////////////////////////////////
	//lights[0] = new Light(70 * 3.5, 70 * 4.5, 1, "down");
	lights[0] = new Light(u * 5.5, u * 27.3, 2, "up", 1);
	lights[1] = new Light(u * 5.5, u * 27.3, 2, "down", 1);
	lights[2] = new Light(u * 7.5, u * 23.7, 0, "left", 0);
	lights[3] = new Light(u * 9.5, u * 18.5, 0, "left", 0);
	lights[4] = new Light(u * 9.5, u * 14.5, 0, "left", 1);
	lights[5] = new Light(u * 5.5, u * 10.3, 0, "right", 1);
	lights[6] = new Light(u * 9.5, u * 6.3, 0, "down", 0);
	lights[7] = new Light(u * 5.2, u * 16.2, 0, "right", 0);

	var ll = 2.3;

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

		/*
		 *      points.x0 = points.origin.x + l90.ns0 * -u * ll; //starts up, clockwise to right
		 *      points.y0 = points.origin.y + l90.nc0 * -u * ll;
		 *
		 * 		points.x0 = points.origin.x + l90.nc0 * u * ll; //starts right, counterclockwise to up
		 *      points.y0 = points.origin.y + l90.ns0 * u * ll;
		 *
		 */
		if (points.clock == 0) {//////////////CLOCKWISE
			if (points.rotation == 0) {
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
			} else if (points.rotation == 1) {
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
			} else if (points.rotation == 2) {
				if (points.direc == "up") {
					points.x0 = points.origin.x + l360.mc0 * u * ll;
					points.y0 = points.origin.y + l360.ms0 * u * ll;
					points.x1 = points.origin.x + l360.mc1 * u * ll;
					points.y1 = points.origin.y + l360.ms1 * u * ll;
					points.x2 = points.origin.x + l360.mc2 * u * ll;
					points.y2 = points.origin.y + l360.ms2 * u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l360.mc0 * -u * ll;
					points.y0 = points.origin.y + l360.ms0 * -u * ll;
					points.x1 = points.origin.x + l360.mc1 * -u * ll;
					points.y1 = points.origin.y + l360.ms1 * -u * ll;
					points.x2 = points.origin.x + l360.mc2 * -u * ll;
					points.y2 = points.origin.y + l360.ms2 * -u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l360.ms0 * -u * ll;
					points.y0 = points.origin.y + l360.mc0 * -u * ll;
					points.x1 = points.origin.x + l360.ms1 * -u * ll;
					points.y1 = points.origin.y + l360.mc1 * -u * ll;
					points.x2 = points.origin.x + l360.ms2 * -u * ll;
					points.y2 = points.origin.y + l360.mc2 * -u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l360.ms0 * u * ll;
					points.y0 = points.origin.y + l360.mc0 * u * ll;
					points.x1 = points.origin.x + l360.ms1 * u * ll;
					points.y1 = points.origin.y + l360.mc1 * u * ll;
					points.x2 = points.origin.x + l360.ms2 * u * ll;
					points.y2 = points.origin.y + l360.mc2 * u * ll;
				}
			}
		} else if (points.clock == 1) {/////////////COUNTERCLOCKWISE
			if (points.rotation == 0) {
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
			} else if (points.rotation == 1) {
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
			} else if (points.rotation == 2) {
				if (points.direc == "up") {
					points.x0 = points.origin.x + l360.ms0 * -u * ll;
					points.y0 = points.origin.y + l360.mc0 * -u * ll;
					points.x1 = points.origin.x + l360.ms1 * -u * ll;
					points.y1 = points.origin.y + l360.mc1 * -u * ll;
					points.x2 = points.origin.x + l360.ms2 * -u * ll;
					points.y2 = points.origin.y + l360.mc2 * -u * ll;
				} else if (points.direc == "down") {
					points.x0 = points.origin.x + l360.ms0 * u * ll;
					points.y0 = points.origin.y + l360.mc0 * u * ll;
					points.x1 = points.origin.x + l360.ms1 * u * ll;
					points.y1 = points.origin.y + l360.mc1 * u * ll;
					points.x2 = points.origin.x + l360.ms2 * u * ll;
					points.y2 = points.origin.y + l360.mc2 * u * ll;
				} else if (points.direc == "right") {
					points.x0 = points.origin.x + l360.ms0 * u * ll;
					points.y0 = points.origin.y + l360.mc0 * u * ll;
					points.x1 = points.origin.x + l360.ms1 * u * ll;
					points.y1 = points.origin.y + l360.mc1 * u * ll;
					points.x2 = points.origin.x + l360.ms2 * u * ll;
					points.y2 = points.origin.y + l360.mc2 * u * ll;
				} else if (points.direc == "left") {
					points.x0 = points.origin.x + l360.ms0 * -u * ll;
					points.y0 = points.origin.y + l360.mc0 * -u * ll;
					points.x1 = points.origin.x + l360.ms1 * -u * ll;
					points.y1 = points.origin.y + l360.mc1 * -u * ll;
					points.x2 = points.origin.x + l360.ms2 * -u * ll;
					points.y2 = points.origin.y + l360.mc2 * -u * ll;
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

		this.xy0.x = points.x0;
		this.xy0.y = points.y0;
		this.xy1.x = points.x1;
		this.xy1.y = points.y1;
		this.xy2.x = points.x2;
		this.xy2.y = points.y2;

		//box collisions//////////////////////////////////////////////////////////////////////////////
		this.bcollisions[0] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[1] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[2] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[3] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[4] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[5] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[6] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[7] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[8] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[9] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[10] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[11] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[12] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[0].tr, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[18] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[19] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[20] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[21] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[22] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[23] = intersect(boxes[1].tr, boxes[1].br, this.origin, this.xy2);

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

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;

	};
	lights[5].update = function(d) {
		var points = new Object();
		//points.x0 = this.x0;
		//points.y0 = this.y0;
		//points.x1 = this.x1;
		//points.y1 = this.y1;
		//points.x2 = this.x2;
		//points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;

		points.x0 = points.origin.x + l90.nc0 * u * 2.6;
		points.y0 = points.origin.y + l90.ns0 * u * 2.6;
		points.x1 = points.origin.x + l90.nc1 * u * 2.6;
		points.y1 = points.origin.y + l90.ns1 * u * 2.6;
		points.x2 = points.origin.x + l90.nc2 * u * 2.6;
		points.y2 = points.origin.y + l90.ns2 * u * 2.6;

		this.xy0.x = points.x0;
		this.xy0.y = points.y0;
		this.xy1.x = points.x1;
		this.xy1.y = points.y1;
		this.xy2.x = points.x2;
		this.xy2.y = points.y2;

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
		this.bcollisions[12] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[0].bl, boxes[0].br, this.origin, this.xy2);
		this.bcollisions[18] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[19] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[20] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy2);
		this.bcollisions[21] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy0);
		this.bcollisions[22] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy1);
		this.bcollisions[23] = intersect(boxes[1].bl, boxes[1].br, this.origin, this.xy2);

		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {////////////////////////////////////
				if (i % 3 == 0) {//MUST SCALE WITH LIGHT COUNT
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
	lights[6].update = function(d) {
		var points = new Object();
		//points.x0 = this.x0;
		//points.y0 = this.y0;
		//points.x1 = this.x1;
		//points.y1 = this.y1;
		//points.x2 = this.x2;
		//points.y2 = this.y2;

		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points.clock = this.clock;

		points.x0 = points.origin.x + l90.ns0 * u * 2.6;
		points.y0 = points.origin.y + l90.nc0 * u * 2.6;
		points.x1 = points.origin.x + l90.ns1 * u * 2.6;
		points.y1 = points.origin.y + l90.nc1 * u * 2.6;
		points.x2 = points.origin.x + l90.ns2 * u * 2.6;
		points.y2 = points.origin.y + l90.nc2 * u * 2.6;

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
		this.bcollisions[12] = intersect(boxes[0].tr, boxes[0].tl, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[0].tr, boxes[0].tl, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[0].tr, boxes[0].tl, this.origin, this.xy2);
		this.bcollisions[15] = intersect(boxes[0].tr, boxes[0].tl, this.origin, this.xy0);
		this.bcollisions[16] = intersect(boxes[0].tr, boxes[0].tl, this.origin, this.xy1);
		this.bcollisions[17] = intersect(boxes[0].tr, boxes[0].tl, this.origin, this.xy2);
		this.bcollisions[18] = intersect(boxes[1].tr, boxes[1].tl, this.origin, this.xy0);
		this.bcollisions[19] = intersect(boxes[1].tr, boxes[1].tl, this.origin, this.xy1);
		this.bcollisions[20] = intersect(boxes[1].tr, boxes[1].tl, this.origin, this.xy2);
		this.bcollisions[21] = intersect(boxes[1].tr, boxes[1].tl, this.origin, this.xy0);
		this.bcollisions[22] = intersect(boxes[1].tr, boxes[1].tl, this.origin, this.xy1);
		this.bcollisions[23] = intersect(boxes[1].tr, boxes[1].tl, this.origin, this.xy2);

		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {////////////////////////////////////
				if (i % 3 == 0) {//MUST SCALE WITH LIGHT COUNT
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
	var stop = false;
	lights[7].update = function(d) {
		var points = new Object();
		if (!stop) {
			stop = true;

			points.rotation = this.rotation;
			points.direc = this.direc;
			points.origin = this.origin;
			points.clock = this.clock;

			points.x0 = points.origin.x + l90.mc0 * u * ll;
			points.y0 = points.origin.y + l90.ms0 * u * ll;
			points.x1 = points.origin.x + l90.mc1 * u * ll;
			points.y1 = points.origin.y + l90.ms1 * u * ll;
			points.x2 = points.origin.x + l90.mc2 * u * ll;
			points.y2 = points.origin.y + l90.ms2 * u * ll;

			this.lp[0].x = points.x0;
			this.lp[0].y = points.y0;
			this.lp[1].x = points.x1;
			this.lp[1].y = points.y1;
			this.lp[2].x = points.x2;
			this.lp[2].y = points.y2;
		}
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

	var extraItem = new Sprite();
	extraItem.image = Textures.load("Resources/bonus_item.png");
	extraItem.width = 50;
	extraItem.height = 40;
	extraItem.x = 70 * 11 + 12;
	extraItem.y = 70 * 28 + 17;

	var winItem = new Sprite();
	winItem.image = Textures.load("Resources/briefcase.png");
	winItem.width = 50;
	winItem.height = 40;
	winItem.x = 70 * 6 + 13;
	winItem.y = 70 * 3 + 35;

	var roof = new Sprite();
	roof.image = Textures.load("Resources/roof.png");
	roof.index = -1;
	roof.width = u * 3.6 + 4;
	roof.height = u * 3.75 + 6;
	roof.x = u * 4.5 + 12;
	roof.y = u * 1.25 - 3;

	var dirtcount = 15;
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
	dirts[0] = dirts.at(5, 23);
	dirts[1] = dirts.at(6, 23);
	dirts[2] = dirts.at(6, 22);
	dirts[3] = dirts.at(2, 18);
	dirts[4] = dirts.at(2, 19);
	dirts[5] = dirts.at(3, 18);
	dirts[6] = dirts.at(3, 19);
	dirts[7] = dirts.at(6, 7);
	dirts[8] = dirts.at(6, 8);
	dirts[9] = dirts.at(6, 9);
	dirts[10] = dirts.at(7, 7);
	dirts[11] = dirts.at(7, 8);
	dirts[12] = dirts.at(7, 9);
	dirts[13] = dirts.at(8, 8);
	dirts[14] = dirts.at(8, 9);

	var walls = new Array();
	for (var i = 0; i < 72; i++) {////////////////////////////////////////////////////////////walls array
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
	walls[0] = walls.l(2, 28, 30);
	walls[1] = walls.u(2, 28, 8);
	walls[2] = walls.d(2, 30, 10);
	walls[3] = walls.r(10, 25, 30);
	walls[4] = walls.d(2, 27, 8);
	walls[5] = walls.l(8, 27, 28);
	walls[6] = walls.u(4, 25, 10);
	walls[7] = walls.r(4, 24, 25);
	walls[8] = walls.l(2, 21, 27);
	walls[9] = walls.d(4, 24, 7);
	walls[10] = walls.r(7, 23, 24);
	walls[11] = walls.d(7, 23, 13);
	walls[12] = walls.r(15, 21, 23);
	walls[13] = walls.u(8, 21, 15);
	walls[14] = walls.d(2, 21, 5);
	walls[15] = walls.r(5, 20, 21);
	walls[16] = walls.r(8, 19, 21);
	walls[17] = walls.d(2, 20, 5);
	walls[18] = walls.d(8, 19, 9);
	walls[19] = walls.r(9, 18, 19);
	walls[20] = walls.d(9, 18, 10);
	walls[21] = walls.r(10, 15, 18);
	walls[22] = walls.u(9, 15, 10);
	walls[23] = walls.r(9, 14, 15);
	walls[24] = walls.d(9, 14, 12);
	walls[25] = walls.r(12, 6, 14);
	walls[26] = walls.u(10, 6, 12);
	walls[27] = walls.l(10, 6, 7);
	walls[28] = walls.u(9, 7, 10);
	walls[29] = walls.r(9, 6, 7);
	walls[30] = walls.u(7, 6, 9);
	walls[31] = walls.r(7, 5, 6);
	walls[32] = walls.l(6, 5, 6);
	walls[33] = walls.u(5, 6, 6);
	walls[34] = walls.l(5, 6, 10);
	walls[35] = walls.d(5, 10, 6);
	walls[36] = walls.l(6, 10, 11);
	walls[37] = walls.u(6, 11, 10);
	walls[38] = walls.l(10, 11, 12);
	walls[39] = walls.u(2, 12, 10);
	walls[40] = walls.l(2, 12, 20);
	walls[41] = walls.u(4, 18, 6);
	walls[42] = walls.l(6, 14, 18);
	walls[43] = walls.d(4, 14, 6);
	walls[44] = walls.r(4, 14, 18);
	walls[45] = walls.l(13, 23, 24);
	walls[46] = walls.r(14, 23, 24);
	walls[47] = walls.d(14, 23, 15);
	walls[48] = walls.u(14, 24, 16);
	walls[49] = walls.u(11, 24, 13);
	walls[50] = walls.l(11, 24, 27);
	walls[51] = walls.d(11, 27, 13);
	walls[52] = walls.l(13, 27, 28);
	walls[53] = walls.u(11, 28, 13);
	walls[54] = walls.l(11, 28, 29);
	walls[55] = walls.d(11, 29, 14);
	walls[56] = walls.r(14, 27, 29);
	walls[57] = walls.d(14, 27, 16);
	walls[58] = walls.r(16, 24, 27);
	walls[59] = walls.u(12, 25, 13);
	walls[60] = walls.l(13, 25, 26);
	walls[61] = walls.d(12, 26, 13);
	walls[62] = walls.r(12, 25, 26);
	walls[63] = walls.u(14, 25, 15);
	walls[64] = walls.l(15, 25, 26);
	walls[65] = walls.d(14, 26, 15);
	walls[66] = walls.r(14, 25, 26);
	walls[67] = walls.d(5, 5, 6);
	walls[68] = walls.d(7, 5, 8);
	walls[69] = walls.r(8, 2, 5);
	walls[70] = walls.l(5, 2, 5);
	walls[71] = walls.u(5, 2, 8);

	var boxcount = 2;
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
	cursor.x = 70 * 4;
	cursor.y = 70 * 26;
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
				if (this.y != 70) {
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
				if (this.x != 70) {
					this.x -= this.speed;
				}
				if (world.x < -72 && this.x < xcenter + 70 * 4) {
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
			if (gInput.place && boxcount > 1 && this.isdirt()) {
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
				world.x = -70 * 1;
				world.y = -70 * 22;
				daysong.pause();
 				nightsong.play();
 				gameScreen2.image = Textures.load("Resources/level_1_no_roof.png");
				world.addChild(player);
				world.addChild(guard);
				world.addChild(guard2);
				world.addChild(guard3);
				world.addChild(guard4);
				world.addChild(extraItem);
				world.addChild(winItem);
				//textOne();
				setTimeout(function() {
					traps = 1;
				}, 300);
				world.addChild(l90);
				world.addChild(l180);
				world.addChild(l360);
				for (var i = 0; i < lights.length; i++) {
					world.addChild(lights[i]);
				}
				//hardcoded vision shortener
				/*if (!((boxes[0].x == 70 * 8 && boxes[0].y == 70 * 6) || (boxes[1].x == 70 * 8 && boxes[1].y == 70 * 6))) {
				 guard.vision = 1;
				 } else {
				 guard.vision = 0;
				 }*/
				this.remove();
			}
		}
	};

	//Right guard (left) 1
	var guard = new Sprite();
	guard.image = Textures.load("Resources/bat_full.png");
	guard.width = 67;
	guard.height = 67;
	guard.x = 70 * 11;
	guard.y = 70 * 25;
	guard.alerted = false;
	guard.frameWidth = 64;
	guard.frameHeight = 51;
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

	};

	//left-side guard (door)
	var guard2 = new Sprite();
	guard2.image = guard.image;
	guard2.width = 67;
	guard2.height = 67;
	guard2.x = 70 * 3;
	guard2.y = 70 * 21;
	guard2.alerted = false;
	guard2.frameWidth = 64;
	guard2.frameHeight = 51;
	guard2.frameCount = 20;
	guard2.frameRate = 7;
	guard2.moveRate = 7;
	guard2.speed = 2;
	guard2.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

	var availSpace2 = 0;

	guard2.update = function() {
		if (trap.collision(guard2)) {
			setTimeout(function() {
				guard2.x = 0;
				guard2.y = 0;
				world.removeChild(guard2);
				trap.alpha = 0;
			}, 250);
		}

		availSpace2 += guard2.speed;

		if (availSpace2 <= 140) {
			guard2.animation = "down";
			//guard2.frameRate = guard2.moveRate;
			guard2.y += guard2.speed;
		}
		if (availSpace2 >= 140) {
			guard2.y += 0;
			guard2.animation = "left";
			//guard2.frameRate = guard2.moveRate;
			guard2.x -= guard2.speed;
		}

		if (availSpace2 >= 210) {
			guard2.x += guard2.speed;
			guard2.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard2.y -= guard2.speed;
		}

		if (availSpace2 >= 350) {
			guard2.y += guard2.speed;
			guard2.animation = "right";
			//guard2.frameRate = guard2.moveRate;
			guard2.x += guard2.speed;
		}

		if (availSpace2 >= 420) {
			guard2.x -= guard2.speed;
			//guard2.animation = "right";
			//guard2.frameRate = guard2.moveRate;
			//guard2.x += guard2.speed;
			availSpace2 = 0;
		}

	};

	//right side  corner guard
	var guard3 = new Sprite();
	guard3.image = guard.image;
	guard3.width = 67;
	guard3.height = 67;
	guard3.x = 70 * 15;
	guard3.y = 70 * 26;
	guard3.alerted = false;
	guard3.frameWidth = 64;
	guard3.frameHeight = 51;
	guard3.frameCount = 20;
	guard3.frameRate = 7;
	guard3.moveRate = 7;
	guard3.speed = 2;
	guard3.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

	var availSpace3 = 0;

	guard3.update = function() {
		if (trap.collision(guard3)) {
			setTimeout(function() {
				guard3.x = 0;
				guard3.y = 0;
				world.removeChild(guard3);
				trap.alpha = 0;
			}, 250);
		}

		availSpace3 += guard3.speed;

		if (availSpace3 <= 140) {//curently working
			guard3.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard3.y -= guard3.speed;
		}
		if (availSpace3 >= 140) {
			guard3.y += 0;
			guard3.animation = "left";
			//guard2.frameRate = guard2.moveRate;
			guard3.x -= guard3.speed;
		}

		if (availSpace3 >= 280) {
			guard3.x += guard3.speed;
			guard3.animation = "down";
			//guard2.frameRate = guard2.moveRate;
			guard3.y += guard3.speed;
		}

		if (availSpace3 >= 420) {
			guard3.y -= guard3.speed;
			guard3.animation = "right";
			//guard2.frameRate = guard2.moveRate;
			guard3.x += guard3.speed;
		}

		if (availSpace3 >= 560) {
			guard3.x -= guard3.speed;
			//guard.animation = "left";
			//guard2.frameRate = guard2.moveRate;
			//		guard3.y -= guard3.speed;

			availSpace3 = 0;
		}

	};

	//middle-map guard
	var guard4 = new Sprite();
	guard4.image = guard.image;
	guard4.width = 67;
	guard4.height = 67;
	guard4.x = 70 * 3;
	guard4.y = 70 * 16;
	guard4.alerted = false;
	guard4.frameWidth = 64;
	guard4.frameHeight = 51;
	guard4.frameCount = 20;
	guard4.frameRate = 7;
	guard4.moveRate = 7;
	guard4.speed = 2;
	guard4.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

	var availSpace4 = 0;

	guard4.update = function() {
		if (trap.collision(guard4)) {
			setTimeout(function() {
				guard4.x = 0;
				guard4.y = 0;
				world.removeChild(guard4);
				trap.alpha = 0;
			}, 250);
		}

		availSpace4 += guard4.speed;

		if (availSpace4 <= 140) {
			guard4.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard4.y -= guard4.speed;
		}
		if (availSpace4 >= 140) {
			guard4.y += 0;
			guard4.animation = "down";
			//guard2.frameRate = guard2.moveRate;
			guard4.y += guard4.speed;
		}

		if (availSpace4 >= 350) {
			guard4.y -= guard4.speed;
			guard4.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard4.y -= guard4.speed;
		}

		if (availSpace4 >= 420) {
			guard4.y += guard4.speed;
			//guard4.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			//guard4.y -= guard4.speed;
			availSpace4 = 0;
		}
	};

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
	player.x = 70 * 2.2;
	player.y = 70 * 28.5;

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

	if (player.gcollision(guard)) {
		screenMan.push(gameOver);
	}
	if (player.gcollision(guard2)) {
		screenMan.push(gameOver);
	}
	if (player.gcollision(guard3)) {
		screenMan.push(gameOver);
	}
	if (player.gcollision(guard4)) {
		screenMan.push(gameOver);
	}

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
		if (player.y < 6 * u) {
			roof.alpha = 0.2;
		} else if (player.y > 6 * u) {
			roof.alpha = 1;
		}
		if (player.y < 3.5 * u) {
			boxes[0].alpha = 0;
			boxes[1].alpha = 0;
			player.speed = 0;
			setCookie("continue", 2, 30);
			setCookie("auto3",1,30);
			textEndLevelOne();
		}

		if (player.gcollision(guard)) {
			setCookie("auto", 2, 30);
			screenMan.push(gameOver);
		}
		if (player.gcollision(guard2)) {
			setCookie("auto", 2, 30);
			screenMan.push(gameOver);
		}
		if (player.gcollision(guard3)) {
			setCookie("auto", 2, 30);
			screenMan.push(gameOver);
		}
		if (player.gcollision(guard4)) {
			setCookie("auto", 2, 30);
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
		/*////////////////////////////////////////////////////////////////////////////////
		 if (gInput.getloop){
		 paths.getPaths();
		 }
		 if (gInput.loop && !paths.looping) {
		 paths.looping = true;
		 }
		 if (paths.looping){
		 if(!paths.pt0){
		 player.x += player.speed;
		 console.log(isx(paths.pt[0]));
		 if(isx(paths.pt[0])){
		 paths.pt0 = true;
		 }
		 } else if(!paths.pt1){
		 player.y += player.speed;
		 if(isx(paths.pt[1])){
		 paths.pt1 = true;
		 }
		 } else if(!paths.pt2){
		 player.x += player.speed;
		 if(isx(paths.pt[2])){
		 paths.pt2 = true;
		 }
		 } else if(!paths.pt3){
		 player.x += player.speed;
		 if(isx(paths.pt[3])){
		 paths.pt3 = true;
		 }
		 }
		 }

		 ////////////////////////////////////////////////////////////////////////////////*/
		/*if (!guard.alerted) {
		 if (guard.vision == 0 && short_collision(this.x, this.y)) {
		 guard.frameRate = 7;
		 guard.moveRate = 7;
		 setCookie(auto, 1);
		 screenMan.push(gameOver);
		 guard.alerted = true;
		 } else if (guard.vision == 1 && long_collision(this.x, this.y)) {
		 guard.frameRate = 7;
		 guard.moveRate = 7;
		 setCookie(auto, 1);
		 screenMan.push(gameOver);
		 guard.alerted = true;
		 }
		 if (this.collision(light)) {
		 guard.frameRate = 7;
		 guard.moveRate = 7;
		 setCookie(auto, 1);
		 screenMan.push(gameOver);
		 guard.alerted = true;
		 }
		 for (var i = 0; i < end.length; i++) {
		 if (player.collision(end[i])) {
		 world.addChild(win);
		 guard.alerted = true;
		 }
		 }
		 }*/
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
		if (gInput.place && traps != 0) {
			trap.x = player.x + 17.5;
			trap.y = player.y + 17.5;
			world.addChild(trap);
			traps--;
		}
		if (player.y < 550) {
			//textTwo();
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

	function startGame2() {
		textLevelOne();
	}


	world.draw = function(ctx) {
		this.drawChildren(ctx);
		var bigW = 30;
		var smallW = 11;
		ctx.fillStyle = "lightgreen";
		//ctx.fillText("noup " + player.noup, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4));
		//ctx.fillText("nodown " + player.nodown, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 10);
		//ctx.fillText("guard.index " + guard.index, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 20);
		//ctx.fillText("guard2.index " + guard2.index, canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 30);
		//ctx.fillText("continue cookie: " + getCookie("continue"), canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 40);
		//ctx.fillText("auto cookie: " + getCookie(auto), canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 50);
		ctx.fillStyle = "white";
		ctx.font = "30px Verdana";
		ctx.fillText("x" + boxcount, canvas.width / 2 + -world.x + (70 * 4) - 20, canvas.height / 2 + -world.y + (70 * 4) + 10);
		ctx.fillText("x" + traps, canvas.width / 2 + -world.x + (70 * 4) + 90, canvas.height / 2 + -world.y + (70 * 4) + 10);

		/*
		 ctx.lineWidth = 1;
		 ctx.fillStyle = "green";
		 ctx.beginPath();
		 ctx.moveTo(guard2.x-gxv, guard2.y-gyv);
		 ctx.lineTo(guard2.x-gxv, guard2.y+guard2.height+gyv);
		 ctx.stroke();
		 ctx.beginPath();
		 ctx.moveTo(guard2.x-gxv, guard2.y-gyv);
		 ctx.lineTo(guard2.x+guard2.width+gxv, guard2.y-gyv);
		 ctx.stroke();
		 ctx.moveTo(guard2.x+guard2.width+gxv, guard2.y-gyv);
		 ctx.lineTo(guard2.x+guard2.width+gxv, guard2.y+guard2.height+gyv);
		 ctx.stroke();
		 ctx.moveTo(guard2.x-gxv, guard2.y+guard2.height+gyv);
		 ctx.lineTo(guard2.x+guard2.width+gxv, guard2.y+guard2.height+gyv);
		 ctx.stroke();
		 */

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
		if (this.x + this.width < walls[i].left + ph || this.x > walls[i].right + nh) {
			return false;
		} else {
			return true;
		}
	};

	trap.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	extraItem.collision = function(sprite) {
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

	startGame2();

	var trapGive = false;

	var blank = new Sprite();
	blank.image = Textures.load("Resources/box_game_sprite.jpg");
	blank.width = 35;
	blank.height = 35;
	blank.x = -35;
	world.addChild(blank);
	world.addChild(blank);
	world.addChild(blank);
	world.addChild(blank);
	world.addChild(blank);
	world.addChild(blank);
	world.addChild(blank);
	world.addChild(blank);
	//blank.remove();
	//blank.remove();

	world.update = function(d) {
		//player with light collisions HERE///////////////////lights.edit////////////////////////////////////////
		if (!cursor.active && levelScriptOne == true) {
			cursor.moving = true;
			setTimeout(function() {
				cursor.moving = false;
			}, 150);
			screenMan.push(inventory);
			world.addChild(cursor);
			world.addChild(roof);
			cursor.active = true;
		}
		if (winItem.collision(player) && !levelDone) {
			setTimeout(function() {
				for (var k = 0; k < 2; k++) {
					boxes[k].alpha = 0;
				}
				player.speed = 0;
				setCookie("auto3", 1);
				world.removeChild(winItem);
				textEndLevelOne();
				levelDone = true;
			}, 250);
		}
		if (extraItem.collision(player)) {
			setTimeout(function() {
				extraItem.x = 0;
				extraItem.y = 0;
				world.removeChild(extraItem);
				extraItem.alpha = 0;
				setCookie("ex1", 1);
			}, 250);
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