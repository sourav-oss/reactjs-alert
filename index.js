"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

var ReactJsAlert = /*#__PURE__*/ (function (_Component) {
  _inherits(ReactJsAlert, _Component);

  var _super = _createSuper(ReactJsAlert);

  function ReactJsAlert(props) {
    var _this;

    _classCallCheck(this, ReactJsAlert);

    _this = _super.call(this, props);
    _this.state = {
      status: _this.props.status ? _this.props.status : false, // quotes: this.props.quotes ? this.props.quotes : false,
    };
    return _this;
  }

  _createClass(ReactJsAlert, [
    {
      key: "componentDidUpdate",
      value: (function () {
        var _componentDidUpdate = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee(prevProps) {
            var _this2 = this;

            return regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      if (prevProps.status != this.props.status) {
                        if (this.props.status == true) {
                          this.setState({
                            status: true,
                          });
                          setTimeout(
                            function () {
                              _this2.setState({
                                status: false,
                              });

                              _this2.props.Close(false);
                            },
                            this.props.autoCloseIn
                              ? this.props.autoCloseIn
                              : 4000
                          );
                        }
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              },
              _callee,
              this
            );
          })
        );

        function componentDidUpdate(_x) {
          return _componentDidUpdate.apply(this, arguments);
        }

        return componentDidUpdate;
      })(),
    },
    {
      key: "closeModal",
      value: (function () {
        var _closeModal = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      this.props.Close(false);
                      this.setState({
                        status: false,
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              this
            );
          })
        );

        function closeModal() {
          return _closeModal.apply(this, arguments);
        }

        return closeModal;
      })(),
    },
    {
      key: "render",
      value: function render() {
        var _this3 = this;

        var props = this.props;

        var svgPath = /*#__PURE__*/ _react["default"].createElement("path", {
          d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z",
        });

        var bgColor = "#00b0ff";

        if (props.type === "error") {
          bgColor = props.color ? props.color : "#de1327";
          svgPath = /*#__PURE__*/ _react["default"].createElement("path", {
            d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z",
          });
        } else if (props.type === "success") {
          bgColor = props.color ? props.color : "#00c12c";
          svgPath = /*#__PURE__*/ _react["default"].createElement("path", {
            d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z",
          });
        } else if (props.type === "warning") {
          bgColor = props.color ? props.color : "#ff9900";
          svgPath = /*#__PURE__*/ _react["default"].createElement("path", {
            d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z",
          });
        } else if (props.type === "info") {
          bgColor = props.color ? props.color : "#00b0ff";
          svgPath = /*#__PURE__*/ _react["default"].createElement("path", {
            d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z",
          });
        }

        return /*#__PURE__*/ _react["default"].createElement(
          "div",
          {
            className: this.state.status ? "__myAlert show" : "__myAlert",
            "aria-labelledby": "__myAlertTitle",
            "aria-hidden": "true",
          },
          /*#__PURE__*/ _react["default"].createElement(
            "div",
            {
              className: "__myAlertModal",
              role: "document",
            },
            /*#__PURE__*/ _react["default"].createElement(
              "div",
              {
                className: "alert-modal-content",
              },
              /*#__PURE__*/ _react["default"].createElement(
                "div",
                {
                  id: "alertWrapper",
                  className: "alert-wrapper",
                },
                /*#__PURE__*/ _react["default"].createElement(
                  "button",
                  {
                    className: "alert-close-icon",
                    onClick: function onClick() {
                      return _this3.closeModal();
                    },
                  },
                  "\xD7"
                ),
                /*#__PURE__*/ _react["default"].createElement(
                  "div",
                  {
                    className: "d-flex",
                  },
                  /*#__PURE__*/ _react["default"].createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "35",
                      height: "35",
                      viewBox: "0 0 24 24",
                      fill: bgColor,
                      className: "alert-status-icon",
                    },
                    svgPath
                  ),
                  /*#__PURE__*/ _react["default"].createElement(
                    "div",
                    {
                      className: "alert-dialogue",
                    },
                    /*#__PURE__*/ _react["default"].createElement(
                      "h3",
                      {
                        className: "alert-text",
                      },
                      props.title
                        ? props.title
                        : "Something went wrong, please try again later!"
                    ),
                    props.quotes
                      ? /*#__PURE__*/ _react["default"].createElement(
                          "p",
                          {
                            className: "alert-quote mb-0",
                          },
                          props.quote
                            ? props.quote
                            : "This is a dummy alert to show an example of reactjs-alert"
                        )
                      : null,
                    /*#__PURE__*/ _react["default"].createElement(
                      "button",
                      {
                        type: "button",
                        className: "close-alert-btn",
                        onClick: function onClick() {
                          return _this3.closeModal();
                        },
                        style: {
                          backgroundColor: bgColor,
                        },
                      },
                      props.button ? props.button : "Okay"
                    )
                  )
                )
              )
            )
          )
        );
      },
    },
  ]);

  return ReactJsAlert;
})(_react.Component);

exports["default"] = ReactJsAlert;
