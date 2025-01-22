import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

// const routes: Routes = [{ path: 'user-management', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) }];

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'user-management',
    loadChildren: () =>
      import('./user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
