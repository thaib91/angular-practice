import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // h1Style: boolean = false; //similar to state on React

  users: Object;
  //dependency injection in the constructor

  constructor(private data:  DataService) { }

  //angular lifecycle hook, like a componentDidMount from React
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })
  }

}

//Different types of click events.

// (focus)="myMethod()"
// (blur)="myMethod()" 
// (submit)="myMethod()"  
// (scroll)="myMethod()"

// (cut)="myMethod()"
// (copy)="myMethod()"
// (paste)="myMethod()"

// (keydown)="myMethod()"
// (keypress)="myMethod()"
// (keyup)="myMethod()"

// (mouseenter)="myMethod()"
// (mousedown)="myMethod()"
// (mouseup)="myMethod()"

// (click)="myMethod()"
// (dblclick)="myMethod()"

// (drag)="myMethod()"
// (dragover)="myMethod()"
// (drop)="myMethod()"