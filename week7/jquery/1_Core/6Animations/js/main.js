$( "h1" ).click(function() {
    $( "h2" ).slideToggle( "slow" );
});

$('p').click(function(){
 $('#animate').animate({
     width: '90%',
     fontSize: '50px'
 },3000)
})

/*
$(function(){   
$( "h1" ).click(function() {
$( "h2" ).slideToggle( "slow" );
});

$('p').click(function(){
 $('#animate').animate({
     width: '90%',
     fontSize: '50px'
 },3000)
})
})

$(document).ready(function(){…});

*/