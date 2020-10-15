/*global $, alert ,console*/
$(function(){
'use strict';
var myheader =$('.header'),
    myslider = $('.bxslider')
myheader.height($(window).height());
$(window).resize(function(){
myheader.height($(window).height());
myslider.each(function(){
$(this).css('paddingTop',($(window).height()-$('bxslider li').height())/2)
});

});
//links add Active
$('.links li a').click(function(){
$(this).parent().addClass('active').siblings().removeClass('active');
});

//Adjust Bxslider List Item Center
myslider.each(function(){
$(this).css('paddingTop',($(window).height()-$('bxslider li').height())/2);
});
      myslider.bxSlider({
      	pager:false
      });
    //smooth scroll
    $('.links li a').click(function(){

$('html, body').animate({

scrollTop:$('#' + $(this).data('value')).offset().top
}, 1000);
    });
    //Our Auto Slider
    (function autoSlider(){
$('.slider .active').each(function(){
if(!$(this).is(':last-child')){
$(this).delay(3000).fadeOut(1000, function(){

$(this).removeClass('active').next().addClass('active').fadeIn();
autoSlider();
});
} else{
	$(this).delay(3000).fadeOut(1000,function(){

$(this).removeClass('active');
$('.slider div').eq(0).addClass('active').fadeIn();
autoSlider();
	});
}

});
    }());
    //triger mix it up
    $('#container').mixItUp();
    //adjust shuffle link
    $('.shuffle li').click(function(){
$(this).addClass('selected').siblings().removeClass('selected');
    });
//triggle nice scroll

 $('html').niceScroll({

cursorcolor:'#19bc9c',
cursorborder:'1px solid #19bc9c',
cursorwidth:'8px'

 });


});