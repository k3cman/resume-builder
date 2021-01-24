import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeViewComponent } from './resume-view.component';



@NgModule({
    declarations: [ResumeViewComponent],
    exports: [
        ResumeViewComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ResumeViewModule { }
