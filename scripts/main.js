/* TOP BUTTON LOGIC */
function btn_top(){
  let btnTop = $('.btn-top');
  $(window).on('scroll', function(){
      if ($(window).scrollTop() >= 80){
          btnTop.fadeIn();
      }else{
          btnTop.fadeOut();
      }
  });

  btnTop.on('click', function(){
    $('html,body').animate({scrollTop:0},900); 
 });
}
/* */
/*  */
/*       SIDEBAR LOGIC        */
function sidebar_function(){
  $(document).ready(function(){
    $('.sidebarBtn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebarBtn').toggleClass('toggle');
    });
  });
  
  $('.pretty').click(function(){
    $(this).toggleClass('pretty-active');
  });
}
/*  */
/*        CATALOG SLIDER LOGIC      */
function catalogSliderFunction(){
  const catalogSlider = new Swiper('.hero-catalog__slider', {
    loop: true,
    slidePerView: 1,
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
      }
  });
}
/*  CATALOG FILTERS LOGIC  */
function catalogFilters(){
    let catalogFilters = document.querySelectorAll('.catalog-filter');
    let hideFilters = document.querySelector('.hide-filters');
    
    catalogFilters.forEach(el => {
      el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('catalog-filter--open');
      });
    });
    
    hideFilters.addEventListener('click', (e) => {
      catalogFilters.forEach(el => {
        el.closest('.catalog-filter').classList.remove('catalog-filter--open');
      });
    });
}
/* COLOR SELECTION LOGIC */
function colorSelection(){
  let colorSelect = document.querySelector('.color-select');

  colorSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-select__btn')){

      document.querySelectorAll('.color-select__btn').forEach(el => el.classList.remove('color-select__btn--active'));
      let color = e.target.dataset.color;
      e.currentTarget.querySelector('.color-select__selected span').textContent = color;

      e.target.classList.add('color-select__btn--active');
    }
  });
}
/* */
/* SIZE SELECTION LOGIC */
function sizeSelection(){
  let sizeSelect = document.querySelector('.size-select');

  sizeSelect.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-select__btn')){

      document.querySelectorAll('.size-select__btn').forEach(el => el.classList.remove('size-select__btn--active'));
      let color = e.target.dataset.size;
      e.currentTarget.querySelector('.size-select__selected span').textContent = color;

      e.target.classList.add('size-select__btn--active');
    }
  });
}
/* STEPPER */
function stepper(){
  let stepper = document.querySelector('.stepper');
  let stepperInput = stepper.querySelector('.stepper__input');
  let stepperMinus = stepper.querySelector('.stepper__btn--minus');
  let stepperPlus = stepper.querySelector('.stepper__btn--plus');

  stepper.querySelector('input').addEventListener('keydown', (e) => {
    if (e.currentTarget.value < 1){
      stepperMinus.classList.add('stepper__btn--disabled');
      stepperPlus.classList.remove('stepper__btn--disabled');
    }
    else{
      stepperMinus.classList.remove('stepper__btn--disabled');
    }
    if (e.currentTarget.value > 98){
      stepperInput.value = 99;
      stepperMinus.classList.remove('stepper__btn--disabled');
      stepperPlus.classList.add('stepper__btn--disabled');
    }
    else{
      stepperPlus.classList.remove('stepper__btn--disabled');
    }
  });

  stepperPlus.addEventListener('click', (e) => {
    let currentValue = parseInt(stepperInput.value);
    currentValue++;
    stepperInput.value = currentValue;
    stepperPlus.classList.remove('stepper__btn--disabled');

    if (stepperInput.value > 98) {
      stepperInput.value = 99;
      stepperPlus.classList.add('stepper__btn--disabled');
    }
    else if(stepperInput.value > 1){
      stepperMinus.classList.remove('stepper__btn--disabled');
    }
     else {
      stepperPlus.classList.remove('stepper__btn--disabled');
    }
  });

  stepperMinus.addEventListener('click', (e) => {
    let currentValue = parseInt(stepperInput.value);
    currentValue--;
    stepperInput.value = currentValue;
    stepperPlus.classList.remove('stepper__btn--disabled');

    if (stepperInput.value <= 1){
      stepperInput.value = 1;
      stepperMinus.classList.add('stepper__btn--disabled');
    }
    else if(stepperInput.value > 1){
      stepperMinus.classList.remove('stepper__btn--disabled');
    }
    else{
      stepperMinus.classList.remove('stepper__btn--disabled');
    }
  });
}
function thumbsFunction(){
  let thumbs = document.querySelector('.card-slider__thumbs');
  let sliderImg = document.querySelector('.card-slider__main img');
  if (thumbs) {
    thumbs.addEventListener('click', (e) => {
      if (e.target.classList.contains('card-slider__thumb')) {
        let src = e.target.querySelector('img').getAttribute('src');
        sliderImg.setAttribute('src', src);
      }
    });
  }
}
/* RELATED PRODUCTS SLIDER */
function relatedSlider(){
  $('.related-slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.realted-prev'),
    nextArrow: $('.realted-next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
}
/* */
$(document).ready(function(){
  if (document.querySelector('.hero-catalog__slider')){
    catalogSliderFunction();
  }
  btn_top();
  sidebar_function();
  try{
    colorSelection();
  }catch(e){

  }
  try{
    sizeSelection();
  }catch(e){

  }
  try{
      stepper();
  }catch(e){

  }
  try{
    thumbsFunction();
  }catch(e){

  }
  try{
    catalogFilters();
  }catch(e){

  }
  relatedSlider();
});
