
$('.menu-toggle').click(function() {
  $('ul').toggleClass('opening');
  $(this).toggleClass('menu');
})


function slideInText(){
  $('#learning').click(function(event){
      event.preventDefault();
    $('.reveal').slideToggle();
  })
};


function readMoreText(){
  $('#read-more').click(function(event){
      event.preventDefault();
    $('.more-tag1').slideToggle();
  })
};

function readMoreText2(){
  $('#read-more1').click(function(event){
      event.preventDefault();
    $('.more-tag2').slideToggle();
  })
};


readMoreText();
readMoreText2();
slideInText();

//
// $('.read').click(function(){
//   $('.extra-content').slideToggle(250);
//   $('.read-less').toggleClass('hide');
//   $('.read-more').toggleClass('hide');
// });
