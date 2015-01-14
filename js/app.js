function main() {
	$('.arrow-next').click(function() {
        var currentSlide=$('.active-slide');
        var nextSlide=currentSlide.next();
        var currentDot=$('.active-bullet');
        var nextDot=currentDot.next();
        if(nextSlide.length===0) {
            nextSlide=$('.slide').first();
            nextDot=$('.bullet').first();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
         currentDot.removeClass('active-bullet');
        nextDot.addClass('active-bullet');
    });
    $('.arrow-prev').click(function() {
        var currentSlide=$('.active-slide');
        var prevSlide=currentSlide.prev();
        var currentDot=$('.active-bullet');
        var prevDot=currentDot.prev();
        if(prevSlide.length===0) {
            prevSlide=$('.slide').last();
            prevDot=$('.bullet').last();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        currentDot.removeClass('active-bullet');
        prevDot.addClass('active-bullet');
    });
    var iconMenuClose=true;
    $('.icon-menu').click(function() {
        if(iconMenuClose){
            iconMenuClose=false;
            $(".menu").animate({"left":"0px"},500);
            $("body").animate({left:"100px"},500);
        } else {
            iconMenuClose=true;
            $(".menu").animate({"left":"-100px"},500);
            $("body").animate({left:"0px"},500);
        }
    });
}

$(document).ready(main);