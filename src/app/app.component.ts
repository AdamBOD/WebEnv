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
            name: "SysMonitor (Finished)",
            description: "A desktop application for monitoring hardware such as CPU, Memory, GPU and Fans",
            projectType: "Desktop",
            url: "https://github.com/AdamBOD/SysMonitor",
            image: "https://webenv.io/project-images/SysMonitor.png"
        },
        {
            name: "DropTop (Ongoing)",
            description: "A web application (with browser extension) for sharing small data and files across platforms",
            projectType: "Desktop",
            url: "https://github.com/AdamBOD/DropTop",
            image: "https://webenv.io/project-images/DropTop.png"
        },
        {
            name: "C-Shanties (Ongoing)",
            description: "An Electron application (built with Angular 9) for indexing and playing music on your local drive",
            projectType: "Desktop",
            url: "https://github.com/AdamBOD/C-Shanties",
            image: "https://webenv.io/project-images/CShanties.png"
        },
        {
            name: "mHealth (Finished)",
            description: "An all-in-one mobile solution for monitoring a user's health information gathered from a smart watch and recommending means of improving their health",
            projectType: "Mobile",
            url: "https://github.com/AdamBOD/mHealth-android",
            image: "https://webenv.io/project-images/mHealth.png"
        },
        {
            name: "Tides (Finished)",
            description: "A web application for displaying tide information and weather forecasts for a user's current location",
            projectType: "Mobile",
            url: "https://github.com/AdamBOD/tides",
            image: "https://webenv.io/project-images/Tides.png"
        }
    ];
}
