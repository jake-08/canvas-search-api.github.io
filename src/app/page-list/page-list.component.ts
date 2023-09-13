import { Component } from '@angular/core';
import { PageList } from '../models/page';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent {
  constructor(private ApiService: ApiService) {}

  pageList: PageList[];

  ngOnInit(): void {
    const url = 'https://onepathsuperinvest.com.au';
    const query = 'transact';
    this.ApiService.getPages(url, query).subscribe((pageObject) => {
      this.pageList = pageObject.Pages.list.map((page) => {
        page.URL = [url, page.URL].join("");
        return page;
      });
      console.log(this.pageList);
    });
  }
}
