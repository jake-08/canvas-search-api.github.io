import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DocumentObject } from '../models/documents';
import { PageObject } from '../models/page';
import { CastObject } from '../models/cast';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDocuments(
    url: string,
    keyword: string,
    pageSize: string,
    pageNo: string
  ): Observable<DocumentObject> {
    const endpoint = `${url}/api/search?${keyword}&type=doc&dps=${pageSize}&dp=${pageNo}`;
    return this.http.get<DocumentObject>(endpoint);
  }

  getPages(
    url: string,
    keyword: string,
    pageSize: string,
    pageNo: string
  ): Observable<PageObject> {
    const endpoint = `${url}/api/search?${keyword}type=page&pps=${pageSize}&pp=${pageNo}`;
    return this.http.get<PageObject>(endpoint);
  }

  getCasts(
    url: string,
    keyword: string,
    pageSize: string,
    pageNo: string
  ): Observable<CastObject> {
    const endpoint = `${url}/api/search?${keyword}type=cast&cps=${pageSize}&cp=${pageNo}`;
    return this.http.get<CastObject>(endpoint);
  }
}
