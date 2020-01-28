import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'second',
    loadChildren: () => import('@app/untest').then(m => m.UnTestModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}