import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
//  template:`<app-server></app-server>
//  hi this is Peter
//  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus=false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
   }

  ngOnInit(): void {
  }

}
