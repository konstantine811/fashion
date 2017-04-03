$(document).ready(function() {


	function heightDetect() {
	$(".bird-box").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		$('.logo').css({'transform': 'translate(0px, '+ wScroll / 4 + '%)'});

		$('.back-bird').css({'transform': 'translate(0px, '+ wScroll / 3 + '%)'});

		$('.fore-bird').css({'transform': 'translate(0px, -'+ wScroll / 20 + '%)'});

		if(wScroll > ($('.clothes img').offset().top - ($(window).height() / 2))) {
			$('.clothes img').each(function(i) {
				
				setTimeout(function() {
					$('.clothes img').eq(i).addClass('is-showing');
				}, 150 * (i+1));
			});
		}


		if(wScroll < $('.clothes').offset().top  - $(window).height()) {
			$('.clothes img').each(function(i) {

				setTimeout(function() {
					$('.clothes img').eq(i).removeClass('is-showing');
				}, 150 * (i+1));
			});
		}

		if(wScroll > ($('.clothes img').offset().top + 800)) {
			$('.clothes img').each(function(i) {
				
				setTimeout(function() {
					$('.clothes img').eq(i).removeClass('is-showing');
				}, 150 * (i+1));
			});
		}

		if(wScroll > $('.large-window').offset().top - $(window).height()) {
			$('.large-window').css({'background-position': 'center ' + (wScroll - $('.large-window').offset().top) / 4 + 'px'});


			var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
			$('.window-tint').css({'opacity' : opacity});
		}
			
		if(wScroll > $('.blog-posts').offset().top - $(window).height()) {


			var offset = Math.min(0, wScroll - $(".blog-posts").offset().top + $(window).height() - 700 );
			$('.post-1').css({'transform': 'translate(' + offset + 'px,' +  Math.abs(offset * 1) +'px)'});
			console.log(offset);

			$('.post-3').css({'transform': 'translate(' + Math.abs(offset) + 'px,'+  Math.abs(offset * 1) +'px)'});
		}
	});

});