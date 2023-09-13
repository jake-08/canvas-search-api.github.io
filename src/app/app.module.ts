import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KeywordSearchComponent } from './keyword-search/keyword-search.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentListComponent } from './document-list/document-list.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [AppComponent, KeywordSearchComponent, DocumentListComponent, PageListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
