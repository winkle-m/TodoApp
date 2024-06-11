import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TasksComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;
  
  constructor(private uiService: UiService, private router: Router){
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value));
  }

  toggleAddTask(){ 
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
