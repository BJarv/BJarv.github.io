var levelScriptTwo = false;

var levelTwoText = new Array();
levelTwoText[0] = "Tallon: So what did you guys find out from that awesome,\ntop-secret intel I retrieved?";
levelTwoText[1] = "Featherwick: Different information than we we’re expecting, but\nit’s useful nonetheless.";
levelTwoText[2] = "Tallon: How do you mean?\n";
levelTwoText[3] = "Featherwick: The briefcase contained a personnel file on one\nof the Bat Army’s Commanders, Alexei Flittermouse.";
levelTwoText[4] = "Tallon: Pfft.\n";
levelTwoText[5] = "Featherwick: What’s so funny?\n";
levelTwoText[6] = "Tallon: Did you say… Flittermouse?\n";
levelTwoText[7] = "Featherwick: Yes I did, but that’s beyond the point Jax. What’s\nimportant is that Alexei is high up in the Bat Army’s chain of command.";
levelTwoText[8] = "If you can reach and interrogate him, we can likely find out who\ntheir leader is and begin taking diplomatic action.";
levelTwoText[9] = "Tallon: Heh, okay. So I’m guessing he’s here then?\n";
levelTwoText[10] = "Featherwick: Exactly. He’s currently located in the facility’s training\nyard, which is located northwest sector of the base.";
levelTwoText[11] = "Tallon: Great, so more work for me again...\n";
levelTwoText[12] = "Featherwick: I thought you said a stud like you could handle it?\n";
levelTwoText[13] = "Tallon:  Uh, yeah, of course! Why else would they pick me for\nthe job?";
levelTwoText[14] = "Featherwick: Ha. Whatever you say, Jax. Now get in there and\ntrack down the Commander.";
levelTwoText[15] = "Tallon: Will do.\n";
//Upon Reaching Alexei
levelTwoText[16] = "Tallon: Peek-a-boo.\n";
levelTwoText[17] = "Bat: Ack! How in the hell did you get back here?\n";
levelTwoText[18] = "Tallon: Through sheer wit, tactical analysis, and physical excellence\nof course.";
levelTwoText[19] = "I take it you’re Commander Flittlermouse? *chuckles*\n";
levelTwoText[20] = "Alexei: It’s Commander Alexei, thank you very much! Now give me\none good reason why I shouldn’t sound the alert right now?";
levelTwoText[21] = "Tallon: How about I give you two: One, I’m here looking for a peaceful\nmeans to an end between the Owls and Bats, and I think you can help";
levelTwoText[22] = "me. Two, I could drop you to the ground and knock you out faster than\nyou could say your last name.";
levelTwoText[23] = "Alexei: (Well shit, if he made it all the way back here, he’s probably right.\nJust play it cool, Alexei...)";
levelTwoText[24] = "Alexei: Very well, you persistent owl. How about you start by telling\nme your name?";
levelTwoText[25] = "Tallon: Sure. Lieutenant Jax Tallon of the Hoot Corps. Any chance\nyou could tell me where your leader is?";
levelTwoText[26] = "Alexei: I’m afraid that’s classified information.\n";
levelTwoText[27] = "Tallon: And I’ll classify your ass here in a second if you don’t tell me!\nNow, spit it out.";
levelTwoText[28] = "Alexei: Tch. Fine. Our leader’s holed in up our most heavily guarded\nmilitary sector, Fort Chiroptera.";
levelTwoText[29] = "Even if you did manage to get there, you’d never be able to reach\nhim due to their high-tech security systems.";
levelTwoText[30] = "Tallon: Ah, so it’s a he? What’s his name?\n";
levelTwoText[31] = "Alexei: That I will not share with you. My guards are likely starting to get\nsuspicious of my whereabouts.";
levelTwoText[32] = "If you have any sort of a brain I’d get out of here before my backup\nshows up.";
levelTwoText[33] = "Tallon: Thanks for the advice. Later, Flittermouse.\n";
levelTwoText[34] = "Alexei: For the last time, it’s Commander Alexei!!!\n";

//CURSOR ACTIVATOR
/* 		if (!cursor.active && levelScriptOne == true) {
			cursor.moving = true;
			setTimeout(function() {
				cursor.moving = false;
			}, 150);
			world.addChild(cursor);
			cursor.active = true;
		} */

function textLevelTwo() {
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

	var test = new TextBox(levelTwoText[0]);
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
			test.text = levelTwoText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 16) {
				levelScriptTwo = true;
	            scriptScreen.stage.removeChild(jax);
		        scriptScreen.stage.removeChild(tyton);
			    scriptScreen.stage.removeChild(test);
				screenMan.remove(scriptScreen);
			}
		}
	};
};

function textEndLevelTwo() {
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

	var test = new TextBox(levelTwoText[16]);
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

	var i = 16;
	var pressed = true;

	test.update = function(d) {
		while (gInput.place && pressed == true && i < 35) {
			pressed = false;
			i++;
			test.text = levelTwoText[i];
			scriptScreen.stage.addChild(test);
			setTimeout(function() {
				pressed = true;
			}, 200);
			if (i === 35) {
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