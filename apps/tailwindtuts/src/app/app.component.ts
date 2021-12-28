import { Component } from '@angular/core';
import { DarkmodeService } from './darkmode.service';

@Component({
  selector: 'hachs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tailwindtuts';

  constructor(public darkmodeService: DarkmodeService){}
}
