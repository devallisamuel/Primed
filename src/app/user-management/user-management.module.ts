import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserManagementComponent, UserFormComponent, UserListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,UserManagementRoutingModule,MatDialogModule],
})
export class UserManagementModule {}
