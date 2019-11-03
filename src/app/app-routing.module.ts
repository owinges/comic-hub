import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsPageComponent } from './pages/comics/comics.page';
import { ComicDetailPageComponent } from './pages/comic-detail/comic-detail.page';


const routes: Routes = [
  { path: 'comics/:slug', component: ComicDetailPageComponent },
  {
    path: 'comics',
    component: ComicsPageComponent,
    data: { title: 'Comic List' }
  },
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  { path: '**', redirectTo: '/comics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
