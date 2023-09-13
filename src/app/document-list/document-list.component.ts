import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DocumentList } from '../models/documents';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  constructor(private ApiService: ApiService) {}

  documentList: DocumentList[];

  ngOnInit(): void {
    const url = 'https://onepathsuperinvest.com.au';
    const query = 'transact';
    this.ApiService.getDocuments(url, query).subscribe((documentObject) => {
      this.documentList = documentObject.Documents.list.map((doc) => {
        // To Remove "Original Link: " from Description
        doc.Description = doc.Description?.slice(14);
        return doc;
      });
      console.log(this.documentList);
    });
  }
}
