$(window).on('scroll', function(){
	var lastScrollTop = 50;
	var st = $(this).scrollTop();
	if (st > lastScrollTop) {
		$('body').find('.navbar.affix').addClass('navbar-fixed-top');
	} else{
		$('body').find('.navbar.affix').removeClass('navbar-fixed-top');
	};
	
});
