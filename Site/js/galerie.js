'use strict';

var $slideContainer = $('.slides', $slider);

$slideContainer.on('mouseenter', pauseSlider());

$(document).ready(function(){
   $(".slides img").click(function(){
        $(".slides img").animate({width: "100%"});
    });
});
