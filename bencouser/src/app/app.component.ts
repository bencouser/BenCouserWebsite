import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About Me', url: '/folder/about-me', icon: 'mail' },
    { title: 'Work Experience', url: '/folder/work-experience', icon: 'heart' },
    { title: 'Eduction', url: '/folder/eduction', icon: 'archive' },
    { title: 'RPA', url: '/folder/rpa', icon: 'paper-plane' },
    { title: 'Engineering', url: '/folder/engineering', icon: 'trash' },
    { title: 'Hobbies', url: '/folder/hobbies', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
