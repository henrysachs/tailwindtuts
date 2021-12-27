import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hachs-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() text = '';
  @Input() timestamp = '';
  @Input() user = '';

  constructor() {}

  ngOnInit(): void {}
}
