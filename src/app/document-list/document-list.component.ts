import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DocumentList } from '../models/documents';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
})
export class DocumentListComponent implements OnInit {
  constructor(private ApiService: ApiService, private route: ActivatedRoute) {}
  url: string;
  keyword: string;
  pageSize: string;
  pageNo: string;
  documentList: DocumentList[];

  ngOnInit(): void {
    this.url = this.route.snapshot.queryParamMap.get('url');
    this.keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.pageSize = this.route.snapshot.queryParamMap.get('pageSize');
    this.pageNo = this.route.snapshot.queryParamMap.get('pageNo');

    this.ApiService.getDocuments(
      this.url,
      this.keyword,
      this.pageSize,
      this.pageNo
    ).subscribe((documentObject) => {
      this.documentList = documentObject.Documents.list;
    });
  }
}
