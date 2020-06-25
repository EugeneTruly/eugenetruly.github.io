function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./credit-card/credit-card.component */
    "./src/app/credit-card/credit-card.component.ts");
    /* harmony import */


    var _domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./domain */
    "./src/app/domain.ts");
    /* harmony import */


    var _time_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./time.pipe */
    "./src/app/time.pipe.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        // Countdown timer
        // TODO: unsubscribe??
        this.timerSeconds = 900;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // TODO: add validators and other processing for the name, etc
          this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            creditCard: this.creditCardComponent.creditCardSubGroup,
            emailReceipt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
          }); // Initiate countdown timer

          this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc) {
            return --acc;
          }, this.timerSeconds), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (x) {
            return x >= 0;
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var ccGroup = this.paymentForm.controls.creditCard;
          var cardNumber = ccGroup.controls[_domain__WEBPACK_IMPORTED_MODULE_5__["CreditCardGroupComponents"].CREDIT_CARD_NUMBER].value;
          var expMonth = ccGroup.controls[_domain__WEBPACK_IMPORTED_MODULE_5__["CreditCardGroupComponents"].EXPIRATION_MONTH].value;
          var expYear = ccGroup.controls[_domain__WEBPACK_IMPORTED_MODULE_5__["CreditCardGroupComponents"].EXPIRATION_YEAR].value;
          var name = ccGroup.controls[_domain__WEBPACK_IMPORTED_MODULE_5__["CreditCardGroupComponents"].NAME].value;
          var cvv = ccGroup.controls[_domain__WEBPACK_IMPORTED_MODULE_5__["CreditCardGroupComponents"].CVV].value;
          var emailReceipt = this.paymentForm.get("emailReceipt").value;
          console.log("Name  	      :", name);
          console.log("Card Number  :", cardNumber);
          console.log("Exp. Month   :", expMonth);
          console.log("Exp. Year    :", expYear);
          console.log("CVV          :", cvv);
          console.log("Email receipt:", emailReceipt);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_4__["CreditCardComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.creditCardComponent = _t.first);
        }
      },
      decls: 32,
      vars: 7,
      consts: [["src", "../assets/images/logo.png"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "main-block-wrap"], [1, "info-block"], [1, "cc-icons"], ["src", "../assets/images/visa.png", "alt", "Visa"], ["src", "../assets/images/ms.png", "alt", "Mastercard"], ["src", "../assets/images/belkart.png", "alt", "Belkart"], ["src", "../assets/images/unionpay.png", "alt", "Unionpay"], [1, "bottom-block-wrap"], ["type", "checkbox", "formControlName", "emailReceipt"], ["type", "submit", 1, "app", 3, "disabled"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0414\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0435\u0441\u0441\u0438\u0438 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u043F\u043B\u0430\u0442\u0430:\xA0\xA0325,00 BYN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u044F\u0432\u043A\u0438:\xA0\xA034875398");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0\xA0Shop name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_15_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-credit-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u043C SSL \u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u043E\u043C 3D-Secure \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043A\u0430\u0440\u0442\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u041F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043A\u0432\u0438\u0442\u0430\u043D\u0446\u0438\u044E \u043D\u0430 e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx.timer$)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paymentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.creditCardComponent.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_4__["CreditCardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      pipes: [_time_pipe__WEBPACK_IMPORTED_MODULE_6__["TimePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 840px;\n  margin: 0 auto;\n}\n\nsection[_ngcontent-%COMP%]:first-of-type {\n  display: flex;\n  margin-bottom: 4em;\n  margin-top: 2em;\n}\n\nsection[_ngcontent-%COMP%]:first-of-type    > div[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: calc(18em / 16);\n  padding-top: 0.5em;\n}\n\nsection[_ngcontent-%COMP%]:first-of-type    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #c90808;\n}\n\nsection[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin-bottom: 2em;\n}\n\nsection[_ngcontent-%COMP%]:nth-of-type(2)    > div[_ngcontent-%COMP%] {\n  color: dimgray;\n  font-size: 14px;\n}\n\nsection[_ngcontent-%COMP%]:nth-of-type(2)    > div[_ngcontent-%COMP%]:first-of-type {\n  color: #000;\n  font-size: calc(28em/16);\n  font-weight: 600;\n  margin-bottom: 0.25em;\n}\n\n.main-block-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main-block-wrap[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  margin-left: 35px;\n  padding-top: 30px;\n}\n\n.main-block-wrap[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .cc-icons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main-block-wrap[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .cc-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 66px;\n  margin-right: 20px;\n}\n\n.bottom-block-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.bottom-block-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding-top: 11px;\n}\n\n.bottom-block-wrap[_ngcontent-%COMP%]   button.app[_ngcontent-%COMP%] {\n  margin-left: 69px;\n  border: 0;\n  background: none;\n  box-shadow: none;\n  padding: 13px 55px;\n  background-color: #2572b9;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 14px;\n}\n\n.bottom-block-wrap[_ngcontent-%COMP%]   button.app[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.bottom-block-wrap[_ngcontent-%COMP%]   button.app[_ngcontent-%COMP%]:disabled {\n  color: black;\n  background-color: #eaeaea;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxTb2Z0Q2x1YlxcbWRvbS1wYXltZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0k7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDUTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0NaOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRFI7O0FER1E7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRFo7O0FETUE7RUFDSSxhQUFBO0FDSEo7O0FES0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDSFI7O0FES1E7RUFDSSxhQUFBO0FDSFo7O0FES1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSGhCOztBRFNBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDTko7O0FEUUk7RUFDSSxpQkFBQTtBQ05SOztBRFNJO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUFI7O0FEU1E7RUFDSSxlQUFBO0FDUFo7O0FEVVE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1JaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogODQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcblxyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDE4ZW0gLyAxNik7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG5cclxuICAgICAgICA+c3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2M5MDgwODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnNlY3Rpb246bnRoLW9mLXR5cGUoMikge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cclxuICAgID5kaXYge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTA1LCAxMDUsIDEwNSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKDI4ZW0vMTYpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFpbi1ibG9jay13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmluZm8tYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAuY2MtaWNvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm90dG9tLWJsb2NrLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5hcHAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2OXB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCA1NXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTcyYjk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM0LCAyMzQsIDIzNCk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDg0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICBtYXJnaW4tdG9wOiAyZW07XG59XG5zZWN0aW9uOmZpcnN0LW9mLXR5cGUgPiBkaXYge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiBjYWxjKDE4ZW0gLyAxNik7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZSA+IGRpdiA+IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNjOTA4MDg7XG59XG5cbnNlY3Rpb246bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5zZWN0aW9uOm50aC1vZi10eXBlKDIpID4gZGl2IHtcbiAgY29sb3I6IGRpbWdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnNlY3Rpb246bnRoLW9mLXR5cGUoMikgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IGNhbGMoMjhlbS8xNik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuLm1haW4tYmxvY2std3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbi1ibG9jay13cmFwIC5pbmZvLWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLm1haW4tYmxvY2std3JhcCAuaW5mby1ibG9jayAuY2MtaWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tYmxvY2std3JhcCAuaW5mby1ibG9jayAuY2MtaWNvbnMgaW1nIHtcbiAgd2lkdGg6IDY2cHg7XG4gIGhlaWdodDogNjZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYm90dG9tLWJsb2NrLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1ibG9jay13cmFwIGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDExcHg7XG59XG4uYm90dG9tLWJsb2NrLXdyYXAgYnV0dG9uLmFwcCB7XG4gIG1hcmdpbi1sZWZ0OiA2OXB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEzcHggNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NzJiOTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmJvdHRvbS1ibG9jay13cmFwIGJ1dHRvbi5hcHA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tLWJsb2NrLXdyYXAgYnV0dG9uLmFwcDpkaXNhYmxlZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], null, {
        creditCardComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_4__["CreditCardComponent"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _credit_card_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./credit-card-number.directive */
    "./src/app/credit-card-number.directive.ts");
    /* harmony import */


    var _credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./credit-card/credit-card.component */
    "./src/app/credit-card/credit-card.component.ts");
    /* harmony import */


    var _digit_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./digit-only.directive */
    "./src/app/digit-only.directive.ts");
    /* harmony import */


    var _time_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./time.pipe */
    "./src/app/time.pipe.ts");
    /* harmony import */


    var _tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./tooltip.directive */
    "./src/app/tooltip.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_7__["CreditCardComponent"], _credit_card_number_directive__WEBPACK_IMPORTED_MODULE_6__["CreditCardNumberDirective"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], _time_pipe__WEBPACK_IMPORTED_MODULE_9__["TimePipe"], _digit_only_directive__WEBPACK_IMPORTED_MODULE_8__["DigitOnlyDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_7__["CreditCardComponent"], _credit_card_number_directive__WEBPACK_IMPORTED_MODULE_6__["CreditCardNumberDirective"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], _time_pipe__WEBPACK_IMPORTED_MODULE_9__["TimePipe"], _digit_only_directive__WEBPACK_IMPORTED_MODULE_8__["DigitOnlyDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_3__["NgxMaskModule"].forRoot()],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/credit-card-number.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/credit-card-number.directive.ts ***!
    \*************************************************/

  /*! exports provided: CreditCardNumberDirective */

  /***/
  function srcAppCreditCardNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditCardNumberDirective", function () {
      return CreditCardNumberDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./domain */
    "./src/app/domain.ts");
    /* harmony import */


    var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib */
    "./src/app/lib.ts");

    var CreditCardNumberDirective = /*#__PURE__*/function () {
      function CreditCardNumberDirective(elementRef) {
        _classCallCheck(this, CreditCardNumberDirective);

        this.elementRef = elementRef; // Credit card type is detected (other than unknown)

        this.cardTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Valid credit card number detected

        this.cardNumberChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Error detected while typing credit-card number

        this.cardErrorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.input = this.elementRef.nativeElement;
      }

      _createClass(CreditCardNumberDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cardTypeChange.emit(_domain__WEBPACK_IMPORTED_MODULE_1__["CreditCardTypes"].UNKNOWN);
        } // Access the current credit-card number length

      }, {
        key: "onKeyDown",
        // TODO: refactor
        // HostListener fires change detection; consider RxJS fromEvent() as an alternative
        value: function onKeyDown(evt) {
          var key = evt.key;

          if ( // Allow: Delete, Backspace, Tab, Escape, Enter, etc
          // this.navigationKeys.indexOf(key) > -1 ||
          key === "a" && evt.ctrlKey === true || // Allow: Ctrl+A
          key === "c" && evt.ctrlKey === true || // Allow: Ctrl+C
          key === "v" && evt.ctrlKey === true || // Allow: Ctrl+V
          key === "x" && evt.ctrlKey === true || // Allow: Ctrl+X
          key === "a" && evt.metaKey === true || // Cmd+A (Mac)
          key === "c" && evt.metaKey === true || // Cmd+C (Mac)
          key === "v" && evt.metaKey === true || // Cmd+V (Mac)
          key === "x" && evt.metaKey === true // Cmd+X (Mac)
          ) {
              return true;
            } // Some characters are OK (for selecting/deselecting/etc)


          if (key === "Shift" || key === "ArrowLeft" || key === "ArrowRight" || key === "Control" || key === "Alt" || key === "Tab" || key === "Home" || key === "End") {
            return true;
          } // Backspace and Delete are okay


          var code = evt.code.toLowerCase();

          if (code === "backspace" || code === "delete") {
            return true;
          }

          var value = key.match(/[\d -]+/);

          if (value == null) {
            return false;
          }

          return true;
        }
      }, {
        key: "onKeyUp",
        value: function onKeyUp() {
          var cardNumber = this.input.value.replace(" ", "");
          /*
            Note:  In general, 2-4 digits is all it takes to identify the card type; after that, this test is redundant.
            TODO: Make this more efficient
           */

          var cardType = Object(_lib__WEBPACK_IMPORTED_MODULE_2__["getCardType"])(cardNumber);

          if (cardType === _domain__WEBPACK_IMPORTED_MODULE_1__["CreditCardTypes"].UNKNOWN) {
            this.cardErrorChange.emit(_domain__WEBPACK_IMPORTED_MODULE_1__["CREDIT_CARD_ERRORS"].UNSUPPORTED_CARD);
            return false;
          } else {
            this.cardTypeChange.emit(cardType);
          }

          if (!Object(_lib__WEBPACK_IMPORTED_MODULE_2__["isCCLengthValid"])(cardNumber, cardType)) {
            this.cardErrorChange.emit(_domain__WEBPACK_IMPORTED_MODULE_1__["CREDIT_CARD_ERRORS"].INVALID_LENGTH);
            return false;
          }

          if (!Object(_lib__WEBPACK_IMPORTED_MODULE_2__["isValidLuhn"])(cardNumber)) {
            this.cardErrorChange.emit(_domain__WEBPACK_IMPORTED_MODULE_1__["CREDIT_CARD_ERRORS"].INVALID_NUMBER);
            return false;
          }

          this.cardErrorChange.emit(_domain__WEBPACK_IMPORTED_MODULE_1__["CREDIT_CARD_ERRORS"].NONE);
          this.cardNumberChange.emit(cardNumber);
          return true;
        }
      }, {
        key: "length",
        get: function get() {
          return this.input.value.length;
        }
      }]);

      return CreditCardNumberDirective;
    }();

    CreditCardNumberDirective.ɵfac = function CreditCardNumberDirective_Factory(t) {
      return new (t || CreditCardNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CreditCardNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CreditCardNumberDirective,
      selectors: [["", "appCreditCardNumber", ""]],
      hostBindings: function CreditCardNumberDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CreditCardNumberDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keyup", function CreditCardNumberDirective_keyup_HostBindingHandler() {
            return ctx.onKeyUp();
          });
        }
      },
      outputs: {
        cardTypeChange: "cardTypeChange",
        cardNumberChange: "cardNumberChange",
        cardErrorChange: "cardErrorChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardNumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[appCreditCardNumber]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        cardTypeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cardNumberChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cardErrorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["keydown", ["$event"]]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["keyup"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/credit-card/credit-card.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/credit-card/credit-card.component.ts ***!
    \******************************************************/

  /*! exports provided: CreditCardComponent */

  /***/
  function srcAppCreditCardCreditCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditCardComponent", function () {
      return CreditCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _credit_card_number_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../credit-card-number.directive */
    "./src/app/credit-card-number.directive.ts");
    /* harmony import */


    var _domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../domain */
    "./src/app/domain.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
    /* harmony import */


    var _tooltip_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../tooltip.directive */
    "./src/app/tooltip.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _digit_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../digit-only.directive */
    "./src/app/digit-only.directive.ts");

    function CreditCardComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.creditCardData[ctx_r0.cardType].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CreditCardComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u044B \u0443\u043A\u0430\u0437\u0430\u043B\u0438 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0435\u0433\u043E \u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u0437\u0430\u043D\u043E\u0432\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreditCardComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043A\u0430\u043A \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreditCardComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430 \u043A\u0430\u0440\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreditCardComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043A\u043E\u0434 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CreditCardComponent = /*#__PURE__*/function () {
      function CreditCardComponent() {
        _classCallCheck(this, CreditCardComponent);

        this.placeHolder = "Введите номер карты"; // Make visible to template

        this.CreditCardErrors = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"];
        this.creditCardData = _domain__WEBPACK_IMPORTED_MODULE_3__["creditCards"];
        this.monthData = _domain__WEBPACK_IMPORTED_MODULE_3__["months"];
        this.yearData = _domain__WEBPACK_IMPORTED_MODULE_3__["years"];
        this.cardType = _domain__WEBPACK_IMPORTED_MODULE_3__["CreditCardTypes"].UNKNOWN; // Various errors that may occur while typing/interacting with the sub-form

        this.cardError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE;
        this.expError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE;
        this.cvvError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE;
        var theDate = new Date();
        this.currentMonth = theDate.getMonth();
        this.currentYear = theDate.getFullYear(); // this.selectedYear = this.currentYear;
        // this.selectedMonth = this.currentMonth;

        this.expirationMonth = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.expirationYear = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.cvv = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.creditCardSubGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          creditCardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          expirationMonth: this.expirationMonth,
          expirationYear: this.expirationYear,
          name: this.name,
          cvv: this.cvv
        });
      }

      _createClass(CreditCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // TODO: adjust

      }, {
        key: "onCardNumberChange",
        value: function onCardNumberChange(cardNumber) {
          if (cardNumber.length > 0 && this.cardError === _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE) {
            this.expirationMonth.enable();
            this.expirationYear.enable();
            this.cvv.enable();
          } // TODO: If enabled once and the user goes back to re-type a new card number, disable these controls again

        }
      }, {
        key: "onCardTypeChange",
        value: function onCardTypeChange(type) {
          if (type !== _domain__WEBPACK_IMPORTED_MODULE_3__["CreditCardTypes"].UNKNOWN) {
            this.cardType = type;
          }
        }
      }, {
        key: "onCardErrorChange",
        value: function onCardErrorChange(evt) {
          this.cardError = evt;
        }
      }, {
        key: "onMonthChanged",
        value: function onMonthChanged(evt) {
          var monthValue = +evt.target.value; // if (isNaN(monthValue)) {
          // 	this.expError = CREDIT_CARD_ERRORS.INVALID_DATE;
          // 	return;
          // }

          this.selectedMonth = monthValue;
          this.validateExpDate(monthValue); // this.expError = (this.selectedMonth < this.currentMonth && this.currentYear === this.selectedYear)
          // 	? CREDIT_CARD_ERRORS.INVALID_DATE
          // 	: CREDIT_CARD_ERRORS.NONE;
        }
      }, {
        key: "onYearChanged",
        value: function onYearChanged(evt) {
          var yearValue = +"20".concat(evt.target.value); // if (isNaN(yearValue)) {
          // 	this.expError = CREDIT_CARD_ERRORS.INVALID_DATE;
          // 	return;
          // }

          this.selectedYear = yearValue;
          this.validateExpDate(yearValue); // if (this.currentYear > this.selectedYear) {
          // 	this.expError = CREDIT_CARD_ERRORS.INVALID_DATE;
          // 	return;
          // }
          // // newly selected year may override a previous invalid month
          // this.expError = this.selectedMonth < this.currentMonth && this.currentYear === this.selectedYear
          // 	? CREDIT_CARD_ERRORS.INVALID_DATE
          // 	: CREDIT_CARD_ERRORS.NONE;
        }
      }, {
        key: "validateExpDate",
        value: function validateExpDate(val) {
          if (isNaN(val)) {
            this.expError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].INVALID_DATE;
            return;
          }

          if (this.currentYear > this.selectedYear) {
            this.expError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].INVALID_DATE;
            return;
          } // newly selected year may override a previous invalid month


          this.expError = this.selectedMonth < this.currentMonth && this.currentYear === this.selectedYear ? _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].INVALID_DATE : _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE;
        }
      }, {
        key: "onCVVChanged",
        value: function onCVVChanged(evt) {
          var cvv = +evt.target.value;

          if (isNaN(cvv)) {
            this.cvvError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].INVALID_CCV;
            return;
          }

          var digits = cvv === 0 ? 0 : Math.floor(Math.log10(cvv)) + 1; // Check the CVV length vs required length for the current card

          if (this.cardType !== _domain__WEBPACK_IMPORTED_MODULE_3__["CreditCardTypes"].UNKNOWN) {
            this.cvvError = digits === _domain__WEBPACK_IMPORTED_MODULE_3__["creditCards"][this.cardType].cvvDigits ? _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE : _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].INVALID_CCV;
          } else {
            // Type a CVV without first providing a card number
            this.cvvError = _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].INVALID_CCV;
          }
        }
      }, {
        key: "valid",
        get: function get() {
          return this.creditCardSubGroup.valid && this.isValidCardNumber && this.isValidExpDate && this.isValidCVV;
        } // Is the currently entered credit-card number valid?

      }, {
        key: "isValidCardNumber",
        get: function get() {
          return this.cardType !== _domain__WEBPACK_IMPORTED_MODULE_3__["CreditCardTypes"].UNKNOWN && this.creditCardNumberInput.length > 0 && this.cardError === _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE;
        } // Is the currently set expiration date (month and year) valid?

      }, {
        key: "isValidExpDate",
        get: function get() {
          // The year may be greater than the current year (any month is okay) or if equal to the current year, the month can not be less
          return this.selectedYear > this.currentYear || this.selectedMonth >= this.currentMonth && this.currentYear === this.selectedYear;
        } // Is the currently entered CVV valid?

      }, {
        key: "isValidCVV",
        get: function get() {
          return this.cvvTouched && this.cvvError === _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE;
        } // Has the credit-card number field been 'touched' or dirty?

      }, {
        key: "creditCardNumberTouched",
        get: function get() {
          return this.creditCardSubGroup.get("creditCardNumber").dirty;
        } // Has the CVV number field been 'touched' or dirty?

      }, {
        key: "cvvTouched",
        get: function get() {
          return this.cvv.dirty;
        }
      }, {
        key: "expDateTouched",
        get: function get() {
          return this.expirationMonth.dirty && this.expirationYear.dirty;
        } // Access the class(es) for the credit-card number {Input} based on current entry

      }, {
        key: "creditCardNumberClass",
        get: function get() {
          var className = "app ";

          if (!this.creditCardNumberTouched) {
            className += " ng-pristine";
          } else {
            className += this.isValidCardNumber ? " ng-valid" : "ng-invalid";
          }

          return className;
        } // Access the class(es) for the CVV {Input} based on overall sub-component state and current entry

      }, {
        key: "cvvClass",
        get: function get() {
          var className = "app app-cvv";

          if (!this.cvvTouched) {
            // Add pristine
            className += " ng-pristine";
          } else {
            // could be valid or invalid
            className += this.cvvError !== _domain__WEBPACK_IMPORTED_MODULE_3__["CREDIT_CARD_ERRORS"].NONE ? " ng-invalid" : " ng-valid";
          }

          return className;
        }
      }]);

      return CreditCardComponent;
    }();

    CreditCardComponent.ɵfac = function CreditCardComponent_Factory(t) {
      return new (t || CreditCardComponent)();
    };

    CreditCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreditCardComponent,
      selectors: [["app-credit-card"]],
      viewQuery: function CreditCardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_credit_card_number_directive__WEBPACK_IMPORTED_MODULE_2__["CreditCardNumberDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.creditCardNumberInput = _t.first);
        }
      },
      inputs: {
        placeHolder: "placeHolder"
      },
      decls: 45,
      vars: 11,
      consts: [[1, "credit-card-wrap", 3, "formGroup"], [1, "cc-main-info-wrap"], [1, "form-line"], ["mask", "0000 0000 0000 0000", "appCreditCardNumber", "", "appTooltip", "", "placement", "right", "type", "text", "id", "creditCardNumber", "formControlName", "creditCardNumber", "maxlength", "19", "inputmode", "numeric", "pattern", "[0-9]*", 1, "app", 3, "tooltipTemplateRef", "showTooltip", "cardNumberChange", "cardTypeChange", "cardErrorChange"], [1, "floating-label"], ["class", "card-type-img", 3, "src", 4, "ngIf"], ["creditCardNumberErrorTemplate", ""], [1, "form-line", "date-exp-wrap"], [1, "year-wrap"], ["appDigitOnly", "", "id", "expireMonth", "type", "text", "formControlName", "expirationMonth", "maxlength", "2", "inputmode", "numeric", "pattern", "[0-9]*", "min", "0", "max", "12", 1, "app", "app-month", 3, "change"], [1, "month-year-separator"], ["appTooltip", "", "placement", "bottom", "appDigitOnly", "", "id", "expireYear", "type", "text", "formControlName", "expirationYear", "maxlength", "2", "inputmode", "numeric", "pattern", "[0-9]*", "min", "0", "max", "30", 1, "app", "app-year", 3, "tooltipTemplateRef", "showTooltip", "change"], [1, "floating-label", "year-fl"], ["expDateTooltipTemplate", ""], ["appTooltip", "", "placement", "right", "type", "text", "formControlName", "name", 1, "app", "app-name", 3, "tooltipTemplateRef", "showTooltip"], ["nameTooltipTemplate", ""], [1, "cvv-block-wrap"], [1, "magnet-strip"], [1, "cvv-wrap"], [1, "stripes-wrap"], [1, "stripe"], ["appTooltip", "", "placement", "right", "appDigitOnly", "", "id", "cvv", "type", "text", "formControlName", "cvv", "maxlength", "3", "inputmode", "numeric", "pattern", "[0-9]*", 1, "app", "app-cvv", 3, "tooltipTemplateRef", "showTooltip", "input"], ["cvvTooltipTemplate", ""], [1, "cvv-underline"], [1, "card-type-img", 3, "src"]],
      template: function CreditCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardNumberChange", function CreditCardComponent_Template_input_cardNumberChange_3_listener($event) {
            return ctx.onCardNumberChange($event);
          })("cardTypeChange", function CreditCardComponent_Template_input_cardTypeChange_3_listener($event) {
            return ctx.onCardTypeChange($event);
          })("cardErrorChange", function CreditCardComponent_Template_input_cardErrorChange_3_listener($event) {
            return ctx.onCardErrorChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreditCardComponent_img_6_Template, 1, 1, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreditCardComponent_ng_template_7_Template, 4, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreditCardComponent_Template_input_change_11_listener($event) {
            return ctx.onMonthChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041C\u0435\u0441\u044F\u0446");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreditCardComponent_Template_input_change_17_listener($event) {
            return ctx.onYearChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0413\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreditCardComponent_ng_template_20_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u043A\u0430\u0440\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreditCardComponent_ng_template_26_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreditCardComponent_Template_input_input_36_listener($event) {
            return ctx.onCVVChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "CVV/CVC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CreditCardComponent_ng_template_39_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0422\u0440\u0438 \u0446\u0438\u0444\u0440\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u043D\u0430 \u043E\u0431\u043E\u0440\u043E\u0442\u0435 \u043A\u0430\u0440\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.creditCardSubGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltipTemplateRef", _r1)("showTooltip", ctx.creditCardSubGroup.value.creditCardNumber && ctx.cardError === ctx.CreditCardErrors.INVALID_NUMBER || ctx.cardError === ctx.CreditCardErrors.UNSUPPORTED_CARD);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeHolder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardType && ctx.cardType !== "unknown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltipTemplateRef", _r3)("showTooltip", ctx.expDateTouched && !ctx.isValidExpDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltipTemplateRef", _r5)("showTooltip", !ctx.creditCardSubGroup.controls.name.pristine && !ctx.creditCardSubGroup.value.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tooltipTemplateRef", _r7)("showTooltip", ctx.cvvTouched && !ctx.isValidCVV);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ngx_mask__WEBPACK_IMPORTED_MODULE_4__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _credit_card_number_directive__WEBPACK_IMPORTED_MODULE_2__["CreditCardNumberDirective"], _tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _digit_only_directive__WEBPACK_IMPORTED_MODULE_7__["DigitOnlyDirective"]],
      styles: [".credit-card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.credit-card-wrap[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.credit-card-wrap[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 280px;\n  padding: 18px 22px 26px 22px;\n  background: #f1f5f6;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.22);\n  border-radius: 5px;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .creditCardNumberClass[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 200px;\n  height: 35px;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   #creditCardNumber[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .card-type-img[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 8px;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .date-exp-wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .month-wrap[_ngcontent-%COMP%], .cc-main-info-wrap[_ngcontent-%COMP%]   .year-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .app-month[_ngcontent-%COMP%], .cc-main-info-wrap[_ngcontent-%COMP%]   .app-year[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .month-year-separator[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 12px;\n  margin-right: 12px;\n  color: #979797;\n  font-size: 1.5em;\n  padding-top: 7px;\n}\n.cc-main-info-wrap[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cvv-block-wrap[_ngcontent-%COMP%] {\n  z-index: 1;\n  background: #eaeaea;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding: 19px 0;\n  margin-left: -2px;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .magnet-strip[_ngcontent-%COMP%] {\n  margin-bottom: 21px;\n  background: #d8d8d8;\n  height: 41px;\n  width: 142px;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .cvv-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 84px;\n  margin: 0 auto;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .cvv-wrap[_ngcontent-%COMP%]   .app-cvv[_ngcontent-%COMP%] {\n  width: 86px;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .cvv-wrap[_ngcontent-%COMP%]   .stripes-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -27px;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .cvv-wrap[_ngcontent-%COMP%]   .stripes-wrap[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 27px;\n  background: #d8d8d8;\n  margin-top: 3px;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .cvv-wrap[_ngcontent-%COMP%]   .stripes-wrap[_ngcontent-%COMP%]   .stripe[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n.cvv-block-wrap[_ngcontent-%COMP%]   .cvv-underline[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #383838;\n  font-size: 10px;\n  font-weight: normal;\n  text-align: center;\n}\ninput.app[type=text][_ngcontent-%COMP%], input.app[type=search][_ngcontent-%COMP%], input.app[type=password][_ngcontent-%COMP%] {\n  padding: 13px 10px;\n  border: solid 1px gainsboro;\n  border-radius: 2px;\n  box-sizing: border-box;\n  line-height: 1;\n}\ninput.app[type=text][_ngcontent-%COMP%]:focus, input.app[type=text].ng-dirty.ng-valid[_ngcontent-%COMP%], input.app[type=text].ng-dirty.ng-invalid[_ngcontent-%COMP%], input.app[type=search][_ngcontent-%COMP%]:focus, input.app[type=search].ng-dirty.ng-valid[_ngcontent-%COMP%], input.app[type=search].ng-dirty.ng-invalid[_ngcontent-%COMP%], input.app[type=password][_ngcontent-%COMP%]:focus, input.app[type=password].ng-dirty.ng-valid[_ngcontent-%COMP%], input.app[type=password].ng-dirty.ng-invalid[_ngcontent-%COMP%] {\n  padding-top: 19px;\n  padding-bottom: 7px;\n}\n.floating-label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:invalid    ~ .floating-label[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  color: dimgray;\n  left: 11px;\n  top: 12px;\n  transition: 0.1s ease all;\n}\ninput[_ngcontent-%COMP%]:focus    ~ .floating-label[_ngcontent-%COMP%], input.ng-touched.ng-valid[_ngcontent-%COMP%]:not(:focus)    ~ .floating-label[_ngcontent-%COMP%], input.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(:focus)    ~ .floating-label[_ngcontent-%COMP%] {\n  top: 4px;\n  left: 10px;\n  font-size: 9px;\n  color: dimgray;\n  opacity: 1;\n}\n.ng-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 300px;\n  font-size: 14px;\n  text-align: center;\n  color: white;\n  padding: 10px 15px;\n  background: rgba(201, 8, 8, 0.8);\n  border-radius: 2px;\n  z-index: 1000;\n  opacity: 0;\n}\n.ng-tooltip[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  border-style: solid;\n}\n.ng-tooltip-top[_ngcontent-%COMP%]:after {\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-color: rgba(201, 8, 8, 0.8) transparent transparent transparent;\n}\n.ng-tooltip-bottom[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  margin-top: -5px;\n}\n.ng-tooltip-bottom[_ngcontent-%COMP%]:after {\n  margin-left: -65px;\n  bottom: 100%;\n  left: 50%;\n  border-width: 5px;\n  border-color: transparent transparent rgba(201, 8, 8, 0.8) transparent;\n}\n.ng-tooltip-left[_ngcontent-%COMP%]:after {\n  top: 50%;\n  left: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-color: transparent transparent transparent rgba(201, 8, 8, 0.8);\n}\n.ng-tooltip-right[_ngcontent-%COMP%]:after {\n  top: 50%;\n  right: 100%;\n  margin-top: -5px;\n  border-width: 5px;\n  border-color: transparent rgba(201, 8, 8, 0.8) transparent transparent;\n}\n.ng-tooltip-show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlZGl0LWNhcmQvQzpcXFByb2plY3RzXFxTb2Z0Q2x1YlxcbWRvbS1wYXltZW50L3NyY1xcYXBwXFxjcmVkaXQtY2FyZFxcY3JlZGl0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWRpdC1jYXJkL2NyZWRpdC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLGdCQUFBO0FDQ1o7QURJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRFI7QURJSTtFQUNJLFdBQUE7QUNGUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0hSO0FETUk7RUFDSSxhQUFBO0FDSlI7QURPSTs7RUFFSSxrQkFBQTtBQ0xSO0FEUUk7O0VBRUksV0FBQTtBQ05SO0FEU0k7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEVUk7RUFDSSxXQUFBO0FDUlI7QURZQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRFdJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVFI7QURZSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNWUjtBRFlRO0VBQ0ksV0FBQTtBQ1ZaO0FEYVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNYWjtBRGFZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNYaEI7QURhZ0I7RUFDSSxhQUFBO0FDWHBCO0FEaUJJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNmUjtBRG1CQTs7O0VBR0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDaEJKO0FEa0JJOzs7Ozs7O0VBR0ksaUJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEaUJBOztFQUVJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSx5QkFBQTtBQ2ZKO0FEa0JBOzs7RUFHSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ2ZKO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ25CSjtBRG1DQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDaENKO0FEbUNBO0VBRUksU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0VBQUE7QUNqQ0o7QURvQ0E7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0FDbENKO0FEb0NJO0VBQ0ksa0JBQUE7RUFFQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0VBQUE7QUNuQ1I7QUR1Q0E7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzRUFBQTtBQ3BDSjtBRHVDQTtFQUNJLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNFQUFBO0FDcENKO0FEdUNBO0VBQ0ksVUFBQTtBQ3BDSiIsImZpbGUiOiJzcmMvYXBwL2NyZWRpdC1jYXJkL2NyZWRpdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWRpdC1jYXJkLXdyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuZm9ybS1saW5lIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNjLW1haW4taW5mby13cmFwIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDIycHggMjZweCAyMnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MSwgMjQ1LCAyNDYpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLmNyZWRpdENhcmROdW1iZXJDbGFzcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWRpdENhcmROdW1iZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXR5cGUtaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRhdGUtZXhwLXdyYXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbnRoLXdyYXAsXHJcbiAgICAueWVhci13cmFwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1tb250aCxcclxuICAgIC5hcHAteWVhciB7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vbnRoLXllYXItc2VwYXJhdG9yIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTUxLCAxNTEsIDE1MSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHAtbmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdnYtYmxvY2std3JhcCB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNCwgMjM0LCAyMzQpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuXHJcbiAgICAubWFnbmV0LXN0cmlwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgICAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdnYtd3JhcCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICAuYXBwLWN2diB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0cmlwZXMtd3JhcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTI3cHg7XHJcblxyXG4gICAgICAgICAgICAuc3RyaXBlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jdnYtdW5kZXJsaW5lIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dC5hcHBbdHlwZT10ZXh0XSxcclxuaW5wdXQuYXBwW3R5cGU9c2VhcmNoXSxcclxuaW5wdXQuYXBwW3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIHBhZGRpbmc6IDEzcHggMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigyMjAsIDIyMCwgMjIwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgICAmOmZvY3VzLFxyXG4gICAgJi5uZy1kaXJ0eS5uZy12YWxpZCxcclxuICAgICYubmctZGlydHkubmctaW52YWxpZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE5cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5mbG9hdGluZy1sYWJlbCxcclxuaW5wdXQ6aW52YWxpZH4uZmxvYXRpbmctbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDEwNSwgMTA1LCAxMDUpO1xyXG4gICAgbGVmdDogMTFweDtcclxuICAgIHRvcDogMTJweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UgYWxsO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1c34uZmxvYXRpbmctbGFiZWwsXHJcbmlucHV0Lm5nLXRvdWNoZWQubmctdmFsaWQ6bm90KDpmb2N1cyl+LmZsb2F0aW5nLWxhYmVsLFxyXG5pbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQ6bm90KDpmb2N1cyl+LmZsb2F0aW5nLWxhYmVsIHtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgY29sb3I6IHJnYigxMDUsIDEwNSwgMTA1KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4vL1xyXG4vLyBuZy10b29sdGlwIFNUQVJUXHJcbi8vXHJcbi5uZy10b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMSwgOCwgOCwgMC44KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4vLyAubmctdG9vbHRpcC1yaWdodCB7XHJcbi8vICAgICAvLyB0b29sdGlwIGZvciBsZWZ0LXNpZGUgbWVudVxyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbi8vICAgICB6LWluZGV4OiAxMDAwO1xyXG4vLyAgICAgb3BhY2l0eTogMDtcclxuLy8gfVxyXG5cclxuLm5nLXRvb2x0aXA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5uZy10b29sdGlwLXRvcDphZnRlciB7XHJcbiAgICAvL2Fycm93c1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMDEsIDgsIDgsIDAuOCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uZy10b29sdGlwLWJvdHRvbSB7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNjVweDtcclxuXHJcbiAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMjAxLCA4LCA4LCAwLjgpIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmctdG9vbHRpcC1sZWZ0OmFmdGVyIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDVweDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgyMDEsIDgsIDgsIDAuOCk7XHJcbn1cclxuXHJcbi5uZy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHJnYmEoMjAxLCA4LCA4LCAwLjgpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmctdG9vbHRpcC1zaG93IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8vXHJcbi8vIG5nLXRvb2x0aXAgRU5EXHJcbi8vXHJcbiIsIi5jcmVkaXQtY2FyZC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVkaXQtY2FyZC13cmFwIC5mb3JtLWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY3JlZGl0LWNhcmQtd3JhcCAuZm9ybS1saW5lOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jYy1tYWluLWluZm8td3JhcCB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyODBweDtcbiAgcGFkZGluZzogMThweCAyMnB4IDI2cHggMjJweDtcbiAgYmFja2dyb3VuZDogI2YxZjVmNjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jYy1tYWluLWluZm8td3JhcCAuY3JlZGl0Q2FyZE51bWJlckNsYXNzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5jYy1tYWluLWluZm8td3JhcCAjY3JlZGl0Q2FyZE51bWJlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNjLW1haW4taW5mby13cmFwIC5jYXJkLXR5cGUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA4cHg7XG59XG4uY2MtbWFpbi1pbmZvLXdyYXAgLmRhdGUtZXhwLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNjLW1haW4taW5mby13cmFwIC5tb250aC13cmFwLFxuLmNjLW1haW4taW5mby13cmFwIC55ZWFyLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2MtbWFpbi1pbmZvLXdyYXAgLmFwcC1tb250aCxcbi5jYy1tYWluLWluZm8td3JhcCAuYXBwLXllYXIge1xuICB3aWR0aDogNzVweDtcbn1cbi5jYy1tYWluLWluZm8td3JhcCAubW9udGgteWVhci1zZXBhcmF0b3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nLXRvcDogN3B4O1xufVxuLmNjLW1haW4taW5mby13cmFwIC5hcHAtbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3Z2LWJsb2NrLXdyYXAge1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxOXB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuLmN2di1ibG9jay13cmFwIC5tYWduZXQtc3RyaXAge1xuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xuICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIHdpZHRoOiAxNDJweDtcbn1cbi5jdnYtYmxvY2std3JhcCAuY3Z2LXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4NHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jdnYtYmxvY2std3JhcCAuY3Z2LXdyYXAgLmFwcC1jdnYge1xuICB3aWR0aDogODZweDtcbn1cbi5jdnYtYmxvY2std3JhcCAuY3Z2LXdyYXAgLnN0cmlwZXMtd3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTI3cHg7XG59XG4uY3Z2LWJsb2NrLXdyYXAgLmN2di13cmFwIC5zdHJpcGVzLXdyYXAgLnN0cmlwZSB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogMjdweDtcbiAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmN2di1ibG9jay13cmFwIC5jdnYtd3JhcCAuc3RyaXBlcy13cmFwIC5zdHJpcGU6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY3Z2LWJsb2NrLXdyYXAgLmN2di11bmRlcmxpbmUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogIzM4MzgzODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0LmFwcFt0eXBlPXRleHRdLFxuaW5wdXQuYXBwW3R5cGU9c2VhcmNoXSxcbmlucHV0LmFwcFt0eXBlPXBhc3N3b3JkXSB7XG4gIHBhZGRpbmc6IDEzcHggMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ2FpbnNib3JvO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuaW5wdXQuYXBwW3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0LmFwcFt0eXBlPXRleHRdLm5nLWRpcnR5Lm5nLXZhbGlkLCBpbnB1dC5hcHBbdHlwZT10ZXh0XS5uZy1kaXJ0eS5uZy1pbnZhbGlkLFxuaW5wdXQuYXBwW3R5cGU9c2VhcmNoXTpmb2N1cyxcbmlucHV0LmFwcFt0eXBlPXNlYXJjaF0ubmctZGlydHkubmctdmFsaWQsXG5pbnB1dC5hcHBbdHlwZT1zZWFyY2hdLm5nLWRpcnR5Lm5nLWludmFsaWQsXG5pbnB1dC5hcHBbdHlwZT1wYXNzd29yZF06Zm9jdXMsXG5pbnB1dC5hcHBbdHlwZT1wYXNzd29yZF0ubmctZGlydHkubmctdmFsaWQsXG5pbnB1dC5hcHBbdHlwZT1wYXNzd29yZF0ubmctZGlydHkubmctaW52YWxpZCB7XG4gIHBhZGRpbmctdG9wOiAxOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4uZmxvYXRpbmctbGFiZWwsXG5pbnB1dDppbnZhbGlkIH4gLmZsb2F0aW5nLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6IGRpbWdyYXk7XG4gIGxlZnQ6IDExcHg7XG4gIHRvcDogMTJweDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlIGFsbDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiAuZmxvYXRpbmctbGFiZWwsXG5pbnB1dC5uZy10b3VjaGVkLm5nLXZhbGlkOm5vdCg6Zm9jdXMpIH4gLmZsb2F0aW5nLWxhYmVsLFxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkOm5vdCg6Zm9jdXMpIH4gLmZsb2F0aW5nLWxhYmVsIHtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogZGltZ3JheTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5nLXRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDEsIDgsIDgsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgei1pbmRleDogMTAwMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm5nLXRvb2x0aXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5uZy10b29sdGlwLXRvcDphZnRlciB7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMDEsIDgsIDgsIDAuOCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5uZy10b29sdGlwLWJvdHRvbSB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLm5nLXRvb2x0aXAtYm90dG9tOmFmdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC02NXB4O1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgyMDEsIDgsIDgsIDAuOCkgdHJhbnNwYXJlbnQ7XG59XG5cbi5uZy10b29sdGlwLWxlZnQ6YWZ0ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgyMDEsIDgsIDgsIDAuOCk7XG59XG5cbi5uZy10b29sdGlwLXJpZ2h0OmFmdGVyIHtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCByZ2JhKDIwMSwgOCwgOCwgMC44KSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLm5nLXRvb2x0aXAtc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreditCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          selector: "app-credit-card",
          templateUrl: "./credit-card.component.html",
          styleUrls: ["./credit-card.component.scss"]
        }]
      }], function () {
        return [];
      }, {
        placeHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        creditCardNumberInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_credit_card_number_directive__WEBPACK_IMPORTED_MODULE_2__["CreditCardNumberDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/digit-only.directive.ts":
  /*!*****************************************!*\
    !*** ./src/app/digit-only.directive.ts ***!
    \*****************************************/

  /*! exports provided: DigitOnlyDirective */

  /***/
  function srcAppDigitOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitOnlyDirective", function () {
      return DigitOnlyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DigitOnlyDirective = /*#__PURE__*/function () {
      function DigitOnlyDirective(el) {
        _classCallCheck(this, DigitOnlyDirective);

        this.el = el;
        this.navigationKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "Home", "End", "ArrowLeft", "ArrowRight", "Clear", "Copy", "Paste"];
        this.min = -Infinity;
        this.max = Infinity;
        this.inputElement = el.nativeElement;
      }

      _createClass(DigitOnlyDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.pattern) {
            this.regex = this.pattern ? RegExp(this.pattern) : null;
          }

          if (changes.min) {
            var maybeMin = Number(this.min);
            this.min = isNaN(maybeMin) ? -Infinity : maybeMin;
          }

          if (changes.max) {
            var maybeMax = Number(this.max);
            this.max = isNaN(maybeMax) ? Infinity : maybeMax;
          }
        }
      }, {
        key: "onKeyDown",
        value: function onKeyDown(e) {
          if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
          e.key === "a" && e.ctrlKey === true || // Allow: Ctrl+A
          e.key === "c" && e.ctrlKey === true || // Allow: Ctrl+C
          e.key === "v" && e.ctrlKey === true || // Allow: Ctrl+V
          e.key === "x" && e.ctrlKey === true || // Allow: Ctrl+X
          e.key === "a" && e.metaKey === true || // Allow: Cmd+A (Mac)
          e.key === "c" && e.metaKey === true || // Allow: Cmd+C (Mac)
          e.key === "v" && e.metaKey === true || // Allow: Cmd+V (Mac)
          e.key === "x" && e.metaKey === true // Allow: Cmd+X (Mac)
          // || (this.decimal && e.key === this.decimalSeparator && !this.hasDecimalPoint) // Allow: only one decimal point
          ) {
              // let it happen, don't do anything
              return;
            } // Ensure that it is a number and stop the keypress


          if (e.key === " " || isNaN(Number(e.key))) {
            e.preventDefault();
          } // check the input pattern RegExp


          if (this.regex) {
            var newForecastValue = this.forecastValue(e.key);

            if (!this.regex.test(newForecastValue)) {
              e.preventDefault();
            }
          }

          var newValue = Number(this.forecastValue(e.key));

          if (newValue > this.max || newValue < this.min) {
            e.preventDefault();
          }
        }
      }, {
        key: "forecastValue",
        value: function forecastValue(key) {
          var selectionStart = this.inputElement.selectionStart;
          var selectionEnd = this.inputElement.selectionEnd;
          var oldValue = this.inputElement.value;
          var selection = oldValue.substring(selectionStart, selectionEnd);
          return selection ? oldValue.replace(selection, key) : oldValue.substring(0, selectionStart) + key + oldValue.substring(selectionStart);
        }
      }]);

      return DigitOnlyDirective;
    }();

    DigitOnlyDirective.ɵfac = function DigitOnlyDirective_Factory(t) {
      return new (t || DigitOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    DigitOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DigitOnlyDirective,
      selectors: [["", "appDigitOnly", ""]],
      hostBindings: function DigitOnlyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DigitOnlyDirective_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        min: "min",
        max: "max",
        pattern: "pattern"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DigitOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[appDigitOnly]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["keydown", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/domain.ts":
  /*!***************************!*\
    !*** ./src/app/domain.ts ***!
    \***************************/

  /*! exports provided: CreditCardTypes, CREDIT_CARD_ERRORS, CreditCardGroupComponents, creditCards, months, years */

  /***/
  function srcAppDomainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditCardTypes", function () {
      return CreditCardTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREDIT_CARD_ERRORS", function () {
      return CREDIT_CARD_ERRORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditCardGroupComponents", function () {
      return CreditCardGroupComponents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "creditCards", function () {
      return creditCards;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "months", function () {
      return months;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "years", function () {
      return years;
    });

    var CreditCardTypes;

    (function (CreditCardTypes) {
      CreditCardTypes["MASTERCARD"] = "mastercard";
      CreditCardTypes["VISA"] = "visa";
      CreditCardTypes["UNKNOWN"] = "unknown";
    })(CreditCardTypes || (CreditCardTypes = {}));

    var CREDIT_CARD_ERRORS;

    (function (CREDIT_CARD_ERRORS) {
      CREDIT_CARD_ERRORS["INVALID_LENGTH"] = "invalid_length";
      CREDIT_CARD_ERRORS["UNSUPPORTED_CARD"] = "unsupported card";
      CREDIT_CARD_ERRORS["INVALID_NUMBER"] = "invalid_number";
      CREDIT_CARD_ERRORS["INVALID_DATE"] = "invalid_date";
      CREDIT_CARD_ERRORS["INVALID_CCV"] = "invalid_ccv";
      CREDIT_CARD_ERRORS["NONE"] = "none";
    })(CREDIT_CARD_ERRORS || (CREDIT_CARD_ERRORS = {}));

    var CreditCardGroupComponents;

    (function (CreditCardGroupComponents) {
      CreditCardGroupComponents["CREDIT_CARD_NUMBER"] = "creditCardNumber";
      CreditCardGroupComponents["EXPIRATION_MONTH"] = "expirationMonth";
      CreditCardGroupComponents["EXPIRATION_YEAR"] = "expirationYear";
      CreditCardGroupComponents["NAME"] = "name";
      CreditCardGroupComponents["CVV"] = "cvv";
    })(CreditCardGroupComponents || (CreditCardGroupComponents = {}));

    var creditCards = {
      mastercard: {
        name: "Master Card",
        length: 16,
        image: "/assets/images/ms_mini.png",
        cvvDigits: 3,
        pattern: /^5[1-5]/
      },
      visa: {
        name: "Visa",
        length: 16,
        image: "/assets/images/visa_mini.png",
        cvvDigits: 3,
        pattern: /^4/
      },
      unknown: {
        name: "",
        length: 0,
        image: "/assets/cc-image/unknown.png",
        cvvDigits: 0,
        pattern: null
      }
    };
    var months = [{
      name: "Jan-1",
      value: "1"
    }, {
      name: "Feb-2",
      value: "2"
    }, {
      name: "Mar-3",
      value: "3"
    }, {
      name: "Apr-4",
      value: "4"
    }, {
      name: "May-5",
      value: "5"
    }, {
      name: "Jun-6",
      value: "6"
    }, {
      name: "Jul-7",
      value: "7"
    }, {
      name: "Aug-8",
      value: "8"
    }, {
      name: "Sep-9",
      value: "9"
    }, {
      name: "Oct-10",
      value: "10"
    }, {
      name: "Nov-11",
      value: "11"
    }, {
      name: "Dec-12",
      value: "12"
    }];
    var years = ["2020", "2021", "2022", "2023", "2024"];
    /***/
  },

  /***/
  "./src/app/lib.ts":
  /*!************************!*\
    !*** ./src/app/lib.ts ***!
    \************************/

  /*! exports provided: inEnum, getCardType, isCCLengthValid, isValidLuhn */

  /***/
  function srcAppLibTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "inEnum", function () {
      return inEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCardType", function () {
      return getCardType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isCCLengthValid", function () {
      return isCCLengthValid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isValidLuhn", function () {
      return isValidLuhn;
    });
    /* harmony import */


    var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./domain */
    "./src/app/domain.ts");

    var inEnum = function inEnum(value, enumeration) {
      if (value === undefined || value == null || value === "") {
        return false;
      }

      var keys = Object.keys(enumeration);
      var n = keys.length;
      var i;

      for (i = 0; i < n; ++i) {
        if (value === enumeration[keys[i]]) {
          return true;
        }
      }

      return false;
    };

    var getCardType = function getCardType(cardNumber) {
      // remove spaces/dashes from card number
      var creditCardNumber = cardNumber.replace(/[ -]/g, ""); // loop over types and test each pattern

      var types = Object.values(_domain__WEBPACK_IMPORTED_MODULE_0__["CreditCardTypes"]);

      for (var _i = 0, _types = types; _i < _types.length; _i++) {
        var creditCardType = _types[_i];
        // const type = creditCardType as CreditCardTypes;
        var data = _domain__WEBPACK_IMPORTED_MODULE_0__["creditCards"][creditCardType];
        var pattern = data.pattern;

        if (pattern !== null && creditCardNumber.match(pattern)) {
          return creditCardType;
        }
      }

      return _domain__WEBPACK_IMPORTED_MODULE_0__["CreditCardTypes"].UNKNOWN;
    };

    var isCCLengthValid = function isCCLengthValid(cardNumber, cardTypeIdentifier) {
      if (!inEnum(cardTypeIdentifier, _domain__WEBPACK_IMPORTED_MODULE_0__["CreditCardTypes"])) {
        return false;
      }

      var data = _domain__WEBPACK_IMPORTED_MODULE_0__["creditCards"][cardTypeIdentifier];
      var digits = cardNumber.replace(/ /g, "").length;

      if (data.minLength !== undefined && data.maxLength !== undefined) {
        return digits >= data.minLength && digits <= data.maxLength;
      }

      return digits === data.length;
    };

    var isValidLuhn = function isValidLuhn(cardNumber) {
      // Classic Luhn validation
      var ccNumbers = cardNumber.split("").reverse().map(function (val) {
        return +val;
      });
      var len = ccNumbers.length;
      var n = 0;
      var sum = 0;
      var j = 0;
      var digit;

      while (j < len) {
        digit = ccNumbers[n];
        digit = +digit;

        if (n % 2) {
          digit *= 2;
          sum += digit < 10 ? digit : digit - 9;
        } else {
          sum += digit;
        }

        n = ++j;
      }

      return sum % 10 === 0;
    };
    /***/

  },

  /***/
  "./src/app/time.pipe.ts":
  /*!******************************!*\
    !*** ./src/app/time.pipe.ts ***!
    \******************************/

  /*! exports provided: TimePipe */

  /***/
  function srcAppTimePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimePipe", function () {
      return TimePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TimePipe = /*#__PURE__*/function () {
      function TimePipe() {
        _classCallCheck(this, TimePipe);
      }

      _createClass(TimePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return "".concat(Math.floor(value / 60), ":").concat(("0" + value % 60).slice(-2));
        }
      }]);

      return TimePipe;
    }();

    TimePipe.ɵfac = function TimePipe_Factory(t) {
      return new (t || TimePipe)();
    };

    TimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "time",
      type: TimePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "time"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tooltip.directive.ts":
  /*!**************************************!*\
    !*** ./src/app/tooltip.directive.ts ***!
    \**************************************/

  /*! exports provided: TooltipDirective */

  /***/
  function srcAppTooltipDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return TooltipDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TooltipDirective = /*#__PURE__*/function () {
      function TooltipDirective(el, renderer, vcr) {
        _classCallCheck(this, TooltipDirective);

        this.el = el;
        this.renderer = renderer;
        this.vcr = vcr;
        this.offset = 10;
      }

      _createClass(TooltipDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.showTooltip) {
            if (this.showTooltip && this.needed() && !this.tooltip) {
              this.show();
            } else if (this.tooltip) {
              this.hide();
            }
          }
        }
      }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {// if (this.needed() && !this.tooltip) {
          // 	this.show();
          // }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {// if (!this.showTooltip && this.tooltip) {
          // 	this.hide();
          // }
        }
      }, {
        key: "show",
        value: function show() {
          this.create();
          this.setPosition();
          this.renderer.addClass(this.tooltip, "ng-tooltip-show");
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this = this;

          this.renderer.removeClass(this.tooltip, "ng-tooltip-show");
          window.setTimeout(function () {
            _this.renderer.removeChild(document.body, _this.tooltip);

            _this.tooltip = null;
          }, +this.delay);
        }
      }, {
        key: "create",
        value: function create() {
          this.tooltip = this.renderer.createElement("div");
          var child = this.tooltipTemplateRef ? this.vcr.createEmbeddedView(this.tooltipTemplateRef).rootNodes[0] : this.renderer.createText(this.tooltipTitle);
          this.renderer.appendChild(this.tooltip, child);
          this.renderer.appendChild(document.body, this.tooltip);
          this.renderer.addClass(this.tooltip, "ng-tooltip");
          this.renderer.addClass(this.tooltip, "ng-tooltip-".concat(this.placement));
          this.renderer.setStyle(this.tooltip, "-webkit-transition", "opacity ".concat(this.delay, "ms"));
          this.renderer.setStyle(this.tooltip, "-moz-transition", "opacity ".concat(this.delay, "ms"));
          this.renderer.setStyle(this.tooltip, "-o-transition", "opacity ".concat(this.delay, "ms"));
          this.renderer.setStyle(this.tooltip, "transition", "opacity ".concat(this.delay, "ms"));
        }
      }, {
        key: "setPosition",
        value: function setPosition() {
          var hostPos = this.el.nativeElement.getBoundingClientRect();
          var tooltipPos = this.tooltip.getBoundingClientRect();
          var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
          var top;
          var left;

          if (this.placement === "top") {
            top = hostPos.top - tooltipPos.height - this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
          }

          if (this.placement === "bottom") {
            top = hostPos.bottom + this.offset;
            left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
          }

          if (this.placement === "left") {
            top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
            left = hostPos.left - tooltipPos.width - this.offset;
          }

          if (this.placement === "right") {
            top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
            left = hostPos.right + this.offset;
          }

          this.renderer.setStyle(this.tooltip, "top", "".concat(top + scrollPos, "px"));
          this.renderer.setStyle(this.tooltip, "left", "".concat(left, "px"));
        }
      }, {
        key: "needed",
        value: function needed() {
          return this.tooltipTemplateRef || this.tooltipTitle;
        }
      }]);

      return TooltipDirective;
    }();

    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
      return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "appTooltip", ""]],
      hostBindings: function TooltipDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function TooltipDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        tooltipTitle: "tooltipTitle",
        placement: "placement",
        delay: "delay",
        tooltipTemplateRef: "tooltipTemplateRef",
        showTooltip: "showTooltip"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[appTooltip]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, {
        tooltipTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        delay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tooltipTemplateRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["mouseenter"]
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["mouseleave"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\SoftClub\mdom-payment\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map