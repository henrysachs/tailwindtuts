import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hachs-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  @Input() name = 'nothing to see here';
  constructor() {}

  ngOnInit(): void {}
}
