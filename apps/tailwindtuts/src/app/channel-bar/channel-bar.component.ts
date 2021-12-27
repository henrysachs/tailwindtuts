import { Component, OnInit } from '@angular/core';
import { Channel } from '../shared/interfaces/channel';

@Component({
  selector: 'hachs-channel-bar',
  templateUrl: './channel-bar.component.html',
  styleUrls: ['./channel-bar.component.css'],
})
export class ChannelBarComponent implements OnInit {
  channels: Channel[] = [
    { name: 'animals', topics: ['robin', 'cats', 'dogs'] },
    { name: 'anime', topics: ['hxh', 'tokio revengy boi', 'jojo'] },
    { name: 'off-topic', topics: ['mirror', 'tailwind', 'angular'] },
  ];
  constructor() {}

  ngOnInit(): void {}
}
