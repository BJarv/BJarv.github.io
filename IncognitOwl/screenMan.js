clearColor = [.5, .5, .5, 1];
use2D = true;
initGame("canvas");


var currLvl = -1;
var autoStart1 = getCookie("auto1");
var autoStart2 = getCookie("auto2");
var autoStart3 = getCookie("auto3");
var autoStart4 = getCookie("auto4");
var gc = getCookie("continue");
if(gc!=""){
	currLvl = gc;
}

var sounds = new SoundManager();
var daysong = sounds.load("Audio/day_time_final.mp3");
var nightsong = sounds.load("Audio/OWLJAMZ.mp3");
var boxsnd = sounds.load("Audio/boxbeingdroppedondirt_.mp3");
var alertsnd = sounds.load("Audio/alert.mp3");
sounds.loop("Audio/day_time_final.mp3");
sounds.loop("Audio/OWLJAMZ.mp3");
nightsong.pause();

//Create a screen class

function Screen(alwaysUpdate, alwaysDraw) {
    //Call the Sprite constructor to copy any object properties
    Sprite.call(this);
    
    //These determine if the screen should be update/drawn when it is not the top screen
    this.alwaysUpdate = alwaysUpdate;
    this.alwaysDraw = alwaysDraw;
    
    //Has the screen been initialized
    this.initialized = false;
    
    //Create a stage for the screen that we can add sprites to
    this.stage = new Sprite();
    this.addChild(this.stage);
    
    //Create a gui object which extends sprite and supports buttons
    this.gui = new GUI(gInput);
    this.addChild(this.gui);
}
//Inherit all Sprite properties
Screen.prototype = new Sprite();

//Called once to set up anything that needs to be called after the game is initialized
//some values aren't available before initGame such as any canvas property
Screen.prototype.init = function(){
};

//Create a screen manager class
function ScreenManager() {
    //Call the Sprite constructor to copy any object properties
    Sprite.call(this);

    this.screens = new List();
}
//Inherit all Sprite properties
ScreenManager.prototype = new Sprite();

//Push a screen on to the stack
ScreenManager.prototype.push = function(screen){
    this.screens.remove(screen);
    this.screens.push(screen);
};

//Pop a screen off of the stack
ScreenManager.prototype.pop = function(){
    this.screens.tail.item.gui.visible = false;
    return this.screens.pop();
};

//Remove a screen from the stack
ScreenManager.prototype.remove = function(screen){
    screen.gui.visible = false;
    this.screens.remove(screen);
};

//Override th defult update function
ScreenManager.prototype.update = function (d) {
    var screens = this.screens;
    
    //Loop through the screens and update if they are supposed to always update or if they ar the top screen
    for (var node = screens.head; node != null; node = node.link) {
        var screen = node.item;
        
        //The gui wasn't exactly made for this situation so we need to hide it if it's not in the current screen
        if(node != screens.tail){
            screen.gui.visible = false;
        }else{
            screen.gui.visible = true;
        }
        
        if (screen.alwaysUpdate || node == screens.tail) {
            if(!screen.initialized){
                screen.init();
                screen.initialized = true;
            }
            screen.update(d);
        }
    }
};

//Override the defualt draw function the same as the update function except we're drawing
ScreenManager.prototype.draw = function (ctx) {
    var screens = this.screens;
    
    for (var node = screens.head; node != null; node = node.link) {
        var screen = node.item;
        if (screen.alwaysDraw || node == screens.tail) {
            screen.draw(ctx);
        }
    }
};

//Create a new screen manager
var screenMan = new ScreenManager();
//Add it as a child of the world.
//Here we're taking advantage of the sprite hierarchy structure
world.addChild(screenMan);

//Create a main menu screen
var mainMenu = new Screen(false, false);
//Optionally set a background for the screen
mainMenu.image = Textures.load("Resources/new_menu.png");
screenMan.push(mainMenu);

