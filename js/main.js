document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $('.burger').on('click', function () {
      $('.header__menu-nav').toggleClass('active');
      $('.burger').toggleClass('active');
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
});



// HEADER LIST ===============================================================================================

const params = {
  btnClassName: "header__main-item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
};

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


document.addEventListener('DOMContentLoaded', function () {
  function slidesPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll('.tabs__btn');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
      slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
      });
    }

    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
  }

  slidesPlugin();
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });
});


// ACCORDION

document.addEventListener('DOMContentLoaded', function () {
  $(".js-accordion").accordion({
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: 'content'
  });


});

// Выбор художника

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalog__author-link').forEach((item) => {
    item.addEventListener('click', (event) => {
      //отмена действия ссылки по умолчанию
      event.preventDefault();

      //можно без этого сделать
      let picLink = document.querySelector('.catalog__author-pic-link');
      picLink.src = 'images/absent-author-img.png';
      picLink.alt = 'Пока ничего...';

      document.querySelector('.Founded').style.display = 'none';
      document.querySelector('.notFounded').style.display = 'block';

    });
  });

  Array.from(document.querySelectorAll('.catalog__author-link')).filter(item => item.innerHTML === 'Доменико Гирландайо')[0].addEventListener('click', (event) => {
    event.preventDefault();
    let picLink = document.querySelector('.catalog__author-pic-link');
    picLink.src = 'images/author-img.jpg';
    picLink.alt = 'Доменико Гирландайо';

    document.querySelector('.notFounded').style.display = 'none';
    document.querySelector('.Founded').style.display = 'block';
  });
});



// EVENTS ===============================================================================================
document.addEventListener('DOMContentLoaded', function () {
  (() => {
    const MOBILE_WIDTH = 600;
    const DESKTOP_WIDTH = 989;
    const btn = document.querySelector(".js-show");

    const sliderMobileParams = {
      paginationClassName: "events-pagination",
      cardsContainerName: "js-slider",
      cardsWrapName: "js-slides-wrap",
      card: "events-slide",
      hiddenClass: "hidden"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateMobileSlider(params) {
      const pagination = document.createElement("div");
      pagination.classList.add(params.paginationClassName);
      params.cardsContainer.append(pagination);

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: `.${params.cardsContainerName} .${params.paginationClassName}`
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
          }
        }
      });
    }

    function destroyMobileSlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function setHiddenCards(params, windowWidth) {
      const cards = document.querySelectorAll(`.${params.card}`);
      let quantity = cards.length;

      if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
        quantity = 2;
      }

      if (windowWidth >= DESKTOP_WIDTH) {
        quantity = 3;
      }

      cards.forEach((card, i) => {
        card.classList.remove(params.hiddenClass);
        if (i >= quantity) {
          card.classList.add(params.hiddenClass);
        }
      });
    }

    function showCards(e) {
      const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

      e.target.style = "display: none";

      cards.forEach((card) => {
        card.classList.remove(sliderMobileParams.hiddenClass);
      });
    }

    function checkWindowWidthMobile(params) {
      const currentWidth = getWindowWidth();
      btn.style = "";
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth <= MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateMobileSlider(params);
      } else if (currentWidth > MOBILE_WIDTH && params.cardsSlider) {
        destroyMobileSlider(params);
      }

      setHiddenCards(params, currentWidth);
    }

    checkWindowWidthMobile(sliderMobileParams);
    btn.addEventListener("click", showCards);

    window.addEventListener("resize", function () {
      checkWindowWidthMobile(sliderMobileParams);
    });
  })();
});



// EDITIONS =====================================================================================================================

$(function () {
  $('.huyna').on('click', function () {
    $('.huyna').toggleClass('is-active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $('.js-check-heading').on('click', function () {
      $('.js-check-heading').toggleClass('is-active');
    });
  });


  (() => {
    const MOBILE_WIDTH = 600;

    const sliderParamsNotMobile = {
      sliderWrap: "editions__swiper",
      cardsContainerName: "editions__swiper-content",
      cardsWrapName: "editions-wrapper",
      card: "editions__item",
      paginationClassName: "editions-pagination",
      navClassName: "editions-navigation",
      navBtnClassName: "nav-btn",
      navPrev: "button-prev",
      navNext: "button-next"
    };

    function getWindowWidth() {
      console.log(document.body.scrollWidth);
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {
      const navigation = document.createElement("div");
      const pagination = document.createElement("div");
      const navBtnPrev = document.createElement("button");
      const navBtnNext = document.createElement("button");

      navigation.classList.add(params.navClassName);

      navBtnPrev.classList.add(params.navBtnClassName);
      navBtnPrev.classList.add(params.navPrev);
      navigation.prepend(navBtnPrev);

      pagination.classList.add(params.paginationClassName);
      navigation.append(pagination);

      navBtnNext.classList.add(params.navBtnClassName);
      navBtnNext.classList.add(params.navNext);
      navigation.append(navBtnNext);

      params.sliderWrapElem.prepend(navigation);

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        slidesPerView: 2,
        spaceBetween: 20,

        pagination: {
          el: `.${params.sliderWrap} .${params.paginationClassName}`,
          type: "fraction"
        },

        navigation: {
          nextEl: `.${params.navNext}`,
          prevEl: `.${params.navPrev}`
        },

        breakpoints: {

          601: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            grid: {
              rows: 1,
              fill: "row"
            },
          },

          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 49,
          },

          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
            navigation.remove();
          }
        }
      });
    }

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth > MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsNotMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsNotMobile);
    });
  })();


});


// TOOLtips


tippy('#tooltip-one', {
  content: '<p style="min-height: 41px; text-align: center; font-size: 12px; font-weight: 600;">Пример современных тенденций - современная методология разработки </p>',
  maxWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
});

tippy('#tooltip-two', {
  content: '<p style="min-height: 55px; text-align: center; font-size: 12px; font-weight: 600;">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  </p>',
  maxWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
});

tippy('#tooltip-three', {
  content: '<p style="min-height: 25px; text-align: center; font-size: 12px; font-weight: 600;">В стремлении повысить качество </p>',
  minWidth: 264,
  allowHTML: true,
  arrow: true,
  theme: 'tomato',
});

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
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат',
  },
  colorWrong: '#D11616'
});


