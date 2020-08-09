import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-desktop-project',
    templateUrl: './desktop-project.component.html',
    styleUrls: ['./desktop-project.component.scss']
})
export class DesktopProjectComponent implements OnInit {
    @Input() data;

    constructor() { }

    ngOnInit() {
    }

}
