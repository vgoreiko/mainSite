"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var servicesMock_1 = require('../mocks/servicesMock');
var OurServicesService = (function () {
    function OurServicesService() {
    }
    OurServicesService.prototype.get = function () {
        return servicesMock_1.services;
    };
    OurServicesService.prototype.getById = function (id) {
        return servicesMock_1.services[id - 1] ? servicesMock_1.services[id - 1] : null;
    };
    OurServicesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OurServicesService);
    return OurServicesService;
}());
exports.OurServicesService = OurServicesService;
//# sourceMappingURL=ourServices.service.js.map