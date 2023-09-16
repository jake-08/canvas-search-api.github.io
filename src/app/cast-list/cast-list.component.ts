import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CastList } from '../models/cast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cast-list',
  templateUrl: './cast-list.component.html',
})
export class CastListComponent implements OnInit {
  constructor(private ApiService: ApiService, private route: ActivatedRoute) {}
  url: string;
  keyword: string;
  pageSize: string;
  pageNo: string;
  castList: CastList[];

  ngOnInit(): void {
    this.url = this.route.snapshot.queryParamMap.get('url');
    this.keyword = this.route.snapshot.queryParamMap.get('keyword');
    this.pageSize = this.route.snapshot.queryParamMap.get('pageSize');
    this.pageNo = this.route.snapshot.queryParamMap.get('pageNo');

    this.ApiService.getCasts(
      this.url,
      this.keyword,
      this.pageSize,
      this.pageNo
    ).subscribe((castObject) => {
      this.castList = castObject.Casts.list.map((cast) => {
        if (cast.LinkUrl != '')
          if (!cast.LinkUrl.includes('https://'))
            cast.LinkUrl = [this.url, cast.LinkUrl].join('');
        if (cast.FileUrl != '')
          if (!cast.FileUrl.includes('https://'))
            cast.FileUrl = [this.url, cast.FileUrl].join('');
        if (cast.ImageLink != '') {
          if (!cast.ImageLink.includes('https://'))
            cast.ImageLink = [this.url, cast.ImageLink].join('');
        }

        return cast;
      });
    });
  }
}
