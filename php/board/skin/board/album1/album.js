(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
  Direction aware content reveals.

  @param {Object} object - Container for all options.
  @param {string} selector - Container element selector.
  @param {string} itemSelector - Item element selector.
  @param {string} animationName - Animation CSS class.
  @param {bollean} enableTouch  - Adds touch event to show content on first click then follow link on the second click.
  @param {integer} touchThreshold - Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
*/

var DirectionReveal = function DirectionReveal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector = _ref$selector === undefined ? '.direction-reveal' : _ref$selector,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === undefined ? '.direction-reveal__card' : _ref$itemSelector,
      _ref$animationName = _ref.animationName,
      animationName = _ref$animationName === undefined ? 'swing' : _ref$animationName,
      _ref$enableTouch = _ref.enableTouch,
      enableTouch = _ref$enableTouch === undefined ? true : _ref$enableTouch,
      _ref$touchThreshold = _ref.touchThreshold,
      touchThreshold = _ref$touchThreshold === undefined ? 250 : _ref$touchThreshold;

  var containers = document.querySelectorAll(selector);
  var touchStart = void 0;

  var getDirection = function getDirection(e, item) {
    // Width and height of current item
    var w = item.offsetWidth;
    var h = item.offsetHeight;
    var position = getPosition(item);

    // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
    var x = e.pageX - position.x - w / 2 * (w > h ? h / w : 1);
    var y = e.pageY - position.y - h / 2 * (h > w ? w / h : 1);

    // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).  See https://stackoverflow.com/a/3647634 for a full explanation.
    var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    // console.table([x, y, w, h, e.pageX, e.pageY, item.offsetLeft, item.offsetTop, position.x, position.y]);

    return d;
  };

  var getPosition = function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      xPos += el.offsetLeft + el.clientLeft;
      yPos += el.offsetTop + el.clientTop;

      el = el.offsetParent;
    }
    return {
      x: xPos,
      y: yPos
    };
  };

  var translateDirection = switchcase({
    0: 'top',
    1: 'right',
    2: 'bottom',
    3: 'left'
  })('top');

  var addClass = function addClass(e, state) {
    var currentItem = e.currentTarget;
    var direction = getDirection(e, currentItem);
    var directionString = translateDirection(direction);

    // Remove current animation classes and add new ones e.g. swap --in for --out.
    var currentCssClasses = currentItem.className.split(' ');
    var filteredCssClasses = currentCssClasses.filter(function (cssClass) {
      return !cssClass.startsWith(animationName);
    }).join(' ');
    currentItem.className = filteredCssClasses;
    currentItem.classList.add(animationName + '--' + state + '-' + directionString);
  };

  var bindEvents = function bindEvents(containerItem) {
    var items = containerItem.querySelectorAll(itemSelector);

    items.forEach(function (item) {

      addEventListenerMulti(item, ['mouseenter', 'focus'], function (e) {
        addClass(e, 'in');
      });

      addEventListenerMulti(item, ['mouseleave', 'blur'], function (e) {
        addClass(e, 'out');
      });

      if (enableTouch) {

        item.addEventListener('touchstart', function (e) {
          touchStart = +new Date();
        }, { passive: true });

        item.addEventListener('touchend', function (e) {
          var touchTime = +new Date() - touchStart;

          if (touchTime < touchThreshold && !item.className.includes(animationName + '--in')) {
            e.preventDefault();

            resetVisible(e, items, addClass(e, 'in'));
          }
        });
      }
    });
  };

  var addEventListenerMulti = function addEventListenerMulti(element, events, fn) {
    events.forEach(function (e) {
      return element.addEventListener(e, fn);
    });
  };

  var resetVisible = function resetVisible(e, items, callback) {

    items.forEach(function (item) {
      var currentCssClasses = item.className;

      if (currentCssClasses.includes(animationName + '--in') && item !== e.currentTarget) {
        item.className = currentCssClasses.replace(animationName + '--in', animationName + '--out');
      }
    });

    callback;
  };

  var init = function init() {

    if (containers.length) {
      containers.forEach(function (containerItem) {
        bindEvents(containerItem);
      });
    } else {
      return;
    }
  };

  // Init is called by default
  init();

  // Reveal API
  return {
    init: init
  };
};

exports.default = DirectionReveal;

var switchcase = exports.switchcase = function switchcase(cases) {
  return function (defaultCase) {
    return function (key) {
      return key in cases ? cases[key] : defaultCase;
    };
  };
};

},{}],2:[function(require,module,exports){
'use strict';

var _directionReveal = require('./direction-reveal.js');

var _directionReveal2 = _interopRequireDefault(_directionReveal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Swing animation(Default)
var directionRevealSwing = (0, _directionReveal2.default)({
  selector: '.direction-reveal--ok-swing'
});

},{"./direction-reveal.js":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
