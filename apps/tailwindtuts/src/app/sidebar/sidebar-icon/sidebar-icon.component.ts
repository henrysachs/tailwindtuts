import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hachs-sidebar-icon',
  templateUrl: './sidebar-icon.component.html',
  styleUrls: ['./sidebar-icon.component.css'],
})
export class SidebarIconComponent implements OnInit {
  @Input() iconName = '';
  @Input() iconDescription = '';
  constructor() {}

  ngOnInit(): void {}
}
