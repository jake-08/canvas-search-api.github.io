import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { PageListComponent } from './page-list/page-list.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';

const routes: Routes = [
  { path: '', component: KeywordSearchComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'pages', component: PageListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
