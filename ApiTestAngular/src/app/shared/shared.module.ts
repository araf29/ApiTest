import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [SpinnerComponent
  ],
  imports: [
    CommonModule, RouterLink
  ],
  exports: [SpinnerComponent, CommonModule]
})
export class SharedModule { }
