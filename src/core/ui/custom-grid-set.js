export const CustomGridSet = {
	set: (element) => {
		const scroll = element;
		$('.grid-stack-item')
			.resizable({
				containment: '.grid-stack',
				handles: 'e, se, s, sw, w, n, nw, ne',
				snap: true,

				start: function(event) {
					$('.grid-stack-item').removeClass('active');
					$(event.target).addClass('active');
				},
			})
			.draggable({
				handle: '.grid-header',
				snap: '.grid-stack-item, .grid-stack',
				scroll: true,
				start: function(event) {
					$('.grid-stack-item').removeClass('active');
					$(event.target).addClass('active');
				},
				stop: function() {
					scroll.update();
				},
			});

		$('.grid-stack-item').each(function() {
			$(this).on('click', function() {
				$('.grid-stack-item').removeClass('active');
				$(this).addClass('active');
			});
		});

		$('.grid-stack').on('click', function(e) {
			if (
				!$(e.target).hasClass('grid-stack-item') &&
				!$(e.target)
					.parents()
					.hasClass('grid-stack-item')
			) {
				$('.grid-stack-item').removeClass('active');
			}
		});
	},
};
