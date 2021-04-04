import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UkPostListComponent } from './channels/uk/uk-post-list/uk-post-list.component';
import { GermanyPostListComponent } from './channels/germany/germany-post-list/germany-post-list.component';
import { CanadaPostListComponent } from './channels/canada/canada-post-list/canada-post-list.component';
import { AustraliaPostListComponent } from './channels/australia/australia-post-list/australia-post-list.component';
import { UsaPostListComponent } from './channels/usa/usa-post-list/usa-post-list.component';
import { HomeComponent } from './home/home/home.component';
import { PinsListComponent } from './pins-list/pins-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'usa', component: UsaPostListComponent },
  // { path: 'uk', component: UkPostListComponent },
  // { path: 'germany', component: GermanyPostListComponent },
  // { path: 'canada', component: CanadaPostListComponent },
  // { path: 'australia', component: AustraliaPostListComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: UsaPostListComponent },
      {
        path: 'usa',
        component: UsaPostListComponent,
      },
      { path: 'uk', component: UkPostListComponent },
      { path: 'germany', component: GermanyPostListComponent },
      { path: 'canada', component: CanadaPostListComponent },
      { path: 'australia', component: AustraliaPostListComponent },
    ],
  },
  { path: 'pins', component: PinsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
