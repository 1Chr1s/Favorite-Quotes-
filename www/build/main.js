webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__library_library__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        // Setting the favorites page tab: 
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_1__favorites_favorites__["a" /* FavoritesPage */];
        // Setting the library page tab:
        this.libraryPages = __WEBPACK_IMPORTED_MODULE_2__library_library__["a" /* LibraryPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n\t<ion-tabs>\n\t\t<ion-tab [root]=\"favoritesPage\" tabTitle=\"Favorites\" tabIcon=\"star\"></ion-tab>\n\t\t<ion-tab [root]=\"libraryPages\" tabTitle=\"Library\" tabIcon=\"book\"></ion-tab> \n\t</ion-tabs>\n\t"
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = (function () {
    function FavoritesPage(quotesService, modalCtrl, settingsService) {
        this.quotesService = quotesService;
        this.modalCtrl = modalCtrl;
        this.settingsService = settingsService;
    } // End of the constructor.
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quotesService.getFavoriteQuotes();
    }; // End of function.
    FavoritesPage.prototype.onViewQuote = function (quote) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], quote);
        modal.present();
        // Getting the "remove" from the quote.ts file: 
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.onRemoveFromFavorites(quote);
            }
        });
    }; // End of onViewQuote function.
    FavoritesPage.prototype.onRemoveFromFavorites = function (quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
        // Refreshing the page underneath:
        this.quotes = this.quotesService.getFavoriteQuotes();
    }; // End of function().
    FavoritesPage.prototype.getBackground = function () {
        return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
    }; // End of function.
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/favorites/favorites.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons>\n	  	<button ion-button menuToggle> \n	  		<ion-icon name="menu"></ion-icon>\n	  	</button>\n  	</ion-buttons>\n    <ion-title>Favorite Quotes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item-sliding *ngFor="let quote of quotes">\n			<ion-item \n			[color]="getBackground()"\n			(click)="onViewQuote(quote)">\n				<h2>{{ quote.person }}</h2>\n				<p>{{ quote.text }} </p>\n			</ion-item>\n			<ion-item-options>\n				<button ion-button \n				color="danger"\n				(click)="onRemoveFromFavorites(quote)">\n					<ion-icon name="trash"></ion-icon>\n					Delete\n				</button>\n			</ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings__["a" /* SettingsService */]) === "function" && _c || Object])
    ], FavoritesPage);
    return FavoritesPage;
    var _a, _b, _c;
}()); // End of class 

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotePage = (function () {
    function QuotePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    } // End of constructor. 
    QuotePage.prototype.ionViewDidLoad = function () {
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
    };
    QuotePage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    }; // End of function.
    QuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quote',template:/*ion-inline-start:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/quote/quote.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ person }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding text-center>\n<ion-card>\n	<ion-card-content>\n		{{ text }}\n	</ion-card-content>\n	<ion-row>\n		<ion-col>\n			<button ion-button \n			small\n			outline \n			color="danger"\n			(click)="onClose(true)"\n			>Unfavorite</button>\n		</ion-col>\n	</ion-row>\n</ion-card>\n<button ion-button \ncolor="danger"\n(click)="onClose()">\nClose</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/quote/quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], QuotePage);
    return QuotePage;
}()); // End of the class.

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_quotes__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { NavParams } from 'ionic-angular';


