import {Component} from '@angular/core';


@Component({
    selector: 'our-recent-work',
    templateUrl: 'app/components/ourRecentWork/ourRecentWorkComponent.html'
})
export class OurRecentWorkComponent {
    recentWork = [
        {
            id: 1,
            title: 'Radio Alarm iOS App',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 2,
            title: 'Portland UI Kit Free Sample',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {   id: 3,
            title: 'Carwash iOS App',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 4,
            title: 'Nexus 5 Mockups',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 5,
            title: 'The Rapture Startup',
            imgUrl: '../../../../styles/images/serviceStub.png'
        },
        {
            id: 6,
            title: 'Portland UI Kit',
            imgUrl: '../../../../styles/images/serviceStub.png'
        }]

}
