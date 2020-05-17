$(function () {
  let $dropdown = $(".dropdown");

  $dropdown.on("click", '.toggle', function () {
    let $parent = $(this).parents('.dropdown');

    if(!$parent.hasClass("active")){
      $(".dropdown").removeClass("active");
      $parent.addClass("active");
    } else {
      $parent.removeClass("active");
    }
  });

  $(document).mouseup(function (e){
    if (!$dropdown.is(e.target)
      && $dropdown.has(e.target).length === 0) {
      $dropdown.removeClass("active");
    }
  });

  $('#menu-btn').on("click", () => {
    $('.nav-container').stop().slideToggle(function () {
      if ($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
    $("body").toggleClass("hide-scroll");
  });
});
