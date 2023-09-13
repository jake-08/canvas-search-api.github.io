import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentObject } from '../models/documents';
import { PageObject } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'https://onepathsuperinvest.com.au/api/search?q=easy&type=doc';
  constructor(private http: HttpClient) {}

  getDocuments(url: string, query: string): Observable<DocumentObject> {
    const endpoint = url + '/api/search?q=' + query + '&type=doc&dps=100';
    return this.http.get<DocumentObject>(endpoint);
  }

  getPages(url: string, query: string): Observable<PageObject> {
    const endpoint = url + '/api/search?q=' + query + '&type=page&pps=100';
    return this.http.get<PageObject>(endpoint);
  }
}
