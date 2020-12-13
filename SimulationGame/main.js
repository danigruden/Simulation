(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniyel\AngularGame\SimulationGame\src\main.ts */"zUnb");


/***/ }),

/***/ "0np6":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: playGroundHeight, playGroundWidth, frameNumber, spritePath, playerCarSpeed, playerCar, vehicles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playGroundHeight", function() { return playGroundHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playGroundWidth", function() { return playGroundWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameNumber", function() { return frameNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spritePath", function() { return spritePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerCarSpeed", function() { return playerCarSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerCar", function() { return playerCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vehicles", function() { return vehicles; });
const playGroundHeight = 800;
const playGroundWidth = 800;
const frameNumber = 0;
const spritePath = '../assets/img/sprites.png';
const playerCarSpeed = 5;
const playerCar = {
    sX: 410,
    sY: 265,
    sWidth: 64,
    sHeight: 135,
    width: 40,
    height: 90,
};
const vehicles = [
    {
        sX: 0,
        sY: 0,
        sWidth: 100,
        sHeight: 100,
        width: 30,
        height: 30,
    }, {
        sX: 225,
        sY: 268,
        sWidth: 64,
        sHeight: 135,
        width: 30,
        height: 30,
    } /*, {
        sX: 161,  // Yellow car
        sY: 265,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 225,  // Red car
        sY: 268,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 287,  // Blue car
        sY: 271,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 348,  // Red Audi car
        sY: 270,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 476,  // Orange car
        sY: 265,
        sWidth: 62,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 543,  // Texi
        sY: 265,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 610,  // Police
        sY: 265,
        sWidth: 64,
        sHeight: 135,
        width: 40,
        height: 90,
    }, {
        sX: 605,  // Sky Blue truck
        sY: 0,
        sWidth: 80,
        sHeight: 160,
        width: 60,
        height: 120,
    }, {
        sX: 460,  // Ambulance
        sY: 0,
        sWidth: 75,
        sHeight: 160,
        width: 60,
        height: 120,
    }, {
        sX: 531,  // MiniVan
        sY: 0,
        sWidth: 70,
        sHeight: 160,
        width: 45,
        height: 140,
    }, {
        sX: 368,  // Truck
        sY: 0,
        sWidth: 90,
        sHeight: 220,
        width: 60,
        height: 140,
    }, {
        sX: 190,  // Orange Trailer
        sY: 0,
        sWidth: 70,
        sHeight: 260,
        width: 55,
        height: 200,
    }, {
        sX: 285,  // Blue Trailer
        sY: 0,
        sWidth: 70,
        sHeight: 260,
        width: 55,
        height: 200,
    }
    */
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.service */ "VdwR");



class AppService {
    constructor(gameService) {
        this.gameService = gameService;
        this.isImageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    createPlayGround(canvasElement) {
        this.gameService.loadAssets(canvasElement).then((image) => {
            this.isImageLoaded.emit();
        });
    }
    getImageLoadEmitter() {
        return this.isImageLoaded;
    }
    movePlayer(event, type) {
        if (type === 'keydown') {
            if (event.keyCode === 37) {
                this.gameService.moveLeft = true;
                this.gameService.moveUP = false;
                this.gameService.moveDown = false;
            }
            else if (event.keyCode === 39) {
                this.gameService.moveRight = true;
                this.gameService.moveLeft = false;
                this.gameService.moveUP = false;
                this.gameService.moveDown = false;
            }
            else if (event.keyCode === 38) {
                this.gameService.moveUP = true;
                this.gameService.moveLeft = false;
                this.gameService.moveRight = false;
                this.gameService.moveDown = false;
            }
            else if (event.keyCode === 40) {
                this.gameService.moveDown = true;
                this.gameService.moveLeft = false;
                this.gameService.moveRight = false;
                this.gameService.moveUP = false;
            }
        }
        else if (type === 'keyup') {
            this.gameService.moveDown = false;
            this.gameService.moveLeft = false;
            this.gameService.moveRight = false;
            this.gameService.moveUP = false;
        }
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/game.service */ "VdwR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["canvas"];
class AppComponent {
    constructor(appService, gameService, router) {
        this.appService = appService;
        this.gameService = gameService;
        this.router = router;
        this.showLoader = true;
    }
    ngAfterViewInit() {
        const canvasEl = this.canvas.nativeElement;
        this.appService.createPlayGround(canvasEl);
        this.subscription = this.appService.getImageLoadEmitter()
            .subscribe((item) => {
            this.showLoader = false;
        });
    }
    btnClick() {
        //  this.router.navigateByUrl('/');
    }
    ;
    startGame() {
        this.gameService.inputNum = Number(document.getElementById("placeNumber").value) - 1;
        this.gameService.startGameLoop();
    }
    onKeydownHandler(event) {
        this.appService.movePlayer(event, 'keydown');
    }
    onKeyupHandler(event) {
        this.appService.movePlayer(event, 'keyup');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keyup", function AppComponent_keyup_HostBindingHandler($event) { return ctx.onKeyupHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 12, vars: 3, consts: [[1, "loader", 3, "hidden"], [1, "message"], [1, "fas", "fa-spinner", "fa-spin"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "number", "id", "placeNumber", 3, "value", "max"], [1, "play-ground"], ["canvas", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.startGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start simulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.btnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Reset simulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "canvas", 5, 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 5)("max", 10);
    } }, styles: [".instructions[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    margin: 0px;\r\n    top: 0px;\r\n    width: 154px;\r\n    padding: 5px;\r\n    color: white;\r\n    background: #000;\r\n    font-weight: bold;\r\n    text-align: justify;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]{\r\n   width: 100%;\r\n   height: 100%;\r\n   background: #000000ab;\r\n   position: absolute;\r\n   text-align: center;\r\n   color: #fff;\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 20%;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n}\r\n\r\n.play-ground[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    margin: auto;\r\n    background-color: #ddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1oscUJBQXFCO0dBQ3JCLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsV0FBVztBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0cnVjdGlvbnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDE1NHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmxvYWRlcntcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgYmFja2dyb3VuZDogIzAwMDAwMGFiO1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuLmxvYWRlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4gICAgXHJcblxyXG4ucGxheS1ncm91bmR7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], onKeydownHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }], onKeyupHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keyup', ['$event']]
        }] }); })();


/***/ }),

