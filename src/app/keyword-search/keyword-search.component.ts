import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Document, DocumentObject, DocumentList } from '../models/documents';

@Component({
  selector: 'app-keyword-search',
  templateUrl: './keyword-search.component.html',
  styleUrls: ['./keyword-search.component.css'],
})
export class KeywordSearchComponent implements OnInit {
  constructor(private ApiService: ApiService) {}
  documentObject: DocumentObject;
  documentList: DocumentList[];

  ngOnInit(): void {
    // this.ApiService.getDocuments().subscribe((documentObject) => {
    //   this.documentList = documentObject.Documents.list.map((doc) => {
    //     // To Remove "Original Link: " from Description
    //     doc.Description = doc.Description?.slice(14);
    //     return doc;
    //   });
    //   console.log(this.documentList);
    // });
  }
}
