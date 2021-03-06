import { Component, Input } from '@angular/core';
import { Profile } from '../cd.component';

@Component({
    selector: 'course-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css']
})
export class DefaultComponent {

    @Input()
    public profile!: Profile;
}
