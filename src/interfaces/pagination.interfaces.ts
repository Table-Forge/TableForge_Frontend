interface IGetPaginatedParams {
  page?: number;
  size?: number;
  search?: string;
}

interface IPagination {
  page: number;
  size: number;
  filteredItems: number;
}

interface IPaginatedApiResponse<TItem> {
  items: TItem[];
  pagination: IPagination;
}

export type {
  IGetPaginatedParams,
  IPagination,
  IPaginatedApiResponse,
};
