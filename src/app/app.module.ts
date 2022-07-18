import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { UsingViewChildComponent } from './using-view-child/using-view-child.component';
import { ValidationsComponent } from './validations/validations.component';
import { UsingNgmodelComponent } from './using-ngmodel/using-ngmodel.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';
import { SetAndPatchValueComponent } from './set-and-patch-value/set-and-patch-value.component';
import { GetAndResetFormDataComponent } from './get-and-reset-form-data/get-and-reset-form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    UsingViewChildComponent,
    ValidationsComponent,
    UsingNgmodelComponent,
    NgModelGroupComponent,
    SetAndPatchValueComponent,
    GetAndResetFormDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
