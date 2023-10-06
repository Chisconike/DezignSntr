// for FAQ toggle //
$(document).ready(function () {

  $('.hide').hide()

  $('.add').click(function () {
    let $content = $(this).closest('.each').find('.hide');
    $content.slideToggle(300);
    $(this).toggleClass('add remove').html($(this).hasClass('add') ? 'add' : 'remove');

    let color = $(this).closest('.each').find('.topic');
    if ($(this).hasClass('add')) {
      color.css('color', '#6A6960');
    } else {
      color.css('color', '#E9FF9D');
    }
  })


  $('.toggle').click(function () {
    $('.ul').toggle()
  })
})


