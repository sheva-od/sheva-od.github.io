webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board-wrap\">\n  <div class=\"tools\">\n    <button style=\"margin: 0 5px;\" (click)=\"resetBoard()\">Reset</button>\n    <button style=\"margin: 0 5px;\" (click)=\"saveBoard()\">Save</button>\n    <button style=\"margin: 0 5px;\" (click)=\"loadBoard()\">Load</button>\n    <button\n      style=\"margin: 0 5px;\" (click)=\"changeColorPalette()\">\n      Change Color Palette\n    </button>\n  </div>\n  <div class=\"board\" [ngClass]=\"board.colorPalette\">\n    <div class=\"row\" *ngFor=\"let row of board.data; let i = index\">\n      <div\n        class=\"square\" *ngFor=\"let square of row; let j = index\"\n        [id]=\"'figure' + i + j\">\n        <div\n          class=\"figure-area\" [class.highlight]=\"square.canDrop\"\n          (drop)=\"onDrop($event, i)\" [appDropTarget]=\"{ data: square, i: i, j: j }\">\n        </div>\n        <div\n          class=\"figure\" [class.disabled]=\"square.disabled\"\n          [draggable]=\"!square.disabled\" *ngIf=\"square.figure\"\n          [appDraggable]=\"{ data: square, i: i, j: j }\"\n          (dragStart)=\"onDragStart($event)\" (dragEnd)=\"onDragEnd($event)\"\n          (click)=\"highlightSquare({ data: square, i: i, j: j})\">\n          <img [src]=\"'assets/figures/'+ square.color + '-' + square.figure +'.svg'\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".board-wrap {\n  min-height: 100vh; }\n\n.tools {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px; }\n\n.board-wrap {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.board {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.board {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: calc(100vmin - 60px);\n  width: calc(100vmin - 60px); }\n\n.board .row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 12.5%;\n    width: 100%; }\n\n.board .square {\n    position: relative;\n    width: 12.5%;\n    height: 100%; }\n\n.board.brown .row:nth-of-type(odd) .square:nth-of-type(odd) {\n    background-color: #f0d9b5; }\n\n.board.brown .row:nth-of-type(odd) .square:nth-of-type(even) {\n    background-color: #b58863; }\n\n.board.brown .row:nth-of-type(even) .square:nth-of-type(even) {\n    background-color: #f0d9b5; }\n\n.board.brown .row:nth-of-type(even) .square:nth-of-type(odd) {\n    background-color: #b58863; }\n\n.board.black .row:nth-of-type(odd) .square:nth-of-type(odd) {\n    background-color: #fff; }\n\n.board.black .row:nth-of-type(odd) .square:nth-of-type(even) {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.board.black .row:nth-of-type(even) .square:nth-of-type(even) {\n    background-color: #fff; }\n\n.board.black .row:nth-of-type(even) .square:nth-of-type(odd) {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.board.blue .row:nth-of-type(odd) .square:nth-of-type(odd) {\n    background-color: rgba(47, 147, 149, 0.7); }\n\n.board.blue .row:nth-of-type(odd) .square:nth-of-type(even) {\n    background-color: rgba(53, 92, 112, 0.7); }\n\n.board.blue .row:nth-of-type(even) .square:nth-of-type(even) {\n    background-color: rgba(47, 147, 149, 0.7); }\n\n.board.blue .row:nth-of-type(even) .square:nth-of-type(odd) {\n    background-color: rgba(53, 92, 112, 0.7); }\n\n.board.red .row:nth-of-type(odd) .square:nth-of-type(odd) {\n    background-color: rgba(246, 114, 128, 0.7); }\n\n.board.red .row:nth-of-type(odd) .square:nth-of-type(even) {\n    background-color: rgba(236, 28, 72, 0.7); }\n\n.board.red .row:nth-of-type(even) .square:nth-of-type(even) {\n    background-color: rgba(246, 114, 128, 0.7); }\n\n.board.red .row:nth-of-type(even) .square:nth-of-type(odd) {\n    background-color: rgba(236, 28, 72, 0.7); }\n\n.figure {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  width: 100%;\n  z-index: 2; }\n\n.figure > img {\n    max-width: 90%; }\n\n.figure.disabled {\n    opacity: .5;\n    z-index: 0; }\n\n.figure-area {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1; }\n\n.figure-area.highlight {\n    -webkit-box-shadow: inset 0 0 16px 8px rgba(94, 74, 74, 0.5);\n            box-shadow: inset 0 0 16px 8px rgba(94, 74, 74, 0.5); }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_data_json__ = __webpack_require__("./src/app/board-data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__board_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__board_data_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.colorPalettes = ['brown', 'black', 'red', 'blue'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.board = JSON.parse(localStorage.getItem('savedState')) || __WEBPACK_IMPORTED_MODULE_1__board_data_json__;
        localStorage.setItem('initialState', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__board_data_json__));
    };
    AppComponent.prototype.resetBoard = function () {
        this.board = JSON.parse(localStorage.getItem('initialState'));
    };
    AppComponent.prototype.saveBoard = function () {
        localStorage.setItem('savedState', JSON.stringify(this.board));
    };
    AppComponent.prototype.loadBoard = function () {
        this.board = JSON.parse(localStorage.getItem('savedState'));
    };
    AppComponent.prototype.changeColorPalette = function () {
        this.board.colorPalette = this.colorPalettes[Math.floor(Math.random() * this.colorPalettes.length)];
    };
    AppComponent.prototype.onDrop = function (data, i) {
        if (data.data) {
            this.board.data[data.i][data.j] = {};
            this.board.data[data.coords.i][data.coords.j] = data.data;
            this.board.data = this.board.data.map(function (row) {
                return row.map(function (square) {
                    square.disabled = !square.disabled;
                    square.canDrop = false;
                    return square;
                });
            });
        }
    };
    AppComponent.prototype.onDragStart = function (data) {
        if (data.data) {
            this.draggedFigure = data;
            this.highlightSquare(data);
        }
    };
    AppComponent.prototype.onDragEnd = function (data) {
        if (data) {
            this.clearHighlightSquares();
        }
    };
    AppComponent.prototype.clearHighlightSquares = function () {
        this.board.data.map(function (row) {
            return row.map(function (square) {
                square.canDrop = false;
                return square;
            });
        });
    };
    AppComponent.prototype.highlightSquare = function (data) {
        this.clearHighlightSquares();
        switch (data.data.figure) {
            case 'pawn':
                switch (data.data.color) {
                    case 'white':
                        if (this.board.data[data.i - 1][data.j].color !== 'white' && this.board.data[data.i - 1][data.j].color !== 'black') {
                            this.board.data[data.i - 1][data.j].canDrop = true;
                        }
                        if (data.i === 6 && this.board.data[data.i - 2][data.j].color !== 'white'
                            && this.board.data[data.i - 1][data.j].color !== 'white') {
                            this.board.data[data.i - 2][data.j].canDrop = true;
                        }
                        if (this.board.data[data.i - 1][data.j - 1] && this.board.data[data.i - 1][data.j - 1].color === 'black') {
                            this.board.data[data.i - 1][data.j - 1].canDrop = true;
                        }
                        if (this.board.data[data.i - 1][data.j + 1] && this.board.data[data.i - 1][data.j + 1].color === 'black') {
                            this.board.data[data.i - 1][data.j + 1].canDrop = true;
                        }
                        break;
                    case 'black':
                        if (this.board.data[data.i + 1][data.j].color !== 'black' && this.board.data[data.i + 1][data.j].color !== 'white') {
                            this.board.data[data.i + 1][data.j].canDrop = true;
                        }
                        if (data.i === 1 && this.board.data[data.i + 2][data.j].color !== 'black'
                            && this.board.data[data.i + 1][data.j].color !== 'black') {
                            this.board.data[data.i + 2][data.j].canDrop = true;
                        }
                        if (this.board.data[data.i + 1][data.j - 1] && this.board.data[data.i + 1][data.j - 1].color === 'white') {
                            this.board.data[data.i + 1][data.j - 1].canDrop = true;
                        }
                        if (this.board.data[data.i + 1][data.j + 1] && this.board.data[data.i + 1][data.j + 1].color === 'white') {
                            this.board.data[data.i + 1][data.j + 1].canDrop = true;
                        }
                        break;
                }
                break;
            case 'knight':
                if (this.board.data[data.i - 2] && this.board.data[data.i - 2][data.j - 1]
                    && this.board.data[data.i - 2][data.j - 1].color !== data.data.color) {
                    this.board.data[data.i - 2][data.j - 1].canDrop = true;
                }
                if (this.board.data[data.i - 2] && this.board.data[data.i - 2][data.j + 1]
                    && this.board.data[data.i - 2][data.j + 1].color !== data.data.color) {
                    this.board.data[data.i - 2][data.j + 1].canDrop = true;
                }
                if (this.board.data[data.i + 2] && this.board.data[data.i + 2][data.j - 1]
                    && this.board.data[data.i + 2][data.j - 1].color !== data.data.color) {
                    this.board.data[data.i + 2][data.j - 1].canDrop = true;
                }
                if (this.board.data[data.i + 2] && this.board.data[data.i + 2][data.j + 1]
                    && this.board.data[data.i + 2][data.j + 1].color !== data.data.color) {
                    this.board.data[data.i + 2][data.j + 1].canDrop = true;
                }
                if (this.board.data[data.i - 1] && this.board.data[data.i - 1][data.j + 2]
                    && this.board.data[data.i - 1][data.j + 2].color !== data.data.color) {
                    this.board.data[data.i - 1][data.j + 2].canDrop = true;
                }
                if (this.board.data[data.i + 1] && this.board.data[data.i + 1][data.j - 2]
                    && this.board.data[data.i + 1][data.j - 2].color !== data.data.color) {
                    this.board.data[data.i + 1][data.j - 2].canDrop = true;
                }
                if (this.board.data[data.i - 1] && this.board.data[data.i - 1][data.j - 2]
                    && this.board.data[data.i - 1][data.j - 2].color !== data.data.color) {
                    this.board.data[data.i - 1][data.j - 2].canDrop = true;
                }
                if (this.board.data[data.i + 1] && this.board.data[data.i + 1][data.j + 2]
                    && this.board.data[data.i + 1][data.j + 2].color !== data.data.color) {
                    this.board.data[data.i + 1][data.j + 2].canDrop = true;
                }
                break;
            default:
                this.board.data.map(function (row) {
                    return row.map(function (square) {
                        if (square.color !== 'white') {
                            square.canDrop = true;
                        }
                        return square;
                    });
                });
                break;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_draggable_directive__ = __webpack_require__("./src/app/directives/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_drop_target_directive__ = __webpack_require__("./src/app/directives/drop-target.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_drag_service__ = __webpack_require__("./src/app/services/drag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__directives_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_4__directives_drop_target_directive__["a" /* DropTargetDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_drag_service__["a" /* DragService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board-data.json":
/***/ (function(module, exports) {

module.exports = {"colorPalette":"brown","data":[[{"figure":"rook","color":"black","disabled":true,"canDrop":false},{"figure":"knight","color":"black","disabled":true,"canDrop":false},{"figure":"bishop","color":"black","disabled":true,"canDrop":false},{"figure":"queen","color":"black","disabled":true,"canDrop":false},{"figure":"king","color":"black","disabled":true,"canDrop":false},{"figure":"bishop","color":"black","disabled":true,"canDrop":false},{"figure":"knight","color":"black","disabled":true,"canDrop":false},{"figure":"rook","color":"black","disabled":true,"canDrop":false}],[{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false},{"figure":"pawn","color":"black","disabled":true,"canDrop":false}],[{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true}],[{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true}],[{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true}],[{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true},{"canDrop":false,"disabled":true}],[{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false},{"figure":"pawn","color":"white","disabled":false,"canDrop":false}],[{"figure":"rook","color":"white","disabled":false,"canDrop":false},{"figure":"knight","color":"white","disabled":false,"canDrop":false},{"figure":"bishop","color":"white","disabled":false,"canDrop":false},{"figure":"queen","color":"white","disabled":false,"canDrop":false},{"figure":"king","color":"white","disabled":false,"canDrop":false},{"figure":"bishop","color":"white","disabled":false,"canDrop":false},{"figure":"knight","color":"white","disabled":false,"canDrop":false},{"figure":"rook","color":"white","disabled":false,"canDrop":false}]]}

/***/ }),

/***/ "./src/app/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drag_service__ = __webpack_require__("./src/app/services/drag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(dragService) {
        this.dragService = dragService;
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    Object.defineProperty(DraggableDirective.prototype, "appDraggable", {
        set: function (figure) {
            if (figure) {
                this.figure = figure;
            }
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.onDragStart = function (event) {
        this.dragStart.emit(this.figure);
        event.dataTransfer.setData('Figure', JSON.stringify(this.figure));
    };
    DraggableDirective.prototype.onDragEnd = function (event) {
        this.dragEnd.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "appDraggable", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], DraggableDirective.prototype, "dragStart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], DraggableDirective.prototype, "dragEnd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('dragstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragStart", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('dragend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onDragEnd", null);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appDraggable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_drag_service__["a" /* DragService */]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/directives/drop-target.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropTargetDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drag_service__ = __webpack_require__("./src/app/services/drag.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropTargetDirective = /** @class */ (function () {
    function DropTargetDirective(dragService) {
        this.dragService = dragService;
        this.drop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    Object.defineProperty(DropTargetDirective.prototype, "appDropTarget", {
        set: function (square) {
            if (square) {
                this.square = square;
            }
        },
        enumerable: true,
        configurable: true
    });
    DropTargetDirective.prototype.onDragOver = function (event) {
        if (this.dragService.accepts(this.square)) {
            event.preventDefault();
        }
    };
    DropTargetDirective.prototype.onDrop = function (event) {
        if (event.dataTransfer) {
            var figure = JSON.parse(event.dataTransfer.getData('Figure'));
            figure.coords = { i: this.square.i, j: this.square.j };
            this.drop.emit(figure);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropTargetDirective.prototype, "appDropTarget", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], DropTargetDirective.prototype, "drop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('dragenter', ['$event']),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDragOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DropTargetDirective.prototype, "onDrop", null);
    DropTargetDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appDropTarget]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_drag_service__["a" /* DragService */]])
    ], DropTargetDirective);
    return DropTargetDirective;
}());



/***/ }),

/***/ "./src/app/services/drag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DragService = /** @class */ (function () {
    function DragService() {
    }
    DragService.prototype.startDrag = function (figure) {
        this.figure = figure;
    };
    DragService.prototype.accepts = function (square) {
        return square.data.canDrop ? true : false;
    };
    DragService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])()
    ], DragService);
    return DragService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map