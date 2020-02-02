import { NgModule } from '@angular/core';
import { UnTestComponent } from './un-test.component';
import { RouterModule, Route } from '@angular/router';
import { TrimLinePipe } from './pipes/trim-line.pipe';

const routes: Route[] = [
  {
    path: '',
    component: UnTestComponent,
  }
];

@NgModule({
  declarations: [
    UnTestComponent,
    TrimLinePipe,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [UnTestComponent]
})
export class UnTestModule { }
