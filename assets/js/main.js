"use strict";
$(document).ready(function() {

    var self = this,
        $images = $('.fullbg img'),
        intervalMs = 5000,
        fadeDuration = 1000,
        $currentImage = $('.fullbg img.visible'),
        $nextImage = {},
        currentZIndex = 6;

    if ($images.length > 0) {
        // Ensure current image is in the right place to start.
        $currentImage.css('z-index', currentZIndex); 
        // Start interval.
        setInterval(function(){
            var nextIndex = ($currentImage.index() >= $images.length) ? 0 : $currentImage.index();
            console.log($currentImage.index(), nextIndex);
            // Get next image.
            $nextImage = $($images.get(nextIndex));
            // Show image behind current one before fading out current.
            $nextImage.css('z-index', currentZIndex-1)
                      .removeClass('hidden')
                      .addClass('visible');
            // Fade.
            $currentImage.fadeOut(fadeDuration, function(){
                $currentImage.css({'display' : '', 'z-index' : -1})
                        .removeClass('visible')
                        .addClass('hidden');
                // Swap current image.
                $currentImage = $nextImage;
                $currentImage.css('z-index', currentZIndex);
            });

        }, intervalMs);

    }

});
