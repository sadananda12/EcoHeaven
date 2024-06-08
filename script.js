$(document).ready(function () {
    $(".navbar-bar-icon").click(function () {
      $(".main-nav-content").toggleClass("main-nav-content-toggle");
    });

    $(".questions-ans-btn-icon1").click(function () {
      $(".questions-ans-para1").slideToggle();
      $(".questions-ans-btn-icon1").toggleClass("questions-ans-btn-icon1-toggle");
    });
    $(".questions-ans-btn-icon2").click(function () {
      $(".questions-ans-para2").slideToggle();
      $(".questions-ans-btn-icon2").toggleClass("questions-ans-btn-icon2-toggle");
    });
    $(".questions-ans-btn-icon3").click(function () {
      $(".questions-ans-para3").slideToggle();
      $(".questions-ans-btn-icon3").toggleClass("questions-ans-btn-icon3-toggle");
    });
    $(".questions-ans-btn-icon4").click(function () {
      $(".questions-ans-para4").slideToggle();
      $(".questions-ans-btn-icon4").toggleClass("questions-ans-btn-icon4-toggle");
    });
    $(".questions-ans-btn-icon5").click(function () {
      $(".questions-ans-para5").slideToggle();
      $(".questions-ans-btn-icon5").toggleClass("questions-ans-btn-icon5-toggle");
    });

  });