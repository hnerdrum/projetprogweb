'use strict';

var $slideContainer = $('.slides', $slider);

$slideContainer.on('mouseenter', pauseSlider());

$(document).ready(function(){
   $("#container").click(function(){
        $(".slides img").animate({width: "100%"});
    });
});
