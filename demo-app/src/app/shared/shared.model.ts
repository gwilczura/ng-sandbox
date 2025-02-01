export interface IResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
}

export interface IQuery {
  page: number;
  pageSize: number;
}

export function GetEmptyResponse<T>(): IResponse<T> {
  var defaultResponse = {
    data: [],
    page: 0,
    pageSize: 0,
    pageCount: 0,
    totalCount: 0,
  };

  return defaultResponse;
}
