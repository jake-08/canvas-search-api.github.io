import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // the type value is linked to route
  types: Type[] = [
    { value: 'page', viewValue: 'Page' },
    { value: 'doc', viewValue: 'Document' },
    { value: 'cast', viewValue: 'Cast' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {}

  form = this.formBuilder.group({
    url: ['https://dash.com.au', Validators.required],
    keyword: [''],
    type: ['page'],
    pageSize: ['10'],
    pageNo: ['1'],
  });

  showTableResult() {
    // prepareExternalUrl for '#'
    const tableUrl = this.location.prepareExternalUrl(
      this.router.serializeUrl(
        this.router.createUrlTree([this.form.value.type], {
          queryParams: {
            url: this.formatUrl(this.form.value.url.trim()),
            keyword: this.formatKeyword(this.form.value.keyword),
            pageSize: this.form.value.pageSize,
            pageNo: this.form.value.pageNo,
          },
        })
      )
    );

    window.open(tableUrl, '_blank');
  }

  showJsonResult() {
    const jsonUrl = this.constructJsonResultUrl(
      this.form.value.type,
      this.formatUrl(this.form.value.url.trim()),
      this.formatKeyword(this.form.value.keyword),
      this.form.value.pageSize,
      this.form.value.pageNo
    );

    window.open(jsonUrl, '_blank');
  }

  private constructJsonResultUrl(type, url, keyword, pageSize, pageNo) {
    if (type == 'page') {
      return `${url}/api/search?${keyword}type=${type}&pps=${pageSize}&pp=${pageNo}`;
    } else if (type == 'doc') {
      return `${url}/api/search?${keyword}type=${type}&dps=${pageSize}&dp=${pageNo}`;
    } else if (type == 'cast') {
      return `${url}/api/search?${keyword}type=${type}&cps=${pageSize}&cp=${pageNo}`;
    }
  }

  private formatUrl(url: string) {
    // Check url only has first two slash
    if (url.indexOf('/') == 6 && url.lastIndexOf('/') == 7) return url;

    // Check if there is '/' in the end of url, if so, remove it
    if (url.lastIndexOf('/') != 7) {
      return url.slice(0, url.length - 1);
    }
    return url;
  }

  private formatKeyword(keyword: string) {
    if (keyword.length == 0) return '';

    return `q=${keyword.trim()}&`;
  }
}
