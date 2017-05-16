import {Component} from '@angular/core';

@Component({
    selector: 'app-assignment-two',
    templateUrl: './assignment-two.component.html'
})
export class AssignmentTwoComponent {
    username = '';

    onResetUsername() {
        this.username = '';
    }

    usernameIsEmpty() {
        return this.username.length > 0;
    }
}
