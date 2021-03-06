(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/george/Angular_test/vcPoc/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            this.router.navigateByUrl('register');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 54,
        vars: 0,
        consts: [[1, "hold-transition", "register-page"], [1, "register-box"], [1, "register-logo"], ["href", "../../index2.html"], [1, "card"], [1, "card-body", "register-card-body"], [1, "login-box-msg"], ["action", "../../index.html", "method", "post"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Full name", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "email", "placeholder", "Email", 1, "form-control"], [1, "fas", "fa-envelope"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], ["type", "password", "placeholder", "Retype password", 1, "form-control"], [1, "row"], [1, "col-8"], [1, "icheck-primary"], ["type", "checkbox", "id", "agreeTerms", "name", "terms", "value", "agree"], ["for", "agreeTerms"], ["href", "#"], [1, "col-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "social-auth-links", "text-center"], ["href", "#", 1, "btn", "btn-block", "btn-primary"], [1, "fab", "fa-facebook", "mr-2"], ["href", "#", 1, "btn", "btn-block", "btn-danger"], [1, "fab", "fa-google-plus", "mr-2"], ["href", "login.html", 1, "text-center"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LTE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register a new membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " I agree to the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Register ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "- OR -");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Sign up using Facebook ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign up using Google+ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "I already have a membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 38,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0", "text-dark"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "row", 2, "margin-left", "50px"], [1, "col-110"], [1, "card"], [1, "card-header", "d-flex", "p-0"], [1, "card-title", "p-3"], [1, "nav", "nav-pills", "ml-auto", "p-2"], [1, "nav-item"], ["href", "#tab_1", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#tab_2", "data-toggle", "tab", 1, "nav-link"], ["href", "#tab_3", "data-toggle", "tab", 1, "nav-link"], [1, "card-body"], [1, "tab-content"], ["id", "tab_1", 1, "tab-pane", "active"], ["id", "tab_2", 1, "tab-pane"], ["id", "tab_3", 1, "tab-pane"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome AboutUs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dashboard v3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tab 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tab 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Tab 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " This is about page. Tab 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "This is about page. Tab 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "This is about page. Tab 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 652,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0", "text-dark"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-12", "col-sm-6", "col-md-3"], [1, "info-box"], [1, "info-box-icon", "bg-info", "elevation-1"], [1, "fas", "fa-cog"], [1, "info-box-content"], [1, "info-box-text"], [1, "info-box-number"], [1, "info-box", "mb-3"], [1, "info-box-icon", "bg-danger", "elevation-1"], [1, "fas", "fa-thumbs-up"], [1, "clearfix", "hidden-md-up"], [1, "info-box-icon", "bg-success", "elevation-1"], [1, "fas", "fa-shopping-cart"], [1, "info-box-icon", "bg-warning", "elevation-1"], [1, "fas", "fa-users"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-card-widget", "collapse", 1, "btn", "btn-tool"], [1, "fas", "fa-minus"], [1, "btn-group"], ["type", "button", "data-toggle", "dropdown", 1, "btn", "btn-tool", "dropdown-toggle"], [1, "fas", "fa-wrench"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["type", "button", "data-card-widget", "remove", 1, "btn", "btn-tool"], [1, "fas", "fa-times"], [1, "card-body"], [1, "col-md-8"], [1, "text-center"], [1, "chart"], ["id", "salesChart", "height", "180", 2, "height", "180px"], [1, "col-md-4"], [1, "progress-group"], [1, "float-right"], [1, "progress", "progress-sm"], [1, "progress-bar", "bg-primary", 2, "width", "80%"], [1, "progress-bar", "bg-danger", 2, "width", "75%"], [1, "progress-text"], [1, "progress-bar", "bg-success", 2, "width", "60%"], [1, "progress-bar", "bg-warning", 2, "width", "50%"], [1, "card-footer"], [1, "col-sm-3", "col-6"], [1, "description-block", "border-right"], [1, "description-percentage", "text-success"], [1, "fas", "fa-caret-up"], [1, "description-header"], [1, "description-text"], [1, "description-percentage", "text-warning"], [1, "fas", "fa-caret-left"], [1, "description-block"], [1, "description-percentage", "text-danger"], [1, "fas", "fa-caret-down"], [1, "card-body", "p-0"], [1, "d-md-flex"], [1, "p-1", "flex-fill", 2, "overflow", "hidden"], ["id", "world-map-markers", 2, "height", "325px", "overflow", "hidden"], [1, "map"], [1, "card-pane-right", "bg-success", "pt-2", "pb-2", "pl-4", "pr-4"], [1, "description-block", "mb-4"], ["data-color", "#fff", 1, "sparkbar", "pad"], [1, "col-md-6"], [1, "card", "direct-chat", "direct-chat-warning"], ["data-toggle", "tooltip", "title", "3 New Messages", 1, "badge", "badge-warning"], ["type", "button", "data-toggle", "tooltip", "title", "Contacts", "data-widget", "chat-pane-toggle", 1, "btn", "btn-tool"], [1, "fas", "fa-comments"], [1, "direct-chat-messages"], [1, "direct-chat-msg"], [1, "direct-chat-infos", "clearfix"], [1, "direct-chat-name", "float-left"], [1, "direct-chat-timestamp", "float-right"], ["src", "assets/img/user1-128x128.jpg", "alt", "message user image", 1, "direct-chat-img"], [1, "direct-chat-text"], [1, "direct-chat-msg", "right"], [1, "direct-chat-name", "float-right"], [1, "direct-chat-timestamp", "float-left"], ["src", "assets/img/user3-128x128.jpg", "alt", "message user image", 1, "direct-chat-img"], [1, "direct-chat-contacts"], [1, "contacts-list"], ["src", "assets/img/user1-128x128.jpg", 1, "contacts-list-img"], [1, "contacts-list-info"], [1, "contacts-list-name"], [1, "contacts-list-date", "float-right"], [1, "contacts-list-msg"], ["src", "assets/img/user7-128x128.jpg", 1, "contacts-list-img"], ["src", "assets/img/user3-128x128.jpg", 1, "contacts-list-img"], ["src", "assets/img/user5-128x128.jpg", 1, "contacts-list-img"], ["src", "assets/img/user6-128x128.jpg", 1, "contacts-list-img"], ["src", "assets/img/user8-128x128.jpg", 1, "contacts-list-img"], ["action", "#", "method", "post"], [1, "input-group"], ["type", "text", "name", "message", "placeholder", "Type Message ...", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-warning"], [1, "badge", "badge-danger"], [1, "users-list", "clearfix"], ["src", "assets/img/user1-128x128.jpg", "alt", "User Image"], ["href", "#", 1, "users-list-name"], [1, "users-list-date"], ["src", "assets/img/user8-128x128.jpg", "alt", "User Image"], ["src", "assets/img/user7-128x128.jpg", "alt", "User Image"], ["src", "assets/img/user6-128x128.jpg", "alt", "User Image"], ["src", "assets/img/user2-160x160.jpg", "alt", "User Image"], ["src", "assets/img/user5-128x128.jpg", "alt", "User Image"], ["src", "assets/img/user4-128x128.jpg", "alt", "User Image"], ["src", "assets/img/user3-128x128.jpg", "alt", "User Image"], [1, "card-footer", "text-center"], ["href", "javascript::"], [1, "card-header", "border-transparent"], [1, "table-responsive"], [1, "table", "m-0"], ["href", "pages/examples/invoice.html"], [1, "badge", "badge-success"], ["data-color", "#00a65a", "data-height", "20", 1, "sparkbar"], [1, "badge", "badge-warning"], ["data-color", "#f39c12", "data-height", "20", 1, "sparkbar"], ["data-color", "#f56954", "data-height", "20", 1, "sparkbar"], [1, "badge", "badge-info"], ["data-color", "#00c0ef", "data-height", "20", 1, "sparkbar"], [1, "card-footer", "clearfix"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-info", "float-left"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-secondary", "float-right"], [1, "info-box", "mb-3", "bg-warning"], [1, "info-box-icon"], [1, "fas", "fa-tag"], [1, "info-box", "mb-3", "bg-success"], [1, "far", "fa-heart"], [1, "info-box", "mb-3", "bg-danger"], [1, "fas", "fa-cloud-download-alt"], [1, "info-box", "mb-3", "bg-info"], [1, "far", "fa-comment"], [1, "chart-responsive"], ["id", "pieChart", "height", "150"], [1, "chart-legend", "clearfix"], [1, "far", "fa-circle", "text-danger"], [1, "far", "fa-circle", "text-success"], [1, "far", "fa-circle", "text-warning"], [1, "far", "fa-circle", "text-info"], [1, "far", "fa-circle", "text-primary"], [1, "far", "fa-circle", "text-secondary"], [1, "card-footer", "bg-white", "p-0"], [1, "nav", "nav-pills", "flex-column"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "float-right", "text-danger"], [1, "fas", "fa-arrow-down", "text-sm"], [1, "float-right", "text-success"], [1, "fas", "fa-arrow-up", "text-sm"], [1, "float-right", "text-warning"], [1, "fas", "fa-arrow-left", "text-sm"], [1, "products-list", "product-list-in-card", "pl-2", "pr-2"], [1, "item"], [1, "product-img"], ["src", "assets/img/default-150x150.png", "alt", "Product Image", 1, "img-size-50"], [1, "product-info"], ["href", "javascript:void(0)", 1, "product-title"], [1, "badge", "badge-warning", "float-right"], [1, "product-description"], [1, "badge", "badge-info", "float-right"], [1, "badge", "badge-danger", "float-right"], [1, "badge", "badge-success", "float-right"], ["href", "javascript:void(0)", 1, "uppercase"], [1, "main-footer"], ["href", "https://punsarn.asia/"], [1, "float-right", "d-none", "d-sm-inline-block"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dashboard v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dashboard v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CPU Traffic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 10 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Likes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "41,410");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "760");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "New Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Monthly Recap Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Separated link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sales: 1 Jan, 2014 - 30 Jul, 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "canvas", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Goal Completion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Add Products to Cart ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "160");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "/200");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Complete Purchase ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "310");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "/400");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Visit Premium Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "480");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "/800");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Send Inquiries ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "250");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "/500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " 17%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "$35,210.43");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "TOTAL REVENUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " 0%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "$10,390.90");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "TOTAL COST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " 20%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "$24,813.53");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "TOTAL PROFIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " 18%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "1200");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "GOAL COMPLETIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "US-Visitors Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "90,70,90,70,75,80,70");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "8390");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Visits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "90,50,90,70,61,83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "30%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Referrals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "90,50,90,70,61,83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h5", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Organic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Direct Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "button", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Alexander Pierce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "23 Jan 2:00 pm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Is this template really for free? That's unbelievable! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Sarah Bullock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "23 Jan 2:05 pm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " You better believe it! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Alexander Pierce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "23 Jan 5:37 pm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, " Working with AdminLTE on a great new app! Wanna join? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Sarah Bullock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "23 Jan 6:10 pm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " I would love to. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "ul", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "img", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Count Dracula ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "small", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "2/28/2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "How have you been? I was...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " Sarah Doe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "small", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "2/23/2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "I will be waiting for...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Nadia Jolie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "small", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "2/20/2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "I'll call you back at...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "img", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " Nora S. Vans ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "small", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "2/10/2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Where is your new...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " John K. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "small", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "1/27/2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Can I take a look at...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "img", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Kenneth M. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "small", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "1/4/2015");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Never mind I found...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "form", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "input", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "button", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Send");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Latest Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "8 New Members");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "ul", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "img", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Alexander Pierce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "img", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Norman");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Yesterday");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Jane");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "12 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "img", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "John");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "12 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "img", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Alexander");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "13 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "img", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Sarah");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "14 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "img", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Nora");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "15 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "img", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Nadia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "span", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "15 Jan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "a", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "View All Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Latest Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "table", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Order ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Popularity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "OR9842");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Call of Duty IV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "span", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Shipped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "90,80,90,-70,61,-83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "OR1848");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Samsung Smart TV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "span", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "90,80,-90,70,61,-83,68");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "OR7429");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "iPhone 6 Plus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "90,-80,90,70,-61,83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "OR7429");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "Samsung Smart TV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "span", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Processing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "90,80,-90,70,-61,83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "OR1848");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Samsung Smart TV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "span", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "90,80,-90,70,61,-83,68");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "OR7429");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "iPhone 6 Plus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "span", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "div", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "90,-80,90,70,-61,83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "OR9842");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Call of Duty IV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "span", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "Shipped");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "90,80,90,-70,61,-83,63");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "a", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Place New Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "a", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "View All Orders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "span", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "i", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Inventory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "5,200");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "div", 140);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "span", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](511, "i", 141);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "Mentions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "92,050");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 142);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "span", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "i", 143);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "Downloads");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "114,381");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 144);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "span", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "i", 145);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Direct Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "163,921");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "Browser Usage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 146);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](546, "canvas", 147);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "ul", 148);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](550, "i", 149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, " Chrome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](553, "i", 150);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, " IE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "i", 151);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, " FireFox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](559, "i", 152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, " Safari");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "i", 153);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, " Opera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](565, "i", 154);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, " Navigator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "div", 155);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "ul", 156);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "li", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "a", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, " United States of America ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "span", 159);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](573, "i", 160);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, " 12%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "li", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "a", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, " India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span", 161);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "i", 162);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, " 4% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "li", 157);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "a", 158);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, " China ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "span", 163);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "i", 164);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " 0% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "h3", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "Recently Added Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "button", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "ul", 165);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "li", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "div", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](600, "img", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "div", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "a", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Samsung TV ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "span", 171);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "$1800");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "span", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, " Samsung 32\" 1080p 60Hz LED Smart HDTV. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "li", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "img", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "div", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "a", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "Bicycle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "span", 173);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "$700");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "span", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, " 26\" Mongoose Dolomite Men's 7-speed, Navy Blue. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "li", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](620, "img", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "a", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " Xbox One ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "span", 174);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, " $350 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "span", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, " Xbox One Console Bundle with Halo Master Chief Collection. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "li", 166);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](630, "img", 168);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "div", 169);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "a", 170);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "PlayStation 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "span", 175);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "$399");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "span", 172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, " PlayStation 4 500GB Console (PS4) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "div", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "a", 176);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "View All Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "footer", 177);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Copyright \xA9 2021-2031 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "a", 178);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "Pansarn Asia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, " All rights reserved. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 179);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Version");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, " 1.0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'vcPoc';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var appRoutes = [{
        path: 'dashboard',
        component: _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        children: [{
          path: 'home',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        }, {
          path: 'about',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
        }]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
      }];

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "redirectToHome",
          value: function redirectToHome() {
            this.router.navigateByUrl('dashboard/home');
          }
        }, {
          key: "redirectToAbout",
          value: function redirectToAbout() {
            this.router.navigateByUrl('dashboard/about');
          }
        }, {
          key: "logMeOut",
          value: function logMeOut() {
            this.router.navigateByUrl('login');
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 524,
        vars: 0,
        consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light"], [1, "navbar-nav"], [1, "nav-item"], ["data-widget", "pushmenu", "href", "#", 1, "nav-link"], [1, "fas", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "form-inline", "ml-3"], [1, "input-group", "input-group-sm"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-navbar"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-navbar"], [1, "fas", "fa-search"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "href", "#", 1, "nav-link"], [1, "far", "fa-comments"], [1, "badge", "badge-danger", "navbar-badge"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], [1, "media"], ["src", "assets/img/user1-128x128.jpg", "alt", "User Avatar", 1, "img-size-50", "mr-3", "img-circle"], [1, "media-body"], [1, "dropdown-item-title"], [1, "float-right", "text-sm", "text-danger"], [1, "fas", "fa-star"], [1, "text-sm"], [1, "text-sm", "text-muted"], [1, "far", "fa-clock", "mr-1"], [1, "dropdown-divider"], ["src", "assets/img/user8-128x128.jpg", "alt", "User Avatar", 1, "img-size-50", "img-circle", "mr-3"], [1, "float-right", "text-sm", "text-muted"], ["src", "assets/img/user3-128x128.jpg", "alt", "User Avatar", 1, "img-size-50", "img-circle", "mr-3"], [1, "float-right", "text-sm", "text-warning"], ["href", "#", 1, "dropdown-item", "dropdown-footer"], [1, "far", "fa-bell"], [1, "badge", "badge-warning", "navbar-badge"], [1, "dropdown-item", "dropdown-header"], [1, "fas", "fa-envelope", "mr-2"], [1, "float-right", "text-muted", "text-sm"], [1, "fas", "fa-users", "mr-2"], [1, "fas", "fa-file", "mr-2"], ["data-widget", "control-sidebar", "data-slide", "true", "href", "#", 1, "nav-link"], [1, "fas", "fa-th-large"], [1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], ["href", "index3.html", 1, "brand-link"], ["src", "assets/img/AdminLTELogo.png", "alt", "AdminLTE Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", ".8"], [1, "brand-text", "font-weight-light"], [1, "sidebar"], [1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "image"], ["src", "assets/img/user2-160x160.jpg", "alt", "User Image", 1, "img-circle", "elevation-2"], [1, "info"], ["href", "#", 1, "d-block"], [1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [1, "nav-item", "has-treeview", "menu-open"], ["href", "#", 1, "nav-link", "active"], [1, "nav-icon", "fas", "fa-tachometer-alt"], [1, "right", "fas", "fa-angle-left"], [1, "nav", "nav-treeview"], ["href", "./index.html", 1, "nav-link"], [1, "far", "fa-circle", "nav-icon"], ["href", "./index2.html", 1, "nav-link", "active"], ["href", "./index3.html", 1, "nav-link"], ["href", "pages/widgets.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-th"], [1, "right", "badge", "badge-danger"], [1, "nav-item", "has-treeview"], ["href", "#", 1, "nav-link"], [1, "nav-icon", "fas", "fa-copy"], [1, "fas", "fa-angle-left", "right"], [1, "badge", "badge-info", "right"], ["href", "pages/layout/top-nav.html", 1, "nav-link"], ["href", "pages/layout/boxed.html", 1, "nav-link"], ["href", "pages/layout/fixed-sidebar.html", 1, "nav-link"], ["href", "pages/layout/fixed-topnav.html", 1, "nav-link"], ["href", "pages/layout/fixed-footer.html", 1, "nav-link"], ["href", "pages/layout/collapsed-sidebar.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-chart-pie"], ["href", "pages/charts/chartjs.html", 1, "nav-link"], ["href", "pages/charts/flot.html", 1, "nav-link"], ["href", "pages/charts/inline.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-tree"], ["href", "pages/UI/general.html", 1, "nav-link"], ["href", "pages/UI/icons.html", 1, "nav-link"], ["href", "pages/UI/buttons.html", 1, "nav-link"], ["href", "pages/UI/sliders.html", 1, "nav-link"], ["href", "pages/UI/modals.html", 1, "nav-link"], ["href", "pages/UI/navbar.html", 1, "nav-link"], ["href", "pages/UI/timeline.html", 1, "nav-link"], ["href", "pages/UI/ribbons.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-edit"], ["href", "pages/forms/general.html", 1, "nav-link"], ["href", "pages/forms/advanced.html", 1, "nav-link"], ["href", "pages/forms/editors.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-table"], ["href", "pages/tables/simple.html", 1, "nav-link"], ["href", "pages/tables/data.html", 1, "nav-link"], ["href", "pages/tables/jsgrid.html", 1, "nav-link"], [1, "nav-header"], ["href", "pages/calendar.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-calendar-alt"], ["href", "pages/gallery.html", 1, "nav-link"], [1, "nav-icon", "far", "fa-image"], [1, "nav-icon", "far", "fa-envelope"], ["href", "pages/mailbox/mailbox.html", 1, "nav-link"], ["href", "pages/mailbox/compose.html", 1, "nav-link"], ["href", "pages/mailbox/read-mail.html", 1, "nav-link"], [1, "nav-icon", "fas", "fa-book"], ["href", "pages/examples/invoice.html", 1, "nav-link"], ["href", "pages/examples/profile.html", 1, "nav-link"], ["href", "pages/examples/e_commerce.html", 1, "nav-link"], ["href", "pages/examples/projects.html", 1, "nav-link"], ["href", "pages/examples/project_add.html", 1, "nav-link"], ["href", "pages/examples/project_edit.html", 1, "nav-link"], ["href", "pages/examples/project_detail.html", 1, "nav-link"], ["href", "pages/examples/contacts.html", 1, "nav-link"], [1, "nav-icon", "far", "fa-plus-square"], ["href", "pages/examples/login.html", 1, "nav-link"], ["href", "pages/examples/register.html", 1, "nav-link"], ["href", "pages/examples/forgot-password.html", 1, "nav-link"], ["href", "pages/examples/recover-password.html", 1, "nav-link"], ["href", "pages/examples/lockscreen.html", 1, "nav-link"], ["href", "pages/examples/legacy-user-menu.html", 1, "nav-link"], ["href", "pages/examples/language-menu.html", 1, "nav-link"], ["href", "pages/examples/404.html", 1, "nav-link"], ["href", "pages/examples/500.html", 1, "nav-link"], ["href", "pages/examples/pace.html", 1, "nav-link"], ["href", "pages/examples/blank.html", 1, "nav-link"], ["href", "starter.html", 1, "nav-link"], ["href", "https://adminlte.io/docs/3.0", 1, "nav-link"], [1, "nav-icon", "fas", "fa-file"], [1, "fas", "fa-circle", "nav-icon"], [1, "nav-icon", "fas", "fa-circle"], [1, "far", "fa-dot-circle", "nav-icon"], [1, "nav-icon", "far", "fa-circle", "text-danger"], [1, "text"], [1, "nav-icon", "far", "fa-circle", "text-warning"], [1, "nav-icon", "far", "fa-circle", "text-info"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_6_listener() {
              return ctx.redirectToHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() {
              return ctx.redirectToAbout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
              return ctx.logMeOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LogOut");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Brad Diesel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Call me whenever you can...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 4 Hours Ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " John Pierce ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "I got your message bro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 4 Hours Ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Nora Silvester ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "The subject goes here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " 4 Hours Ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "See All Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "15");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "15 Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " 4 new messages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "3 mins");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " 8 friend requests ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "12 hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 3 new reports ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "2 days");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "See All Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "aside", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "AdminLTE 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Alexander Pierce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "nav", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Dashboard v1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Dashboard v2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Dashboard v3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Widgets ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " Layout Options ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Top Navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Boxed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Fixed Sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Fixed Navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Fixed Footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Collapsed Sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Charts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "ChartJS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "a", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Flot");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Inline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " UI Elements ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Icons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Sliders");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "a", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Modals & Alerts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "a", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Navbar & Tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Timeline");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Ribbons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Forms ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "General Elements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Advanced Elements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "a", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Editors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Tables ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "a", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Simple Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "DataTables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "jsGrid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "EXAMPLES");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "a", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "i", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " Calendar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "i", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " Gallery ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "i", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " Mailbox ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "a", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Compose");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "a", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Read");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, " Pages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Invoice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "a", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "E-commerce");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "a", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "a", 114);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Project Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "a", 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Project Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "a", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Project Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "a", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Contacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "i", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " Extras ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "i", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "a", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "a", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "a", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "Recover Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "a", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Lockscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "a", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Legacy User Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "a", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Language Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "a", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Error 404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "a", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "Error 500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "a", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "Pace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "a", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Blank Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "a", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Starter Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "MISCELLANEOUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "a", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "i", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "Documentation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "MULTI LEVEL EXAMPLE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "i", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Level 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "i", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " Level 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "Level 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "li", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " Level 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "i", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "ul", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "i", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "Level 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "i", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Level 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "i", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "Level 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "Level 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "i", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Level 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "li", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "LABELS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "i", 136);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "p", 137);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Important");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "i", 138);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "Warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](520, "i", 139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "Informational");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            this.router.navigateByUrl('dashboard/home');
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 0,
        consts: [[1, "hold-transition", "login-page"], [1, "login-box"], [1, "card"], [1, "card-body", "login-card-body"], [1, "login-box-msg"], ["action", "#", "method", "post"], [1, "input-group", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], [1, "row"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "social-auth-links", "text-center", "mb-3"], ["href", "#", 1, "btn", "btn-block", "btn-danger"], [1, "mb-1"], ["href", "forgot-password.html"], [1, "mb-0"], ["href", "register.html", 1, "text-center"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in to start your session");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "- OR -");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Sign in using Credential ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "I forgot my password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Register a new membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map