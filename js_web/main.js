var ProductSlide1 = document.querySelector('.product_item--display')
var ProductSlide2 = document.querySelector('.product--slides')
var isDragging = false;
var startX = 0;
var scrollLeft = 0;
var listSlide1 = document.querySelectorAll('.product_item--display img')
var listSlide2 = document.querySelectorAll('.product_list--item')

ProductSlide2.scrollLeft = listSlide2[0].offsetWidth;
ProductSlide1.scrollLeft = listSlide1[0].offsetWidth * 3;
//Vuốt slide1
//Vuốt slide2
ProductSlide2.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - ProductSlide2.offsetLeft;
  scrollLeft = ProductSlide2.scrollLeft;
});
ProductSlide2.addEventListener("mouseleave", () => {
  isDragging = false;
});
ProductSlide2.addEventListener("mouseup", () => {
  isDragging = false;
});

ProductSlide2.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - ProductSlide2.offsetLeft;
  const walk = (x - startX); 
  ProductSlide2.scrollLeft = scrollLeft - walk;
  console.log('after' + ProductSlide2.scrollLeft);
});

//Click buton slide 2
var btnLeftPd2 = document.querySelector('.list_direction--left i')
var btnRightPd2 = document.querySelector('.list_direction--right i')
btnRightPd2.addEventListener('mousedown', function(){
  listSlide2 = document.querySelectorAll('.product_list--item')
  document.querySelector('.product_list--slides').appendChild(listSlide2[0]);
  listSlide2[3].classList.remove('active--border_green');
  listSlide2[4].classList.add('active--border_green');
  clickBtnright_ofImgPr()
  ProductSlide2.scrollLeft = listSlide2[0].offsetWidth;
})
function clickButtonRight_OfSlides(){
  listSlide2 = document.querySelectorAll('.product_list--item')
  document.querySelector('.product_list--slides').appendChild(listSlide2[0]);
  listSlide2[3].classList.remove('active--border_green');
  listSlide2[4].classList.add('active--border_green');
  ProductSlide2.scrollLeft = listSlide2[0].offsetWidth;
}
btnLeftPd2.addEventListener('mousedown', function(){
  listSlide2 = document.querySelectorAll('.product_list--item')
  document.querySelector('.product_list--slides').prepend(listSlide2[listSlide2.length - 1]);
  listSlide2[3].classList.remove('active--border_green');
  listSlide2[2].classList.add('active--border_green');
  clickBtnleft_ofImgPr()
  ProductSlide2.scrollLeft = listSlide2[0].offsetWidth;
})
function clickButtonLeft_OfSlides(){
  listSlide2 = document.querySelectorAll('.product_list--item')
  document.querySelector('.product_list--slides').prepend(listSlide2[listSlide2.length - 1]);
  listSlide2[3].classList.remove('active--border_green');
  listSlide2[2].classList.add('active--border_green');
  ProductSlide2.scrollLeft = listSlide2[0].offsetWidth;
}


var computedStyle = window.getComputedStyle(btnLeftPd2)
var displayValue = computedStyle.getPropertyValue('display');
console.log(displayValue)

var btnLeftPd1 = document.querySelector('.product_direction .left')
var btnRightPd1 = document.querySelector('.product_direction .right')
console.log(btnRightPd1)
btnRightPd1.addEventListener('click',function(){
  listSlide1 = document.querySelectorAll('.product_item--display img')
  document.querySelector('.product_slides--display').appendChild(listSlide1[0])
  ProductSlide1.scrollLeft = listSlide1[0].offsetWidth * 3;
  clickButtonRight_OfSlides()
})
btnLeftPd1.addEventListener('click',function(){
  listSlide1 = document.querySelectorAll('.product_item--display img')
  document.querySelector('.product_slides--display').prepend(listSlide1[listSlide1.length - 1])
  ProductSlide1.scrollLeft = listSlide1[0].offsetWidth * 3;
  clickButtonLeft_OfSlides()
})
function clickBtnleft_ofImgPr(){
  listSlide1 = document.querySelectorAll('.product_item--display img')
  document.querySelector('.product_slides--display').prepend(listSlide1[listSlide1.length - 1])
  ProductSlide1.scrollLeft = listSlide1[0].offsetWidth * 3;
}
function clickBtnright_ofImgPr(){
  listSlide1 = document.querySelectorAll('.product_item--display img')
  document.querySelector('.product_slides--display').appendChild(listSlide1[0])
  ProductSlide1.scrollLeft = listSlide1[0].offsetWidth * 3;
}


//







