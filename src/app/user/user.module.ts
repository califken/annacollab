import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent, UserComponent],
  imports: [CommonModule],
  exports: [LoginComponent, LogoutComponent, UserComponent],
})
export class UserModule {}
