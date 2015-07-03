webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(70);
	
	// HTML5 pushState
	
	var _reactRouterLibBrowserHistory = __webpack_require__(99);
	
	// HTML hashchange
	//import { history } from 'react-router/lib/HashHistory';
	
	var App = (function (_React$Component) {
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(App, _React$Component);
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'p',
	          null,
	          'please open console.'
	        ),
	        _react2['default'].createElement(
	          'ul',
	          null,
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/component1' },
	              'Component1'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/component2' },
	              'Component2'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/component3' },
	              'Component3'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/page/' + (Math.random() * 100 >> 0) },
	              'Random Page'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/unknown' },
	              'unknown'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'ul',
	          null,
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/c1' },
	              'Redirect to Component1'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/c2' },
	              'Redirect to Component2'
	            )
	          ),
	          _react2['default'].createElement(
	            'li',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/c3' },
	              'Redirect to Component3'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(_react2['default'].Component);
	
	var Component1 = (function (_React$Component2) {
	  function Component1() {
	    _classCallCheck(this, Component1);
	
	    _get(Object.getPrototypeOf(Component1.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Component1, _React$Component2);
	
	  _createClass(Component1, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'Component1'
	      );
	    }
	  }]);
	
	  return Component1;
	})(_react2['default'].Component);
	
	var Component2 = (function (_React$Component3) {
	  function Component2() {
	    _classCallCheck(this, Component2);
	
	    _get(Object.getPrototypeOf(Component2.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Component2, _React$Component3);
	
	  _createClass(Component2, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'Component2'
	      );
	    }
	  }]);
	
	  return Component2;
	})(_react2['default'].Component);
	
	var Component3 = (function (_React$Component4) {
	  function Component3() {
	    _classCallCheck(this, Component3);
	
	    _get(Object.getPrototypeOf(Component3.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Component3, _React$Component4);
	
	  _createClass(Component3, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'Component3'
	      );
	    }
	  }]);
	
	  return Component3;
	})(_react2['default'].Component);
	
	var Page = (function (_React$Component5) {
	  function Page() {
	    _classCallCheck(this, Page);
	
	    _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Page, _React$Component5);
	
	  _createClass(Page, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        this.props.params.page
	      );
	    }
	  }]);
	
	  return Page;
	})(_react2['default'].Component);
	
	var NoMatch = (function (_React$Component6) {
	  function NoMatch() {
	    _classCallCheck(this, NoMatch);
	
	    _get(Object.getPrototypeOf(NoMatch.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(NoMatch, _React$Component6);
	
	  _createClass(NoMatch, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        'No Match'
	      );
	    }
	  }]);
	
	  return NoMatch;
	})(_react2['default'].Component);
	
	function onEnter() {
	  console.log('onEnter');
	  console.log(arguments);
	}
	
	function onLeave() {
	  console.log('onLeave');
	  console.log(arguments);
	}
	
	_react2['default'].render(_react2['default'].createElement(
	  _reactRouter.Router,
	  { history: _reactRouterLibBrowserHistory.history },
	  _react2['default'].createElement(
	    _reactRouter.Route,
	    { path: '/', component: App },
	    _react2['default'].createElement(_reactRouter.Route, { path: 'component1', component: Component1, onEnter: onEnter, onLeave: onLeave }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'component2', component: Component2, onEnter: onEnter, onLeave: onLeave }),
	    _react2['default'].createElement(_reactRouter.Route, { path: 'component3', component: Component3, onEnter: onEnter, onLeave: onLeave }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '/page/:page', component: Page }),
	    _react2['default'].createElement(_reactRouter.Redirect, { from: '/c1', to: '/component1' }),
	    _react2['default'].createElement(_reactRouter.Redirect, { from: '/c2', to: '/component2' }),
	    _react2['default'].createElement(_reactRouter.Redirect, { from: '/c3', to: '/component3' }),
	    _react2['default'].createElement(_reactRouter.Route, { path: '*', component: NoMatch })
	  )
	), document.getElementById('app'));

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _DOMHistory2 = __webpack_require__(100);
	
	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);
	
	var _DOMUtils = __webpack_require__(43);
	
	var _NavigationTypes = __webpack_require__(45);
	
	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);
	
	function updateCurrentState(extraState) {
	  var state = window.history.state;
	
	  if (state) window.history.replaceState(_extends(state, extraState), '');
	}
	
	/**
	 * A history implementation for DOM environments that support the
	 * HTML5 history API (pushState, replaceState, and the popstate event).
	 * Provides the cleanest URLs and should always be used in browser
	 * environments if possible.
	 *
	 * Note: BrowserHistory automatically falls back to using full page
	 * refreshes if HTML5 history is not available, so URLs are always
	 * the same across browsers.
	 */
	
	var BrowserHistory = (function (_DOMHistory) {
	  function BrowserHistory(options) {
	    _classCallCheck(this, BrowserHistory);
	
	    _DOMHistory.call(this, options);
	    this.handlePopState = this.handlePopState.bind(this);
	    this.isSupported = (0, _DOMUtils.supportsHistory)();
	  }
	
	  _inherits(BrowserHistory, _DOMHistory);
	
	  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var state = null;
	
	    if (this.isSupported) {
	      var historyState = window.history.state;
	      state = this._createState(historyState);
	
	      if (!historyState || !historyState.key) window.history.replaceState(state, '');
	    }
	
	    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
	  };
	
	  BrowserHistory.prototype.setup = function setup() {
	    if (this.location == null) this._updateLocation();
	  };
	
	  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
	    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.
	
	    this._updateLocation(_NavigationTypes2['default'].POP);
	    this._notifyChange();
	  };
	
	  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);
	
	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.attachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };
	
	  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);
	
	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.detachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };
	
	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate
	
	  BrowserHistory.prototype.pushState = function pushState(state, path) {
	    if (this.isSupported) {
	      updateCurrentState(this.getScrollPosition());
	
	      state = this._createState(state);
	
	      window.history.pushState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
	      this._notifyChange();
	    } else {
	      window.location = path;
	    }
	  };
	
	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate
	
	  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
	    if (this.isSupported) {
	      state = this._createState(state);
	
	      window.history.replaceState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
	      this._notifyChange();
	    } else {
	      window.location.replace(path);
	    }
	  };
	
	  return BrowserHistory;
	})(_DOMHistory3['default']);
	
	var history = new BrowserHistory();
	exports.history = history;
	exports['default'] = BrowserHistory;

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _History2 = __webpack_require__(69);
	
	var _History3 = _interopRequireDefault(_History2);
	
	var _DOMUtils = __webpack_require__(43);
	
	/**
	 * A history interface that assumes a DOM environment.
	 */
	
	var DOMHistory = (function (_History) {
	  function DOMHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, DOMHistory);
	
	    _History.call(this, options);
	    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
	  }
	
	  _inherits(DOMHistory, _History);
	
	  DOMHistory.prototype.go = function go(n) {
	    if (n === 0) return;
	
	    window.history.go(n);
	  };
	
	  return DOMHistory;
	})(_History3['default']);
	
	exports['default'] = DOMHistory;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=index.js.map