var LibraryPage = (function () {
    function LibraryPage() {
        this.quotesPage = __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__["a" /* QuotesPage */];
    }
    /*
        constructor(private navParams: NavParams){
            
        }
    */
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_1__data_quotes__["a" /* default */];
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/library/library.html"*/'\n<ion-header>\n  <ion-navbar>\n  	<ion-buttons>\n	  	<button ion-button menuToggle> \n	  		<ion-icon name="menu"></ion-icon>\n	  	</button>\n  	</ion-buttons>\n    <ion-title>Quotes library</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<h3 text-center>Select your favorite Quote</h3>\n		<ion-list>\n			<button ion-item *ngFor="let quoteGroup of quoteCollection"\n			[navPush]="quotesPage" \n			[navParams]="quoteGroup"\n			>\n				<ion-icon [name]="quoteGroup.icon" item-left></ion-icon>\n				<h2>{{ quoteGroup.category | uppercase }}</h2>\n				<p>{{ quoteGroup.quotes.length }}</p>\n			</button>\n		</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/library/library.html"*/,
        })
    ], LibraryPage);
    return LibraryPage;
}()); // End of the class 

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotesPage = (function () {
    function QuotesPage(navParams, alertCtrl, quotesService) {
        // Can retrieve data from constructor but going to try another way 
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.quotesService = quotesService;
    }
    QuotesPage.prototype.ngOnInit = function () {
        this.quoteGroup = this.navParams.data;
    }; // End of ngOnInit() function
    /*
        ionViewDidLoad() {
            // Retrieving the data:
            // Must add the elvis operator(?) in the template to use this:
            this.quoteGroup = this.navParams.data;
    
        } // End of ionViewDidLoad() function.
    */
    QuotesPage.prototype.onAddToFavorites = function (selectedQuote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            subTitle: 'Are you sure?',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: function () {
                        _this.quotesService.addQuoteToFavorites(selectedQuote);
                    }
                },
                {
                    text: 'No, I changed my mind!',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancelled!');
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.onRemoveFromFavorites = function (quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
    }; // End of function.
    QuotesPage.prototype.isFavorite = function (quote) {
        return this.quotesService.isQuoteFavorite(quote);
    }; // End of function
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/quotes/quotes.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ quoteGroup.category | uppercase }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-card *ngFor="let quote of quoteGroup.quotes; let i = index">\n		\n		<ion-card-header>\n			<ion-title>\n				#{{ i + 1 }}\n			</ion-title>\n		</ion-card-header>\n\n		<ion-card-content>\n			<p>{{ quote.text }}</p>\n			<p class="author">{{ quote.person }}</p>\n		</ion-card-content>\n		<ion-row>\n			<ion-col text-right>\n				<button ion-button \n				clear \n				small\n				(click)="onAddToFavorites(quote)"\n				*ngIf="!isFavorite(quote)">\n					Favorite\n				</button>\n\n				<button ion-button \n				clear \n				small\n				color="danger"\n				(click)="onRemoveFromFavorites(quote)"\n				*ngIf="isFavorite(quote)">\n					Unfavorite\n				</button>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/quotes/quotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]])
    ], QuotesPage);
    return QuotesPage;
}()); // End of QuotesPage class 

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(settingsService) {
        this.settingsService = settingsService;
    } // End of constructor 
    SettingsPage.prototype.onToggle = function (toggle) {
        this.settingsService.setBackground(toggle.checked);
        console.log(toggle);
    }; // End of function 
    SettingsPage.prototype.checkAltBackground = function () {
        return this.settingsService.isAltBackground();
    }; // End of function
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n  	<ion-buttons>\n	  	<button ion-button menuToggle> \n	  		<ion-icon name="menu"></ion-icon>\n	  	</button>\n  	</ion-buttons>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<ion-label>Alternative Background</ion-label>\n			</ion-col>\n			<ion-col>\n				<ion-toggle class="toggle" (ionChange)="onToggle($event)" \n				[checked]="checkAltBackground()"></ion-toggle>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings__["a" /* SettingsService */]) === "function" && _a || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favorites_favorites__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_library_library__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_quote_quote__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_quotes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_settings__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                // A service
                __WEBPACK_IMPORTED_MODULE_12__services_quotes__["a" /* QuotesService */],
                __WEBPACK_IMPORTED_MODULE_13__services_settings__["a" /* SettingsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FavoritesPage } from '../pages/favorites/favorites';




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        //rootPage:any = FavoritesPage;
        //rootPage:any = TabsPage;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
        // Closing the menuCtrl:
        this.menuCtrl.close();
    }; // End of the onLoad function.
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/app/app.html"*/'<ion-menu [content]="nav">\n	<ion-header>\n		<ion-toolbar>\n			<ion-title>Menu</ion-title>\n		</ion-toolbar>\n	</ion-header>\n	<ion-content>\n		<ion-list>\n			<button ion-item (click)="onLoad(tabsPage)">\n				<ion-icon name="quote" item-left></ion-icon>\n				\n			</button>\n			<button ion-item (click)="onLoad(settingsPage)">\n				<ion-icon name="settings" item-left></ion-icon>\n			</button>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n\n<ion-nav [root]="tabsPage" #nav></ion-nav>\n'/*ion-inline-end:"/Users/Chris/Programming/Ionic/Favorite_Quotes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'inspirational',
        quotes: [
            {
                id: '1',
                person: 'Theodore Roosevelt',
                text: 'Believe you can and you\'re halfway there'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world.'
            },
            {
                id: '3',
                person: 'Robert H. Schuller',
                text: 'What great thing would you attempt if you knew you could not fail?'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'ability',
        quotes: [
            {
                id: '4',
                person: 'John Wooden',
                text: 'Ability may get you to the top, but it takes character to keep you there.'
            },
            {
                id: '5',
                person: 'Robert Frost',
                text: 'Education is the ability to listen to almost anything without losing your temper.'
            }
        ],
        icon: 'bicycle'
    },
    {
        category: 'enthusiasm',
        quotes: [
            {
                id: '6',
                person: 'Benjamin Disraeli',
                text: 'Every product of genius must be the product of enthusiasm.'
            },
            {
                id: '7',
                person: 'Norman Vincent Peale',
                text: 'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.'
            }
        ],
        icon: 'battery-charging'
    },
    {
        category: 'motivational',
        quotes: [
            {
                id: '8',
                person: 'Jim Rohn',
                text: 'Either you run the day or the day runs you.'
            },
            {
                id: '9',
                person: 'Donna Brazile',
                text: 'I was motivated to be different in part because I was different.'
            }
        ],
        icon: 'body'
    }
]);
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var SettingsService = (function () {
    function SettingsService() {
        this.altBackground = false;
    }
    SettingsService.prototype.setBackground = function (isAlt) {
        this.altBackground = isAlt;
    };
    SettingsService.prototype.isAltBackground = function () {
        return this.altBackground;
    };
    return SettingsService;
}()); // End of class 

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = (function () {
    function QuotesService() {
        this.favoriteQuotes = [];
    }
    QuotesService.prototype.addQuoteToFavorites = function (quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    };
    QuotesService.prototype.removeQuoteFromFavorites = function (quote) {
        var position = this.favoriteQuotes.findIndex(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
        console.log(this.favoriteQuotes);
    }; // End of removeQuoteFromFavorites().
    QuotesService.prototype.getFavoriteQuotes = function () {
        return this.favoriteQuotes.slice();
    }; // End of getFavoriteQuotes() function. 
    QuotesService.prototype.isQuoteFavorite = function (quote) {
        return this.favoriteQuotes.find(function (quoteEl) {
            return quoteEl.id == quote.id;
        });
    };
    return QuotesService;
}());

//# sourceMappingURL=quotes.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map