import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersManagementComponent} from './users-management/users-management.component';
import {MessagesModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {MessageModule} from 'primeng/message';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/userService';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';

const routes: Routes = [
  {path: 'users-management', component: UsersManagementComponent},
  {path: '', redirectTo: 'users-management', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TableModule,
    MessageModule,
    MessagesModule,
    DialogModule,
    PanelModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
