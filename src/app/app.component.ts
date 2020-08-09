import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'WebEnv';

    projects = [
        {
            name: "SysMonitor",
            description: "A desktop application for monitoring hardware such as CPU, Memory, GPU and Fans",
            projectType: "Desktop",
            url: "github.com/AdamBOD/SysMonitor"
        },
        {
            name: "mHealth",
            description: "An all-in-one mobile solution for monitoring a user's health information gathered from a smart watch and recommending means of improving their health",
            projectType: "Mobile",
            url: "github.com/AdamBOD/mHealth-android"
        }
    ];
}
