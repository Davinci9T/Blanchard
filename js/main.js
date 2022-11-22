const _0x425409 = _0x1cb3;
(function (_0x30e283, _0x5d246c) {
  const _0x58451a = _0x1cb3,
    _0x293fe4 = _0x30e283();
  while (!![]) {
    try {
      const _0x1c2dd4 =
        (parseInt(_0x58451a(0xd7)) / 0x1) * (parseInt(_0x58451a(0xdb)) / 0x2) +
        parseInt(_0x58451a(0xbe)) / 0x3 +
        -parseInt(_0x58451a(0x124)) / 0x4 +
        -parseInt(_0x58451a(0x9a)) / 0x5 +
        (-parseInt(_0x58451a(0xa2)) / 0x6) *
          (-parseInt(_0x58451a(0xe3)) / 0x7) +
        -parseInt(_0x58451a(0x99)) / 0x8 +
        parseInt(_0x58451a(0xad)) / 0x9;
      if (_0x1c2dd4 === _0x5d246c) break;
      else _0x293fe4["push"](_0x293fe4["shift"]());
    } catch (_0x42a9db) {
      _0x293fe4["push"](_0x293fe4["shift"]());
    }
  }
})(_0x2150, 0x9577f),
  document[_0x425409(0x11f)]("DOMContentLoaded", function () {
    $(function () {
      const _0x6e93fa = _0x1cb3;
      $(_0x6e93fa(0x125))["on"](_0x6e93fa(0xbc), function () {
        const _0x552a56 = _0x6e93fa;
        $(".header__menu-nav")[_0x552a56(0xfa)]("active"),
          $(_0x552a56(0x125))[_0x552a56(0xfa)](_0x552a56(0x119)),
          $("#search")["removeClass"](_0x552a56(0x105)),
          $(".search-form")[_0x552a56(0xe1)]("search-active");
      }),
        $(_0x6e93fa(0xe9))["on"](_0x6e93fa(0xbc), function () {
          const _0x4c6604 = _0x6e93fa;
          $(".search-form")[_0x4c6604(0xfa)]("search-active"),
            $(_0x4c6604(0xe9))["toggleClass"](_0x4c6604(0x105)),
            $(_0x4c6604(0xc5))[_0x4c6604(0xe1)](_0x4c6604(0x119)),
            $(_0x4c6604(0x125))[_0x4c6604(0xe1)](_0x4c6604(0x119));
        });
    });
  });
