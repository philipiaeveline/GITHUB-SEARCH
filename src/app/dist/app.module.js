"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppBootstrapModule = exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var repositories_component_1 = require("./repositories/repositories.component");
var search_form_component_1 = require("./search-form/search-form.component");
var search_component_1 = require("./search/search.component");
var search_request_service_1 = require("./search-request.service");
var navbar_component_1 = require("./navbar/navbar.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                repositories_component_1.RepositoriesComponent,
                search_form_component_1.SearchFormComponent,
                search_component_1.SearchComponent,
                navbar_component_1.NavbarComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.RoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [search_request_service_1.SearchRequestService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    return AppBootstrapModule;
}());
exports.AppBootstrapModule = AppBootstrapModule;
