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

  // for our service popup

  $('.click1').click(function () {
    $('.more1').toggle()
    $('.more2').hide()
    $('.more3').hide()
    $('.more4').hide()
  });

  $('.click2').click(function () {
    $('.more2').toggle()
    $('.more1').hide()
    $('.more3').hide()
    $('.more4').hide()
  });

  $('.click3').click(function () {
    $('.more3').toggle()
    $('.more1').hide()
    $('.more2').hide()
    $('.more4').hide()
  });

  $('.click4').click(function () {
    $('.more4').toggle()
    $('.more1').hide()
    $('.more2').hide()
    $('.more3').hide()
  });







  // for animation 

  const check = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add('display');
      } else {
        item.target.classList.remove('display');
      }
    })
  })

  const animate = document.querySelectorAll('.animate');
  animate.forEach((el) => check.observe(el));







})