const params = {
  btnClassName: _0x425409(0xc6),
  activeClassName: _0x425409(0xdd),
  disabledClassName: _0x425409(0xf4),
};
function onDisable(_0x4b63e1) {
  const _0x6977f6 = _0x425409;
  _0x4b63e1[_0x6977f6(0x11c)][_0x6977f6(0xe5)][_0x6977f6(0x9d)](
    params[_0x6977f6(0x9c)]
  ) &&
    (_0x4b63e1["target"][_0x6977f6(0xe5)][_0x6977f6(0xb9)](
      params[_0x6977f6(0x9c)],
      params["activeClassName"]
    ),
    _0x4b63e1[_0x6977f6(0x11c)][_0x6977f6(0xf0)]("animationend", onDisable));
}
function _0x1cb3(_0x4ce035, _0x7c16f4) {
  const _0x215074 = _0x2150();
  return (
    (_0x1cb3 = function (_0x1cb3de, _0x1a1cb9) {
      _0x1cb3de = _0x1cb3de - 0x95;
      let _0x4de584 = _0x215074[_0x1cb3de];
      return _0x4de584;
    }),
    _0x1cb3(_0x4ce035, _0x7c16f4)
  );
}
function setMenuListener() {
  const _0x30ac3f = _0x425409;
  document[_0x30ac3f(0x126)][_0x30ac3f(0x11f)](_0x30ac3f(0xbc), (_0x3bbef0) => {
    const _0xc48e37 = _0x30ac3f,
      _0x40a390 = document[_0xc48e37(0x12c)]("." + params["activeClassName"]);
    _0x40a390[_0xc48e37(0xf3)] &&
      !_0x3bbef0[_0xc48e37(0x11c)][_0xc48e37(0x128)](
        "." + params[_0xc48e37(0xa0)]
      ) &&
      _0x40a390[_0xc48e37(0xb8)]((_0x260cc8) => {
        const _0x26b92d = _0xc48e37;
        _0x260cc8["classList"][_0x26b92d(0x9d)](params[_0x26b92d(0xe7)])
          ? _0x260cc8["classList"][_0x26b92d(0xb9)](params[_0x26b92d(0xa0)])
          : _0x260cc8[_0x26b92d(0xe5)]["add"](params[_0x26b92d(0x9c)]);
      });
    if (_0x3bbef0["target"]["closest"]("." + params[_0xc48e37(0xe7)])) {
      const _0x240f41 = _0x3bbef0["target"][_0xc48e37(0x128)](
          "." + params[_0xc48e37(0xe7)]
        ),
        _0xf53cc0 = _0x240f41["dataset"][_0xc48e37(0xb6)],
        _0x27d25c = document[_0xc48e37(0xae)](
          "[data-target=\x22" + _0xf53cc0 + "\x22]"
        );
      _0x240f41["classList"][_0xc48e37(0xaf)](params[_0xc48e37(0xa0)]),
        !_0x27d25c["classList"][_0xc48e37(0x9d)](params["activeClassName"])
          ? (_0x27d25c[_0xc48e37(0xe5)]["add"](params["activeClassName"]),
            _0x27d25c["addEventListener"]("animationend", onDisable))
          : _0x27d25c["classList"][_0xc48e37(0xc1)](params[_0xc48e37(0x9c)]);
    }
  });
}
setMenuListener();
const swiperHero = new Swiper(_0x425409(0xc8), {
  allowTouchMove: ![],
  loop: !![],
  effect: _0x425409(0xe6),
  speed: 0x7d0,
  autoplay: { delay: 0x7d0, disableOnInteraction: ![] },
});
let gallerySlider = new Swiper(_0x425409(0xec), {
  pagination: { el: _0x425409(0x127), type: _0x425409(0x11a) },
  navigation: { nextEl: ".button-next", prevEl: _0x425409(0x122) },
  breakpoints: {
    0x4b0: {
      slidesPerView: 0x3,
      slidesPerGroup: 0x3,
      spaceBetween: 0x32,
      grid: { rows: 0x2, fill: "row" },
    },
    0x258: {
      slidesPerView: 0x2,
      slidesPerGroup: 0x2,
      grid: { rows: 0x2, fill: "row" },
    },
  },
  spaceBetween: 0x22,
  a11y: ![],
});
window["NodeList"] &&
  !NodeList[_0x425409(0x95)][_0x425409(0xb8)] &&
  (NodeList[_0x425409(0x95)]["forEach"] = function (_0x44e2d4, _0x7e4694) {
    const _0x411603 = _0x425409;
    _0x7e4694 = _0x7e4694 || window;
    for (var _0x25d1f7 = 0x0; _0x25d1f7 < this[_0x411603(0xf3)]; _0x25d1f7++) {
      _0x44e2d4[_0x411603(0xa9)](_0x7e4694, this[_0x25d1f7], _0x25d1f7, this);
    }
  });
