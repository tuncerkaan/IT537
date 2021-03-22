$('#congrats').hide();
$('img').addClass('img-fluid');

$('#submit-button').click(function(e) {
    e.preventDefault();
    $('#hideable').hide();
    $('#congrats').show();
});