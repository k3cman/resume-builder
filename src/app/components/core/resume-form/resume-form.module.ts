import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeFormComponent } from './resume-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
    declarations: [ResumeFormComponent],
    exports: [
        ResumeFormComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ]
})
export class ResumeFormModule { }
