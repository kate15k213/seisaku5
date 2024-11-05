$(function () {
  let element = document.querySelector('.header-box');
  $('.humbuger').on("click", function () {
    $('.humbuger span').toggleClass('spanopen');
    $('.header-box').toggleClass('open');
    // displayプロパティを切り替える
  });

  // displayプロパティを切り替える
  // if (element.style.display === 'none') {
  //   element.style.display = 'block';
  // } else {
  //   element.style.display = 'none';
  // }
  // $('.humbuger').on("click", function () {
  //   $('.header-box').toggleClass('.header-box-open');  // メニューにopenクラスをつけ外しする
  //   $('.btn-gNav span').toggleClass('spanopen');
  // });
});
