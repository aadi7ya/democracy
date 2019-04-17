import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionsComponent } from './elections.component';

const routes: Routes = [
  {
    path: '',
    component: ElectionsComponent
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
export class ElectionsRoutingModule { }
