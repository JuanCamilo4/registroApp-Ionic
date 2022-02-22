import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  hacerInvisible() {
    this.visible = false;
  }
  hacerVisible() {
    this.visible = true;
  }

}
