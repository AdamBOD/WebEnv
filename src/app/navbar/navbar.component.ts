import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    navButtonClicked(event:any) {
        console.log (event.target.id)
        let elmnt
        switch (event.target.id) {
            case "homeButton":
                elmnt = document.getElementById("home");
                elmnt.scrollIntoView({behavior: "smooth"});
                break;
            case "aboutButton":
                elmnt = document.getElementById("aboutMe");
                elmnt.scrollIntoView({behavior: "smooth"});
                break;
            case "projectsButton":
                elmnt = document.getElementById("projects");
                elmnt.scrollIntoView({behavior: "smooth"});
                break;
            case "githubButton":
                elmnt = document.getElementById("github");
                elmnt.scrollIntoView({behavior: "smooth"});
                break;
            case "contactButton":
                elmnt = document.getElementById("contact");
                elmnt.scrollIntoView({behavior: "smooth"});
                break;
        }
    }
}
