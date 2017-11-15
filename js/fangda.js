
$(function(){
	$(document).on('mousemove',function (evt){
		var clientX=evt.pageX;
		var clientY=evt.pageY;
		var pL=$('.smallpic').offset().left;
		var pH=$('.smallpic').offset().top;
		var width=$('.smallbox').outerWidth()/2;
		var height=$('.smallbox').outerHeight()/2;
		var smL=$('.smallpic').width();
		var smH=$('.smallpic').height();
		var bigL=$('.bigbox').width();
		var bigH=$('.bigbox').height();
		var imH=$('.img2').outerHeight();
		var imW=$('.img2').outerWidth();
		var maxX=smL-width*2;
		var maxY=smH-height*2;
		var bmx=bigL-imW;
		var bmy=bigH-imH;
		var  disY=clientY-pH-height;
		var  disX=clientX-pL-width;	
		if(disX<=0){
				disX=0;
			}
			if(disX>=maxX){
				disX=maxX;
			}
			if(disY<=0){
				disY=0;
			}
			if(disY>=maxY){
				disY=maxY;
			}
			$('.smallbox').css({
				left:disX,
				top:disY
			})
			var bW=disX/maxX*bmx;
			var bH=disY/maxY*bmy;
			$('.img2').css({
				left:bW,
				top:bH
			})
			


	})
	$('.left-to').mouseenter(function(){
		$('.bigbox').css('display','block');
		$('.smallbox').css('display','block');
	})
	$('.left-to').mouseleave(function(){
		$('.bigbox').css('display','none');
		$('.smallbox').css('display','none');
	})
})




