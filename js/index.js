$(function(){

  let topClose = $('.topBanner .topBannerClose');
  let topBanner = $('.topBanner');
  let topText = $('.topText')
  
  topClose.click(function(){
    topBanner.stop().animate({
      height : 0
    }, 200);

    topClose.css('display','none');
    topText.css('display','none');
  });//탑 배너 닫기
  
/////////////////////////////////////////TOP_BANNER////////////////////////////////////
  $('.hamToggle').click(function () {
    $(this).next('.hamText').slideToggle(300);
  });//ham Toggle

  $('.hamCloseBtn').click(function () {
    $('.hamText').slideUp('50');
  });// 메뉴 close 시 토글 해제 

 $('.lnb').hover(function(){
   
    $('.lnbLi>ul').stop().slideToggle('1200') 
  });//lnb 마우스 올리면 lnbMenu 내려가기 


  $(window).scroll(function () {
    if ($(this).scrollTop() >=220) {
      $('.lnb').addClass('sticky');
      $('.lnbLi').addClass('backGround')
    } else {
      $('.lnb').removeClass('sticky');
      $('.lnbLi').removeClass('backGround')
    }
  }) //스크롤 내리면 lnb  고정 
//////////////////////////////////////HEADER///////////////////////////////////////////
  $('.slider').bxSlider({
    controls : false,
    slideMargin : 10,
    auto: true,
    speed: 500,
    pause: 4000,
  });//메인 비쥬얼 슬라이더 

//////////////////////////////////////MAIN_VISUAL/////////////////////////////////
$(window).scroll(function () {
  if ($(this).scrollTop() >=600) {

    $('.subBannerTitle').addClass('subTop');
  
  } else {
    $('.subBannerTitle').removeClass('subTop');
  
  }
}) //스크롤 내리면 lnb  고정 
//////////////////////////////////////subBanner/////////////////////////////////
// $('.productBox').bxSlider({
//   pager : false,
//   auto: false,
//   adaptiveHeight : true,
//   minSlides : 2,
//   maxSlides : 2,
//   moveSlides : 1,
//   slideWidth :99999
// });//productBox 슬라이더 


//////////////////////////////////////productBox/////////////////////////////////
  if($(window).width() <= 768) { 
    $('.productBox').bxSlider({
      pager : false,
      auto: false,
      adaptiveHeight : true,
      minSlides : 2,
      maxSlides : 2,
      moveSlides : 1,
      slideWidth :999999999
    });//productBox 슬라이더 
  } else if($(window).width() <= 1279 && $(window).width() >= 769 ){
    $('.productBox').bxSlider({
      pager : false,
      auto: false,
      adaptiveHeight : true,
      minSlides :3,
      maxSlides : 3,
      moveSlides : 1,
      slideWidth :99999
    });//productBox 슬라이더 
  } else if($(window).width() >= 1280){
    $('.productBox').bxSlider({
      pager : false,
      auto: false,
      adaptiveHeight : true,
      minSlides : 4,
      maxSlides : 4,
      moveSlides : 1,
      slideWidth :99999
    });//productBox 슬라이더 
  }




/////////////////////////////////////PRODUCT_BOX/////////////////////////////////


$('.tab li').click(function(){
  let tab = $('.tab li');
let sheet = $('.bestSheetBox .bestSheet');

  let target = $(this);
  let i = target.index();
  
  tab.removeClass('on');
  tab.eq(i).addClass('on');

  sheet.removeClass('on_sheet');
  sheet.eq(i).addClass('on_sheet');


}); 

// $('.bxSlider').bxslider('reloadSlider')


// if($(window).width() <= 768) { 
//   $('.on_sheet').bxSlider({
//     pager : false,
//     auto: false,
//     adaptiveHeight : true,
//     minSlides : 1,
//     maxSlides : 1,
//     moveSlides : 1,
//     slideWidth :999999999
//   });//productBox 슬라이더 
// } else if($(window).width() <= 1279 && $(window).width() >= 769 ){
//   $('.on_sheet').bxSlider({
//     pager : false,
//     auto: false,
//     adaptiveHeight : true,
//     minSlides :2,
//     maxSlides : 2,
//     moveSlides : 1,
//     slideWidth :99999
//   });//productBox 슬라이더 
// } else if($(window).width() >= 1280){
//   $('.on_sheet').bxSlider({
//     pager : false,
//     auto: false,
//     adaptiveHeight : true,
//     minSlides : 4,
//     maxSlides : 4,
//     moveSlides : 1,
//     slideWidth :99999
//   });//productBox 슬라이더 
// }

// // $('.tab li').click(function(){
// // let mySlder = $('.on_sheet').bxSlider
// // mySlider.reloadSlider();
// // });

/////////////////////////////////////PRODUCT_BOX/////////////////////////////////

  $('.footerBtn ').click(function () {
    $(this).next('div').slideToggle(300);
  });//footerLi 슬라이드 토글


  $('.footerSheet05').bxSlider({
    mode: 'vertical',
    auto: true,
    speed: 600,
    pause: 3000,
    pager: false
  });//footer 공지사항 슬라이더
////////////////////////////////////FOOTER//////////////////////////////////////////

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      $('.top').fadeIn('fast');
    } else {
      $('.top').fadeOut('fast')
    }
  }); //window기준 , top fadeOut/fadeIn
  
  $('.top').click(function (e) {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  }); //top 버튼 클릭 이벤트


  // $(window).resize(function(){
  //   if($(window).width() <= 769) {   
  //     $('.productBox').bxSlider({
  //       pager : false,
  //       auto: false,
  //       adaptiveHeight : true,
  //       minSlides : 2,
  //       maxSlides : 2,
  //       moveSlides : 1,
  //       slideWidth :99999
  //     });//productBox 슬라이더 
  //   } else if($(window).width() <= 1279 && $(window).width() >= 7 ){
  //     $('.productBox').bxSlider({
  //       pager : false,
  //       auto: false,
  //       adaptiveHeight : true,
  //       minSlides :3,
  //       maxSlides : 3,
  //       moveSlides : 1,
  //       slideWidth :99999
  //     });//productBox 슬라이더 
  //   } else if($(window).width() >= 1280){
  //     $('.productBox').bxSlider({
  //       pager : false,
  //       auto: false,
  //       adaptiveHeight : true,
  //       minSlides : 4,
  //       maxSlides : 4,
  //       moveSlides : 1,
  //       slideWidth :99999
  //     });//productBox 슬라이더 
  //   }





});//INDEX_JS


