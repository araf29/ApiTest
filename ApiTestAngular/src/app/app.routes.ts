import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

export const routes: Routes = [

    { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)},
    { path: '**', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}