import { Component, OnInit } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userName: string = "";

  constructor(private socket: Socket, private router: Router) {}

  ngOnInit(): void {
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    localStorage.setItem("userName", this.userName);
    this.socket.emit("newUser", { userName: this.userName, socketID: this.socket.ioSocket.id });
    this.router.navigate(["/", "chat"]).then(nav => {
      console.log(nav)
    }, err => {
      console.log(err)
    });
  }
}
