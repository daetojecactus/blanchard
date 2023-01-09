// Bottom header
// нижнее выпадающее меню
const buttonDrop = document.querySelectorAll('.nav-direction__link');
//на каждую кнопку вешаем обработчик
buttonDrop.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let button = this;
    console.log(this)
    if (e.target.classList.contains('activ')) { //если уже класс есть на этой кнопке
      e.currentTarget.classList.remove('activ') //то удаляем конкретно на этой кнопке
    } else {
      e.target.classList.add('activ') //иначе добавляем класс
      buttonDrop.forEach(el => {      //удаляем активный класс на других кнопках
        if (el != button) {
          el.classList.remove("activ");
        }
      });
    }
  })
})
//если это не кнопка и не само выпадающее меню, то удаляем класс
//первое условие необходимо добавить, чтобы незацикливать появление->исчезновение класса
document.addEventListener('click', function (event) {
  if (!event.target.classList.contains('nav-direction__link') && !event.target.classList.contains('nav-direction__scroll')) {
    buttonDrop.forEach(function (e) {
      e.classList.remove('activ')
    })
  }
})

//scroll//
const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), { autoHide: false, scrollbarMaxSize: 28 });
simpleBar1.recalculate();

const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), { autoHide: false, scrollbarMaxSize: 28 });
simpleBar2.recalculate();

const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), { autoHide: false, scrollbarMaxSize: 28 });
simpleBar3.recalculate();

const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), { autoHide: false, scrollbarMaxSize: 28 });
simpleBar4.recalculate();

const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), { autoHide: false, scrollbarMaxSize: 28 });
simpleBar5.recalculate();

//burger//
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__burger-nav');
let menuLinks = menu.querySelectorAll('.header__burger-link');
let burgerClose = document.querySelector('.header__burger-close');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })

  burgerClose.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})


//search button//
let search = document.querySelector('.search__btn-intro');
let searchContent = document.querySelector('.search')
let formSearch = document.querySelector('.search__menu');
let exit = document.querySelector('.search__btn-close');
let burgerHide = document.querySelector('.burger');

search.addEventListener('click',
  function () {
    formSearch.classList.toggle('search-form_show');
    searchContent.classList.toggle('header__btn--hide');
    burgerHide.classList.toggle('header__btn--hide');

  });

exit.addEventListener('click',
  function () {
    formSearch.classList.remove('search-form_show');
    searchContent.classList.remove('header__btn--hide');
    burgerHide.classList.remove('header__btn--hide');
  });

//swiper hero//
let swiperSectionHero = new Swiper('.section-hero__swiper', {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  spaceBetween: 30,
});

//gallery select//
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false
});

//gallery swiper//
//   Slider Swiper
var swiper = new Swiper('.section-gallery__slider-container', {

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
    observer: true,
    resizeObserver: true,
    centeredSlides: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      grid: {
        rows: 1,
      },
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      grid: {
        rows: 1,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
      grid: {
        rows: 1,
      },
    },
    1640: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      grid: {
        rows: 1,
      },
    }
  }
});

//accordion//
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  showMultiple: true,
  openOnInit: [0]
});

//tab//
let tabsBtn = document.querySelectorAll('.tab__btn');
let tabsItem = document.querySelectorAll('.section-catalog__content-1');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tab__btn--active') });
    e.currentTarget.classList.add('tab__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('section-catalog__content-1--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__content-1--active');
  });
});

//event swiper//
var swiperEvent = new Swiper('.event__swiper-container', {

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    observer: true,
    resizeObserver: true,
    centeredSlides: true,
  },
  // Navigation arrows
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    630: {
      slidesPerView: 1,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    631: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 34,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    1640: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    }
  }
});


// projects slider swiper//
var swiper3 = new Swiper('.projects__swiper-container', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 1
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    }
  }
});

//map//
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap1", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75848470596493, 37.601222610450655],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 18
  });

  // Создание геообъекта с типом точка (метка).
  /*var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.8, 37.8] // координаты точки
    }
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);*/

  var myPlacemark = new ymaps.Placemark([55.758445382179545, 37.60110995767202], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -22]
  });

  myMap.geoObjects.add(myPlacemark);
}

//form//
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Недопустимый формат"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Недопустимый формат"
    }
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });

/* Projects tooltips */
tippy('.tooltip-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'projects',
  trigger: 'click',
  trigger: 'focus'
});
tippy('.tooltip-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'projects',
  trigger: 'click',
  trigger: 'focus'
});
tippy('.tooltip-3', {
  content: 'В стремлении повысить качество',
  theme: 'projects',
  trigger: 'click',
  trigger: 'focus'
});

//popup//
const cardGallery = document.querySelectorAll('.slider-gallery__item');

for (let card of cardGallery) {
  card.addEventListener('click', function () {
    document.body.style.overflowY = 'hidden';
    const popup = document.querySelector('.popup');
    popup.classList.add('popup__is-active');

    document.querySelector('#popup__close').addEventListener('click', function () {
      document.body.style.overflowY = 'auto';
      document.querySelector('.popup').classList.remove('popup__is-active');
    });
  })
}