import { Component } from "@angular/core";
import { Slide } from "../../models/slideModel";
import { ServiceItem} from "../../models/serviceItemModel"
import { Work} from "../../models/workModel"
import { Profit} from "../../models/profitModel"
import { SlidesService } from "../../services/slides.service";
import { OurServicesService} from "../../services/ourServices.service"
import {WhyWeService} from "../../services/whyWe.service"
import {OurRecentWorksService} from "../../services/ourRecentWorks.service"

@Component({
  templateUrl: './app/views/home/homeView.html'
})
export class HomeView {
    constructor(private slidesService: SlidesService,
                private  ourServices: OurServicesService,
    private whyWeService: WhyWeService,
    private ourRecentWorksService: OurRecentWorksService) { }
    homeSlides: Slide[]
    services: ServiceItem[]
    profits: Profit[]
    ourWorks: Work[]

    ngOnInit() {
        this.homeSlides = this.slidesService.getHomeSlides()
        this.services = this.ourServices.get()
        this.profits = this.whyWeService.get()
        this.ourWorks= this.ourRecentWorksService.get()
    }

    carousel: any = {
        interval : 5000,
        noWrapSlides: false
    }
}
