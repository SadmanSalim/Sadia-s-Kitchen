$(document).ready(function(){
    $('.banner').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    // $('.menus').slick({
    //     arrows: true,
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     // centerMode: true,
    //     prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    //     nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    //   });
      $('.business-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '300px',
        focusOnSelect: true,
        autoplay: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '500px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
              
  });