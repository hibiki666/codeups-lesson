jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

  // ハンバーガーメニュー
  $(".drawer__icon").on("click", function (e) {
    e.preventDefault();

    $(".drawer").toggleClass("is__active");
    $(".drawer__icon").toggleClass("is__active");
    $(".drawer__content").toggleClass("is__active");
    $(".drawer__background").toggleClass("is__active");

    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  //totopスクロール
  jQuery(window).on("scroll", function () {
    let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
    let areaTop = jQuery(".js__terget-area").offset().top; // 対象エリアの上部の位置
    if (scrollTop > areaTop) {
      jQuery(".totop").addClass("is__show");
    } else {
      jQuery(".totop").removeClass("is__show");
    }
  });
});

// Swiper
const mv = new Swiper(".swiper-mv", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const works = new Swiper(".swiper-works", {
  effect: "slide",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
