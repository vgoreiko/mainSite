import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate";
import { MainService } from "./../../../services/main.service"
require("./headerComponent.less")

@Component({
    selector: 'main-header',
    template: require("./headerComponent.html")
})
export class HeaderComponent {
    constructor(private translate: TranslateService, private mainService: MainService){
    }

    private get currentLang(){
        return this.translate.currentLang
    }

    get isEnglish(){
        return this.currentLang==='en'
    }

    get isRussian(){
        return this.currentLang === 'ru'
    }

    changeLang(lang: string) {
        this.mainService.currentChosenLanguage = lang;
        this.translate.use(lang);
    }
}
