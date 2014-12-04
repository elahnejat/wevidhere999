/**
 *@namespace WeVidHere['screen-config']
 *splash screen for the game
 */
WeVidHere.screens['screen-config'] = (function () {
    
    var firstTime = true,//have we run before?
	ui = WeVidHere.ui,
	dom = ui.dom,
    panel = document.getElementById('sceen-config');//the visible sub-screen from HTML
    
    function init () {
        //common initialization functions
        console.log("in init");
   
	//grab the global submit button for all our form fileds
	//which takes us to the game-screen
	var sub = document.getElementById('config-submit'); 
	dom.bind(subb, "click", function () {
		console.log("clicked on subb, go to the game screen");
		ui.showSceen('screen-game');
	});
	
};
    
    function run () {
        console.log("in run");
        if(firstTime) {
            init();
        }
        //do our stuff 
    };
    
    return {
        init:init,
        run:run
    };
    
})();