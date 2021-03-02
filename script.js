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
    // $(window).scroll(function () {
    //     if (($(document).scrollTop() > ($("header").height()) - 40)) 
    //     {
    //         $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange1").addClass("colorChange2");
    //         $(".menuButton").addClass("buttonColor2");
    //     }
    //     else {
    //         $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange2").addClass("colorChange1");
    //         $(".menuButton").removeClass("buttonColor2").addClass("buttonColor1");
    //     }
    // });


    $(window).scroll(function () {
        if ($(document).scrollTop() > ($(".section1").height() + $("header").height()) - 40) {
            $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange2").addClass("colorChange3");
            $(".menuButton").addClass("buttonColor3");
        }
        else if (($(document).scrollTop() < ($(".section1").height() + $("header").height()) - 40) && 
            ($(document).scrollTop() > ($("header").height()) - 40))
        {
            $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange3").addClass("colorChange2");
            $(".menuButton").removeClass("buttonColor3").addClass("buttonColor2");

        }
        else {
            $(".headerMenuDrop ul.mobileSubMenu").removeClass("colorChange2").addClass("colorChange1");
            $(".menuButton").removeClass("buttonColor2").addClass("buttonColor1");
        }
    });



    // Audio
    // for cross browser
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();

    // load some sound
    const audioElement = document.querySelector('audio');
    const track = audioCtx.createMediaElementSource(audioElement);

    const playButton = document.querySelector('.tape-controls-play');

    // play pause audio
    playButton.addEventListener('click', function () {

        // check if context is in suspended state (autoplay policy)
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        if (this.dataset.playing === 'false') {
            audioElement.play();
            this.dataset.playing = 'true';
            // if track is playing pause it
        } else if (this.dataset.playing === 'true') {
            audioElement.pause();
            this.dataset.playing = 'false';
        }

        let state = this.getAttribute('aria-checked') === "true" ? true : false;
        this.setAttribute('aria-checked', state ? "false" : "true");

    }, false);

    // if track ends
    audioElement.addEventListener('ended', () => {
        playButton.dataset.playing = 'false';
        playButton.setAttribute("aria-checked", "false");
    }, false);

    // volume
    const gainNode = audioCtx.createGain();

    // panning
    const pannerOptions = { pan: 0 };
    const panner = new StereoPannerNode(audioCtx, pannerOptions);
    track.connect(gainNode).connect(panner).connect(audioCtx.destination);
    // Track credit: Outfoxing the Fox by Kevin MacLeod under Creative Commons 





    // Buttons Section 1
    document.querySelector('.button').onmousemove = function (e) {

        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    };



    // Circles Section 2, add clipping paths
      $(".section2").on("mouseover", function (event) {
        let x = event.clientX;
        let y = event.clientY;

    var drawCircle = function (x, y) {
        var $svg = $("#myClip");
        $(SVG('circle'))
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 100)
            .appendTo($svg);
    };

    drawCircle(x, y);

    function SVG(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }

});

////////////////////







});
