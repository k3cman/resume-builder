import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UIModule} from './components/ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UIModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormlyModule.forRoot({ extras: { lazyRender: true } }),
        FormlyMaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
