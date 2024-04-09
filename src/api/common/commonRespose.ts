/** 所有 api 接口的响应数据都应该准守该格式 */
export interface ApiResponseData<T> {
  // alert: string
  // status: string
  // data: T
  // message: string
  // timestamp: string
  code: number;
  data: T;
  message: string;
}
// 分页数据返回
export interface PageResponse<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: DataSort;
  totalElements: number;
  totalPages: number;
  [property: string]: any;
}

export interface Pageable {
  offset: number;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  unpaged: boolean;
}

export interface PageableSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface DataSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
