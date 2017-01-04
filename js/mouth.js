$(function(){
	
	//给ul设置高----------------------------------------------
	var img_h = $('#header img').height();
	$('#header .header-ad').css('height',img_h);
	$('#header .header-msg').css('top',img_h-20);
	
	//轮播----------------------------------------------
	var L = $('#header .header-ad li').length;
	var num = 1;
	var first;
	var stop = setInterval(function(){
		$('#header .header-msg li').eq(num).addClass('active').siblings().removeClass('active');
		for (var i = L-1; i >=0; i--) {
			var index = parseInt($('#header .header-ad li').eq(i).attr('num'));
			index--;
			$('#header .header-ad li').eq(i).attr('num',index);
			$('#header .header-ad li').eq(i).css({'left':(index-1)+'00%'});
			if (index == 0) {
				first = $('#header .header-ad li').eq(i).clone(true);
				var copyFirst = $('#header .header-ad li').eq(i);
				setTimeout(function(){
					copyFirst.remove();
				},1000);
			}
		}
		first.attr('num','3').css({'left':L-1+'00%'});
		$('.header-ad').append(first);
		if (num == L-1) {
			num = 0;
		} else{
			num++;
		}
	},3000);
});
