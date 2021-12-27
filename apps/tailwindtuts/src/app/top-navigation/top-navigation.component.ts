import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hachs-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent implements OnInit {
  public darkMode = true;
  constructor() {}

  ngOnInit(): void {}

  toggleMode() {
    this.darkMode = !this.darkMode;
  }
}
