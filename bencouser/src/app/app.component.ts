import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About Me', url: '/folder/about-me', icon: 'person' },
    { title: 'Work Experience', url: '/folder/work-experience', icon: 'bar-chart' },
    { title: 'Eduction', url: '/folder/eduction', icon: 'school' },
    { title: 'Engineering', url: '/folder/engineering', icon: 'terminal' },
    { title: 'Contact Me', url: '/folder/contact-me', icon: 'chatbox' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
