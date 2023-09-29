// for FAQ toggle //
$('.hide').hide()

$('.add').click(function () {
  let $content = $(this).closest('.each').find('.hide');
  $content.slideToggle(300);
  $(this).toggleClass('add remove').html($(this).hasClass('add') ? 'add' : 'remove');
})

