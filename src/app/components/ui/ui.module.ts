import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ResumeFormModule} from '../core/resume-form/resume-form.module';



@NgModule({
    declarations: [LayoutComponent],
    exports: [
        LayoutComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    ResumeFormModule
  ]
})
export class UIModule { }
