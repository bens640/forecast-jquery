var main = function() {
    $('.day').click(function() {
        $(this).next().toggle();
        $(this).find('.weekday').find('span').toggleClass('glyphicon-minus');
    })
};

$(document).ready(main);