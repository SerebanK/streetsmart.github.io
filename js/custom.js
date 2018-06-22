$(function () {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 5000,
    });

    $('.testimonials_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    }).on('beforeChange', function(event, slick, nextSlide) {
        $(this).find('.slick-current .te_bg').removeClass('active');
    }).on('afterChange', function(event, slick, currentSlide) {
        $(this).find('.slick-current .te_bg').addClass('active');
    });
    $('.testimonials_slider').find('.slick-current .te_bg').addClass('active');

    $( ".btn_js" ).click(function() {
        $( ".menu_open" ).slideToggle( "slow", function() {
        });
    });

});
