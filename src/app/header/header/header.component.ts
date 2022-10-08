import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title = "Traversy Media";

  constructor() { }

  ngOnInit(): void {
  }
  toggleBtn(){
    alert('you done very well input and output in angular');
  }

}
