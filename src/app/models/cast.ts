export interface CastObject {
  Casts: Cast;
}

export interface Cast {
  list: CastList[];
  page: number;
  pagesize: number;
  total: number;
}

export interface CastList {
  ID: string;
  Type: string;
  Title: string;
  Summary: string;
  Brief: string;
  Content: string;
  LinkUrl: string;
  FileUrl: string;
  ImageLink: string;
  PublishedOn: Date;
  CreatedOn: Date;
  Categories: string;
  CategoriesList: string[];
  Tags: string;
  Reference: string;
}
