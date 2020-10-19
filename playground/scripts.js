$(function() {

  $('.control').on('click', () => {
    $.ajax({
      url: 'https://trixieapp.herokuapp.com/proxies/bx/thighbax-contact',
      method: 'POST'
    });
  });

});
