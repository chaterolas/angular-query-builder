import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConditionBuilderComponent } from './condition-builder/condition-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionBuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
