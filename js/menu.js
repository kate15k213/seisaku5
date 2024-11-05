$(function() {
  // 要素を取得
  var element = document.querySelector('.menu');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 900) {
      element.style.display='block';
    }else{
      element.style.display='none';
    }
  });

});
