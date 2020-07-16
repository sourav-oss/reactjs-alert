"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactJsAlert = /*#__PURE__*/function (_Component) {
  _inherits(ReactJsAlert, _Component);

  var _super = _createSuper(ReactJsAlert);

  function ReactJsAlert(props) {
    var _this;

    _classCallCheck(this, ReactJsAlert);

    _this = _super.call(this, props);
    _this.state = {
      status: _this.props.status
    };
    return _this;
  }

  _createClass(ReactJsAlert, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(prevProps) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (prevProps.status != this.props.status) {
                  if (this.props.status == true) {
                    this.setState({
                      status: true
                    });
                    setTimeout(function () {
                      _this2.setState({
                        status: false
                      });

                      _this2.props.Close(false);
                    }, 3000);
                  }
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate(_x) {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "closeModal",
    value: function () {
      var _closeModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.props.Close(false);
                this.setState({
                  status: false
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function closeModal() {
        return _closeModal.apply(this, arguments);
      }

      return closeModal;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var bgColor = "#00b0ff";

      if (props.type === "error") {
        bgColor = "#de1327";
      } else if (props.type === "success") {
        bgColor = "#00c12c";
      } else if (props.type === "warning") {
        bgColor = "#ff9900";
      } else if (props.type === "info") {
        bgColor = "#00b0ff";
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.state.status ? "myAlert show" : "myAlert",
        "aria-labelledby": "myAlertTitle",
        "aria-hidden": "true"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "myAlertModal",
        role: "document"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert-modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        id: "alertWrapper",
        className: "alert-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "alert-close-icon",
        onClick: function onClick() {
          return _this3.closeModal();
        }
      }, "\xD7"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert-dialogue"
      }, /*#__PURE__*/_react["default"].createElement("h3", {
        className: "alert-text"
      }, props.title ? props.title : "Something went wrong. Please try again!"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "alert-quote mb-0"
      }, props.quote ? props.quote : "I hated being careful, too - or wanted to, at least."), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "close-alert-btn",
        onClick: function onClick() {
          return _this3.closeModal();
        },
        style: {
          backgroundColor: bgColor
        }
      }, "Okay"))))));
    }
  }]);

  return ReactJsAlert;
}(_react.Component);

exports["default"] = ReactJsAlert;
