// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";

$(".nav-item.product .subitem").hover(function(){
    $(this).addClass("on").siblings().removeClass("on");
    const index = $(this).index();
    const sub = $(this).parents(".sublist").next(".sub3-box-list").find(".sub3-box-item")
    sub.eq(index).show().siblings().hide();
})


$(".menu").on("click",function(){
    $(".bottom-layout").slideToggle();
})
$(".m-header .nav-item .icon").on("click", function(){
    $(this).parents(".title").next(".sublist").slideToggle();
})
$(".m-header .subitem .icon").on("click", function(){
    $(this).parents(".title").next(".sublist2").slideToggle();
})
$(".m-header .subitem2 .icon").on("click", function(){
    $(this).parents(".title").next(".sublist3").slideToggle();
})