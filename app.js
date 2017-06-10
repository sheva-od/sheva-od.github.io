$(document).ready(function() {

	$(document).on("scroll", onScroll);

	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.nav-links a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if ((refElement.position().top - 100 <= scrollPos) && (refElement.position().top - 100 + refElement.outerHeight() > scrollPos)) {
				$('.nav-links li').removeClass("active");
				currLink.parent().addClass("active");
			}
			else {
				currLink.parent().removeClass("active");
			}
		});
	}

	$('.nav-links a').on('click', function(event){
    event.preventDefault();

		$('.nav-links li').removeClass('active');
		$(this).parent().addClass('active');

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 20
		}, 500);
	});

	for (i = 2000; i > 1950; i--) {
		$('#yearPicker').append($('<option />').val(i).html(i));
	}
	$("#yearPicker option[value='1993']").attr("selected","selected");

	$('#yearPicker').material_select();

	$(".button-collapse").sideNav({
		menuWidth: 250,
		closeOnClick: true
	});

	var slider = document.getElementById('slider');
	noUiSlider.create(slider, {
		start: [0],
		snap: true,
		connect: [true, false],
		range: {
			'min': 0,
			'25%': 1,
			'50%': 2,
			'max': 3
		}
	});
	slider.noUiSlider.set(2);

});