/***/ "VdwR":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/config */ "0np6");



class GameService {
    constructor() {
        this.width = _config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"];
        this.height = _config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"];
        this.frameNumber = _config_config__WEBPACK_IMPORTED_MODULE_1__["frameNumber"];
        this.player = {
            x: _config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"] / 2 - _config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width,
            y: _config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"] - (_config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height + _config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height / 2),
        };
        this.obstacles = [];
        this.image = null;
        this.gameLoop = null;
        this.moveUP = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
    }
    loadAssets(canvasElement) {
        this.context = canvasElement.getContext('2d');
        canvasElement.width = this.width;
        canvasElement.height = this.height;
        return new Promise((resolve, reject) => {
            this.image = new Image();
            this.image.src = _config_config__WEBPACK_IMPORTED_MODULE_1__["spritePath"];
            this.image.width = 58;
            this.image.height = 128;
            resolve();
        });
    }
    startGameLoop() {
        this.gameLoop = setInterval(() => {
            this.suffleProperties();
            this.cleanGround();
            this.createObstacles();
            this.moveObstacles();
            this.collWithSubject();
            //	this.createPlayer();
        }, 15);
    }
    animationFrame(n) {
        if ((this.frameNumber / n) % 1 === 0) {
            return true;
        }
        return false;
    }
    suffleProperties() {
        this.frameNumber += 1;
    }
    createObstacles() {
        if (this.frameNumber === 1 || this.animationFrame(10)) { }
        //console.log(Math.sqrt(this.inputNum + 1));
        this.inputNumTableX = Math.sqrt(this.inputNum + 1);
        this.inputNumTableY = Math.sqrt(this.inputNum + 1);
        for (var posX = 0; posX < this.inputNumTableX; posX++) {
            for (var posY = 0; posY < this.inputNumTableY; posY++) {
                if (this.obstacles.length <= this.inputNum) {
                    this.getSingleObstacle(posX, posY, Math.sqrt(this.inputNum + 1));
                }
                //this.getSingleObstacle();
            }
        }
    }
    getSingleObstacle(posX, posY, inNum) {
        const context = this.context;
        const image = this.image;
        const randomVehicle = _config_config__WEBPACK_IMPORTED_MODULE_1__["vehicles"][0];
        const infSubject = _config_config__WEBPACK_IMPORTED_MODULE_1__["vehicles"][1];
        this.obstacles.push(new function () {
            var subjectsSpeed = 3;
            //var subjectsSpeed = 0;
            this.x = Math.floor(Math.random() + posX * ((_config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"] - 100) / inNum)) + 50,
                this.y = Math.floor(Math.random() + posY * ((_config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"] - 100) / inNum)) + 50,
                console.log(Math.sqrt(this.inputNum + 1));
            //this.x = (posX * 170) + 100;
            //this.y = (posY * 170) + 100
            this.velx = (Math.random() * subjectsSpeed * 2 - subjectsSpeed);
            this.vely = Math.random() < 0.5 ? -Math.sqrt((subjectsSpeed * subjectsSpeed) - (this.velx * this.velx)) : Math.sqrt((subjectsSpeed * subjectsSpeed) - (this.velx * this.velx));
            this.width = randomVehicle.width;
            this.height = randomVehicle.height;
            this.wBounceCdSub = 0;
            this.hBounceCdSub = 0;
            this.update = () => {
                if (!this.infected) {
                    context.drawImage(image, randomVehicle.sX, randomVehicle.sY, randomVehicle.sWidth, randomVehicle.sHeight, this.x, this.y, randomVehicle.width, randomVehicle.height);
                }
                else if (this.infected) {
                    context.drawImage(image, infSubject.sX, infSubject.sY, infSubject.sWidth, infSubject.sHeight, this.x, this.y, randomVehicle.width, randomVehicle.height);
                }
            };
        });
    }
    moveObstacles() {
        this.obstacles.forEach((element, index) => {
            //element.y += 3;
            if (index == 0) {
                element.infected = true;
            }
            element.x += element.velx;
            element.y += element.vely;
            this.detectEdge(element, index);
            element.update();
        });
    }
    // Wall bounces
    detectEdge(obstacle, index) {
        const componentLeftSide = obstacle.x;
        const componentRightSide = obstacle.x + obstacle.width;
        const componentTop = obstacle.y;
        const componentBottom = obstacle.y + obstacle.height;
        this.obstacles.forEach((element) => {
            if (componentLeftSide <= 0) {
                if (obstacle.velx < 0) {
                    obstacle.velx = -obstacle.velx;
                }
                //	obstacle.x = 0;
            }
            if (componentRightSide >= this.width) {
                if (obstacle.velx > 0) {
                    obstacle.velx = -obstacle.velx;
                }
                //	obstacle.x = this.width - obstacle.width;
            }
            if (componentBottom >= this.height) {
                if (obstacle.vely > 0) {
                    obstacle.vely = -obstacle.vely;
                }
            }
            if (componentTop <= 0) {
                if (obstacle.vely < 0) {
                    obstacle.vely = -obstacle.vely;
                }
            }
            element.update();
        });
    }
    collWithSubject() {
        this.obstacles.forEach((subjectOne) => {
            const componentLeftTopX1 = subjectOne.x;
            const componentLeftTopY1 = subjectOne.y;
            const componentRightBotX1 = subjectOne.x + subjectOne.width;
            const componentRightBotY1 = subjectOne.y + subjectOne.height;
            this.obstacles.forEach((subjectTwo) => {
                const componentLeftTopX2 = subjectTwo.x;
                const componentLeftTopY2 = subjectTwo.y;
                const componentRightTopX2 = subjectTwo.x + subjectTwo.width;
                const componentRightTopY2 = subjectTwo.y;
                if ((componentLeftTopX2 >= componentLeftTopX1 && componentLeftTopX2 <= componentRightBotX1 && componentLeftTopY2 >= componentLeftTopY1 && componentLeftTopY2 <= componentRightBotY1)
                    || (componentRightTopX2 >= componentLeftTopX1 && componentRightTopX2 <= componentRightBotX1 && componentRightTopY2 >= componentLeftTopY1 && componentRightTopY2 <= componentRightBotY1)) {
                    // TODO bounce of subjects with same direction --> the first one gets the velocity of the second one
                    var velX1before = subjectOne.velx;
                    var velY1before = subjectOne.vely;
                    if (subjectOne.infected || subjectTwo.infected) {
                        subjectOne.infected = true;
                        subjectTwo.infected = true;
                    }
                    // Right top of second collides with first square	
                    if (componentRightTopY2 >= componentLeftTopY1 + (subjectOne.height * 0.1) && componentRightTopY2 <= subjectOne.height + componentLeftTopY1 - (subjectOne.height * 0.1)) {
                        // On left side
                        if (componentRightTopX2 >= componentLeftTopX1 && componentRightTopX2 <= componentLeftTopX1 + (subjectOne.width * 0.3)) {
                            if (subjectTwo.velx > 0 && subjectOne.velx < 0) {
                                subjectOne.velx = -subjectOne.velx;
                                subjectTwo.velx = -subjectTwo.velx;
                            }
                            else if (subjectTwo.velx > 0 && subjectOne.velx > 0) {
                                subjectOne.velx = subjectTwo.velx;
                                subjectOne.vely = subjectTwo.vely;
                                subjectTwo.velx = velX1before;
                                subjectTwo.vely = velY1before;
                            }
                        }
                    }
                    if (componentRightTopX2 >= componentLeftTopX1 + (subjectOne.width * 0.1) && componentRightTopX2 <= subjectOne.width + componentLeftTopX1 - (subjectOne.width * 0.1)) {
                        // On bottom
                        console.log(subjectTwo.width);
                        console.log("Col Ein!!");
                        if (componentRightTopY2 <= componentLeftTopY1 + subjectOne.height && componentRightTopY2 <= (componentLeftTopY1 + subjectOne.height - (subjectOne.height * 0.3))) {
                            console.log("Col Zwei!!");
                            if (subjectTwo.vely < 0 && subjectOne.vely > 0) {
                                console.log("Col Drei!!");
                                subjectOne.vely = -subjectOne.vely;
                                subjectTwo.vely = -subjectTwo.vely;
                            }
                            else if (subjectTwo.vely > 0 && subjectOne.vely > 0) {
                                subjectOne.velx = subjectTwo.velx;
                                subjectOne.vely = subjectTwo.vely;
                                subjectTwo.velx = velX1before;
                                subjectTwo.vely = velY1before;
                            }
                        }
                    }
                    // Left top of second collides with first square
                    if (componentLeftTopY2 >= componentLeftTopY1 + (subjectOne.height * 0.1) && componentLeftTopY2 <= subjectOne.height + componentLeftTopY1 - (subjectOne.height * 0.1)) {
                        // On right side
                        //	console.log("Col A");
                        if (componentLeftTopX2 <= componentLeftTopX1 + subjectOne.width && componentLeftTopX2 >= componentLeftTopX1 + subjectOne.width - (subjectOne.width * 0.3)) {
                            //	console.log("Col B");
                            if (subjectTwo.velx < 0 && subjectOne.velx > 0) {
                                //	console.log("Col C");
                                subjectOne.velx = -subjectOne.velx;
                                subjectTwo.velx = -subjectTwo.velx;
                            }
                            else if (subjectTwo.velx < 0 && subjectOne.velx < 0) {
                                subjectOne.velx = subjectTwo.velx;
                                subjectOne.vely = subjectTwo.vely;
                                subjectTwo.velx = velX1before;
                                subjectTwo.vely = velY1before;
                            }
                        }
                    }
                    if (componentLeftTopX2 >= componentLeftTopX1 + (subjectOne.width * 0.1) && componentLeftTopX2 <= subjectOne.width + componentLeftTopX1 - (subjectOne.width * 0.1)) {
                        // On bottom
                        console.log("This works 1");
                        if (componentLeftTopY2 <= componentLeftTopY1 + subjectOne.height && componentLeftTopY2 <= componentLeftTopY1 + subjectOne.height - (subjectOne.height * 0.3)) {
                            console.log("This works 2");
                            if (subjectTwo.vely < 0 && subjectOne.vely > 0) {
                                console.log("This works 3");
                                subjectOne.vely = -subjectOne.vely;
                                subjectTwo.vely = -subjectTwo.vely;
                            }
                            else if (subjectTwo.vely < 0 && subjectOne.vely < 0) {
                                subjectOne.velx = subjectTwo.velx;
                                subjectOne.vely = subjectTwo.vely;
                                subjectTwo.velx = velX1before;
                                subjectTwo.vely = velY1before;
                            }
                        }
                    }
                }
                subjectOne.update();
                subjectTwo.update();
            });
        });
    }
    detectCollision(obstacle) {
        const componentLeftSide = obstacle.x;
        const componentRightSide = obstacle.x + obstacle.width;
        const componentTop = obstacle.y;
        const componentBottom = obstacle.y + obstacle.height;
        const carRightSide = this.player.x + _config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width;
        const carLeftSide = this.player.x;
        const carTop = this.player.y;
        const carBottom = this.player.y + _config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height;
        if (((carRightSide > componentLeftSide) && (carTop < componentBottom)) && ((carLeftSide < componentRightSide) && (carTop < componentBottom)) && ((carRightSide > componentLeftSide) && (carBottom > componentTop)) && ((carLeftSide < componentRightSide) && (carBottom > componentTop))) {
            clearInterval(this.gameLoop);
            alert('Game Over');
            window.location.reload();
        }
    }
    detectCrash(obstacle) {
        const componentLeftSide = obstacle.x;
        const componentRightSide = obstacle.x + obstacle.width;
        const componentTop = obstacle.y;
        const componentBottom = obstacle.y + obstacle.height;
        const carRightSide = this.player.x + _config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].width;
        const carLeftSide = this.player.x;
        const carTop = this.player.y;
        const carBottom = this.player.y + _config_config__WEBPACK_IMPORTED_MODULE_1__["playerCar"].height;
        if (((carRightSide > componentLeftSide) && (carTop < componentBottom)) && ((carLeftSide < componentRightSide) && (carTop < componentBottom)) && ((carRightSide > componentLeftSide) && (carBottom > componentTop)) && ((carLeftSide < componentRightSide) && (carBottom > componentTop))) {
            clearInterval(this.gameLoop);
            alert('Game Over');
            window.location.reload();
        }
    }
    cleanGround() {
        this.context.clearRect(0, 0, _config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundWidth"], _config_config__WEBPACK_IMPORTED_MODULE_1__["playGroundHeight"]);
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/game.service */ "VdwR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([])
                ],
                providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



/*
const routes: Routes = [
  { path: '/', component: AppComponent},
];
*/
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                // imports: [RouterModule.forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map