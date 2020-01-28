import { NgModule } from '@angular/core';
import { UnTestComponent } from './un-test.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: UnTestComponent,
  }
];

@NgModule({
  declarations: [UnTestComponent],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [UnTestComponent]
})
export class UnTestModule { }
