import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemocracyComponent } from './democracy.component';

const routes: Routes = [
  {
    path: '',
    component: DemocracyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemocracyRoutingModule {}
