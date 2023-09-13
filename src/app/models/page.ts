export interface PageObject {
  Pages: Page;
}

export interface Page {
  list: PageList[];
  page: number;
  pagesize: number;
  total: number;
}

export interface PageList {
  ID: number;
  Name: string;
  Ref: string;
  Route: string;
  Content: string[];
  URL: string;
}
