const timeLine = gsap.timeline({ defaults: {ease: 'power1.out'} });
timeLine.to('.text', { y: "0%", duration: 1, stagger: 0.25 });
timeLine.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5 });
timeLine.to('.intro', { y: '-100%', duration: 1 }, '-=1');
timeLine.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
timeLine.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');

$(document).ready(function() {

    $('#logo').on({
        mouseenter: function() {
            $(this).css({
                backgroundColor: 'rgb(197, 153, 140)',
                color : 'black',
            });
        },

        mouseleave: function() {
            $(this).css('backgroundColor', '');
            $(this).css('color', '');
        }
    });

    $('.navlinks li').on({
        mouseenter: function() {
            $(this).css('backgroundColor', 'rgb(197, 153, 140)');
            $(this).css('color', 'black');
        },
        mouseleave: function() {
            $(this).css('backgroundColor', '');
            $(this).css('color', '')
        }
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
});