//Override the empty init function to set some properties
mainMenu.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    //Add some sprites to the main menu
        
    /* var newGame = new TextButton("New Game");
    newGame.center = true;
    newGame.label.dropShadow = true;
    newGame.label.fontSize = 30;
    newGame.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(newGame);
    
    newGame.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(gameScreen);
    }; */
    var extras = new TextButton("Extras");
    extras.y = 150;
    extras.center = true
    extras.label.dropShadow = true;
    extras.label.fontSize = 30;
    extras.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(extras);
    
    extras.func = function(){
    	screenMan.remove(mainMenu);
    	screenMan.push(extrasMenu);
    }
    
    var levelSel = new TextButton("Level Select");
    levelSel.y = 100;
    levelSel.center = true;
    levelSel.label.dropShadow = true;
    levelSel.label.fontSize = 30;
    levelSel.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(levelSel);
    
    levelSel.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(levelSelect);
    };
    
    var Continues = new TextButton("Continue");
    Continues.center = true;
    Continues.label.dropShadow = true;
    Continues.label.fontSize = 30;
    Continues.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    if(currLvl >= 0){
    	this.gui.addChild(Continues);
    }
    
    Continues.func = function(){
        screenMan.remove(mainMenu);
        if(currLvl < 1){
        	screenMan.push(gameScreen);
        } else if(currLvl == 1){
        	screenMan.push(gameScreen2);
        } else if(currLvl == 2){
        	screenMan.push(gameScreen3);
        } else if(currLvl == 3){
        	screenMan.push(gameScreen4);
        }
    };
    
    var resetSave = new TextButton("New Game");
    resetSave.y = 50;
    resetSave.center = true;
    resetSave.label.dropShadow = true;
    resetSave.label.fontSize = 30;
    resetSave.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(resetSave);
    
    resetSave.func = function(){
        var conf = true;
        if(currLvl > -1){
        	var conf = confirm("Are you sure?");
        }
        if(conf){
        	setCookie("auto1",0);
        	setCookie("auto2",0);
        	setCookie("auto3",0);
        	setCookie("auto4",0);
        	setCookie("ex1",0);
        	setCookie("ex2",0);
        	setCookie("ex3",0);
        	setCookie("ex4",0);
        	setCookie("continue",-1);
        	screenMan.remove(mainMenu);
        	screenMan.push(gameScreen);
        }
    };
};

var extrasMenu = new Screen(false, true);
extrasMenu.image = Textures.load("Resources/new_menu.png");

extrasMenu.init = function (){
	this.width = canvas.width;
	this.height = canvas.height;
	
	this.gui.x = canvas.width/2;
	this.gui.y = canvas.height/2;
	
	var description = new TextBox("Collect all the golden briefcases to unlock!");
    description.y = -50;
    description.center = true;
    description.fontSize = 24;
    description.bgColor = "#8D8D8D";
    this.gui.addChild(description);
	
	/////BACK BUTTON///////
	var backButton = new TextButton("Back");
	backButton.center = true;
	backButton.y = 200;
	backButton.label.dropShadow = true;
	backButton.label.fontSize = 30;
	backButton.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(backButton);
	
	backButton.func = function(){
		screenMan.remove(extrasMenu);
		screenMan.push(mainMenu);
	}
/////////////////////////////////////////////////////////////
	
	if(getCookie("ex1") == 1){
	var extrasOne = new TextButton("Classified #1");
	extrasOne.center = true;
	extrasOne.label.dropShadow = true;
	extrasOne.label.fontSize = 30;
	extrasOne.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(extrasOne);
	
	extrasOne.func = function(){
		screenMan.remove(extrasMenu);
		screenMan.push(extrasOneScreen);
	}
	}
	if(getCookie("ex2") == 1){
	var extrasTwo = new TextButton("Classified #2");
	extrasTwo.y = 50;
	extrasTwo.center = true;
	extrasTwo.label.dropShadow = true;
	extrasTwo.label.fontSize = 30;
	extrasTwo.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(extrasTwo);
	
	extrasTwo.func = function(){
		screenMan.remove(extrasMenu);
		screenMan.push(extrasTwoScreen);
	}
	}
	if(getCookie("ex3") == 1){
	var extrasThree = new TextButton("Classified #3");
	extrasThree.y = 100;
	extrasThree.center = true;
	extrasThree.label.dropShadow = true;
	extrasThree.label.fontSize = 30;
	extrasThree.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(extrasThree);
	
	extrasThree.func = function(){
		screenMan.remove(extrasMenu);
		screenMan.push(extrasThreeScreen);
	}
	}
	if(getCookie("ex4") == 1){
	var extrasFour = new TextButton("Classified #4");
	extrasFour.y = 150;
	extrasFour.center = true;
	extrasFour.label.dropShadow = true;
	extrasFour.label.fontSize = 30;
	extrasFour.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(extrasFour);
	
	extrasFour.func = function(){
		screenMan.remove(extrasMenu);
		screenMan.push(extrasFourScreen);
	}
	}
	
	/*var haydenPorn = new TextButton("Hayden's Porn");
	haydenPorn.y = 200;
	haydenPorn.center = true;
	haydenPorn.label.dropShadow = true;
	haydenPorn.label.fontSize = 30;
	haydenPorn.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(haydenPorn);
	*/
}

