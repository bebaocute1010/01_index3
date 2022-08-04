$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
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


// SHOW-ON-MAP


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var show_on_map = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
show_on_map.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}