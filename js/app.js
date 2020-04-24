	jQuery(".sideMenu").slide({
		titCell: "h3",
		targetCell: "ul",
		defaultIndex: 1,
		effect: "slideDown",
		delayTime: 300,
		trigger: "click"
	});
	jQuery(".ListContent").slide({
		titCell: ".ListContentL li",
		mainCell: ".ListContentR",
		delayTime: 0,
		trigger: "click"
	});