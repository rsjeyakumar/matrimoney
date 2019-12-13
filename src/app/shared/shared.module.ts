import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
/* Prime NG modules */
import { CalendarModule } from 'primeng/calendar';
import { StepsModule } from 'primeng/steps';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpService } from './services/http.service';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule,
    OverlayPanelModule, CalendarModule, RouterModule, StepsModule,
    DialogModule, ToastModule
  ],
  providers: [HttpService],
  exports: [HeaderComponent, FooterComponent, ReactiveFormsModule,
    CalendarModule, RouterModule, StepsModule, DialogModule, ToastModule]
})
export class SharedModule { }
