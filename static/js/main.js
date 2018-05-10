;(function () {
	'use strict';
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#scarlett-offcanvas, .js-scarlett-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-scarlett-nav-toggle').removeClass('active');
				
	    	}
	    }
		});
	};

	var offcanvasMenu = function() {
		$('#page').prepend('<div id="scarlett-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-scarlett-nav-toggle scarlett-nav-toggle scarlett-nav-white"><i></i></a>');
		$('#scarlett-offcanvas').append($('.menu-2 > ul').clone()).append($('.menu-1 > ul').clone());
		$('#scarlett-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#scarlett-offcanvas')
			.find('li')
			.removeClass('has-dropdown');
		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);
			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){
			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});

		$(window).resize(function(){
			if ( $('body').hasClass('offcanvas') ) {
    			$('body').removeClass('offcanvas');
    			$('.js-scarlett-nav-toggle').removeClass('active');
	    	}
		});
	};


	var burgerMenu = function() {
		$('body').on('click', '.js-scarlett-nav-toggle', function(event){
			var $this = $(this);
			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
			}
		} , { offset: '85%' } );
	};

	var dropdown = function() {
		$('.has-dropdown').mouseenter(function(){
			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');
		}).mouseleave(function(){
			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});
	};


	var goToTop = function() {
		$('.js-gotop').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			return false;
		});

		$(window).scroll(function(){
			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}
		});
	};


	// Loading page
	var loaderPage = function() {
		$(".scarlett-loader").fadeOut("slow");
	};
	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    }
		});
	};

	var counterWayPoint = function() {
		if ($('#scarlett-counter').length > 0 ) {
			$('#scarlett-counter').waypoint( function( direction ) {
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , {
			    offset: '90%'
			} );
		}
	};


    $(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
        var subtitles = [
            " A nerd",
            " A programmer",
            " Python evangelist",
            " A Reluctant PHP Dev",
            " Git lover ",
            " Not looking for a job ",
            "  "
        ];
        $(".typed").typed({
            strings: subtitles,
            typeSpeed: 80,
            backDelay: 1500,
            smartBackspace: true
        });
	});
}());