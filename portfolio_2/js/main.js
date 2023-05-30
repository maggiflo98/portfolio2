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

	// enter tree

	// enter the greeting text
	
	// the GO function ...to kick things all off
	
	function go(){
		console.log('..go');

		var masterTl =new TimelineMax()

		masterTl
		.add(clearStage(),'scene-clear-stage')
		;

		// TODO add child timelines to masterTl
	}
	go();

})(jQuery);