var levelSelect = new Screen(false, true);
levelSelect.image = Textures.load("Resources/new_menu.png");

levelSelect.init = function(){
	this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    var backButton = new TextButton("Back");
	backButton.center = true;
	backButton.y = 200;
	backButton.label.dropShadow = true;
	backButton.label.fontSize = 30;
	backButton.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(backButton);
	
	backButton.func = function(){
		screenMan.remove(levelSelect);
		screenMan.push(mainMenu);
	}
    
	var Tutorial = new TextButton("Tutorial");
    Tutorial.center = true;
    Tutorial.label.dropShadow = true;
    Tutorial.label.fontSize = 30;
    Tutorial.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(Tutorial);
    
    Tutorial.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(gameScreen);
    };
    
    var levelOne = new TextButton("Level 1");
    levelOne.y = 50;
    levelOne.center = true;
    levelOne.label.dropShadow = true;
    levelOne.label.fontSize = 30;
    levelOne.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(levelOne);
    
    levelOne.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(gameScreen2);
    };
    
    var levelTwo = new TextButton("Level 2");
    levelTwo.y = 100;
    levelTwo.center = true;
    levelTwo.label.dropShadow = true;
    levelTwo.label.fontSize = 30;
    levelTwo.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(levelTwo);
    
    levelTwo.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(gameScreen3);
    };
    
    var levelThree = new TextButton("Level 3");
    levelThree.y = 150;
    levelThree.center = true;
    levelThree.label.dropShadow = true;
    levelThree.label.fontSize = 30;
    levelThree.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
    this.gui.addChild(levelThree);
    
    levelThree.func = function(){
        screenMan.remove(mainMenu);
        screenMan.push(gameScreen4);
    };
    
};

var pauseMenu = new Screen(false, true);
//Override the empty init function to set some properties
pauseMenu.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2 + -world.x;
    this.gui.y = canvas.height/2 + -world.y;
    
    var pause = new TextBox("[PAUSED]");
    pause.y = -50;
    pause.center = true;
    pause.fontSize = 40;
    pause.drawBG = true;
    pause.bgColor = "#8D8D8D";
    this.gui.addChild(pause);
    
    var resumeGame = new TextBox("Esc to Resume");
    resumeGame.center = true;
    resumeGame.fontSize = 24;
    resumeGame.drawBG = true;
    resumeGame.bgColor = "#8D8D8D";
    this.gui.addChild(resumeGame);
    
    var returnToMenu = new TextBox("Space to Return to Main Menu");
    returnToMenu.y = 50;
    returnToMenu.center = true;
    returnToMenu.fontSize = 24;
    returnToMenu.drawBG = true;
    returnToMenu.bgColor = "#8D8D8D";
    returnToMenu.border = 0;
    returnToMenu.borderColor = "purple";
    this.gui.addChild(returnToMenu);
    returnToMenu.func = function(){
        screenMan.remove(pauseMenu);
        screenMan.remove(gameScreen);
    };
};

var gameOver = new Screen(false, true);
//Override the empty init function to set some properties
gameOver.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2 + -world.x;
    this.gui.y = canvas.height/2 + -world.y;
    
    var youLose = new TextBox("YOU LOSE");
    youLose.center = true;
    youLose.fontSize = 36;
    youLose.drawBG = true;
    youLose.bgColor = "#8D8D8D";
    this.gui.addChild(youLose);
    
    var returnToMenu = new TextBox("Space to Return to Main Menu");
    returnToMenu.y = 50;
    returnToMenu.center = true;
    returnToMenu.fontSize = 24;
    returnToMenu.drawBG = true;
    returnToMenu.bgColor = "#8D8D8D";
    returnToMenu.border = 0;
    returnToMenu.borderColor = "purple";
    this.gui.addChild(returnToMenu);
    returnToMenu.func = function(){
        screenMan.remove(gameOver);
        screenMan.remove(gameScreen);
    };
    nightsong.pause();
    sounds.play("Audio/alert.mp3");
};

