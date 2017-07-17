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
var core_1 = require("@angular/core");
var deployment_service_1 = require("../service/deployment.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(deploymentService) {
        this.deploymentService = deploymentService;
        this.pageTitle = 'Deployment Status';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getDeploymentsByDate(Date.now());
    };
    WelcomeComponent.prototype.getData = function (formValue) {
        this.date = new Date(formValue.date).getTime();
        this.getDeploymentsByDate(this.date);
    };
    WelcomeComponent.prototype.getDeploymentsByDate = function (date) {
        var _this = this;
        this.deploymentService.getDeployments(date).subscribe(function (deployments) { _this.deployments = deployments; });
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'deploy-list',
        templateUrl: 'app/home/welcome.component.html',
    }),
    __metadata("design:paramtypes", [deployment_service_1.DeploymentService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map