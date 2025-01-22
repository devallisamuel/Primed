import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  totalUsers = 0;
  adminCount = 0;
  userCount = 0;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const users = this.userService.getUsers();
    this.totalUsers = users.length;
    this.adminCount = users.filter((u) => u.role === 'Admin').length;
    this.userCount = users.filter((u) => u.role === 'User').length;
  }
}
