'use strict';

$(function() {
    //variables pour le carousel
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var $arrow_left = $('#arrow-left');
    var $arrow_right = $('#arrow-right');

    var width = parseInt(window.getComputedStyle(document.getElementById('slider')).width, 10);

    window.onresize = function() {
        width = parseInt(window.getComputedStyle(document.getElementById('slider')).width, 10);
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
    };




    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $('.arrows')
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);


    $arrow_left.on('click', function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
          if (++currentSlide === $slides.length) {
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
          }
      });
    });

    $arrow_right.on('click', function() {
      if (currentSlide != 1) {
        $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() {
            if (--currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
      }
    });

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});
