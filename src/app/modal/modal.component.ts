import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { User } from '../utility';

@Component({
  selector: 'app-modal',
  standalone: false,

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any | User
  ) {
    this.userForm = this.fb.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      role: [data.role, Validators.required],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.userService.editUser(this.userForm.value, this.data.id);
      this.userForm.reset();
    }
  }
}
