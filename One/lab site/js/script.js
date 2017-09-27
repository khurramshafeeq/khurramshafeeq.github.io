/*
[Table of contents]

01. SinglePageMenu Function
02. ActivemainMenuItem Function
03. ScrollHeader
04. Preloader Animation
05. Navigation Tabs
06. Site Search Function
07. Quick Contacts Collapsible function
08. Elements Animation on page scroll
09. Mixitup Filter Tabs
10. Carousel Script
	i.   fullscreen-slider
	ii.  testimonials carousel
	iii. relaed-posts carousel
	iv.  blog-carousel
	v.   Sync owl-carousel
11. Magnific Popup
12. Accordion
13. Team Boxes Hover Effect
14. Scroll to top button

*/


jQuery(function($){
	"use strict";
	
	singlePageMenu();
	activeMainMenuItem();
	scrolledHeader();


	/***** Preloader 
	-------------------------------------------------------------- ***/
	$(window).load(function(){
	  
		setTimeout(function(){$('.preloading-screen').fadeOut(1000);}, 800);

		//MY NEW SCRIPT
		$('.menu-item a').on('click', this, function(evt) {
			if( ! $(this).siblings('.sub-menu').length ) {
				if( !( evt.ctrlKey || evt.metaKey ) ) {
					$('.preloading-screen').fadeIn(1000);
				}
			}
		});
	});


	$(window).scroll( function(){
		activeMainMenuItem();
		scrolledHeader();
	});

	/*** Navigation on tabs ****/
	$('.navbar-nav li').has('ul').addClass('has-ul');
	$('.navbar-nav li.has-ul').prepend('<span class="menu-sibling"/>');


	$('.menu-sibling').on('click', this, function(){
		$(this).next('ul').toggle();
		$(this).closest('li').toggleClass('active');
	});

	
	/*** Site Search Bar
	----------------------------------------------------------------------------- ****/

	$('.search-init-btn').on('click', this, function(){
		$('.site-search-form').toggleClass('in');
		$('.site-search').toggleClass('open');
	});


	/*** Quick Contact boxes collapse
	----------------------------------------------------------------------------- ****/

	$('.quick-contact-box').on('click', 'header', function(){
		$(this).next('.text').slideToggle();
	});
	
	/*** Elements Animation on page scroll
	----------------------------------------------------------------------------- ****/
	
	if ( $('.animated').length ){
		$('.animated').appear(function(){
			var el = $(this);
			var anim = el.data('animation');
			var animDelay = el.data('delay');
			if (animDelay) {

				setTimeout(function(){
					el.addClass( anim + " in" );
					el.removeClass('out');
				}, animDelay);

			}

			else {
				el.addClass( anim + " in" );
				el.removeClass('out');
			}    
		},{accY: -150});			
	}

	/*** Mixitup Filter Tabs
	----------------------------------------------------------------------------- ****/
	
	if ( $('.filter-list').length) {
		$('.filter-list').mixitup();
	}

	/*** Carousel Script 
	----------------------------------------------------------------------------- ****/

	/*** fullscreen-slider ***/
	if ( $('.fullscreen-slider').length) {
		var fullSlider = $(".fullscreen-slider");
	
		fullSlider.owlCarousel({
			autoPlay: true,
			singleItem : true,
			slideSpeed : 1000,
			navigation: false,
			pagination:false,
		});
	}

	/*** testimonials carousel ***/
	if ( $('.testim').length) {
		var tSlide = $(".testim");
	
		tSlide.owlCarousel({
			autoPlay: true,
			singleItem:true,
			navigation : false,
			transitionStyle : "backSlide"
		});
	}

	/*** relaed-posts carousel ***/
	if ( $('.related-posts').length) {
		var clSlide = $(".related-posts");
	
		clSlide.owlCarousel({
			autoPlay: true,
			navigation : true,
			items : 3,
			pagination: false,
			itemsDesktop : [1000,3],
			itemsDesktopSmall : [900,2],
			itemsTablet: [600,2],
			itemsMobile : [480,1],
			afterInit : function(elem){
				var that = this;
				that.owlControls.prependTo(elem).addClass('owl-controls-2');
			}
		});
	}
	
	/*** blog-carousel ***/
	if ( $('.blog-carousel').length) {
		var blogSlide = $(".blog-carousel");
	
		blogSlide.owlCarousel({
			autoPlay: true,
			singleItem: true,
			pagination: false,
			navigation : true,
			transitionStyle : "fadeUp"
		});
	}

	/**** Sync owl-carousel ****/
	function carouselThumb(){
		
		var sync1 = $("#sync1");
		var sync2 = $("#sync2");
		
		sync1.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: true,
			pagination:false,
			afterAction : syncPosition,
			responsiveRefreshRate : 200,
		});
		sync2.owlCarousel({
			items : 5,
			itemsDesktop      : [1199,5],
			itemsDesktopSmall     : [979,4],
			itemsTablet       : [768,2],
			itemsMobile       : [479,2],
			navigation: true,
			pagination:false,
			responsiveRefreshRate : 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
		});
		function syncPosition(el){
			var current = this.currentItem;
			$("#sync2")
				.find(".owl-item")
				.removeClass("synced")
				.eq(current)
				.addClass("synced");
			if($("#sync2").data("owlCarousel") !== undefined){
				center(current);
			}
		}
		
		$("#sync2").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
		
		function center(number){
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		
			var num = number;
			var found = false;
			for(var i in sync2visible){
				if(num === sync2visible[i]){
					found = true;
				}
			}
		
			if(found===false){
				if(num>sync2visible[sync2visible.length-1]){
					sync2.trigger("owl.goTo", num - sync2visible.length+2);
				}else{
					if(num - 1 === -1){
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if(num === sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", sync2visible[1]);
			} else if(num === sync2visible[0]){
				sync2.trigger("owl.goTo", num-1);
			}
		}
	
	}

	if ( $("#sync1").length ) {
			carouselThumb();
	}
	/**** end sync owl-carousel ****/

	/*** load carousel items with json ****/
	var owlMemberSelection = $("#load-selected-member");

	$('.view-profile').on('click', this, function(e){
		
		var valu = $(this).data('member-target');

		owlMemberSelection.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: true,
			pagination:false,
			autoHeight : true,
			jsonPath : "js/json/data.json",
			afterInit: function(elem){
				var that = this,
					contrl = that.owlControls,
					btns = contrl.find('.owl-buttons .owl-prev');
				elem = valu;
          		owlMemberSelection.trigger('owl.goTo', elem);
    			$('<button class="btn-destroy">x</button>').insertAfter(btns);
		
				$('.btn-destroy').on('click', this, function(){
					owlMemberSelection.data('owlCarousel').destroy();
				});

				var winTop = owlMemberSelection.position().top;

        		$('html, body').animate({scrollTop: owlMemberSelection.position().top - 20}, 600);


        	}
	    });
	});
	$('.view-profile').on('click', this, function(){
		var valu = $(this).data('member-target');
    	owlMemberSelection.trigger('owl.goTo', valu);
    	$('html, body').animate({scrollTop: owlMemberSelection.position().top - 20}, 600);
  	});

	


	/**** Magnific Popup
	----------------------------------------------------------------------------- ****/
	
	if ( $('.image-popup').length) {
		$('.image-popup').magnificPopup({ 
			type: 'image',
			gallery: {
				enabled: true
			}
		});	
	}
	if ( $('.post-type.pic').length) {
		$('.post-type.pic').magnificPopup({ 
			type: 'image'
		});	
	}
	
	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$.magnificPopup.close();
		}
	});
	
	
	/**** Accordion
	----------------------------------------------------------------------------- ****/

	$('.accordion').collapse();

	$('.panel-collapse').on('show.bs.collapse', function(){
		$(this).prev('.panel-heading').find('.panel-title').addClass("active-heading");
	});
	
	$('.panel-collapse').on('hide.bs.collapse', function(){
		$(this).prev('.panel-heading').find('.panel-title').removeClass("active-heading");
	});


	/**** Team Boxes Hover Effect
	----------------------------------------------------------------------------- ****/
	
	$('.team-list.hoverable').each(function() {
		var $teamlist = $(this);
		$teamlist.on('mouseenter', '.team-box', function(){
			var $this = $(this),
			$text = $('.text', $this),
			$image = $('.image', $this),
			$li = $('.team-list.hoverable > li'),
			$parent = $this.closest('li');

			$li.removeClass('active');
			$parent.addClass('active');
		});
	});

	
	/**** Scroll to top button
	----------------------------------------------------------------------------- ****/
	
	$('.social-opener').on('click', this, function() {
		$('html, body').animate({scrollTop: 0}, 600);
	});

	if ( $('.datepicker').length ){
		$('.datepicker').datepicker();
	}

});


