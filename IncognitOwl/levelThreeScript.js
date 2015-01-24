var levelScriptThree = false;
var switchOneDone = false;
var switchTwoDone = false;

var levelThreeText = new Array();
levelThreeText[0] = "Featherwick: Alright Jax, we’ve managed to find a drop point for you\nin the southwest corner of Fort Chiroptera.";
levelThreeText[1] = "Tallon: Right, and here’s the part where you pile on the bad news.\n";
levelThreeText[2] = "Featherwick: Unfortunately so. Surveillance here is much higher\nthan at the previous military bases.";
levelThreeText[3] = "This operation holds multiple steps that are vital to it’s completion.\n";
levelThreeText[4] = "Tallon: Just like how I had to walk multiple steps in the previous ops?\n";
levelThreeText[5] = "Featherwick: A mix of both, smartass. In order to gain access to the\ninner facility where the Bat Army’s leader is located,";
levelThreeText[6] = "you’ll first need to disable some security measures.\n";
levelThreeText[7] = "Tallon: And just what kind of security measures are we talking about?\n";
levelThreeText[8] = "Featherwick: Well, a large hangar door… and a high-powered laser\nthat causes anyone who walks through it without proper";
levelThreeText[9] = "security clearance to spontaneously combust.\n";
levelThreeText[10] = "Tallon: Piece of ca- Hold on, a laser that sporadically com-whats?\n";
levelThreeText[11] = "Featherwick: Spontaneously combusts, Jax. All you need to know\nis don’t walk through it while it’s on.";
levelThreeText[12] = "Fortunately there are two buildings within Chiroptera which control\nboth the door and the laser respectively.";
levelThreeText[13] = "Tallon: Okay, so as long as I turn them off beforehand I’ll be in the\nclear?";
levelThreeText[14] = "Featherwick: Well if you discount the high frequency of guards\nand spotlights… you could say that.";
levelThreeText[15] = "Tallon: Hmm. Nonetheless, it’s nothing the Tallonator can’t handle.\nI’ll find this bat leader dude in no time!";
levelThreeText[16] = "Featherwick: Just make sure you pay a visit to the outer facilities to\ndisable the door and the laser before you try anything stupid.";
levelThreeText[17] = "Tallon: Sure thing, pretty wings. Over and out.\n";
//Upon reaching facility
levelThreeText[18] = "Tallon: Alright Corporal, I’m inside the main facility, about to have\neyes on the leader.";
levelThreeText[19] = "Featherwick: Very well done, Jax.\n";
levelThreeText[20] = "Tyton: Great work, Lieutenant. I’ll be tuning in for this part of the op\nas well.";
levelThreeText[21] = "Tallon: Roger that. I hear him walking over now, should have a\nvisual in just a second.";
levelThreeText[22] = ".....\n";
levelThreeText[23] = "Tallon: And the leader of the infamous Bat Army is… AN OWL?!?\n";
levelThreeText[24] = "Tyton: Say again, Lieutenant? You’d better not be joking about this!\n";
levelThreeText[25] = "Tallon: I swear on my left claw, sir! It’s some old hoot with an\neyepatch!";
levelThreeText[26] = "Tyton: An eyepatch? It can’t be...\n";
levelThreeText[27] = "Featherwick: Be what, sir?\n";
levelThreeText[28] = "Tyton: An old comrade of mine. Lieutenant, try confronting him with\nthe name Strix.";
levelThreeText[29] = "Tallon: Understood.\n";
levelThreeText[30] = "Tallon: Is that you, Strix?\n";
levelThreeText[31] = "Owl: Of course, Colonel-- What in the? You’re not the Colonel!\nHow in the hell did you get in here?";
levelThreeText[32] = "Tallon: Through sheer wit, tactical analysis, and physical excellence\nof course. And now I’ve confirmed your identity.";
levelThreeText[33] = "Just who is this guy, General?\n";
levelThreeText[34] = "Tyton: Strix Nebulosa, former Brigadier General of the Hoot Corps\nthought to have been K.I.A...";
levelThreeText[35] = "Tallon: K.I.A.? Then why the hell is he now leading the Bat Army?!\n";
levelThreeText[36] = "Nebulosa: Well seeing as you’ve made it this far, I suppose you\ndeserve an explanation.";
levelThreeText[37] = "It all started during the Great Forest War, back when Tyton and I\nwere war buddies moving up in the ranks.";
levelThreeText[38] = "The bats were rapidly repopulating and forcing us owls out of our\nnatural habitat.";
levelThreeText[39] = "Naturally, we were forced to fight back for our own living space. I\nwas commanding Tyton’s unit, sent to destroy an enemy military base.";
levelThreeText[40] = "While we were fighting, I took an artillery shot to the wing. I called\nout to my comrades as I fell, but no one came.";
levelThreeText[41] = "Instead, I awoke in a dark cave, with a group of bats staring over me\nand patching my wing up.";
levelThreeText[42] = "After some brief interrogation they gave me a place to stay, and I\nquickly proved my worth.";
levelThreeText[43] = "With the population issue arising again, they appointed me to\nSupreme Commander to lead the expansion attack for the bats.";
levelThreeText[44] = "Seeing as my fellow comrades had given up on me, I gladly\naccepted.";
levelThreeText[45] = "Tyton: That… that can’t be. Lieutenant, put me on with Strix.\n";
levelThreeText[46] = "Tallon: Yessir.\n";
levelThreeText[47] = "Tyton: Strix, I’m so sorry.\n";
levelThreeText[48] = "Nebulosa: A little late for apologies now, don’t you think?\n";
levelThreeText[49] = "Tyton: I stayed behind for a week.\n";
levelThreeText[50] = "Nebulosa: And just what do you mean by that?\n";
levelThreeText[51] = "Tyton: Although the unit was forced to retreat, I insisted that I stay\nand look harder.";
levelThreeText[52] = "I spent the next seven days slipping past patrols and scouring the\nforest to find you.";
levelThreeText[53] = "Nebulosa: Then how come the I ended up in the wings of the bat's?!\n";
levelThreeText[54] = "Tyton: If I had to guess, I’d say they swooped you up as soon as\nyou were knocked unconscious and took you back with them.";
levelThreeText[55] = "They realized your extreme leadership potential and recruited you\nunder the false pretext that we had abandoned you.";
levelThreeText[56] = "They played the both of us.\n";
levelThreeText[57] = "Nebulosa: I thought I heard you calling out as I fell… did you really\nmanage to sneak around for a whole week?";
levelThreeText[58] = "Tyton: Sure did. In fact, that’s what inspired me to start the\nIncognitOwl program in the first place.";
levelThreeText[59] = "I’m past my prime, so I took Jax under my wing and taught him\neverything I knew.";
levelThreeText[60] = "Nebulosa: That’s...\n";
levelThreeText[61] = "That’s all I needed to hear. The Bat Army’s deceptive plan ends here,\nand I’ll be the one to put a stop to it.";
levelThreeText[62] = "Tyton: I’m so glad to know you’re alive and back with us, comrade.\nBut just how do you plan on stopping them?";
levelThreeText[63] = "Nebulosa: With more deception, as to avoid any more unnecessary\nviolence.";
levelThreeText[64] = "I’ll use my political pull around here to convince them to stretch their\nexpansion to the Eastern Caverns, rather than further into the forest.";
levelThreeText[65] = "Tyton: Regardless of how much pull you have, there’s no way they’ll\nbe willing to so drastically change their plans at the snap of a finger!";
levelThreeText[66] = "Nebulosa: That’s why I’ll request a diplomatic meeting between\nthe opposing sides.";
levelThreeText[67] = "I’ll request for a small portion of the Owl’s land along with Hoot Corps\nreinforcements to help with the relocation.";
levelThreeText[68] = "If you can agree to these conditions it will not only end the territory\nwars, but the violence as well.";
levelThreeText[69] = "Featherwick: If I may interject, sir- that is a brilliant plan. Relations\nbetween the two nations will drastically improve.";
levelThreeText[70] = "Shall I begin making the arrangements for a meeting?\n";
levelThreeText[71] = "Nebulosa: That’d be wonderful, m’am. As for you Jax, I’d make your\nexit now- the guards aren’t exactly on speaking terms with you just yet.";
levelThreeText[72] = "Tallon: Roger that. Thank you, sir.\n";
levelThreeText[73] = "Nebulosa: Just remember Lieutenant, none of this would have\nhappened without your help.";
levelThreeText[74] = "Now scram, before I change my mind!\n";
levelThreeText[75] = "Tallon: Yeah, yeah, yeah. See you on the other side.\n";
levelThreeText[76] = ".....\n";
levelThreeText[77] = "Tallon: Ready for extraction, Corporal.\n";
levelThreeText[78] = "Featherwick: Of course. Oh, and you can call me Athene.\n";
levelThreeText[79] = "Tallon:  Hey now! Finally starting to warm up to the Tallonator,\naren’t you Athene?";
levelThreeText[80] = "Featherwick: Don’t get too ahead of yourself “Mr. Tallonator”, just\nconsider it a congratulatory gesture on a job well done.";
levelThreeText[81] = "Tallon: Heh, sure thing. How about dinner sometime when I\nget back?";
levelThreeText[82] = "Featherwick: Ha. Do you want to be extracted or not?\n";
levelThreeText[83] = "Tallon: Fine then, I’ll shut up until you get me outta here.\n";
levelThreeText[84] = "Featherwick: That’s probably a good idea. See you soon, Jax.\n";
levelThreeText[85] = "Thank you.\n";
levelThreeText[86] = "You win! Thanks for playing from Team Hooters! Try and collect all the\ngolden briefcases to unlock extras!";
//Mid level-blurbs
levelThreeText[87] = "Great work, you've disabled the lasers. Now make your way over to\nthe other facility and open the hangar door.";
levelThreeText[88] = "Looks like that did the trick. All that's left is to enter the hangar\nand locate the leader, Jax.";

