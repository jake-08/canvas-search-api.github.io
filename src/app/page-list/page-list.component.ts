import { Component } from '@angular/core';
import { PageList } from '../models/page';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
})
export class PageListComponent {
  constructor(private ApiService: ApiService, private route: ActivatedRoute) {}

  url: string;
  keyword: string;
  pageSize: string;
  pageNo: string;
  pageList: PageList[];

  ngOnInit(): void {
    this.url = this.route.snapshot.queryParamMap.get('url');
    this.keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.pageSize = this.route.snapshot.queryParamMap.get('pageSize');
    this.pageNo = this.route.snapshot.queryParamMap.get('pageNo');

    this.ApiService.getPages(
      this.url,
      this.keyword,
      this.pageSize,
      this.pageNo
    ).subscribe((pageObject) => {
      this.pageList = pageObject.Pages.list.map((page) => {
        page.URL = [this.url, page.URL].join('');
        return page;
      });
    });
  }
}
