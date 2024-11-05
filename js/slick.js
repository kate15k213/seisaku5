$(function () {
    $('.slider').on('init', function(event, slick) {  //スライド開始前の処理
      $('.slick-slide[data-slick-index="0"]').addClass("animation");  //スライド対象エリアのclassに.animationを追加
    })
    .slick({  //スライドオプションを設定
    fade:true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false
    })
    .on({  //スライド中の処理
      beforeChange: function (event, slick, currentSlide, nextSlide) {  //1スライド前の処理
        $(".slick-slide", this).eq(nextSlide).addClass("animation");  //スライド対象エリアの次のスライドエリアのclassに.animationを追加
        $(".slick-slide", this).eq(currentSlide).addClass("rm-animation");  //現在のスライド対象エリアのclassに.rm-animationを追加
      },
      afterChange: function () {
        $(".rm-animation", this).removeClass( //1スライド後の処理
        "rm-animation animation"  //スライドが終わった対象エリアのclassから.rm-animation .animationを削除し、CSSアニメーションを削除（リセット）
        );
      },
    });
});