/***** Main Menu for Single page 
-------------------------------------------------------------- ***/
function singlePageMenu(){
	if ( $('.single-page').length) {

		$('.navbar').each(function(){

				var $active, $content, $links = $(this).find('a.on'),
				$li = $(this).find('a').closest('li');
			
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$content = $($active.attr('href'));
			
				$(this).on('click', 'a', function(e){
		
					$li.removeClass('active');
			
					$active = $(this);
					$content = $($(this).attr('href'));
	
					$(this).closest('li').addClass('active');
					$("body,html").animate({scrollTop:$content.position().top + 1}, 1000);
					
					e.preventDefault();
				});
		});

	}
}	/*** /singlePageMenu ***/

/*** single page Main Menu add Class to current Menu's Target Section ****/
function activeMainMenuItem(){

	var scrollPos = $(document).scrollTop();

	if ( $('.single-page').length) {
		$('.navbar a.on').each(function () {
			var currLink = $(this),
				refElement = $(currLink.attr("href")),
				$li = currLink.closest('li');
			
			if ( refElement.position().top <= scrollPos && (refElement.position().top - 2) + refElement.outerHeight() > scrollPos) {
				$('.main-nav > li').removeClass("active");
				$li.addClass("active");
			}
			else{
				$li.removeClass("active");
			}
		});
	}
}	/*** /activeMainMenuItem ***/	

/**** Create Fixed on page scroll ***/
function scrolledHeader(){
	if ( $('.sticky-menu-trigger').length ) {
		var menuTrigger = $('.sticky-menu-trigger').outerHeight();
		if ( $(document).scrollTop() > menuTrigger){
		$('body').addClass('scrolled');
		}
		else {
			$('body').removeClass('scrolled');
		}
	}
}