// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";

const bannerSwiper = new Swiper(".banner-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
});

$(".tab-item").on("click",function(){
  $(this).addClass("on").siblings().removeClass("on");
  const index = $(this).index();
  $(".pro-cate-item").hide();
  $(".pro-cate-item").eq(index).show().css("display", "flex");
})

// 新闻中心切换

$(".news-cate-item").on("mouseenter", function(){
  $(this).addClass("on").siblings().removeClass("on");
  const index = $(this).index();
  $(".news-box-item").hide();
  $(".news-box-item").eq(index).show().css("display", "flex");
})
