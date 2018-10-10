$(document).ready(function () {
    "use strict";

    /*
  |----------------------------------------------------------------------------
  |  IE Fix
  |----------------------------------------------------------------------------
  */
    function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $('html').addClass('client-ie');
            $('input[class^=switch]').each(function(){
               $(this).wrap('<div class="switch-wrap"></div>').after('<span class="switch-indicator"></span>');
            });
        } else // If another browser, return 0
        {
            $('html').removeClass('client-ie');
        }

        return false;
    }
    msieversion();

    /*
    |----------------------------------------------------------------------------
    |  Navbar collapse
    |----------------------------------------------------------------------------
    */
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        $('li.dropdown > a').after('<span class="sub-trigger"></span>');
        $('.dropdown').each(function () {
            $(this).addClass('navbar-mobile');
            $(this).on('click', '>.sub-trigger', function () {
                $(this).parent().toggleClass('sub-open');
                $(this).parent().children("ul.dropdown-menu").slideToggle();
            });
        });
    }

    /*-------------------------------------
        Owl Carousel
        -------------------------------------*/
    $("#cplgr-main-slider").owlCarousel({
        singleItem: true,
        slideSpeed: 200,
        autoPlay: 3000,
        mouseDrag: false,
        stopOnHover: true,
        navigation: false,
        pagination: false,
    });

    $("#cplgr-listing-details-slider").owlCarousel({
        singleItem: true,
        slideSpeed: 200,
        autoPlay: 3000,
        mouseDrag: false,
        stopOnHover: true,
        navigation: false,
        pagination: true,
        paginationNumbers: false,
    });

    /*-------------------------------------
        Isotope
        -------------------------------------*/
    // init Isotope
    var $grid = $('.collum-3').isotope({
        // options...
        itemSelector: '.cplgr-category-grid-creative',
        masonry: {
            columnWidth: 0
        }
    });

    var $grid = $('.grid').isotope({
        // options...
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 0
        }
    });
    // layout Isotope after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    /*-------------------------------------------
      TineMCE JS
    -------------------------------------------*/

    tinymce.init({
        selector: '.tinymce-editor',
        height: 200,
        menubar: false,
        plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code'
    ],
        toolbar: 'bold italic | alignleft aligncenter alignright alignjustify | link image | undo redo',

    });

    /*-------------------------------------------
      Magnific PopUp
    -------------------------------------------*/
    $('.cplgr-gallery').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    $('.review-images-block').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    /*-------------------------------------------
      Range Slider
    -------------------------------------------*/
    var rangeSlider = function () {
        var slider = $('.range-slider'),
            range = $('.range-slider__range'),
            value = $('.range-slider__value');

        slider.each(function () {

            value.each(function () {
                var value = $(this).prev().attr('value');
                $(this).html(value);
            });

            range.on('input', function () {
                $(this).next(value).html(this.value);
            });
        });
    };
    rangeSlider();

    /*-------------------------------------------
        Address
    -------------------------------------------*/
    var address = {
        data: ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "  San Antonio", "San Diego", "Detroit", "San Jose", "Austin", "Boston", "Las Vegas"],
        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#address").easyAutocomplete(address);

    /*-------------------------------------------
        Service
    -------------------------------------------*/
    var service = {
        data: ["Property Management Services", "Hotel and Resorts", "Education and Traninings", "Computer Repair & Services", "Coaching & Tuitions", "Job Training", "Skin Care & Treatment", "Real Estates"],
        list: {
            match: {
                enabled: true
            }
        }
    };
    $("#service").easyAutocomplete(service);

    if ($('.cplgr-listing-search-result').length > 0) {
        $('.listGrid').on('click', function () {
            $('.cplgr-listing-grid').parent().addClass('col-md-6').removeClass('col-md-12');
        });
        $('.listSingle').on('click', function () {
            $('.cplgr-listing-grid').parent().addClass('col-md-12').removeClass('col-md-6');
        })
    }

	/*-----------------------------------
		Contact Form
    -----------------------------------*/
    // Function for email address validation
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);

    }
    $("#contactForm").on('submit', function (e) {
        e.preventDefault();
        var data = {
            name: $("#name").val(),
            email: $("#email").val(),
            subject: $("#subject").val(),
            message: $("#message").val()
        };

        if (isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) && (data['subject'].length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: data,
                success: function () {
                    $('#contactForm .input-success').delay(500).fadeIn(1000);
                    $('#contactForm .input-error').fadeOut(500);
                }
            });
        } else {
            $('#contactForm .input-error').delay(500).fadeIn(1000);
            $('#contactForm .input-success').fadeOut(500);
        }

        return false;
    });
    $('#abcTest').click(function(){
        alert(1);
    })
    
});
