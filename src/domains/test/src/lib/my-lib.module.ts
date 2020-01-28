import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { RouterModule, Route } from '@angular/router';

const tasksRoutes: Route[] = [
  {
    path: '',
    component: MyLibComponent
  }
];

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    RouterModule.forChild(tasksRoutes)
  ],
  exports: [MyLibComponent]
})
export class UtModule { }
