(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {};

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/basetest.jpg", id:"basetest"}
	]
};



lib.webfontAvailable = function(family) {
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.basetest = function() {
	this.initialize(img.basetest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.hotel = function() {
	this.spriteSheet = ss["Test_Map_3_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.poolbase = function() {
	this.spriteSheet = ss["Test_Map_3_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.poolboy = function() {
	this.spriteSheet = ss["Test_Map_3_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.tenniscourtball = function() {
	this.spriteSheet = ss["Test_Map_3_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tenniscourtbase = function() {
	this.spriteSheet = ss["Test_Map_3_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tenniscourtp2 = function() {
	this.spriteSheet = ss["Test_Map_3_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tenniscourtp2();
	this.instance.setTransform(-79,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-58,158,116);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tenniscourtp2();
	this.instance.setTransform(-79,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-58,158,116);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tenniscourtball();
	this.instance.setTransform(-32,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-40,64,80);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poolboy();
	this.instance.setTransform(14.5,-20.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-20.5,29,41);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poolboy();
	this.instance.setTransform(-14.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-20.5,29,41);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.poolboy();
	this.instance.setTransform(-14.5,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-20.5,29,41);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hotel();
	this.instance.setTransform(-47.2,-44,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-44,94.5,88);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hotel();
	this.instance.setTransform(-47.2,-44,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-44,94.5,88);


(lib.tennis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ball
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(-114,32,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(82.5,-22,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:82.5,y:-22},19).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},19).to({regY:0,x:-19.5,y:84},20).to({regY:0.1,x:58,y:-35.5},21).to({x:-114,y:32},19).wait(2));

	// Player1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(142.5,-39,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(100,-24.5,0.5,0.5,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:100,y:-24.5},19).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},19).to({regY:0,y:-53.5},20).to({regX:0,regY:0.1,x:77,y:-37.5},21).to({regX:0.1,x:142.5,y:-39},19).wait(2));

	// Player2
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-109,23,0.5,0.5,0,0,0,0.1,0.1);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(-31.5,67,0.5,0.5,0,0,0,0.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,regY:0,x:-31.5,y:67},19).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},19).to({regY:0.2,x:-17,y:78.6},20).to({regX:0.2,regY:0.1,x:-72,y:50},21).to({regX:0.1,x:-109,y:23},19).wait(2));

	// Base
	this.instance_6 = new lib.tenniscourtbase();
	this.instance_6.setTransform(-222,-139.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-139.5,444,270);


(lib.pool2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Swimmer
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(85,-40);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-112,66);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-113,66,1,1,-33);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-112,y:66},106).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},106).to({scaleX:1,scaleY:1,rotation:-28.3,x:-112.8,y:67},6).to({_off:true,scaleX:1,scaleY:1,rotation:-33,x:-113,y:66},1).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},1).wait(4).to({regY:0.1,scaleX:1,scaleY:1,rotation:-31.4,y:66.1},0).to({regY:0,scaleX:1,scaleY:1,rotation:0,x:84,y:-43.9},83).to({skewY:180,x:85,y:-42},3).wait(1));

	// Base
	this.instance_3 = new lib.poolbase();
	this.instance_3.setTransform(-203.5,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.5,-131.5,407,263);


// stage content:



(lib.TestMap3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

var added = false;
	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.

		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
    
    if (!added) {
      this.tennisclick.addEventListener("click", fl_MouseClickHandler_2.bind(this));
      added = true;
    }
		function fl_MouseClickHandler_2(e)
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			outsideFunctionCall(e);
			//alert("Mouse clicked");
			// End your custom code
		}
  }
  var added2 = false;
	this.frame_4 = function() {
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.

		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
    
    if (!added2){
      this.hotel.addEventListener("click", fl_MouseClickHandler_4.bind(this));
      added2 = true;
    }
		function fl_MouseClickHandler_4(e)
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			outsideFunctionCall(e);
			//alert("Mouse clicked");
			// End your custom code
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(26));

	// Hotel
	this.hotel = new lib.Symbol2();
	this.hotel.setTransform(684.3,746);

	this.clickhotel = new lib.Symbol1();
	this.clickhotel.setTransform(684.3,746);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hotel}]}).to({state:[{t:this.clickhotel}]},29).wait(1));

	// Tennis
	this.tennisclick = new lib.tennis();
	this.tennisclick.setTransform(729.2,735.8,0.28,0.28,0,0,0,0.4,-4.1);

	this.timeline.addTween(cjs.Tween.get(this.tennisclick).wait(30));

	// Pool
	this.instance = new lib.pool2();
	this.instance.setTransform(652.7,729.2,0.25,0.25,0,0,0,1.2,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// Base
	this.instance_1 = new lib.basetest();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
