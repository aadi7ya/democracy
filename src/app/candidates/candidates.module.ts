import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';

@NgModule({
  imports: [
    CommonModule,
    CandidatesRoutingModule
  ],
  declarations: [
    CandidatesComponent
  ]
})
export class CandidatesModule {}
