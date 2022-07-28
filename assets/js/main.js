$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
});

$(document).ready(function () {
    $('.deal-of-weak-content').slick({
        slidesToShow: 5,
        draggable: false,
        prevArrow:`<button type='button' class='slick-prev stick-arrows'><span class="material-symbols-outlined">
        arrow_back_ios
        </span></button>`,
        nextArrow:`<button type='button' class='slick-next stick-arrows'><span class="material-symbols-outlined">
        arrow_forward_ios
        </span></button>`,
    });
});
$(document).ready(function () {
    $('.recommend-grid-product').slick({
        slidesToShow: 5,
        draggable: false,
        prevArrow:`<button type='button' class='slick-prev stick-arrows'><span class="material-symbols-outlined">
        arrow_back_ios
        </span></button>`,
        nextArrow:`<button type='button' class='slick-next stick-arrows'><span class="material-symbols-outlined">
        arrow_forward_ios
        </span></button>`,
    });
});