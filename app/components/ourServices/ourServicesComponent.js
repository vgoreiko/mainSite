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
var OurServicesComponent = (function () {
    function OurServicesComponent() {
        this.services = [
            {
                id: 1,
                title: 'Brand Identity',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 2,
                title: 'UI/UX design',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            { id: 3,
                title: 'Web development',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 4,
                title: 'Mobile development',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 5,
                title: 'Content creation',
                imgUrl: '../../../../styles/images/serviceStub.png'
            },
            {
                id: 6,
                title: 'Workflow',
                imgUrl: '../../../../styles/images/serviceStub.png'
            }];
    }
    OurServicesComponent = __decorate([
        core_1.Component({
            selector: 'our-services',
            templateUrl: 'app/components/ourServices/ourServicesComponent.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OurServicesComponent);
    return OurServicesComponent;
}());
exports.OurServicesComponent = OurServicesComponent;
//# sourceMappingURL=ourServicesComponent.js.map