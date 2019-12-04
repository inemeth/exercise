import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaListerComponent } from './media-lister/media-lister.component';

const routes: Routes = [
  { path: '', component: MediaListerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
