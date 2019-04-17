import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionsRoutingModule } from './elections-routing.module';
import { ElectionsComponent } from './elections.component';

@NgModule({
  imports: [
    CommonModule,
    ElectionsRoutingModule
  ],
  declarations: [
    ElectionsComponent
  ]
})
export class ElectionsModule {}
