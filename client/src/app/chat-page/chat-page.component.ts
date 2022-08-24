import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  template: `
    <div>
      <h1>Hello!</h1>
    </div>
  `,
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
