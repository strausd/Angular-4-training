import {Component} from '@angular/core';

@Component({
    selector: 'app-assignment-three',
    templateUrl: './assignment-three.component.html',
    styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent {
    displayDetails = false;
    clicks = [];

    onClick() {
        this.displayDetails = !this.displayDetails;
        this.clicks.push(new Date());
    }
}
