function start() {
	var bg = new Sprite();

	bg.width = 1194;
	bg.height = 1050;
	var threeDone = false;
	var fourDone = false;
	var fiveDone = false;
	var sixDone = false;
	var sevenDone = false;
	var eightDone = false;
	
	var gxv = 8;
	var gyv = 15;
	
	var posttxt = false;
	
	if(getCookie("continue") == 0){
			//console.log("to");
			posttxt = true;
	}

	clearColor = [0, .5, .5, .5];
	var can = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	world.x = -70 * 1;
	world.y = -70 * 6;

	var auto = "auto1"; ///////////////////////////////////////////////////////////
	setCookie(auto,0);

	l90 = new Object();
	l90.reverse = false;
	l90.turn = false;
	l90.rot = 0;
	l90.ms0 = 0;
	l90.mc0 = 0;
	l90.ms1 = 0;
	l90.mc1 = 0;
	l90.ms2 = 0;
	l90.mc2 = 0;
	//l90.ms3 = 0;
	//l90.mc3 = 0;
	l90.update = function(d) {
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
		//this.ms3 = Math.sin(this.rot + .3);
		//this.mc3 = Math.cos(this.rot + .3);
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
	//l180.ms3 = 0;
	//l180.mc3 = 0;
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
		//this.ms3 = Math.sin(this.rot + .3);
		//this.mc3 = Math.cos(this.rot + .3);
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
	//l360.ms3 = 0;
	//l360.mc3 = 0;
	l360.update = function(d) {
		this.rot += 0.03;
		this.ms0 = Math.sin(this.rot);
		this.mc0 = Math.cos(this.rot);
		this.ms1 = Math.sin(this.rot + .15);
		this.mc1 = Math.cos(this.rot + .15);
		this.ms2 = Math.sin(this.rot + .3);
		this.mc2 = Math.cos(this.rot + .3);
		//this.ms3 = Math.sin(this.rot + .3);
		//this.mc3 = Math.cos(this.rot + .3);
	};

	var lights = new Array();
	//NEW LIGHTS HERE
	lights[0] = new Light(70 * 3.5, 70 * 4.5, 1, "down");
	lights[1] = new Light(70 * 1.7, 70 * 10.4, 1, "right");
	lights[2] = new Light(70 * 11.7, 70 * 1.4, 2, "right");
	lights[3] = new Light(70 * 15.3, 70 * 1.4, 2, "left");

	var u = 70;
	var ll = 2.3;

	function findPoints(point) {
		var points = new Object();
		points.x0 = point.x0;
		points.y0 = point.y0;
		points.x1 = point.x1;
		points.y1 = point.y1;
		points.x2 = point.x2;
		points.y2 = point.y2;
		//points.x3 = point.x3;
		//points.y3 = point.y3;
		points.rotation = point.rotation;
		points.direc = point.direc;
		points.origin = point.origin;
		if (points.rotation == 0) {
			if (points.direc == "up") {
				points.x0 = points.origin.x + l90.mc0 * -u * ll;
				points.y0 = points.origin.y + l90.ms0 * -u * ll;
				points.x1 = points.origin.x + l90.mc1 * -u * ll;
				points.y1 = points.origin.y + l90.ms1 * -u * ll;
				points.x2 = points.origin.x + l90.mc2 * -u * ll;
				points.y2 = points.origin.y + l90.ms2 * -u * ll;
				//points.x3 = points.origin.x + l90.mc3 * -70 * ll;
				//points.y3 = points.origin.y + l90.ms3 * -70 * ll;
			} else if (points.direc == "down") {
				points.x0 = points.origin.x + l90.mc0 * u * ll;
				points.y0 = points.origin.y + l90.ms0 * u * ll;
				points.x1 = points.origin.x + l90.mc1 * u * ll;
				points.y1 = points.origin.y + l90.ms1 * u * ll;
				points.x2 = points.origin.x + l90.mc2 * u * ll;
				points.y2 = points.origin.y + l90.ms2 * u * ll;
				//points.x3 = points.origin.x + l90.mc3 * 70 * ll;
				//points.y3 = points.origin.y + l90.ms3 * 70 * ll;
			} else if (points.direc == "right") {
				points.x0 = points.origin.x + l90.ms0 * u * ll;
				points.y0 = points.origin.y + l90.mc0 * u * ll;
				points.x1 = points.origin.x + l90.ms1 * u * ll;
				points.y1 = points.origin.y + l90.mc1 * u * ll;
				points.x2 = points.origin.x + l90.ms2 * u * ll;
				points.y2 = points.origin.y + l90.mc2 * u * ll;
				//points.x3 = points.origin.x + l90.ms3 * 70 * ll;
				//points.y3 = points.origin.y + l90.mc3 * 70 * ll;
			} else if (points.direc == "left") {
				points.x0 = points.origin.x + l90.ms0 * -u * ll;
				points.y0 = points.origin.y + l90.mc0 * -u * ll;
				points.x1 = points.origin.x + l90.ms1 * -u * ll;
				points.y1 = points.origin.y + l90.mc1 * -u * ll;
				points.x2 = points.origin.x + l90.ms2 * -u * ll;
				points.y2 = points.origin.y + l90.mc2 * -u * ll;
				//points.x3 = points.origin.x + l90.ms3 * -70 * ll;
				//points.y3 = points.origin.y + l90.mc3 * -70 * ll;
			}
		} else if (points.rotation == 1) {
			if (points.direc == "up") {
				points.x0 = points.origin.x + l180.mc0 * -u * ll;
				points.y0 = points.origin.y + l180.ms0 * -u * ll;
				points.x1 = points.origin.x + l180.mc1 * -u * ll;
				points.y1 = points.origin.y + l180.ms1 * -u * ll;
				points.x2 = points.origin.x + l180.mc2 * -u * ll;
				points.y2 = points.origin.y + l180.ms2 * -u * ll;
				//points.x3 = points.origin.x + l180.mc3 * -70 * ll;
				//points.y3 = points.origin.y + l180.ms3 * -70 * ll;
			} else if (points.direc == "down") {
				points.x0 = points.origin.x + l180.mc0 * u * ll;
				points.y0 = points.origin.y + l180.ms0 * u * ll;
				points.x1 = points.origin.x + l180.mc1 * u * ll;
				points.y1 = points.origin.y + l180.ms1 * u * ll;
				points.x2 = points.origin.x + l180.mc2 * u * ll;
				points.y2 = points.origin.y + l180.ms2 * u * ll;
				//points.x3 = points.origin.x + l180.mc3 * 70 * ll;
				//points.y3 = points.origin.y + l180.ms3 * 70 * ll;
			} else if (points.direc == "right") {
				points.x0 = points.origin.x + l180.ms0 * u * ll;
				points.y0 = points.origin.y + l180.mc0 * u * ll;
				points.x1 = points.origin.x + l180.ms1 * u * ll;
				points.y1 = points.origin.y + l180.mc1 * u * ll;
				points.x2 = points.origin.x + l180.ms2 * u * ll;
				points.y2 = points.origin.y + l180.mc2 * u * ll;
				//points.x3 = points.origin.x + l180.ms3 * 70 * ll;
				//points.y3 = points.origin.y + l180.mc3 * 70 * ll;
			} else if (points.direc == "left") {
				points.x0 = points.origin.x + l180.ms0 * -u * ll;
				points.y0 = points.origin.y + l180.mc0 * -u * ll;
				points.x1 = points.origin.x + l180.ms1 * -u * ll;
				points.y1 = points.origin.y + l180.mc1 * -u * ll;
				points.x2 = points.origin.x + l180.ms2 * -u * ll;
				points.y2 = points.origin.y + l180.mc2 * -u * ll;
				//points.x3 = points.origin.x + l180.ms3 * -70 * ll;
				//points.y3 = points.origin.y + l180.mc3 * -70 * ll;
			}
		} else if (points.rotation == 2) {
			if (points.direc == "up") {
				points.x0 = points.origin.x + l360.mc0 * -u * ll;
				points.y0 = points.origin.y + l360.ms0 * -u * ll;
				points.x1 = points.origin.x + l360.mc1 * -u * ll;
				points.y1 = points.origin.y + l360.ms1 * -u * ll;
				points.x2 = points.origin.x + l360.mc2 * -u * ll;
				points.y2 = points.origin.y + l360.ms2 * -u * ll;
				//points.x3 = points.origin.x + l360.mc3 * -70 * ll;
				//points.y3 = points.origin.y + l360.ms3 * -70 * ll;
			} else if (points.direc == "down") {
				points.x0 = points.origin.x + l360.mc0 * u * ll;
				points.y0 = points.origin.y + l360.ms0 * u * ll;
				points.x1 = points.origin.x + l360.mc1 * u * ll;
				points.y1 = points.origin.y + l360.ms1 * u * ll;
				points.x2 = points.origin.x + l360.mc2 * u * ll;
				points.y2 = points.origin.y + l360.ms2 * u * ll;
				//points.x3 = points.origin.x + l360.mc3 * 70 * ll;
				//points.y3 = points.origin.y + l360.ms3 * 70 * ll;
			} else if (points.direc == "right") {
				points.x0 = points.origin.x + l360.ms0 * u * ll;
				points.y0 = points.origin.y + l360.mc0 * u * ll;
				points.x1 = points.origin.x + l360.ms1 * u * ll;
				points.y1 = points.origin.y + l360.mc1 * u * ll;
				points.x2 = points.origin.x + l360.ms2 * u * ll;
				points.y2 = points.origin.y + l360.mc2 * u * ll;
				//points.x3 = points.origin.x + l360.ms3 * 70 * ll;
				//points.y3 = points.origin.y + l360.mc3 * 70 * ll;
			} else if (points.direc == "left") {
				points.x0 = points.origin.x + l360.ms0 * -u * ll;
				points.y0 = points.origin.y + l360.mc0 * -u * ll;
				points.x1 = points.origin.x + l360.ms1 * -u * ll;
				points.y1 = points.origin.y + l360.mc1 * -u * ll;
				points.x2 = points.origin.x + l360.ms2 * -u * ll;
				points.y2 = points.origin.y + l360.mc2 * -u * ll;
				//points.x3 = points.origin.x + l360.ms3 * -70 * ll;
				//points.y3 = points.origin.y + l360.mc3 * -70 * ll;
			}
		}

		return points;
	}


	lights[0].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;
		//points.x3 = this.x3;
		//points.y3 = this.y3;
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
		//this.xy3.x = points.x3;
		//this.xy3.y = points.y3;

		//for (var i = 0; i < 4 * 500; i++) {
		//MOST IMPORTANT ONES NEED HIGHER INDEXES
		this.bcollisions[0] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy0);
		this.bcollisions[1] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy1);
		this.bcollisions[2] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy2);
		//this.bcollisions[3] = intersect(boxes[0].tl, boxes[0].bl, this.origin, this.xy3);
		this.bcollisions[4] = intersect(boxes[0].br, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[5] = intersect(boxes[0].br, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[6] = intersect(boxes[0].br, boxes[0].tr, this.origin, this.xy2);
		//this.bcollisions[7] = intersect(boxes[0].br, boxes[0].tr, this.origin, this.xy3);
		this.bcollisions[8] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy0);
		this.bcollisions[9] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy1);
		this.bcollisions[10] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy2);
		//this.bcollisions[11] = intersect(boxes[1].tl, boxes[1].bl, this.origin, this.xy3);
		this.bcollisions[12] = intersect(boxes[1].br, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[13] = intersect(boxes[1].br, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[14] = intersect(boxes[1].br, boxes[1].tr, this.origin, this.xy2);
		//this.bcollisions[15] = intersect(boxes[1].br, boxes[1].tr, this.origin, this.xy3);
		this.bcollisions[16] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy0);
		this.bcollisions[17] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy1);
		this.bcollisions[18] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy2);
		//this.bcollisions[19] = intersect(boxes[0].tl, boxes[0].tr, this.origin, this.xy3);
		this.bcollisions[20] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy0);
		this.bcollisions[21] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy1);
		this.bcollisions[22] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy2);
		//this.bcollisions[23] = intersect(boxes[1].tl, boxes[1].tr, this.origin, this.xy3);
		//}
		for (var i = 0; i < this.bcollisions.length; i++) {
			if (!(this.bcollisions[i] == undefined) && this.bcollisions[i].occurred) {
				if (i % 4 == 0) {
					this.lp[0].x = this.bcollisions[i].point.x;
					this.lp[0].y = this.bcollisions[i].point.y;
				} else if (i % 4 == 1) {
					this.lp[1].x = this.bcollisions[i].point.x;
					this.lp[1].y = this.bcollisions[i].point.y;
				} else if (i % 4 == 2) {
					this.lp[2].x = this.bcollisions[i].point.x;
					this.lp[2].y = this.bcollisions[i].point.y;
				}
				//else if (i % 4 == 3) {
				//this.lp[3].x = this.bcollisions[i].point.x;
				//this.lp[3].y = this.bcollisions[i].point.y;
				//}

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
				//else if (i == 3) {
				//this.lp[3].x = points.x3;
				//this.lp[3].y = points.y3;
				//}
			}
		}
	};

	lights[1].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;
		//points.x3 = this.x3;
		//points.y3 = this.y3;
		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;
		//this.lp[3].x = points.x3;
		//this.lp[3].y = points.y3;
	};

	lights[2].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;
		//points.x3 = this.x3;
		//points.y3 = this.y3;
		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;
		//this.lp[3].x = points.x3;
		//this.lp[3].y = points.y3;
	};

	lights[3].update = function(d) {
		var points = new Object();
		points.x0 = this.x0;
		points.y0 = this.y0;
		points.x1 = this.x1;
		points.y1 = this.y1;
		points.x2 = this.x2;
		points.y2 = this.y2;
		//points.x3 = this.x3;
		//points.y3 = this.y3;
		points.rotation = this.rotation;
		points.direc = this.direc;
		points.origin = this.origin;
		points = findPoints(points);

		this.lp[0].x = points.x0;
		this.lp[0].y = points.y0;
		this.lp[1].x = points.x1;
		this.lp[1].y = points.y1;
		this.lp[2].x = points.x2;
		this.lp[2].y = points.y2;
		//this.lp[3].x = points.x3;
		//this.lp[3].y = points.y3;
	};

	function Light(x, y, rotation, direc) {
		light = new Object();
		light.origin = new Vector(x, y);
		light.lp = new Array(3);
		//4 IF I SWITCH BACK
		light.reverse = false;
		light.rotation = rotation;
		light.bcollisions = new Array();
		light.x0 = 0;
		light.y0 = 0;
		light.x1 = 0;
		light.y1 = 0;
		light.x2 = 0;
		light.y2 = 0;
		//light.x3 = 0;
		//light.y3 = 0;
		light.xy0 = new Vector(light.x0, light.y0);
		light.xy1 = new Vector(light.x1, light.y1);
		light.xy2 = new Vector(light.x2, light.y2);
		//light.xy3 = new Vector(light.x3, light.y3);
		light.direc = direc;
		for (var i = 0; i < light.lp.length; i++) {
			light.lp[i] = new Vector(light.origin.x, light.origin.y);
		}
		return light;
	};

	var xcenter = 420;
	var ycenter = 315;
	var traps = 0;

	var trap = new Sprite();
	trap.width = 35;
	trap.height = 35;
	trap.image = Textures.load("Resources/snap_trap-png.png");

	var alert = new Sprite();
	alert.image = Textures.load("http://www.universalcargo.com/Portals/57382/images/shipping%20alert.png");
	alert.width = 70 * 2;
	alert.height = 70 * 2;
	alert.x = 70 * 8;
	alert.y = 70 * 8;

	var dirts = new Array();
	for (var i = 0; i < 10; i++) {
		dirts[i] = new Object();
	}
	dirts.at = function(x, y) {
		var coords = new Object();
		coords.x = 70 * x;
		coords.y = 70 * y;
		return coords;
	};

	//make sure to scale the dirts array
	dirts[0] = dirts.at(8, 6);
	dirts[1] = dirts.at(2, 5);
	dirts[2] = dirts.at(3, 5);
	dirts[3] = dirts.at(4, 5);
	dirts[4] = dirts.at(2, 6);
	dirts[5] = dirts.at(3, 6);
	dirts[6] = dirts.at(4, 6);
	dirts[7] = dirts.at(2, 7);
	dirts[8] = dirts.at(3, 7);
	dirts[9] = dirts.at(4, 7);

	var walls = new Array();
	for (var i = 0; i < 14; i++) {
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

	//MAKE SURE TO SET WALLS LENGTH
	walls[0] = walls.l(2, 5, 15);
	walls[1] = walls.u(2, 5, 12);
	walls[2] = walls.r(4, 8, 15);
	walls[3] = walls.d(2, 15, 4);
	walls[4] = walls.d(4, 8, 15);
	walls[5] = walls.r(7, 6, 7);
	walls[6] = walls.u(7, 7, 8);
	walls[7] = walls.r(15, 0, 8);
	walls[8] = walls.l(12, 0, 5);
	walls[9] = walls.u(12, 0, 15);
	walls[10] = walls.r(13, 6, 7);
	walls[11] = walls.d(13, 6, 14);
	walls[12] = walls.u(13, 7, 14);
	walls[13] = walls.l(14, 6, 7);
    
    var boxcount = 2;
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

	var end1 = new Sprite();
	var end2 = new Sprite();
	var end3 = new Sprite();
	end1.width = 70;
	end2.width = 70;
	end3.width = 70;
	end1.height = 35;
	end2.height = 35;
	end3.height = 35;
	end1.x = 70 * 12;
	end2.x = 70 * 13;
	end3.x = 70 * 14;
	end1.y = 0;
	end2.y = 0;
	end3.y = 0;

	var cursor = new Sprite();
	cursor.image = red.image;
	cursor.width = 70;
	cursor.height = 70;
	cursor.x = 70 * 2;
	cursor.y = 70 * 11;
	cursor.speed = 70;
	cursor.active = false;

	cursor.isdirt = function() {
		for (var i = 0; i < dirts.length; i++) {
			if (this.x == dirts[i].x && this.y == dirts[i].y) {
				return true;
			}
		}
		return false;
	};

	cursor.isBox = function() {
		if (this.x == boxes[0].x) {
			if (this.y == boxes[0].y) {
				return true;
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
				if (world.y < -72 && this.y < ycenter + 70 * 4) {
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
				if (world.y > -378 && this.y > ycenter + 70) {
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
				if (this.x != 1120) {
					this.x += this.speed;
				}
				if (world.x > -308 && this.x > xcenter + 70) {
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
			} else if (!screenMan.screens.find(pauseMenu)) {
				cursor.speed = 70;
				for (var k = 0; k < 2; k++) {
					boxes[k].alpha = 1;
				}
			}
			if (gInput.place && boxcount > 1 && this.isdirt()) {
				this.moving = true;
				boxcount--;
				boxes[0].x = this.x;
				boxes[0].y = this.y;
				boxes[0].placed = true;
				sounds.play("Audio/boxbeingdroppedondirt_.mp3");
				if (boxes[0].x == 70 * 3 && boxes[0].y == 70 * 5) {
					world.removeChild(light);
				}
				setTimeout(function() {
					cursor.moving = false;
				}, 200);
			} else if (gInput.place && boxcount == 1 && this.isdirt() && !this.isBox()) {
				this.moving = true;
				boxes[1].x = this.x;
				boxes[1].y = this.y;
				boxes[1].placed = true;
				sounds.play("Audio/boxbeingdroppedondirt_.mp3");
				daysong.pause();
 				nightsong.play();
  				gameScreen.image = Textures.load("Resources/TutorialLevelUpdate-5.png");
				this.remove();
				world.x = -70 * 1;
				world.y = -70 * 6;
				if(!posttxt){
					textTwo();
				}
				player.active = false;
			}
		}
	};

	var guard = new Sprite();
	guard.image = Textures.load("Resources/bat_full.png");
	guard.width = 67;
	guard.height = 67;
	guard.x = 70 * 8 + 2;
	guard.y = 70 * 4;
	guard.alerted = false;
	guard.frameWidth = 63;
	guard.frameHeight = 49;
	guard.frameCount = 21;
	guard.frameRate = 0;
	guard.moveRate = 0;

	var guard2 = new Sprite();
	guard2.image = Textures.load("Resources/bat_full.png");
	guard2.width = 67;
	guard2.height = 67;
	guard2.x = 70 * 13;
	guard2.y = 70 * 5;
	guard2.alerted = false;
	guard2.frameWidth = 64;
	guard2.frameHeight = 51;
	guard2.frameCount = 20;
	guard2.frameRate = 7;
	guard2.moveRate = 7;
	guard2.speed = 2;
	guard2.addAnimations(["down", "up", "right", "left"], [5, 5, 5, 5]);

	var availSpace = 0;

	guard2.update = function(d) {

        if (trap.collision(guard2)) {
			setTimeout(function() {
				guard2.x = 0;
				guard2.y = 0;
				world.removeChild(guard2);
				trap.alpha = 0;
			}, 250);
		}
		availSpace += guard2.speed;

		if (availSpace <= 70) {
			guard2.animation = "left";
			//guard2.frameRate = guard2.moveRate;
			guard2.x -= guard2.speed;
		}
		if (availSpace >= 70) {
			guard2.x += 0;
			guard2.animation = "down";
			//guard2.frameRate = guard2.moveRate;
			guard2.y += guard2.speed;
		}

		if (availSpace >= 210) {
			guard2.y -= guard2.speed;
			guard2.animation = "right";
			//guard2.frameRate = guard2.moveRate;
			guard2.x += guard2.speed;
		}

		if (availSpace >= 350) {
			guard2.x -= guard2.speed;
			guard2.animation = "up";
			//guard2.frameRate = guard2.moveRate;
			guard2.y -= guard2.speed;
		}

		if (availSpace >= 490) {
			guard2.y += guard2.speed;
			guard2.animation = "left";
			//guard2.frameRate = guard2.moveRate;
			guard2.x -= guard2.speed;
		}
		if (availSpace >= 560) {
			guard2.x += guard2.speed;
			//guard2.frameRate = guard2.moveRate;
			availSpace = 0;
		}

	};
	
	function short_collision(px, py) {
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
	}

	var player = new Sprite();
	player.image = Textures.load("Resources/Jax_walk_FULL.png");
	player.width = 62;
	player.height = 62;
	player.x = 70 * 2.7;
	player.y = 70 * 13.7;
	player.active = false;
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
		//If the character misn't moving, set the frameRate to 0
		//If the character had an idle animation we wouldn't need to do this
		if(player.gcollision(guard2)){
			setCookie("continue", 0, 30);
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
		if (!gInput.right && !gInput.left && !gInput.up && !gInput.down){
			player.frameRate = 0;
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
		if (!guard.alerted) {
			if (guard.vision == 0 && short_collision(this.x, this.y)) {
				guard.frameRate = 7;
				guard.moveRate = 7;
				setCookie(auto,1);
				screenMan.push(gameOver);
				guard.alerted = true;
			} else if (guard.vision == 1 && long_collision(this.x, this.y)) {
				guard.frameRate = 7;
				guard.moveRate = 7;
				setCookie(auto,1);
				screenMan.push(gameOver);
				guard.alerted = true;
			}
			if (this.collision(light)) {
				guard.frameRate = 7;
				guard.moveRate = 7;
				setCookie(auto,1);
				screenMan.push(gameOver);
				guard.alerted = true;
			}
			if (player.collision(end1) || player.collision(end2) || player.collision(end3)) {
				guard.alerted = true;

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
			player.speed = ph;
			//player.moveRate = 7;
			player.alpha = 1;
			for (var k = 0; k < 2; k++) {
				boxes[k].alpha = 1;
			}
		}
		if (gInput.place && traps != 0 && threeDone) {
			trap.x = player.x + 17.5;
			trap.y = player.y + 17.5;
			world.addChild(trap);
			traps--;
		}

		if (screenMan.screens.find(gameOver)) {
			traps = 0;
			setCookie(auto,1);
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

	function startGame() {
		if(!posttxt){
			textOne();
		}
	}


	world.draw = function(ctx) {
		this.drawChildren(ctx);
		var bigW = 30;
		var smallW = 11;
		ctx.fillStyle = "lightgreen";
		//ctx.fillText("continue cookie: " + getCookie("continue"), canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 40);
		//ctx.fillText("auto cookie: " + getCookie(auto), canvas.width / 2 + -world.x - (70 * 4), canvas.height / 2 + -world.y - (70 * 4) + 50);
		/*ctx.fillText("noup " + player.noup, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4));
		ctx.fillText("nodown " + player.nodown, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4) + 10);
		ctx.fillText("noleft " + player.noleft, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4) + 20);
		ctx.fillText("noright " + player.noright, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4) + 30);
		ctx.fillText("player.x " + player.x, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4) + 40);
		ctx.fillText("player.y " + player.y, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4) + 50);
		ctx.fillText("player.moveRate " + player.moveRate, canvas.width/2 + -world.x - (70 * 4), canvas.height/2 + -world.y - (70 * 4) + 60);*/
		if(!sevenDone && sixDone){
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
			//
			ctx.beginPath();
			ctx.moveTo(player.x, player.y);
			ctx.lineTo(player.x, player.y+player.height);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(player.x, player.y);
			ctx.lineTo(player.x+player.width, player.y);
			ctx.stroke();
			ctx.moveTo(player.x+player.width, player.y);
			ctx.lineTo(player.x+player.width, player.y+player.height);
			ctx.stroke();
			ctx.moveTo(player.x, player.y+player.height);
			ctx.lineTo(player.x+player.width, player.y+player.height);
			ctx.stroke();
		}
		ctx.strokeStyle = "orange";
		ctx.lineWidth = smallW;
		
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
		if(!this.noup) {
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
		if(!this.nodown) {
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
		if(!this.noleft){
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
			if (player.x + 420 < bg.width - 70 && player.x > xcenter) {
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
			if ((after + player.width + nh) < (walls[i].bot) && (after + player.width + nh) > (walls[i].top) && player.wallcollisionvert(i)) {
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
	player.collision = function(sprite) {
		if (this.x < sprite.x + sprite.width && this.x + this.width > sprite.x && this.y < sprite.y + sprite.height && this.y + this.height > sprite.y) {
			return true;
		} else {
			return false;
		}
	};
	player.gcollision = function(sprite) {
		if (this.x < sprite.x + sprite.width + gxv && this.x + this.width > sprite.x - gxv && this.y < sprite.y + sprite.height + gyv && this.y + this.height > sprite.y - gyv) {
			return true;
		} else {
			return false;
		}
	};
	trap.collision = function(sprite) {
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

	world.update = function(d) {
		//world.draw(ctx);
		
		if (!cursor.active && (scriptOne == true || posttxt)) {
			cursor.moving = true;
			setTimeout(function() {
				cursor.moving = false;
			}, 150);
			world.addChild(cursor);
			player.active = true;
			cursor.active = true;
			//screenMan.push(inventory);
		}
		if (!player.active && (scriptTwo == true || posttxt)) {

			world.addChild(player);
			world.addChild(guard);
			world.addChild(guard2);
			world.addChild(end1);
			world.addChild(end2);
			world.addChild(end3);
			world.addChild(l90);
			world.addChild(l180);
			world.addChild(l360);
			world.addChild(lights[0]);
			world.addChild(lights[1]);
			world.addChild(lights[2]);
			world.addChild(lights[3]);

			player.active = true;
			player.alpha = 0;
			traps = 0;
			player.speed = 0;
			//player.moveRate = 0;
			if(!posttxt){
				textThree();
			}
		}
		if ((scriptThree == true || posttxt) && !threeDone) {
			player.alpha = 1;
			player.speed = 3;
			//player.moveRate = 7;
			threeDone = true;
			setCookie("continue",0,30);
		}
		if (player.y < 497 && player.y > 261 && !fourDone) {
			player.speed = 0;
			player.frameRate = 0;
			textFour();
			fourDone = true;
		}
		if (player.x > 495 && player.x < 700 && !fiveDone) {
			player.speed = 0;
			player.frameRate = 0;
			textFive();
			fiveDone = true;
		}
		if (player.x > 700 && !sixDone) {
			player.speed = 0;
			player.frameRate = 0;
			textSix();
			sixDone = true;
		}
		if (scriptSix) {
			setTimeout(function() {
				traps = 1;
			}, 500);
		}
		if (player.y < 261 && player.y > 12 && !sevenDone) {
			player.speed = 0;
			player.frameRate = 0;
			boxes[0].alpha = 0;
			boxes[1].alpha = 0;
			textSeven();
			sevenDone = true;
		}
		if (player.y < 12 && !eightDone) {
			player.speed = 0;
			player.frameRate = 0;
			boxes[0].alpha = 0;
			boxes[1].alpha = 0;
			textEight();
			eightDone = true;
			setCookie("auto2",1,30);
			setCookie("continue",1,30);
		}
		//Simulate checking against 500 rectangles
		//for (var i = 0; i < 4 * 500; i++) {
		//player collisions HERE
		//if (pcollisions[i] == undefined) {continue;}
		pcollisions[0] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[0]);
		pcollisions[1] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[0]);
		pcollisions[2] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[1]);
		pcollisions[3] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[1]);
		pcollisions[4] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[2]);
		pcollisions[5] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[2]);
		//pcollisions[6] = intersect(player.tl, player.br, lights[0].origin, lights[0].lp[3]);
		//pcollisions[7] = intersect(player.tr, player.bl, lights[0].origin, lights[0].lp[3]);
		pcollisions[6] = intersect(player.tl, player.br, lights[1].origin, lights[1].lp[0]);
		pcollisions[7] = intersect(player.tr, player.bl, lights[1].origin, lights[1].lp[0]);
		pcollisions[8] = intersect(player.tl, player.br, lights[1].origin, lights[1].lp[1]);
		pcollisions[9] = intersect(player.tr, player.bl, lights[1].origin, lights[1].lp[1]);
		pcollisions[10] = intersect(player.tl, player.br, lights[1].origin, lights[1].lp[2]);
		pcollisions[11] = intersect(player.tr, player.bl, lights[1].origin, lights[1].lp[2]);
		pcollisions[12] = intersect(player.tl, player.br, lights[2].origin, lights[2].lp[0]);
		pcollisions[13] = intersect(player.tr, player.bl, lights[2].origin, lights[2].lp[0]);
		pcollisions[14] = intersect(player.tl, player.br, lights[2].origin, lights[2].lp[1]);
		pcollisions[15] = intersect(player.tr, player.bl, lights[2].origin, lights[2].lp[1]);
		pcollisions[16] = intersect(player.tl, player.br, lights[2].origin, lights[2].lp[2]);
		pcollisions[17] = intersect(player.tr, player.bl, lights[2].origin, lights[2].lp[2]);
		pcollisions[18] = intersect(player.tl, player.br, lights[3].origin, lights[3].lp[0]);
		pcollisions[19] = intersect(player.tr, player.bl, lights[3].origin, lights[3].lp[0]);
		pcollisions[20] = intersect(player.tl, player.br, lights[3].origin, lights[3].lp[1]);
		pcollisions[21] = intersect(player.tr, player.bl, lights[3].origin, lights[3].lp[1]);
		pcollisions[22] = intersect(player.tl, player.br, lights[3].origin, lights[3].lp[2]);
		pcollisions[23] = intersect(player.tr, player.bl, lights[3].origin, lights[3].lp[2]);
		
		var lose = false;
		if (!lose && !eightDone) {
			for (var i = 0; i < pcollisions.length; i++) {
				if ((pcollisions[i] != undefined) && pcollisions[i].occurred) {
					setCookie(auto,1);
					screenMan.push(gameOver);
					lose = true;
					break;
				}
			}
		}
		this.updateChildren(d);
	};
	startGame();
};