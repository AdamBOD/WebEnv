import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mobile-project',
    templateUrl: './mobile-project.component.html',
    styleUrls: ['./mobile-project.component.scss']
})
export class MobileProjectComponent implements OnInit {
    @Input() data;
    
    constructor() { }

    ngOnInit() {
    }

}
