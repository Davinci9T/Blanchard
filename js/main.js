$(function () {
  $('.burger').on('click', function () {
    $('.header__menu-nav').toggleClass('active');
    $('.burger').toggleClass('active')
    $('#search').removeClass('search-active');
    $('.search-form').removeClass('search-active');
  });

  $('#search').on('click', function () {
    $('.search-form').toggleClass('search-active');
    $('#search').toggleClass('search-active');
    $('.header__menu-nav').removeClass('active');
    $('.burger').removeClass('active');
  });
});

// HEADER LIST ===============================================================================================

const params = {
  btnClassName: "main__item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


// HERO ===============================================================================================

const swiperHero = new Swiper('.hero-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 2000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});


// GALLERY ===============================================================================================

let gallerySlider = new Swiper(".gallery-swiper", {
  pagination: {
    el: ".pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  breakpoints: {

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: "row"
      },
    },

    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: "row"
      },
      spaceBetween: 34
    },
  },

  a11y: false,
});

// CATALOG ===============================================================================================

// SELECT

// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.toggle('dropdown__button--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});


// TABS

function slidesPlugin(activeSlide = 2) {
  const slides = document.querySelectorAll('.tabs__btn')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    });
  }
}

slidesPlugin()

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    })
  })
})


// ACCORDION

document.addEventListener('DOMContentLoaded', function () {
  $(".js-accordion").accordion({
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: 'content'
  });


});


var evSlide = new Swiper(".events-swiper", {
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 27,
    },

    560: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
  }
});


let editionsSlider = new Swiper(".editions__swiper-content", {
  pagination: {
    el: ".editions-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev"
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 49,
    },

    560: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
  }
});


tippy('#tooltip-one', {
  content: '<p style="min-height: 41px; text-align: center; font-size: 12px; font-weight: 600;">Пример современных тенденций - современная методология разработки </p>',
  maxWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
})

tippy('#tooltip-two', {
  content: '<p style="min-height: 55px; text-align: center; font-size: 12px; font-weight: 600;">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  </p>',
  maxWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
})

tippy('#tooltip-three', {
  content: '<p style="min-height: 25px; text-align: center; font-size: 12px; font-weight: 600;">В стремлении повысить качество </p>',
  minWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
})

var partnersSlide = new Swiper(".partners-swiper", {
  loop: true,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    560: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
  }
});

// MAP


ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "200px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "120px", right: "20px" }
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.758468, 37.601088] // координаты точки
    }
  });


  var myGeoObject = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/check.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -20]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}


// DATA FORM

var selector = document.querySelectorAll("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат',
  },
  colorWrong: '#D11616'
});
