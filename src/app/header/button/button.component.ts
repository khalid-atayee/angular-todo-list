import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color:any;
  @Input() text:any;
  @Output() btnCLick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.btnCLick.emit();
    
  }

}
