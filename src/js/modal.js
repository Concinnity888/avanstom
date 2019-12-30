window.onload = function () {
    $('.btn-open').click(function(e) {
        $(document).ready(function() {
            $(window).scrollTop(0);
        });
        $('.popup').addClass('popup--show');
        $('.overlay').addClass('overlay--show');
    });

    $('.overlay').click(function(e) {
        $('.popup').removeClass('popup--show');
        $('.overlay').removeClass('overlay--show');
    });

    $('.popup__btn-close').click(function(e) {
        $('.popup').removeClass('popup--show');
        $('.overlay').removeClass('overlay--show');
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if ($('.popup').hasClass("popup--show")) {
                $('.popup').removeClass('popup--show');
                $('.overlay').removeClass('overlay--show');
            }
        }
    });
}
