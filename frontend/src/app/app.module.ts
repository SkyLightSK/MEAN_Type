import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule, MatTabsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { IssueService } from './issue.service';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuardService} from "./auth-guard.service";
import {ProfileComponent} from "./profile/profile.component";
import {AuthenticationService} from "./authentication.service";

export const routes: Routes = [
  { path: '', component: HomeComponent , label: 'Home' },
  { path: 'login', component: LoginComponent , label: 'Login' },
  { path: 'register', component: RegisterComponent , label: 'Register'},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] , label: 'Profile' },
  { path: 'create', component: CreateComponent , label: 'Create'} ,
  { path: 'edit/:id', component: EditComponent , label: 'Edit'},
  { path: 'list', component: ListComponent , label: 'List'},
  // { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTabsModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
      IssueService,
      AuthenticationService,
      AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
