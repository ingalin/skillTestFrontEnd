$(document).ready(function () {

    // Start page by going to the top - to keep colors correctly
    $(document).scrollTop(0);

    // Init Skitter (slider)
    $('.skitter-large').skitter({
        responsive: {
            small: {
                animation: 'fade',
                max_width: 768,
                suffix: '-small'
            },
            medium: {
                animation: 'directionRight',
                max_width: 1024,
                suffix: '-medium'
            }
        }
    });

    // Change color menu, check if it's scorlled, if it is, change color
    $(window).scroll(function () {
        if ($(document).scrollTop() > $("header").height()) {
            $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange1").addClass("colorChange2");
            $(".menuButton").addClass("buttonColor2");
        }
        else {
            $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange2").addClass("colorChange1");
            $(".menuButton").removeClass("buttonColor2").addClass("buttonColor1");
        }
    });







});
