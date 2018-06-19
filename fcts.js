$(document).ready(function () {
    $('.slider-child').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,
        accessibility: true,
        speed: 800,
        fade: true,
        //autoplay: true,
        prevArrow: '<span id="back" class="bck-arrows arrows-custom-g slick-prev"><img src="../templates/frontOffice/default/assets/dist/img/back.svg" height="50" width="30"/></span>',
        nextArrow: '<span id="next" class="bck-arrows arrows-custom-g slick-next"><img src="../templates/frontOffice/default/assets/dist/img/next.svg" height="50" width="30"/></span>'
    });
});

function goToParticuliers() {
    window.location.href='particuliers.php';
  }
function goToProfessionnels() {
    window.location.href='professionnels.php';
}