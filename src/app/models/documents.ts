export interface DocumentObject {
  Documents: Document;
}

export interface Document {
  list: DocumentList[];
  page: number;
  pagesize: number;
  total: number;
}

export interface DocumentList {
  ID: number;
  Name: string;
  UpdatedDate: Date;
  CreatedDate: Date;
  Categories: string[];
  Extension: string;
  Description: string;
  UpdatedBy: string;
  Code: string;
}
