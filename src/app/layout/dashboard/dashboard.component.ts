import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Asadhya te sadhya karita sayas..karan abhyas',
                text: 'saint tukaram .'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Do You Know',
                text: 'Six million children out of school in India due to the impact of COVID-19; girls most affected.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text: 'Parent are the first teacher they.'
            },
            {
                imagePath: 'assets/images/slider4.jpg',
                label: 'Third slide label',
                text: 'Parent are the first teacher they.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: ` dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: ` dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
