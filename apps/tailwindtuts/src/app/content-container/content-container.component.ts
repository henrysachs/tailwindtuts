import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserComment } from '../shared/interfaces/comment';
import { Message } from '../shared/interfaces/message';

@Component({
  selector: 'hachs-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css'],
})
export class ContentContainerComponent implements OnInit {
  messages: Message[] = [
    { user: 'Padde', text: 'Hey guys', timestamp: '7 days ago' },
    { user: 'Henry', text: 'Hey Padde', timestamp: '6 days ago' },
    { user: 'Robin', text: 'Hey Henry and Padde', timestamp: '5 days ago' },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<UserComment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe((comments) => {
        comments.map((comment) => {
          this.messages = [
            ...this.messages,
            {
              text: comment.body,
              timestamp: `${1337 - comment.id} minutes ago`,
              user: comment.email,
            },
          ];
        });
      });
  }
}
