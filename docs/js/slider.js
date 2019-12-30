window.onload = function () {
    var swiper = new Swiper('.slider-cert__container', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.slider-cert__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-cert__button-next'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });

    var swiper = new Swiper('.stages__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.stages__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.stages__button-next',
            prexEl: '.stages__button-prev'
        }
    });

    var swiper = new Swiper('.example__container', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.example__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.example__button-next'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
        }
    });

    var swiper = new Swiper('.doctor-reviews__container', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.doctor-reviews__pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3
            },
        }
    });

    var swiper = new Swiper('.services-reviews__container', {
        slidesPerView: 1,
        spaceBetween: 24,
        pagination: {
            el: '.services-reviews__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-reviews__button-next'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2
            },
        }
    });
};

