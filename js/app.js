$(document).ready(function() {
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function(){
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();

        //animationnnnnn
        var hadouken = $('.hadouken');
        hadouken.finish().show()
            .animate(
                {'left': '1020px'},
                500,
                function() {
                    hadouken.hide();
                    hadouken.css('left', '520px');
                }
        )
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-still').hide();
            $('.ryu-cool').show();
        }
    }).keyup(function(e) {
        if (e.keyCode == 88) {
            $('.ryu-cool').hide();
            $('.ryu-still').show();
        }
    });
});

function playHadouken () {
    var sound = $('#hadouken-sound');
    sound[0].volume = 0.5;
    sound[0].load();
    sound[0].play();
}