import { Component, OnInit } from '@angular/core';
import socketIO from "socket.io-client"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

  setUserName(event: Event) {
    event.preventDefault();
  }
}
