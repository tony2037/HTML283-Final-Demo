$(document).ready(function(){
    'use strict'
    //alert("document ready");
    $(".tutorial-botton").click(function(){
        //alert("check");
        //$("header").css("display","inline-block");
        $("header").slideToggle("slow");
    });
});