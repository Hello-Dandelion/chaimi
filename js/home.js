$(function(){
	
	//给ul设置高----------------------------------------------
	var img_h = $('#header img').height();
	$('#header .header-ad').css('height',img_h);
	
	//轮播----------------------------------------------
	var L = $('#header li').length;
	var first;
	var stop = setInterval(function(){
		for (var i = L-1; i >=0; i--) {
			var index = parseInt($('#header li').eq(i).attr('num'));
			index--;
			$('#header li').eq(i).attr('num',index);
			$('#header li').eq(i).css({'left':(index-1)+'00%'});
			if (index == 0) {
				first = $('#header li').eq(i).clone(true);
				var copyFirst = $('#header li').eq(i);
				setTimeout(function(){
					copyFirst.remove();
				},1000);
			}
		}
		first.attr('num','4').css({'left':L-1+'00%'});
		$('.header-ad').append(first);
	},3000);
	
});
