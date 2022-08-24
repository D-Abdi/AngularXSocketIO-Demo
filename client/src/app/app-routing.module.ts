import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChatPageComponent} from "./chat-page/chat-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent, data: { name: "Home" }},
  {path: "chat", component: ChatPageComponent, data: { name: "Chat" }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
