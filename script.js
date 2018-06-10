$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('top',-(scrolled*0.15)+'px');
}
var buttons = document.querySelectorAll('button');

// For each button on the page, call createParagraph when clicked.
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

