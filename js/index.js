$(function(){
	//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
	    effect : 'fade',
	    loop: true,
	    autoplay:2000,
		
		autoplayDisableOnInteraction:false,
	
		// 如果需要分页器
		pagination: '.swiper-pagination',
		
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	
	  })
	  
	  //首页game滚动图
	  function gamesFn(){
			var ul=$('.gamesListUl');
	  		  var ulLeft=$('.gamesListUl').position().left;
			  ulLeft--;
	  		  if(ulLeft<=-990){
	  			  ulLeft=0;
	  		  }
	  		  ul.mouseenter(function(){
	  			  clearInterval(gamesTimer);
	  		  })
	  		  ul.mouseleave(function(){
				  //开启新定时器之前先关闭之前的定时器
					clearInterval(gamesTimer);
	  				gamesTimer=setInterval(gamesFn,50);
	  		  })
	  		  ul.css('left',ulLeft);
	  }
	  var gamesTimer=setInterval(gamesFn,50);
	  
})  
	