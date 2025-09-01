import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './features/auth/signup/signup.component';
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [

    { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
    { path: 'signup', component: SignupComponent},
    { path: '**', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        FormsModule,
        SharedModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}