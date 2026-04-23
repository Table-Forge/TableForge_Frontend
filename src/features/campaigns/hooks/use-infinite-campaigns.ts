import { useInfiniteQuery } from "@tanstack/react-query";
import { CAMPAIGNS } from "./query-key";
import { CampaignService } from "../services/campaigns.services";

const DEFAULT_LIMIT = 20;

interface IUseInfiniteCampaignsParams {
  size?: number;
  search?: string;
}

export function useInfiniteCampaigns({
  size = DEFAULT_LIMIT,
  search = "",
}: IUseInfiniteCampaignsParams = {}) {
  const normalizedSearch = search.trim();

  return useInfiniteQuery({
    queryKey: [CAMPAIGNS, size, normalizedSearch],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      CampaignService.getPaginated({
        page: Number(pageParam),
        size,
        search: normalizedSearch || undefined,
      }),
    getNextPageParam: (lastPage) => {
      const page = Number(lastPage?.pagination?.page ?? 1);
      const pageSize = Number(lastPage?.pagination?.size ?? size);
      const filteredItems = Number(lastPage?.pagination?.filteredItems ?? 0);
      const hasNextPage = page * pageSize < filteredItems;

      return hasNextPage ? page + 1 : undefined;
    },
  });
}

export { DEFAULT_LIMIT as CAMPAIGNS_PAGE_SIZE };
