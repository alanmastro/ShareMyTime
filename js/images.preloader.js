// Preload Images
document.write('<style type="text/css">\.media-box img, .media-box iframe {display:none;}\</style>');
	
jQuery(window).load(function() {
	// when page loaded fadeIn images 1 after 1
	jQuery('.media-box img, .media-box iframe').each(function(index) {
		jQuery(this).delay(500*index).fadeIn(300,
			function() {
			jQuery('.media-box').eq(index).removeClass('loading');
		});
	});
	
	// media-box hover effect
	jQuery('.media-box').hover(function() {
		jQuery(this).find('.open-post, .image-zoom').fadeIn(300);
	}, function() {
		jQuery(this).find('.open-post, .image-zoom').fadeOut(200);
	});
});