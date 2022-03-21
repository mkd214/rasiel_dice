$(document).ready(function () {
  wsize = $(window).width();
  hsize = $(window).height();
  $('canvas').width(`${wsize}px`);
  $('canvas').height(`${hsize}px`);
});
$(window).resize(function () {
  wsize = $(window).width();
  hsize = $(window).height();
  $('canvas').width(`${wsize}px`);
  $('canvas').height(`${hsize}px`);
});
