import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAndResetFormDataComponent } from './get-and-reset-form-data/get-and-reset-form-data.component';
import { NgModelGroupComponent } from './ng-model-group/ng-model-group.component';
import { SetAndPatchValueComponent } from './set-and-patch-value/set-and-patch-value.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { UsingNgmodelComponent } from './using-ngmodel/using-ngmodel.component';
import { UsingViewChildComponent } from './using-view-child/using-view-child.component';
import { ValidationsComponent } from './validations/validations.component';

const routes: Routes = [
  { path: 'simpleform', component: SimpleFormComponent },
  { path: 'usingviewchild', component: UsingViewChildComponent },
  { path: 'validations', component: ValidationsComponent },
  { path: 'ngModel', component: UsingNgmodelComponent },
  { path: 'ngModelGroup', component: NgModelGroupComponent },
  { path: 'setAndPatchValueComponent', component: SetAndPatchValueComponent },
  { path: 'getAndReset', component: GetAndResetFormDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
