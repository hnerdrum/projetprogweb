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
    var $arrows = $('.arrows');

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

    $(function() {
      $slideContainer.hover(function() {
        $arrows.css('opacity', '0.8');
      }, function() {
        // on mouseout, reset the background colour
        $arrows.css('opacity', '0');
      });
  });

  $(function() {
    $arrows.hover(function() {
      $arrows.css('opacity', '1');
    }, function() {
      // on mouseout, reset the background colour
      $arrows.css('opacity', '0.8');
    });
  });

    $arrows
        .on('mouseenter', pauseSlider,)
        .on('mouseleave', startSlider);


    $arrow_right.on('click', function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
          if (++currentSlide === $slides.length) {
              currentSlide = 1;
              $slideContainer.css('margin-left', 0);
          }
      });
    });

    $arrow_left.on('click', function() {
      if (currentSlide != 1) {
        $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() {
            if (--currentSlide === $slides.length) {
                currentSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
      }
      else {
        $slideContainer.animate({'margin-left': '-='+width*($slides.length-2)}, animationSpeed/100, function() {
          currentSlide = $slides.length - 1;
        })
      }
    });

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});

$(document).ready(function(){
    $('.btn-navigation').click(function(){
        $(this).find('.barre1').toggleClass('white');
        $(this).find('.barre2').toggleClass('white');
        $(this).find('.barre3').toggleClass('white');
        $('.hamburger').toggleClass('isOpen');
        $('.hamburger-overlay').toggleClass('isOpen');
    });
});
