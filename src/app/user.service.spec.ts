import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './utility';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the initial users', () => {
    const users = service.getUsers();
    expect(users.length).toBe(1);
    expect(users[0].name).toBe('John');
  });

  it('should add a new user', () => {
    const newUser: User = {
      id: 0,
      name: 'Jane',
      email: 'Jane.Doe@gmail.com',
      role: 'Admin',
    };

    service.addUser(newUser);

    const users = service.getUsers();
    expect(users.length).toBe(2);
    expect(users[1].name).toBe('Jane');
    expect(users[1].role).toBe('Admin');
  });

  it('should edit an existing user', () => {
    const updatedUser: User = {
      id: 0,
      name: 'John Smith',
      email: 'John.Smith@gmail.com',
      role: 'Admin',
    };

    service.editUser(updatedUser, 0);

    const users = service.getUsers();
    expect(users.length).toBe(1);
    expect(users[0].name).toBe('John Smith');
    expect(users[0].role).toBe('Admin');
  });

  it('should delete a user', () => {
    service.deleteUser(0);

    const users = service.getUsers();
    expect(users.length).toBe(0);
  });
});
