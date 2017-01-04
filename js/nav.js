$(function(){
	var arr_active = ['home','nearby','shoppingcar','more'];
	var arr = ['home1','nearby1','shoppingcar1','more1'];
	$('#footer a').click(function(){
		var index = $(this).index();
		for (var i = 0; i < $('#footer a').length; i++) {
			$('#footer a').eq(i).find('img').attr('src','img/'+arr[i]+'.png');
		}
		$(this).find('img').attr('src','img/'+arr_active[index]+'.png');
	});
});