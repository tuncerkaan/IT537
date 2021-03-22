/*
$('p').on("mouseenter mouseleave", function(){
    console.log("Mouse hovered over or left a paragraph");
})
*/

$('#paragraph').on({
    mouseenter: function(){
        console.log("mouse entered!")
    },
    mouseleave: function(){
        console.log("mouse leave!")
    }
})
