import { Component, Input, OnInit } from '@angular/core';
import { Channel } from '../../shared/interfaces/channel';

@Component({
  selector: 'hachs-channel-group',
  templateUrl: './channel-group.component.html',
  styleUrls: ['./channel-group.component.css'],
})
export class ChannelGroupComponent implements OnInit {
  expanded = false;

  @Input() channel: Channel = {
    name: 'hallo',
    topics: ['robin', 'hat', 'gesagt', 'mach', 'mal'],
  };

  constructor() {}

  ngOnInit(): void {}

  expand() {
    this.expanded = !this.expanded;
  }
}