var inventory = new Screen(false, true);

inventory.init = function(){
	
	this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2 + -world.x;
    this.gui.y = canvas.height/2 + -world.y;
    
	var invBox = new Sprite();
	invBox.image = Textures.load("Resources/box_game_sprite_update-2.png");
	invBox.x = canvas.width / 2 + -world.x + 200;
	invBox.y = canvas.height / 2 + -world.y + 250;
	invBox.width = 50;
	invBox.height = 50;
	inventory.stage.addChild(invBox);
	
	var invTrap = new Sprite();
	invTrap.image = Textures.load("Resources/snap_trap-png.png");
	invTrap.x = canvas.width / 2 + -world.x + 310;
	invTrap.y = canvas.height / 2 + -world.y + 250;
	invTrap.width = 50;
	invTrap.height = 50;
	inventory.stage.addChild(invTrap);
	
	invBox.update = function(d){
		invBox.x = canvas.width / 2 + -world.x + 200;
	    invBox.y = canvas.height / 2 + -world.y + 250;
    };
	
	invTrap.update = function(d){
		invTrap.x = canvas.width / 2 + -world.x + 310;
	    invTrap.y = canvas.height / 2 + -world.y + 250;
	};
};


var scriptScreen = new Screen(false, true);

scriptScreen.init = function(){
    
    this.width = canvas.width;
    this.height = canvas.height;
    
    this.gui.x = canvas.width/2 + -world.x;
    this.gui.y = canvas.height/2 + -world.y;

};

var gameScreen = new Screen(false, true);
gameScreen.image = Textures.load("Resources/TutorialLevelDay.png");

//Override the empty init function to set some properties
gameScreen.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = 1194;
    this.height = 1120;
    start();
};

var gameScreen2 = new Screen(false, true);
gameScreen2.image = Textures.load("Resources/level1day.png");

//Override the empty init function to set some properties
gameScreen2.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = 1190;
    this.height = 2240;
    start2();
};

var gameScreen3 = new Screen(false, true);
gameScreen3.image = Textures.load("Resources/level_2_update-1.png");

//Override the empty init function to set some properties
gameScreen3.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = 1400;
    this.height = 2520;
    start3();
};

var gameScreen4 = new Screen(false, true);
gameScreen4.image = Textures.load("Resources/level_3.png");

//Override the empty init function to set some properties
gameScreen4.init = function(){
    //Since we set a background we want the screen to fill  the canvas
    this.width = 2380;
    this.height = 1890;
    start4();
};

///////////////Extras Stuff/////////////////////
var extrasOneScreen = new Screen(false, true);
extrasOneScreen.init = function(){
	this.width = canvas.width;
    this.height = canvas.height;
    this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    
    var haydenStuff = new TextBox("The concept for this game actually came to my head in a rather\n odd way. As my friend and I were walking out of a grocery\n store, we noticed an owl statue perched on a ledge\n up on the side of the building. I began to joke about he was a guardian\n of the grocery store, who stayed awake even during the\n day. One thing led to another and I somehow\n came up with the hare-brained idea that is this game today.\n I can't even begin to thank my team for deciding\n roll with the idea of a sneaky owl game.\n For real though, office chairs are the way to go. \n\n -Hayden-");
    haydenStuff.y = -50;
    haydenStuff.center = true;
    haydenStuff.fontSize = 24;
    haydenStuff.drawBG = true;
    haydenStuff.bgColor = "#8D8D8D";
    this.gui.addChild(haydenStuff);
    	
	var backButton1 = new TextButton("Back");
	backButton1.center = true;
	backButton1.y = 250;
	backButton1.label.dropShadow = true;
	backButton1.label.fontSize = 30;
	backButton1.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(backButton1);
	
	backButton1.func = function(){
		screenMan.remove(extrasOneScreen);
		screenMan.push(extrasMenu);
	}
	

};

