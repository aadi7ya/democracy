import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemocracyRoutingModule } from './democracy-routing.module';
import { DemocracyComponent } from './democracy.component';

@NgModule({
  imports: [
    CommonModule,
    DemocracyRoutingModule
  ],
  declarations: [
    DemocracyComponent
  ]
})
export class DemocracyModule {}
