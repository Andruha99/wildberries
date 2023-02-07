//////первый баннер
setTimeout(function(){
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    effect: 'fade',
    speed: 400,
    rewind: true,
  });
},10);
async function showPicture() {
  let response = await fetch('https://63c6c9904ebaa802854dcc32.mockapi.io/product-card');
  let picture = await response.json();
  imageOne.src = picture[Math.floor(Math.random() * 100)].image;
  imageTwo.src =  picture[Math.floor(Math.random() * 100)].image;
  imageThree.src = picture[Math.floor(Math.random() * 100)].image;
  imageSecondBannerOne.src = picture[Math.floor(Math.random() * 100)].image;
  imageSecondBannerTwo.src = picture[Math.floor(Math.random() * 100)].image;
  imageSecondBannerThree.src = picture[Math.floor(Math.random() * 100)].image;
  imageSecondBannerFour.src = picture[Math.floor(Math.random() * 100)].image;
  imageSecondBannerSwiperOne.src = imageSecondBannerOne.src;
  imageSecondBannerSwiperTwo.src = imageSecondBannerTwo.src;
  imageSecondBannerSwiperThree.src = imageSecondBannerThree.src;
  imageSecondBannerSwiperFour.src = imageSecondBannerFour.src;
};
showPicture()
const body = document.getElementsByTagName('body')[0];
const containerBannerFirst = document.createElement('div');
containerBannerFirst.className = 'container-banner-first';
body.append(containerBannerFirst);
const fistSwiper = document.createElement('div');
fistSwiper.className = 'swiper';
containerBannerFirst.append(fistSwiper);
const fistSwiperContent = document.createElement('div');
fistSwiperContent.className = 'swiper-wrapper';
fistSwiper.append(fistSwiperContent);


fistSwiperContent.innerHTML = '<div class = "swiper-slide"><a class = "swiper-slide-link" href="#"><img class="swiper-slide-link__image" alt=""></a></div><div class = "swiper-slide"><a class = "swiper-slide-link" href="#"><img class="swiper-slide-link__image" alt=""></a></div><div class = "swiper-slide"><a class = "swiper-slide-link" href="#"><img class="swiper-slide-link__image" alt=""></a></div>';
const imageOne = fistSwiperContent.getElementsByClassName('swiper-slide-link__image')[0];
const imageTwo = fistSwiperContent.getElementsByClassName('swiper-slide-link__image')[1];
const imageThree = fistSwiperContent.getElementsByClassName('swiper-slide-link__image')[2];

const firstSwiperPagination = document.createElement('div');
firstSwiperPagination.className = 'swiper-pagination';
fistSwiper.append(firstSwiperPagination);

const fistSwiperPrev = document.createElement('div');
fistSwiperPrev.className = 'swiper-prev';
fistSwiperPrev.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
fistSwiper.append(fistSwiperPrev);

const firstSwiperNext = document.createElement('div');
firstSwiperNext.className = 'swiper-next';
firstSwiperNext.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
fistSwiper.append(firstSwiperNext);




///////////////////////////второй баннер
setTimeout(function(){
  const swiper = new Swiper('.second-swiper', {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    effect: 'fade',
    speed: 400,
    rewind: true,
  });
},1);

const containerBannerSecond = document.createElement('div');
containerBannerSecond.className = 'container-banner-second';
body.append(containerBannerSecond);

const secondBannerContent = document.createElement('div');
secondBannerContent.className = 'banner-container-content';
containerBannerSecond.append(secondBannerContent);
secondBannerContent.innerHTML = '<div class="second-banner-item"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div><div class="second-banner-item"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div><div class="second-banner-item"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div><div class="second-banner-item"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div>';

const imageSecondBannerOne = secondBannerContent.getElementsByClassName('second-banner-item-link__image')[0];
const imageSecondBannerTwo = secondBannerContent.getElementsByClassName('second-banner-item-link__image')[1];
const imageSecondBannerThree = secondBannerContent.getElementsByClassName('second-banner-item-link__image')[2];
const imageSecondBannerFour = secondBannerContent.getElementsByClassName('second-banner-item-link__image')[3];

const secondSwiper = document.createElement('div');
secondSwiper.className = 'second-swiper';
containerBannerSecond.append(secondSwiper);

const secondSwiperContent = document.createElement('div');
secondSwiperContent.className = 'swiper-wrapper';
secondSwiperContent.innerHTML = '<div class="swiper-slide"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div><div class="swiper-slide"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div><div class="swiper-slide"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div><div class="swiper-slide"><a class="second-banner-item-link" href="#"><img class="second-banner-item-link__image" alt=""></a></div>';
secondSwiper.append(secondSwiperContent);


const imageSecondBannerSwiperOne = secondSwiperContent.getElementsByClassName('second-banner-item-link__image')[0];
const imageSecondBannerSwiperTwo = secondSwiperContent.getElementsByClassName('second-banner-item-link__image')[1];
const imageSecondBannerSwiperThree = secondSwiperContent.getElementsByClassName('second-banner-item-link__image')[2];
const imageSecondBannerSwiperFour = secondSwiperContent.getElementsByClassName('second-banner-item-link__image')[3];

const secondSwiperPagination = document.createElement('div');
secondSwiperPagination.className = 'swiper-pagination';
secondSwiper.append(secondSwiperPagination);

