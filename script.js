
$(document).ready(function () {
    // < !--Init Skitter-- >
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
});
