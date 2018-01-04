'use strict';

$(function() {
    //variables pour le carousel
    var animationSpeed = 1000;
    var pause = 5000;
    var currentSlide = 1;

    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

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
        $(this).find('.svg').toggleClass('On');
        $('.hamburger').toggleClass('isOpen');
        $('.hamburger-overlay').toggleClass('isOpen');
    });
});
