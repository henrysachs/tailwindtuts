import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../shared/interfaces/server';

@Component({
  selector: 'hachs-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  links: NavigationItem[] = [
    { name: 'hero-home', tooltip: '🏠 Home' },
    { name: 'hero-star', tooltip: '🌟 VIP Area' },
    { name: 'hero-cube-transparent', tooltip: '🎲 Games' },
    { name: 'hero-cog', tooltip: '⚙ Settings' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
