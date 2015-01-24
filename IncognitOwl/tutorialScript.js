var scriptOne = false;
var scriptTwo = false;
var scriptThree = false;
var scriptFour = false;
var scriptFive = false;
var scriptSix = false;
var scriptSeven = false;
var scriptEight = false;

var tutorialText = new Array();
tutorialText[0] = "";
tutorialText[1] = "Tyton: Alright Lieutenant, let's put your training to the test one last\ntime before you enter the battlefield.";
tutorialText[2] = "We've constructed a simulation course to ensure you're in top shape\nfor the missions that lie ahead.";
tutorialText[3] = "Tallon: Of course, General. This course will be cryin' to its mommy\nby the time I'm done with it.";
tutorialText[4] = "Tyton: I don't care what its mommy says, just clear the damn course\ndammit!";
tutorialText[5] = "*sigh* I'm passing the radio off to Corporal Athene Featherwick, our\narmy's most well-renowned dispatcher.";
tutorialText[6] = "Featherwick: Hey there Lieutenant Tallon.\n";
tutorialText[7] = "Tallon: Well hello there, young lady. You can call me Jax.\n";
tutorialText[8] = "Featherwick: Uh, sure... Jax. Let's get started.\n";
tutorialText[9] = "Featherwick: In order to successfully complete your missions, you\nmust avoid being seen by the enemy at all costs.";
tutorialText[10] = "In order to bring a non-violent conclusion to this war, the Incognitowl\nmust remain under the radar. Understood?";
tutorialText[11] = "Tallon: Yeah, yeah, yeah.\n";
tutorialText[12] = "Featherwick: This starts with taking advantage of the lack of\nsurveillance among the bases during the day.";
tutorialText[13] = "Their anti-air cannons are disarmed at this time, so you can use this\ntime to fly overhead and drop tactical items to aid your sneaking";
tutorialText[14] = "at night.\n";
tutorialText[15] = "Tallon: If security’s so lame during the day, why don’t I just fly down\nand take care of business then?";
tutorialText[16] = "Featherwick: The sky might be open during the day, but everything\non the ground is locked up.";
tutorialText[17] = "Only at night will you be able to gain access to the inner facilities\nand intel locations.";
tutorialText[18] = "That’s why utilizing both the day and night time is essential to a\nsuccessful sneaking mission.";
tutorialText[19] = "Tallon: Alright, well what tactical doohickeys do I have to work with\nduring the day?";
tutorialText[20] = "Featherwick: For now, only crates which can be placed to obstruct\nenemy vision.";
tutorialText[21] = "We are currently researching other technologies and should have\nthem ready for you soon.";
tutorialText[22] = "Try placing the crate in your inventory on the red X, near the light\ntower, and one on the blue X in front of the doors.";
tutorialText[23] = "Note that you can only drop these crates onto dirt, otherwise they\nwill break on impact.";
tutorialText[24] = "Tallon: Uhh... crate on the blue and red, dirt only? Piece of cake.\n";
tutorialText[25] = "(Press the <spacebar> while the cursor is over a dirt space to\nplace a crate)";
//Allow placement
tutorialText[26] = "Featherwick: Great work. Now let’s simulate the nighttime phase\nof a mission.";
///NIGHT
tutorialText[27] = "Featherwick: Take a look at the towers ahead of you.\n";
tutorialText[28] = "If either one of those lights shines on you, it's all over.\n";
tutorialText[29] = "First take a minute to observe their movement pattern, then make\nyour move and slip by them.";
tutorialText[30] = "(Use <arrow keys> to move)\n";
//After first light
tutorialText[31] = "Tallon: Like taking candy from a baby.\n";
tutorialText[32] = "Featherwick: Well done Jax. Now we're going to take advantage\nof that box you placed during the day.";
tutorialText[33] = "Notice how it’s intercepting the light's path, making it easier for you\nto sneak by.";
tutorialText[34] = "Smart placement of your daytime supplies will make advancing\nat night much easier.";
tutorialText[35] = "Sneak by the light using the box to your advantage.\n";
tutorialText[36] = "Tallon: Nooo problamo.\n";
//After second light
tutorialText[37] = "Featherwick: Excellent. Now to get past the next obstacle.\n";
tutorialText[38] = "Up ahead, there’s a guard tucked behind that wall. You won’t be\nable to sneak by unless you restrict his vision.";
tutorialText[39] = "You should be able to sneak by with ease, so long as you stay\n behind the box you placed earlier.";
tutorialText[40] = "Go ahead and give it a try.\n";
//After Guard
tutorialText[41] = "Tallon: Heh heh, now that was fun.\n";
tutorialText[42] = "Featherwick: Nice work. Note that guards come out of those doors\nin the walls.";
tutorialText[43] = "Keeping in mind this can give you an upper hand when placing\nitems during the day.";
tutorialText[44] = "Featherwick: Now let’s talk snaptraps. Snaptraps are an item you\ncarry at night which can be used to your advantage.";
tutorialText[45] = "If a guard walks over a snap trap, they will be stuck in place and\nyou can sneak right past them.";
tutorialText[46] = "Observe the patrol path of the guard, then sneak in and drop one\nin his path.";
tutorialText[47] = "Tallon: Ahh, the old sneak ‘n’ trap!\n";
tutorialText[48] = "Featherwick: Sure, if you want to call it that... Now get to it.\n";
tutorialText[49] = "(Stand on the space you wish to place the snaptrap on, and press\n<space> to place it.)";
//After trapping guard
tutorialText[50] = "Featherwick: Excellent work. Now that you’ve trapped him, you can\nsneak past freely, even stand adjacent to him without being alerted.";
tutorialText[51] = "Do note that he is stuck there however, and you can’t pass through\nhim.";
tutorialText[52] = "Make sure not to block your path when trapping guards with these.\n";
tutorialText[53] = "Tallon: Wouldn’t dream of it, darling.\n";
tutorialText[54] = "Featherwick: Uhh, thankfully we’re just about done here.\n";
tutorialText[55] = "Make your way past these last two spotlights and we’re through\nhere, Lieutenant.";
tutorialText[56] = "Tallon: Please, call me Jax. Or the Tallonator if that’s more your style.\n";
tutorialText[57] = "Featherwick: Hurry up and get through the lights so we can both\ngo home, Jax.";
tutorialText[58] = "Tallon: Fine, fine.\n";
//After finish line
tutorialText[59] = "Tyton: Well done, soldier. Now get some rest. Tomorrow’s a big day.\n";
tutorialText[60] = "Tallon: Will do, sir. (Heh, I'll have my purple wing in no time.)\n";
tutorialText[61] = "Tallon: Will do, sir. (Heh, I'll have my purple wing in no time.)\n";


