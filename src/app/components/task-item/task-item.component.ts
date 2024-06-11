import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor(){}

  onDelete(task: Task | undefined){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | undefined){
    this.onToggleReminder.emit(task);
  }

}