document[_0x425409(0x12c)](_0x425409(0xa8))[_0x425409(0xb8)](function (
  _0x34692a
) {
  const _0x42af5d = _0x425409,
    _0x50eb9e = _0x34692a[_0x42af5d(0xae)](".dropdown__button"),
    _0x3500b8 = _0x34692a[_0x42af5d(0xae)](".dropdown__list"),
    _0x3fb660 = _0x3500b8[_0x42af5d(0x12c)](".dropdown__list-item");
  _0x50eb9e[_0x42af5d(0x11f)](_0x42af5d(0xbc), function (_0x2cc474) {
    const _0x3a9894 = _0x42af5d;
    _0x3500b8[_0x3a9894(0xe5)][_0x3a9894(0xaf)](_0x3a9894(0xeb)),
      this[_0x3a9894(0xe5)][_0x3a9894(0xaf)](_0x3a9894(0x10a));
  }),
    _0x3fb660[_0x42af5d(0xb8)](function (_0x4f8e18) {
      const _0xe4c13 = _0x42af5d;
      _0x4f8e18[_0xe4c13(0x11f)](_0xe4c13(0xbc), function (_0x181772) {
        const _0x5bca0b = _0xe4c13;
        _0x181772[_0x5bca0b(0x10b)](),
          (_0x50eb9e[_0x5bca0b(0xde)] = this[_0x5bca0b(0xde)]),
          _0x50eb9e[_0x5bca0b(0xc7)](),
          (dropDownInput[_0x5bca0b(0xbb)] = this["dataset"]["value"]),
          _0x3500b8[_0x5bca0b(0xe5)][_0x5bca0b(0xb9)](_0x5bca0b(0xeb));
      });
    }),
    document[_0x42af5d(0x11f)]("click", function (_0x502871) {
      const _0x9e786f = _0x42af5d;
      _0x502871[_0x9e786f(0x11c)] !== _0x50eb9e &&
        (_0x50eb9e["classList"][_0x9e786f(0xb9)](_0x9e786f(0x10a)),
        _0x3500b8[_0x9e786f(0xe5)][_0x9e786f(0xb9)](_0x9e786f(0xeb)));
    }),
    document[_0x42af5d(0x11f)](_0x42af5d(0xaa), function (_0x3d3bb6) {
      const _0x549425 = _0x42af5d;
      (_0x3d3bb6[_0x549425(0x10e)] === _0x549425(0xff) ||
        _0x3d3bb6[_0x549425(0x10e)] === _0x549425(0xea)) &&
        (_0x50eb9e[_0x549425(0xe5)][_0x549425(0xb9)](
          "dropdown__button--active"
        ),
        _0x3500b8[_0x549425(0xe5)]["remove"](_0x549425(0xeb)));
    });
}),
  $(function () {
    const _0x29dc96 = _0x425409;
    $(".dropdown__list-item")["on"](_0x29dc96(0xbc), function () {
      const _0x28d855 = _0x29dc96;
      $(_0x28d855(0xb7))[_0x28d855(0xe1)](_0x28d855(0x10a)),
        $(_0x28d855(0xda))[_0x28d855(0xe1)](_0x28d855(0xeb));
    });
  }),
  document[_0x425409(0x11f)](_0x425409(0xba), function () {
    function _0x5f27ce(_0x13f42d = 0x2) {
      const _0x26c327 = _0x1cb3,
        _0x55160b = document["querySelectorAll"](_0x26c327(0xd5));
      _0x55160b[_0x13f42d][_0x26c327(0xe5)][_0x26c327(0xc1)]("active");
      for (const _0x5b7365 of _0x55160b) {
        _0x5b7365[_0x26c327(0x11f)](_0x26c327(0xbc), () => {
          const _0x337ac0 = _0x26c327;
          _0x158052(),
            _0x5b7365[_0x337ac0(0xe5)][_0x337ac0(0xc1)](_0x337ac0(0x119));
        });
      }
      function _0x158052() {
        const _0x35515a = _0x26c327;
        _0x55160b[_0x35515a(0xb8)]((_0xeb6431) => {
          const _0x218f9f = _0x35515a;
          _0xeb6431["classList"]["remove"](_0x218f9f(0x119));
        });
      }
    }
    _0x5f27ce();
  }),
  document["addEventListener"](_0x425409(0xba), function () {
    const _0xba4523 = _0x425409;
    document[_0xba4523(0x12c)](".tabs__btn")["forEach"](function (_0x1b5d09) {
      const _0x4cd52d = _0xba4523;
      _0x1b5d09["addEventListener"](_0x4cd52d(0xbc), function (_0x515049) {
        const _0x2241af = _0x4cd52d,
          _0x3c2bdc =
            _0x515049["currentTarget"][_0x2241af(0xef)][_0x2241af(0xb6)];
        document["querySelectorAll"](_0x2241af(0x11b))[_0x2241af(0xb8)](
          function (_0x1093c8) {
            const _0x1dcd34 = _0x2241af;
            _0x1093c8[_0x1dcd34(0xe5)]["remove"](_0x1dcd34(0x11e));
          }
        ),
          document["querySelector"](_0x2241af(0xfb) + _0x3c2bdc + "\x22]")[
            _0x2241af(0xe5)
          ][_0x2241af(0xc1)]("tab-content-active");
      });
    });
  }),
  document[_0x425409(0x11f)]("DOMContentLoaded", function () {
    const _0x14e5a3 = _0x425409;
    $(_0x14e5a3(0xa4))[_0x14e5a3(0x113)]({
      collapsible: !![],
      active: ![],
      icons: ![],
      heightStyle: "content",
    });
  }),
  document[_0x425409(0x11f)](_0x425409(0xba), function () {
    const _0x2cd4a7 = _0x425409;
    document[_0x2cd4a7(0x12c)](".catalog__author-link")["forEach"](
      (_0x12c438) => {
        const _0x51c7bf = _0x2cd4a7;
        _0x12c438[_0x51c7bf(0x11f)](_0x51c7bf(0xbc), (_0x34572f) => {
          const _0x6f5c5c = _0x51c7bf;
          _0x34572f[_0x6f5c5c(0x10c)]();
          let _0x203e44 = document[_0x6f5c5c(0xae)](
            ".catalog__author-pic-link"
          );
          (_0x203e44[_0x6f5c5c(0xa1)] = _0x6f5c5c(0x106)),
            (_0x203e44[_0x6f5c5c(0xca)] = _0x6f5c5c(0xc3)),
            (document[_0x6f5c5c(0xae)](_0x6f5c5c(0xf8))[_0x6f5c5c(0xce)][
              "display"
            ] = _0x6f5c5c(0xb0)),
            (document["querySelector"](".notFounded")[_0x6f5c5c(0xce)][
              _0x6f5c5c(0xab)
            ] = _0x6f5c5c(0xa5));
        });
      }
    ),
      Array[_0x2cd4a7(0xc4)](
        document["querySelectorAll"](".catalog__author-link")
      )
        [_0x2cd4a7(0x117)](
          (_0x31d373) =>
            _0x31d373[_0x2cd4a7(0x129)] === "Доменико\x20Гирландайо"
        )[0x0]
        [_0x2cd4a7(0x11f)]("click", (_0x329b9d) => {
          const _0x2a36d8 = _0x2cd4a7;
          _0x329b9d[_0x2a36d8(0x10c)]();
          let _0x1f775f = document[_0x2a36d8(0xae)](_0x2a36d8(0xdf));
          (_0x1f775f[_0x2a36d8(0xa1)] = _0x2a36d8(0xb1)),
            (_0x1f775f[_0x2a36d8(0xca)] = _0x2a36d8(0xd6)),
            (document[_0x2a36d8(0xae)](".notFounded")[_0x2a36d8(0xce)][
              "display"
            ] = _0x2a36d8(0xb0)),
            (document["querySelector"](_0x2a36d8(0xf8))[_0x2a36d8(0xce)][
              _0x2a36d8(0xab)
            ] = _0x2a36d8(0xa5));
        });
  }),
  document["addEventListener"]("DOMContentLoaded", function () {
    (() => {
      const _0x781362 = _0x1cb3,
        _0x25d6cf = 0x258,
        _0x6e5eeb = 0x3dd,
        _0x49cf27 = document[_0x781362(0xae)](_0x781362(0xd0)),
        _0x326845 = {
          paginationClassName: "events-pagination",
          cardsContainerName: _0x781362(0xe4),
          cardsWrapName: "js-slides-wrap",
          card: "events-slide",
          hiddenClass: _0x781362(0x100),
        };
      function _0x210c53() {
        const _0x4060da = _0x781362;
        return Math["max"](
          document[_0x4060da(0x126)][_0x4060da(0xbd)],
          document[_0x4060da(0x118)][_0x4060da(0xbd)],
          document[_0x4060da(0x126)][_0x4060da(0x108)],
          document[_0x4060da(0x118)][_0x4060da(0x108)],
          document[_0x4060da(0x126)][_0x4060da(0xcb)],
          document[_0x4060da(0x118)][_0x4060da(0xcb)]
        );
      }
      function _0x48d55a(_0x54ab3b) {
        const _0x538adf = _0x781362,
          _0x399f08 = document["createElement"](_0x538adf(0xb2));
        _0x399f08[_0x538adf(0xe5)][_0x538adf(0xc1)](
          _0x54ab3b["paginationClassName"]
        ),
          _0x54ab3b[_0x538adf(0xf7)][_0x538adf(0xe8)](_0x399f08),
          _0x54ab3b[_0x538adf(0xf7)][_0x538adf(0xe5)][_0x538adf(0xc1)](
            _0x538adf(0x112)
          ),
          _0x54ab3b[_0x538adf(0xd1)][_0x538adf(0xe5)]["add"](_0x538adf(0xf9)),
          (_0x54ab3b[_0x538adf(0xb4)] = new Swiper(
            "." + _0x54ab3b[_0x538adf(0x96)],
            {
              slidesPerView: 0x1,
              spaceBetween: 0x14,
              pagination: {
                el:
                  "." +
                  _0x54ab3b["cardsContainerName"] +
                  "\x20." +
                  _0x54ab3b[_0x538adf(0xdc)],
              },
              on: {
                beforeInit() {
                  const _0x21721d = _0x538adf;
                  document[_0x21721d(0x12c)]("." + _0x54ab3b[_0x21721d(0x9f)])[
                    _0x21721d(0xb8)
                  ]((_0x568732) => {
                    const _0x8e180d = _0x21721d;
                    _0x568732[_0x8e180d(0xe5)][_0x8e180d(0xc1)](
                      _0x8e180d(0xa3)
                    );
                  });
                },
                beforeDestroy() {
                  const _0x360fbd = _0x538adf;
                  this[_0x360fbd(0x9b)][_0x360fbd(0xb8)]((_0x16197a) => {
                    const _0x55e089 = _0x360fbd;
                    _0x16197a["classList"][_0x55e089(0xb9)](_0x55e089(0xa3)),
                      _0x16197a[_0x55e089(0xfd)]("role"),
                      _0x16197a["removeAttribute"](_0x55e089(0x121));
                  }),
                    this[_0x360fbd(0x9e)]["el"]["remove"]();
                },
              },
            }
          ));
      }
      function _0x1a00c6(_0x1cc24e) {
        const _0x222cf7 = _0x781362;
        _0x1cc24e[_0x222cf7(0xb4)][_0x222cf7(0xd8)](),
          _0x1cc24e[_0x222cf7(0xf7)][_0x222cf7(0xe5)][_0x222cf7(0xb9)](
            "swiper-container"
          ),
          _0x1cc24e[_0x222cf7(0xd1)]["classList"][_0x222cf7(0xb9)](
            _0x222cf7(0xf9)
          ),
          _0x1cc24e["cardsWrap"][_0x222cf7(0xfd)]("aria-live"),
          _0x1cc24e["cardsWrap"][_0x222cf7(0xfd)]("id");
      }
      function _0x41d0bb(_0x24d2c3, _0x319af9) {
        const _0x37cf89 = _0x781362,
          _0x26cee0 = document[_0x37cf89(0x12c)]("." + _0x24d2c3["card"]);
        let _0x4a1b04 = _0x26cee0[_0x37cf89(0xf3)];
        _0x319af9 > _0x25d6cf && _0x319af9 < _0x6e5eeb && (_0x4a1b04 = 0x2),
          _0x319af9 >= _0x6e5eeb && (_0x4a1b04 = 0x3),
          _0x26cee0[_0x37cf89(0xb8)]((_0x19eba1, _0x5595d8) => {
            const _0x268151 = _0x37cf89;
            _0x19eba1["classList"][_0x268151(0xb9)](_0x24d2c3["hiddenClass"]),
              _0x5595d8 >= _0x4a1b04 &&
                _0x19eba1[_0x268151(0xe5)]["add"](_0x24d2c3["hiddenClass"]);
          });
      }
      function _0x44d771(_0x1c1936) {
        const _0x9d22a0 = _0x781362,
          _0x1a4c27 = document["querySelectorAll"](
            "." + _0x326845[_0x9d22a0(0x9f)]
          );
        (_0x1c1936[_0x9d22a0(0x11c)]["style"] = "display:\x20none"),
          _0x1a4c27[_0x9d22a0(0xb8)]((_0x2233e2) => {
            const _0x216074 = _0x9d22a0;
            _0x2233e2[_0x216074(0xe5)][_0x216074(0xb9)](
              _0x326845[_0x216074(0x10f)]
            );
          });
      }
      function _0x301efe(_0x532677) {
        const _0x2fc627 = _0x781362,
          _0xf962ce = _0x210c53();
        (_0x49cf27["style"] = ""),
          (_0x532677["cardsContainer"] = document[_0x2fc627(0xae)](
            "." + _0x532677[_0x2fc627(0x96)]
          )),
          (_0x532677["cardsWrap"] = document[_0x2fc627(0xae)](
            "." + _0x532677["cardsWrapName"]
          ));
        if (
          _0xf962ce <= _0x25d6cf &&
          (!_0x532677[_0x2fc627(0xb4)] ||
            _0x532677[_0x2fc627(0xb4)][_0x2fc627(0xe2)])
        )
          _0x48d55a(_0x532677);
        else
          _0xf962ce > _0x25d6cf &&
            _0x532677["cardsSlider"] &&
            _0x1a00c6(_0x532677);
        _0x41d0bb(_0x532677, _0xf962ce);
      }
      _0x301efe(_0x326845),
        _0x49cf27[_0x781362(0x11f)](_0x781362(0xbc), _0x44d771),
        window[_0x781362(0x11f)](_0x781362(0x116), function () {
          _0x301efe(_0x326845);
        });
    })();
  }),
  Fancybox[_0x425409(0x123)](_0x425409(0xac), {
    Image: {
      Panzoom: {
        zoomFriction: 0.7,
        maxScale: function () {
          return 0x3;
        },
      },
    },
  }),
  document["addEventListener"]("DOMContentLoaded", function () {
    $(function () {
      const _0x595e17 = _0x1cb3;
      $(_0x595e17(0x104))["on"](_0x595e17(0xbc), function () {
        const _0x2b7527 = _0x595e17;
        $(_0x2b7527(0x104))[_0x2b7527(0xfa)](_0x2b7527(0xdd));
      });
    }),
      (() => {
        const _0x51c3de = _0x1cb3,
          _0x4171f8 = 0x258,
          _0x5b7cae = {
            sliderWrap: _0x51c3de(0x110),
            cardsContainerName: _0x51c3de(0xb5),
            cardsWrapName: _0x51c3de(0xc0),
            card: _0x51c3de(0xf1),
            paginationClassName: _0x51c3de(0x11d),
            navClassName: _0x51c3de(0x102),
            navBtnClassName: "nav-btn",
            navPrev: _0x51c3de(0x12b),
            navNext: _0x51c3de(0xe0),
          };
        function _0x456b73() {
          const _0x52e132 = _0x51c3de;
          return Math["max"](
            document[_0x52e132(0x126)][_0x52e132(0xbd)],
            document[_0x52e132(0x118)][_0x52e132(0xbd)],
            document[_0x52e132(0x126)]["offsetWidth"],
            document[_0x52e132(0x118)][_0x52e132(0x108)],
            document["body"][_0x52e132(0xcb)],
            document[_0x52e132(0x118)][_0x52e132(0xcb)]
          );
        }
        function _0x1a4f56(_0x556e68) {
          const _0x672607 = _0x51c3de,
            _0x556cbd = document[_0x672607(0xf2)]("div"),
            _0x5e1a97 = document[_0x672607(0xf2)](_0x672607(0xb2)),
            _0x51d355 = document["createElement"]("button"),
            _0x4cbf0c = document[_0x672607(0xf2)](_0x672607(0xb3));
          _0x556cbd[_0x672607(0xe5)][_0x672607(0xc1)](
            _0x556e68[_0x672607(0x101)]
          ),
            _0x51d355[_0x672607(0xe5)][_0x672607(0xc1)](
              _0x556e68[_0x672607(0xfe)]
            ),
            _0x51d355[_0x672607(0xe5)][_0x672607(0xc1)](_0x556e68["navPrev"]),
            _0x556cbd["prepend"](_0x51d355),
            _0x5e1a97[_0x672607(0xe5)][_0x672607(0xc1)](
              _0x556e68[_0x672607(0xdc)]
            ),
            _0x556cbd[_0x672607(0xe8)](_0x5e1a97),
            _0x4cbf0c["classList"][_0x672607(0xc1)](
              _0x556e68["navBtnClassName"]
            ),
            _0x4cbf0c[_0x672607(0xe5)]["add"](_0x556e68["navNext"]),
            _0x556cbd[_0x672607(0xe8)](_0x4cbf0c),
            _0x556e68[_0x672607(0xa6)]["prepend"](_0x556cbd),
            _0x556e68[_0x672607(0xf7)][_0x672607(0xe5)][_0x672607(0xc1)](
              _0x672607(0x112)
            ),
            _0x556e68[_0x672607(0xd1)][_0x672607(0xe5)]["add"](_0x672607(0xf9)),
            (_0x556e68[_0x672607(0xb4)] = new Swiper(
              "." + _0x556e68["cardsContainerName"],
              {
                slidesPerView: 0x2,
                spaceBetween: 0x14,
                pagination: {
                  el:
                    "." +
                    _0x556e68[_0x672607(0xf5)] +
                    "\x20." +
                    _0x556e68[_0x672607(0xdc)],
                  type: _0x672607(0x11a),
                },
                navigation: {
                  nextEl: "." + _0x556e68["navNext"],
                  prevEl: "." + _0x556e68[_0x672607(0xcc)],
                },
                breakpoints: {
                  0x259: {
                    slidesPerView: 0x2,
                    slidesPerGroup: 0x2,
                    spaceBetween: 0x22,
                    grid: { rows: 0x1, fill: _0x672607(0x103) },
                  },
                  0x301: {
                    slidesPerView: 0x2,
                    slidesPerGroup: 0x2,
                    spaceBetween: 0x31,
                  },
                  0x4b0: {
                    slidesPerView: 0x3,
                    slidesPerGroup: 0x3,
                    spaceBetween: 0x32,
                  },
                },
                on: {
                  beforeInit() {
                    const _0x5c5cad = _0x672607;
                    document["querySelectorAll"](
                      "." + _0x556e68[_0x5c5cad(0x9f)]
                    )[_0x5c5cad(0xb8)]((_0x2b01c2) => {
                      const _0x200c6a = _0x5c5cad;
                      _0x2b01c2[_0x200c6a(0xe5)]["add"]("swiper-slide");
                    });
                  },
                  beforeDestroy() {
                    const _0x2c4725 = _0x672607;
                    this[_0x2c4725(0x9b)][_0x2c4725(0xb8)]((_0x2b353c) => {
                      const _0x21e054 = _0x2c4725;
                      _0x2b353c[_0x21e054(0xe5)][_0x21e054(0xb9)](
                        _0x21e054(0xa3)
                      ),
                        _0x2b353c[_0x21e054(0xfd)](_0x21e054(0x107)),
                        _0x2b353c[_0x21e054(0xfd)](_0x21e054(0x121));
                    }),
                      this["pagination"]["el"][_0x2c4725(0xb9)](),
                      _0x556cbd[_0x2c4725(0xb9)]();
                  },
                },
              }
            ));
        }
        function _0x10036d(_0x835bcc) {
          const _0xd3ac85 = _0x51c3de;
          _0x835bcc[_0xd3ac85(0xb4)][_0xd3ac85(0xd8)](),
            _0x835bcc[_0xd3ac85(0xf7)][_0xd3ac85(0xe5)][_0xd3ac85(0xb9)](
              "swiper-container"
            ),
            _0x835bcc[_0xd3ac85(0xd1)][_0xd3ac85(0xe5)][_0xd3ac85(0xb9)](
              "swiper-wrapper"
            ),
            _0x835bcc[_0xd3ac85(0xd1)]["removeAttribute"](_0xd3ac85(0xc9)),
            _0x835bcc[_0xd3ac85(0xd1)][_0xd3ac85(0xfd)]("id");
        }
        function _0x2c355c(_0x259dd1) {
          const _0x50a2e2 = _0x51c3de,
            _0x1aa935 = _0x456b73();
          (_0x259dd1[_0x50a2e2(0xa6)] = document["querySelector"](
            "." + _0x259dd1[_0x50a2e2(0xf5)]
          )),
            (_0x259dd1[_0x50a2e2(0xf7)] = document[_0x50a2e2(0xae)](
              "." + _0x259dd1[_0x50a2e2(0x96)]
            )),
            (_0x259dd1[_0x50a2e2(0xd1)] = document["querySelector"](
              "." + _0x259dd1["cardsWrapName"]
            ));
          if (
            _0x1aa935 > _0x4171f8 &&
            (!_0x259dd1["cardsSlider"] ||
              _0x259dd1[_0x50a2e2(0xb4)]["destroyed"])
          )
            _0x1a4f56(_0x259dd1);
          else
            _0x1aa935 <= _0x4171f8 &&
              _0x259dd1[_0x50a2e2(0xb4)] &&
              _0x10036d(_0x259dd1);
        }
        _0x2c355c(_0x5b7cae),
          window[_0x51c3de(0x11f)](_0x51c3de(0x116), function () {
            _0x2c355c(_0x5b7cae);
          });
      })();
  }),
  tippy("#tooltip-one", {
    content: _0x425409(0xf6),
    maxWidth: 0x108,
    allowHTML: !![],
    arrow: !![],
    theme: _0x425409(0xd2),
  }),
  tippy(_0x425409(0xee), {
    content: _0x425409(0x115),
    maxWidth: 0x108,
    allowHTML: !![],
    arrow: !![],
    theme: "tomato",
  }),
  tippy(_0x425409(0x111), {
    content:
      "<p\x20style=\x22min-height:\x2025px;\x20text-align:\x20center;\x20font-size:\x2012px;\x20font-weight:\x20600;\x22>В\x20стремлении\x20повысить\x20качество\x20</p>",
    minWidth: 0x108,
    allowHTML: !![],
    arrow: !![],
    theme: "tomato",
  });
