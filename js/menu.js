// $(function () {
//   var element = document.querySelector('.header-box');
//   const text = document.querySelectorAll('.nava');
//   //スクロールしてページトップから100に達したlogo.文字、背景を変更して固定する。
//   $(window).on('load scroll', function () {
//     if ($(this).scrollTop() > 900) {
//       element.style.backgroundColor = '#fff';
//       element.style.position = 'fixed';
//       $('.header-logo').css({
//         backgroundImage: $('.header-logo').css('background-image').replace('download-2.svg', 'download-16.svg')
//       });
//       for (let i = 0; i < text.length; i++) {
//         text[i].style.color = '#000';
//       }
//     } else {
//       element.style.backgroundColor = 'transparent';
//       element.style.position = 'static';
//       $('.header-logo').css({
//         backgroundImage: $('.header-logo').css('background-image').replace('download-16.svg', 'download-2.svg')
//       });
//       for (let i = 0; i < text.length; i++) {
//         text[i].style.color = '#fff';
//       }
//     }
//   });
// });
