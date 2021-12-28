import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'hachs-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  public darkMode = true;
  constructor(private darkModeService:DarkmodeService) {}

  ngOnInit(): void {
    this.darkModeService.$darkmode.subscribe((isDarkMode) => {
      this.darkMode = isDarkMode;
    })
  }

  toggleMode() {
    this.darkMode = !this.darkMode;
    this.darkModeService.$darkmode.next(this.darkMode);
  }
}
