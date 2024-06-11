import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string  ='';
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnClick.emit();
  }

}
