export interface T {
  [key: string]: any;
}

export interface PaginatedResult<TData> {
  data: TData[];
  total: number;
  page: number;
  limit: number;
}
