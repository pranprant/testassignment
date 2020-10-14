import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './users/registration/registration.component';
import { ThankyouComponent } from './users/thankyou/thankyou.component';

const routes: Routes = [
  { path: '',   redirectTo: '/user-registration', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'user-registration', component: RegistrationComponent },
  { path: 'success', component: ThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
