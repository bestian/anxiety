Loader.addSounds([
	{ id:"music_credits", src:"sounds/music/upbeatcreditMIX.mp3" }
]);

SceneSetup.credits = function(){

	Game.resetScene();
	Game.clearText();

	// RESET HP
	HP.reset();

};