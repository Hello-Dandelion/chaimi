$(function(){
	$('#down-btn').click(function(){
		$('#mark').css({
			'-webkit-filter':'blur(2px)',
		});
		$('#down').css('display','block');
		$('.header').css('box-shadow','2px 2px 20px rgba(112,100,154,0.7)');
//		$(document.body).css('overflow-y', 'hidden');
//		$('#mark').on('touchstart',function(e){
//			e.preventDefault();
//		});
	});
	$('#mark').click(function(){
		$('#mark').css({
			'-webkit-filter':'blur(0)',
		});
		$('#down').css('display','none');
		$('.header').css('box-shadow','none');
		$('#mark').off('touchstart');
	});
	var h = $('.goods-detail').height();
	$('.goods-detail').css('height',h);
});
