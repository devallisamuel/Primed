import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { UserService } from '../../user.service';
import { User } from '../../utility';

@Component({
  selector: 'app-user-list',
  standalone: false,

  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[];

  constructor(private userService: UserService, private dialog: MatDialog) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {}

  deleteUser(id: number) {
    debugger;
    this.userService.deleteUser(id);
  }

  editUser(userId: number) {
    // Implement edit logic
    this.openModal(userId);
  }

  openModal(userId: number): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: this.users[userId],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
    });
  }
}