function _0x2150() {
  const _0x34b4a5 = [
    ".partners-swiper",
    "Пока\x20ничего...",
    "from",
    ".header__menu-nav",
    "header__main-item-btn",
    "focus",
    ".hero-swiper",
    "aria-live",
    "alt",
    "clientWidth",
    "navPrev",
    "zoomControl",
    "style",
    "200px",
    ".js-show",
    "cardsWrap",
    "tomato",
    "20px",
    "geoObjects",
    ".tabs__btn",
    "Доменико\x20Гирландайо",
    "4YEodCh",
    "destroy",
    "input[type=\x27tel\x27]",
    ".dropdown__list",
    "236938emKYXc",
    "paginationClassName",
    "is-active",
    "innerText",
    ".catalog__author-pic-link",
    "button-next",
    "removeClass",
    "destroyed",
    "21dMJOHq",
    "js-slider",
    "classList",
    "fade",
    "btnClassName",
    "append",
    "#search",
    "Escape",
    "dropdown__list--visible",
    ".gallery-swiper",
    ".btn-next",
    "#tooltip-two",
    "dataset",
    "removeEventListener",
    "editions__item",
    "createElement",
    "length",
    "is-disabled",
    "sliderWrap",
    "<p\x20style=\x22min-height:\x2041px;\x20text-align:\x20center;\x20font-size:\x2012px;\x20font-weight:\x20600;\x22>Пример\x20современных\x20тенденций\x20-\x20современная\x20методология\x20разработки\x20</p>",
    "cardsContainer",
    ".Founded",
    "swiper-wrapper",
    "toggleClass",
    "[data-target=\x22",
    "map",
    "removeAttribute",
    "navBtnClassName",
    "Tab",
    "hidden",
    "navClassName",
    "editions-navigation",
    "row",
    ".js-check-heading",
    "search-active",
    "images/absent-author-img.png",
    "role",
    "offsetWidth",
    ".btn-prev",
    "dropdown__button--active",
    "stopPropagation",
    "preventDefault",
    "120px",
    "key",
    "hiddenClass",
    "editions__swiper",
    "#tooltip-three",
    "swiper-container",
    "accordion",
    "Point",
    "<p\x20style=\x22min-height:\x2055px;\x20text-align:\x20center;\x20font-size:\x2012px;\x20font-weight:\x20600;\x22>Приятно,\x20граждане,\x20наблюдать,\x20как\x20сделанные\x20на\x20базе\x20аналитики\x20выводы\x20вызывают\x20у\x20вас\x20эмоции\x20\x20</p>",
    "resize",
    "filter",
    "documentElement",
    "active",
    "fraction",
    ".tab-content",
    "target",
    "editions-pagination",
    "tab-content-active",
    "addEventListener",
    "default#image",
    "aria-label",
    ".button-prev",
    "bind",
    "522128PTRLmf",
    ".burger",
    "body",
    ".pagination",
    "closest",
    "innerHTML",
    "images/check.svg",
    "button-prev",
    "querySelectorAll",
    "prototype",
    "cardsContainerName",
    "Map",
    "large",
    "9393640VamYPC",
    "4697960emQbSY",
    "slides",
    "disabledClassName",
    "contains",
    "pagination",
    "card",
    "activeClassName",
    "src",
    "2381586khKWSy",
    "swiper-slide",
    ".js-accordion",
    "block",
    "sliderWrapElem",
    "Недопустимый\x20формат",
    ".dropdown",
    "call",
    "keydown",
    "display",
    "[data-fancybox=\x22gallery\x22]",
    "2409336YoCjsh",
    "querySelector",
    "toggle",
    "none",
    "images/author-img.jpg",
    "div",
    "button",
    "cardsSlider",
    "editions__swiper-content",
    "path",
    ".dropdown__button",
    "forEach",
    "remove",
    "DOMContentLoaded",
    "value",
    "click",
    "scrollWidth",
    "2772537jFhAmd",
    "unmaskedvalue",
    "editions-wrapper",
    "add",
  ];
  _0x2150 = function () {
    return _0x34b4a5;
  };
  return _0x2150();
}
var partnersSlide = new Swiper(_0x425409(0xc2), {
  loop: !![],
  navigation: { nextEl: _0x425409(0xed), prevEl: _0x425409(0x109) },
  breakpoints: {
    0x4b0: { slidesPerView: 0x3, spaceBetween: 0x32 },
    0x301: { slidesPerView: 0x2, spaceBetween: 0x32 },
    0x258: { slidesPerView: 0x2, spaceBetween: 0x22 },
    0x140: { slidesPerView: 0x1, spaceBetween: 0x32 },
  },
});
ymaps["ready"](init);
function init() {
  const _0x14fe54 = _0x425409;
  var _0x100195 = new ymaps[_0x14fe54(0x97)](
      _0x14fe54(0xfc),
      {
        center: [55.758468, 37.601088],
        zoom: 0xe,
        controls: ["geolocationControl", _0x14fe54(0xcd)],
      },
      {
        suppressMapOpenBlock: !![],
        geolocationControlSize: _0x14fe54(0x98),
        geolocationControlPosition: {
          top: _0x14fe54(0xcf),
          right: _0x14fe54(0xd3),
        },
        geolocationControlFloat: _0x14fe54(0xb0),
        zoomControlSize: "small",
        zoomControlFloat: _0x14fe54(0xb0),
        zoomControlPosition: { top: _0x14fe54(0x10d), right: _0x14fe54(0xd3) },
      }
    ),
    _0x5ce48a = new ymaps["GeoObject"]({
      geometry: { type: _0x14fe54(0x114), coordinates: [55.758468, 37.601088] },
    }),
    _0x5ce48a = new ymaps["Placemark"](
      [55.758468, 37.601088],
      {},
      {
        iconLayout: _0x14fe54(0x120),
        iconImageHref: _0x14fe54(0x12a),
        iconImageSize: [0x14, 0x14],
        iconImageOffset: [-0xa, -0x14],
      }
    );
  _0x100195[_0x14fe54(0xd4)][_0x14fe54(0xc1)](_0x5ce48a),
    _0x100195[_0x14fe54(0xd4)][_0x14fe54(0xc1)](myPlacemark);
}
var selector = document[_0x425409(0x12c)](_0x425409(0xd9)),
  im = new Inputmask("+7\x20(999)\x20999-99-99");
im["mask"](selector),
  new JustValidate(".form", {
    rules: {
      name: { required: !![], minLength: 0x2, maxLength: 0x14 },
      tel: {
        required: !![],
        function: (_0x182422, _0x115944) => {
          const _0x1fd936 = _0x425409,
            _0x1bc24a = selector["inputmask"][_0x1fd936(0xbf)]();
          return Number(_0x1bc24a) && _0x1bc24a[_0x1fd936(0xf3)] === 0xa;
        },
      },
    },
    messages: { name: _0x425409(0xa7), tel: _0x425409(0xa7) },
    colorWrong: "#D11616",
  });
