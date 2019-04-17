import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionsComponent } from './elections/elections.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'democracy',
    loadChildren: './democracy/democracy.module#DemocracyModule'
  },
  {
    path: 'elections',
    loadChildren: './elections/elections.module#ElectionsModule'
  },
  {
    path: 'candidates',
    loadChildren: './candidates/candidates.module#CandidatesModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
