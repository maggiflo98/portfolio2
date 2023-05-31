/*  Autumn Greeting Card -- js */

(function($){
	'use strict';

	// declare actors here
	var $backFallingLeaves =$('#brownLeaf,#orangeLeaf,#redLeaf'),
		$treeLeaves = $('[id^=treeleaf]'),
		$floorLeaves = $ ('[id^=floorleaf]'),
		$bird =$('#Bird'),
		$birdHat =$bird.find('#BirdHat'),
		$birdEyes=$bird.find('#leftEye,#rightEye'),
		$nest =$('#NestAndLeaves'),
		$tree=$('#tree_trunk')

		// text

		// JavaScript code to trigger the animation


		
	// clear stage 
	  function clearStage(){
		var clearTl= new TimelineMax();

		 	clearTl
			.set($backFallingLeaves,{autoAlpha:0})
			.set($treeLeaves,{autoAlpha:0})
			.set($bird,{y:'+=65'})
			.set($tree,{autoAlpha:0})
			.set($nest,{autoAlpha:0})
			.set($floorLeaves,{y:'+=275'})
			;

			


		return clearTl;


	  }

	// enter floor vegetation
	  	function enterFloorVegetation(){

			var fleavesTl= new TimelineMax();

			fleavesTl
				.staggerTo($floorLeaves,1,{y:0,ease:Back.easeInOut},0.01)
				.fromTo($tree,1.1,{scaleY:0.2,autoAlpha:0 ,transformOrigin:'center bottom'},
				 {scale:1,autoAlpha:1,transformOrigin:'center bottom',ease:Back.easeInOut})
				//  .fromTo($tree,0.9,{scaleX:0.2,autoAlpha:0 ,transformOrigin:'center bottom'},
				//  {scaleX:1,autoAlpha:1,transformOrigin:'center bottom',ease:Back.easeInOut},'-=0.9');
				.fromTo($tree, 1.1, { scaleX: 0.2, autoAlpha: 0, transformOrigin: 'center bottom' },
				{ scaleX: 1, autoAlpha: 1, transformOrigin: 'center bottom', ease: Back.easeInOut })


				
				

			return fleavesTl;
		}
	// enter tree...stuff
	  function enterTreeStuff(){

	 var treeStuffTl= new TimelineMax()

		treeStuffTl
		
		.staggerFromTo($treeLeaves,0.5,{scale:0.2,autoAlpha:0,transformOrigin:'center-bottom'},
			{scale:1,autoAlpha:1,transformOrigin:'center bottom'},0.02)
		.fromTo($nest,1 ,{y:0,scale:0.2,autoAlpha:0,transformOrigin:'center center'},
		       {y:'-=15',scale:1,autoAlpha:1,transformOrigin:'center center',ease:Elastic.easeOut},'+=0.1')
			   .to($nest,0.3,{y:'+=15',ease:Bounce.easeOut},'-=0.2')
			   .add('nest-pop-in')
			   .set($birdHat,{rotation:12,x:'+=6'})
				.to($bird,1.4,{y:'-=39',autoAlpha:1,ease:Power4.easeInOut},'nest-pop-in+=0.1')
				.add('bird-peeking')
				.set($birdEyes,{autoAlpha:0})
				.set($birdEyes,{autoAlpha:1},'+=0.2')
				.set($birdEyes,{autoAlpha:0},'+=0.3')
				.set($birdEyes,{autoAlpha:1},'+=0.2')
				.add('bird-blinks')
				.to($bird,0.8,{y:'-=34',ease:Power4.easeInOut})
				.to($bird,0.3,{y:'+=8',ease:BackeaseOut})
				.to($birdHat,0.4,{y:'-=12'},'-=0.6')
				.to($birdHat,0.3,{y:0,rotation:0, x:0, onComplete:startBlinking},'-=0.2')
;


					function startBlinking(){
						var birdBlinksTl=new TimelineMax({repeat:-1});
						 birdBlinksTl
						 .set($birdEyes,{autoAlpha:0})
						 .set($birdEyes,{autoAlpha:1},'+=1.2')
						 .set($birdEyes,{autoAlpha:0},'+=0.3')
						 .set($birdEyes,{autoAlpha:1},'+=0.2')
					}
	 return treeStuffTl;
	  }

	// enter the greeting text
	
	// the GO function ...to kick things all off
	
	function go(){
		console.log('..go');

		var masterTl =new TimelineMax()

		masterTl
		.add(clearStage(),'scene-clear-stage')
		.add(enterFloorVegetation,'scene-floor-vegetation')
		.add(enterTreeStuff,'scene-enter-tree-stuff')
		;

		// TODO add child timelines to masterTl
	}
	go();

})(jQuery);

TweenMax.staggerFrom(" ul li", 1, {
	opacity: 0,
	x: -20,
	ease: Power3.easeInOut
  }, 0.08)


  TweenMax.from("h6", 1, {
	delay: .6,
	opacity: 0,
	x: -20,
	ease:Bounce.easeOut
  })

  TweenMax.from("button", 1, {
	delay: .6,
	opacity: 0,
	x: -20,
	yoyo:true,
	ease:Bounce.easeOut
  })
  


