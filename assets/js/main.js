$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.deal-of-weak-content').slick({
        slidesToShow: 5,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev stick-arrows'><span class="material-symbols-outlined">
        arrow_back_ios
        </span></button>`,
        nextArrow: `<button type='button' class='slick-next stick-arrows'><span class="material-symbols-outlined">
        arrow_forward_ios
        </span></button>`,
    });

    $('.recommend-grid-product').slick({
        slidesToShow: 5,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev stick-arrows'><span class="material-symbols-outlined">
        arrow_back_ios
        </span></button>`,
        nextArrow: `<button type='button' class='slick-next stick-arrows'><span class="material-symbols-outlined">
        arrow_forward_ios
        </span></button>`,
    });
});


function makeTimer() {

    var endTime = new Date("29 April 2023 9:56:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days);
    $("#hours").html(hours);
    $("#mins").html(minutes);
    $("#secs").html(seconds);

}

setInterval(function () { makeTimer(); }, 1000);