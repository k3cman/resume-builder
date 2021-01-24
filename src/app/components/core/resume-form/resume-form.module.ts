import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeFormComponent } from './resume-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';



@NgModule({
    declarations: [ResumeFormComponent],
    exports: [
        ResumeFormComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormlyModule.forChild()
  ]
})
export class ResumeFormModule { }