function textOne() {
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
	tyton.image = Textures.load("Resources/Tyton_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(tutorialText[1]);
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

	var i = 1;
	var pressed = true;

	test.update = function(d) {
		if(i >= 6){
			tyton.image = Textures.load("Resources/athena_character_text.png");
		}
		while (gInput.place && pressed == true && i < 26) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 26) {
				scriptOne = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textTwo() {
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

	var test = new TextBox(tutorialText[26]);
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
		while (gInput.place && pressed == true && i < 2) {
			pressed = false;
			i++;
			//test.text = tutorialText[i];
			//scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 2) {
				scriptTwo = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textThree() {
	//Stop the game
	//CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK

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

	var test = new TextBox(tutorialText[26]);
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

	var i = 26;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 31) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 31) {
				scriptThree = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textFour() {
	//Stop the game
	//CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK

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

	var test = new TextBox(tutorialText[31]);
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

	var i = 31;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 37) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 37) {
				scriptFour = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textFive() {
	//Stop the game
	//CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK

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

	var test = new TextBox(tutorialText[37]);
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

	var i = 37;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 41) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 41) {
				scriptFive = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textSix() {
	//Stop the game
	//CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK

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

	var test = new TextBox(tutorialText[41]);
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

	var i = 41;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 50) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 50) {
				scriptSix = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textSeven() {
	//Stop the game
	//CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK

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

	var test = new TextBox(tutorialText[50]);
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

	var i = 50;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 59) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 59) {
				scriptSeven = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textEight() {
	//Stop the game
	//CHANGE LOCATION OF PLAYER DECLARATION FOR THIS TO WORK

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
	tyton.image = Textures.load("Resources/Tyton_character_text.png");
	scriptScreen.stage.addChild(tyton);

	var test = new TextBox(tutorialText[59]);
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

	var i = 59;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 61) {
			pressed = false;
			i++;
			test.text = tutorialText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 61) {
				scriptEight = true;
	            /*scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
				screenMan.remove(gameScreen); */
				location.reload();
			}
		}
	};
};