var extrasTwoScreen = new Screen(false, true);
extrasTwoScreen.init = function(){
	this.width = canvas.width;
	this.height = canvas.height;
	this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    var lorenStuff = new TextBox("In making Incognitowl, a /n rivalry arose during meetings /n between the members of /n the group. Matt and /n Loren worked on the couch /n and were known as the /n Couch Hoes, while Brandon /n and Hayden worked on the /n desktops and became known /n as the Exec-Chair-Bitches.");
    lorenStuff.y = -50;
    lorenStuff.center = true;
    lorenStuff.fontSize = 24;
    lorenStuff.drawBG = true;
    lorenStuff.bgColor = "#8D8D8D";
    this.gui.addChild(lorenStuff);
    
    var backButton2 = new TextButton("Back");
	backButton2.center = true;
	backButton2.y = 250;
	backButton2.label.dropShadow = true;
	backButton2.label.fontSize = 30;
	backButton2.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(backButton2);
	
	backButton2.func = function(){
		screenMan.remove(extrasTwoScreen);
		screenMan.push(extrasMenu);
	}
    
}

var extrasThreeScreen = new Screen(false, true);
extrasThreeScreen.init = function(){
	this.width = canvas.width;
	this.height = canvas.height;
	this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    var brandonStuff = new TextBox("Hey guys, it's me Brandon, the worst member of the group.\nThis isn't actually Hayden writing the blurb for me because we have less than\n 30 minutes until we have to turn it in and he's compiling the game.\nIn actuality, I put together some beastly lights that work exactly as intended.\nI was also in charge of fixing up and clarifying all the\n half-assed coding Hayden did for this game.\nAlright well time to submit!\n\n-Brandon Jarvinen");
    brandonStuff.y = -50;
    brandonStuff.center = true;
    brandonStuff.fontSize = 24;
    brandonStuff.drawBG = true;
    brandonStuff.bgColor = "#8D8D8D";
    this.gui.addChild(brandonStuff);
    
    var backButton3 = new TextButton("Back");
	backButton3.center = true;
	backButton3.y = 250;
	backButton3.label.dropShadow = true;
	backButton3.label.fontSize = 30;
	backButton3.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(backButton3);
	
	backButton3.func = function(){
		screenMan.remove(extrasThreeScreen);
		screenMan.push(extrasMenu);
	}
	
}

var extrasFourScreen = new Screen(false,true);
extrasFourScreen.init = function(){
	this.width = canvas.width;
	this.height = canvas.height;
	this.gui.x = canvas.width/2;
    this.gui.y = canvas.height/2;
    
    var mattStuff = new TextBox("If anyone is reading this and managed\n to get my briefcase: GG.  \n I am very bad at our own game.\n\n\n -Matt-");
    mattStuff.y = -50;
    mattStuff.center = true;
    mattStuff.fontSize = 40;
    mattStuff.drawBG = true;
    mattStuff.bgColor = "#8D8D8D";
    this.gui.addChild(mattStuff);
    
    var backButton4 = new TextButton("Back");
	backButton4.center = true;
	backButton4.y = 250;
	backButton4.label.dropShadow = true;
	backButton4.label.fontSize = 30;
	backButton4.setLabelColors("#aaaaaa", "#ffffff", "#ff0000");
	this.gui.addChild(backButton4);
	
	backButton4.func = function(){
		screenMan.remove(extrasFourScreen);
		screenMan.push(extrasMenu);
	}
}


gInput.addFunc(27, function(){
    if((screenMan.screens.find(gameScreen) || screenMan.screens.find(gameScreen2) || screenMan.screens.find(gameScreen3) || screenMan.screens.find(gameScreen4)) && !screenMan.screens.find(pauseMenu)){
        pauseMenu.gui.x = canvas.width/2 + -world.x;
        pauseMenu.gui.y = canvas.height/2 + -world.y;
        screenMan.push(pauseMenu);
    } else if(screenMan.screens.find(pauseMenu)){
        screenMan.remove(pauseMenu);
    }
});

gInput.addFunc(32, function(){
    if(screenMan.screens.find(pauseMenu)){
        location.reload();
    }
    if(screenMan.screens.find(gameOver)){
    	location.reload();
    }
});

if(autoStart1 == 1){
	screenMan.remove(mainMenu);
	screenMan.push(gameScreen);
}
if(autoStart2 == 1){
	screenMan.remove(mainMenu);
	screenMan.push(gameScreen2);
}
if(autoStart3 == 1){
	screenMan.remove(mainMenu);
	screenMan.push(gameScreen3);
}
if(autoStart4 == 1){
	screenMan.remove(mainMenu);
	screenMan.push(gameScreen4);
}

