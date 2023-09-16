import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { PageListComponent } from './page-list/page-list.component';
import { HomeComponent } from './home/home.component';
import { CastListComponent } from './cast-list/cast-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page', component: PageListComponent },
  { path: 'doc', component: DocumentListComponent },
  { path: 'cast', component: CastListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