//CURSOR ACTIVATOR
/* 		if (!cursor.active && levelScriptOne == true) {
			cursor.moving = true;
			setTimeout(function() {
				cursor.moving = false;
			}, 150);
			world.addChild(cursor);
			cursor.active = true;
		} */

function textLevelThree() {
	//Stop the game
	/* CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK
	player.alpha = 0 ;
	traps = 0;
	player.speed = 0;
	player.moveRate = 0; */
	//Add text overlay
	var jax = new Sprite();
	jax.x = canvas.width / 2 + -world.x - 335;
	jax.y = canvas.height / 2 + -world.y + 30;
	jax.width = 150;
	jax.height = 150;
	jax.image = Textures.load("Resources/Jax_character_for_text.png");
	scriptScreen.stage.addChild(jax);

	var tyton = new Sprite();
	tyton.x = canvas.width / 2 + -world.x + 200;
	tyton.y = canvas.height / 2 + -world.y + 20;
	tyton.index = 0;
	tyton.width = 150;
	tyton.height = 150;
	tyton.image = Textures.load("Resources/athena_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(levelThreeText[0]);
	test.x = 0 + -world.x;
	test.y = 480 + -world.y;
	test.minWidth = 840;
	test.fontSize = 24;
	test.drawBG = true;
	test.bgColor = "white";
	test.borderColor = "black";
	test.border = 4;
	test.padTop = 55;
	test.padBottom = 47;
	test.padLeft = 30;
	scriptScreen.stage.addChild(test);

	screenMan.push(scriptScreen);

	var i = 0;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 16) {
			pressed = false;
			i++;
			test.text = levelThreeText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 16) {
				levelScriptThree = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textEndLevelThree() {
	//Stop the game
	/* CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK
	player.alpha = 0 ;
	traps = 0;
	player.speed = 0;
	player.moveRate = 0; */
	//Add text overlay
	var jax = new Sprite();
	jax.x = canvas.width / 2 + -world.x - 335;
	jax.y = canvas.height / 2 + -world.y + 30;
	jax.width = 150;
	jax.height = 150;
	jax.image = Textures.load("Resources/Jax_character_for_text.png");
	scriptScreen.stage.addChild(jax);

	var tyton = new Sprite();
	tyton.x = canvas.width / 2 + -world.x + 200;
	tyton.y = canvas.height / 2 + -world.y + 20;
	tyton.width = 150;
	tyton.height = 150;
	tyton.image = Textures.load("Resources/athena_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(levelThreeText[18]);
	test.x = 0 + -world.x;
	test.y = 480 + -world.y;
	test.minWidth = 840;
	test.fontSize = 24;
	test.drawBG = true;
	test.bgColor = "white";
	test.borderColor = "black";
	test.border = 4;
	test.padTop = 55;
	test.padBottom = 47;
	test.padLeft = 30;
	scriptScreen.stage.addChild(test);

	screenMan.push(scriptScreen);

	var i = 18;
	var pressed = true;

	test.update = function(d) {
		if(i == 20){
			tyton.image = Textures.load("Resources/Tyton_character_text.png");
		}
		if(i == 27){
			tyton.image = Textures.load("Resources/athena_character_text.png");
		}
		if(i == 28){
			tyton.image = Textures.load("Resources/Tyton_character_text.png");
		}
		if(i == 31){
			tyton.image = Textures.load("Resources/strix_text.png");
		}
		if(i == 34){
			tyton.image = Textures.load("Resources/Tyton_character_text.png");
		}
		if(i == 36){
			tyton.image = Textures.load("Resources/strix_text.png");
		}
		if(i == 45){
			tyton.image = Textures.load("Resources/Tyton_character_text.png");
		}
		if(i == 47){
			jax.image = Textures.load("Resources/Tyton_character_text_flipped.png");
			tyton.image = Textures.load("Resources/strix_text.png");		
		}
		if(i == 69){
			jax.image = Textures.load("Resources/athena_character_text_flipped.png");
		}
		if(i == 72){
			jax.image = Textures.load("Resources/Jax_character_for_text.png");
		}
		if(i == 77){
			tyton.image = Textures.load("Resources/athena_character_text.png");
		}
		
		while (gInput.place && pressed == true && i < 87) {
			pressed = false;
			i++;
			test.text = levelThreeText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 87) {
				levelScriptTwo = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
				location.reload();
			}
		}
	};
};

function textSwitchOne() {
	//Stop the game
	/* CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK
	player.alpha = 0 ;
	traps = 0;
	player.speed = 0;
	player.moveRate = 0; */
	//Add text overlay
	var jax = new Sprite();
	jax.x = canvas.width / 2 + -world.x - 335;
	jax.y = canvas.height / 2 + -world.y + 30;
	jax.width = 150;
	jax.height = 150;
	jax.image = Textures.load("Resources/Jax_character_for_text.png");
	scriptScreen.stage.addChild(jax);

	var tyton = new Sprite();
	tyton.x = canvas.width / 2 + -world.x + 200;
	tyton.y = canvas.height / 2 + -world.y + 20;
	tyton.width = 150;
	tyton.height = 150;
	tyton.image = Textures.load("Resources/athena_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(levelThreeText[87]);
	test.x = 0 + -world.x;
	test.y = 480 + -world.y;
	test.minWidth = 840;
	test.fontSize = 24;
	test.drawBG = true;
	test.bgColor = "white";
	test.borderColor = "black";
	test.border = 4;
	test.padTop = 55;
	test.padBottom = 47;
	test.padLeft = 30;
	scriptScreen.stage.addChild(test);

	screenMan.push(scriptScreen);

	var i = 87;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 88) {
			pressed = false;
			i++;
			test.text = levelThreeText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 88) {
				switchOneDone = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textSwitchTwo() {
	//Stop the game
	/* CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK
	player.alpha = 0 ;
	traps = 0;
	player.speed = 0;
	player.moveRate = 0; */
	//Add text overlay
	var jax = new Sprite();
	jax.x = canvas.width / 2 + -world.x - 335;
	jax.y = canvas.height / 2 + -world.y + 30;
	jax.width = 150;
	jax.height = 150;
	jax.image = Textures.load("Resources/Jax_character_for_text.png");
	scriptScreen.stage.addChild(jax);

	var tyton = new Sprite();
	tyton.x = canvas.width / 2 + -world.x + 200;
	tyton.y = canvas.height / 2 + -world.y + 20;
	tyton.width = 150;
	tyton.height = 150;
	tyton.image = Textures.load("Resources/athena_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(levelThreeText[88]);
	test.x = 0 + -world.x;
	test.y = 480 + -world.y;
	test.minWidth = 840;
	test.fontSize = 24;
	test.drawBG = true;
	test.bgColor = "white";
	test.borderColor = "black";
	test.border = 4;
	test.padTop = 55;
	test.padBottom = 47;
	test.padLeft = 30;
	scriptScreen.stage.addChild(test);

	screenMan.push(scriptScreen);

	var i = 88;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 89) {
			pressed = false;
			i++;
			test.text = levelThreeText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 89) {
				switchTwoDone = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};