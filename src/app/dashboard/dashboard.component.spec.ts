import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { User } from '../utility';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['getUsers']);

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: UserService, useValue: spy }],
    }).compileComponents();

    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate user statistics correctly', () => {
    const mockUsers:User[] = [
      { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
      { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User' },
      { id: 3, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
    ];

    userServiceSpy.getUsers.and.returnValue(mockUsers);

    // Call ngOnInit manually since it won't automatically run during testing
    component.ngOnInit();

    expect(component.totalUsers).toBe(3);
    expect(component.adminCount).toBe(1);
    expect(component.userCount).toBe(2);
  });

  it('should display user statistics in the template', () => {
    const mockUsers:User[] = [
      { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
      { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User' },
      { id: 3, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
    ];

    userServiceSpy.getUsers.and.returnValue(mockUsers);

    // Call ngOnInit and trigger change detection
    component.ngOnInit();
    fixture.detectChanges();

    // Check the DOM for correct values
    const totalUsersEl = fixture.debugElement.query(
      By.css('p:nth-child(2)')
    ).nativeElement;
    const adminCountEl = fixture.debugElement.query(
      By.css('p:nth-child(4)')
    ).nativeElement;
    const userCountEl = fixture.debugElement.query(
      By.css('p:nth-child(6)')
    ).nativeElement;

    expect(totalUsersEl.textContent).toContain('3');
    expect(adminCountEl.textContent).toContain('1');
    expect(userCountEl.textContent).toContain('2');
  });
});
