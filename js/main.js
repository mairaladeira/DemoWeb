/**
 * Created by Maira on 3/19/16.
 */
$('div.class1').css("background-color", "red");

var todoOnClick = function(){
    var offset = $("#square3").offset();
    console.log(offset.top);
    $('html, body').animate({
          scrollTop: offset.top
    }, 1000);
};

$(".class3").on("click", todoOnClick);