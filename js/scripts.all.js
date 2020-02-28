(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

      $('.link').on('click', function(event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 800);
        setTimeout(function() {
          window.location = id;
        }, 700);
    });


    $('section.startwork .holder .items .item').on('click',function(){
        let index = $(this).index() + 1;
        $(this).addClass('active');
        $('.progressLine').css('width', 33.3*index+'%');
    });

    $('.testimonals_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                
                slidesToShow: 1
              }
            }
          ]
    });

    $('.faq_box .item:nth-child(1) .title').addClass('active');
    $('.faq_box .item:nth-child(1) .text').slideDown();
    $('.faq_box .item:nth-child(1) .title').css('pointer-events', 'none');
    $('.faq_box .item .title').click(function () {
        $('.faq_box .item .title').removeClass('active');
        $(this).addClass('active');
        $('.faq_box .item .title').css('pointer-events', 'all');
        $(this).css('pointer-events', 'none');
        $('.faq_box .item .text').slideUp();
        $(this).parent().find('.text').slideDown();
    });


    $('section.jointhebest .holder .places[data-id=2]').hide();

    $('section.jointhebest .holder .navig .btns a').on('click', function(){
        let index = $(this).index() + 1;
        $('section.jointhebest .holder .navig .btns a').removeClass('active');
        $(this).addClass('active');
        $('section.jointhebest .holder .places').hide();
        $('section.jointhebest .holder .places[data-id='+ index +']').fadeIn(1000);
    });

    $('.burger').on('click', function(){
        $('header .holder .box .rpanel').toggleClass('active');
    });
});
},{}]},{},[1]);
