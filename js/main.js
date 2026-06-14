(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

    // Back to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Progress Bar Animation
    $('.progress .progress-bar').each(function () {
        $(this).css('width', $(this).attr('aria-valuenow') + '%');
    });

    // Counter Up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Single-page scroll-spy: highlight active nav link
    var sections = ['home', 'about', 'features', 'services', 'contact'];
    var navLinks = $('.navbar-nav .nav-item.nav-link');

    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop() + 80;
        var active = 'home';
        sections.forEach(function (id) {
            var el = $('#' + id);
            if (el.length && el.offset().top <= scrollPos) {
                active = id;
            }
        });
        navLinks.removeClass('active');
        navLinks.filter('[href="#' + active + '"]').addClass('active');
    });

    // Smooth scroll for anchor links in navbar (close mobile menu on click)
    navLinks.on('click', function () {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-toggler').click();
        }
    });

    // Read More toggle for service cards
    $(document).on('click', '.read-more-btn', function () {
        var $more = $(this).closest('.service-text').find('.more-text');
        if ($more.hasClass('d-none')) {
            $more.removeClass('d-none');
            $(this).html('Read Less <i class="bi bi-chevron-double-left ms-1"></i>');
        } else {
            $more.addClass('d-none');
            $(this).html('Read More <i class="bi bi-chevron-double-right ms-1"></i>');
        }
    });

    // Owl Carousel (if used)
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 }
        }
    });

})(jQuery);
